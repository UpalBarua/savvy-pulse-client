import React, { useContext, useEffect, useState, createContext } from 'react';
import { auth, googleAuth } from '../firebase/firebase.config';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { LeapFrog } from '@uiball/loaders';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleAuth);
  };

  const updateUserProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).catch((error) => console.log(error));
  };

  const value = {
    user,
    signUp,
    logIn,
    logOut,
    googleSignIn,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading ? (
        children
      ) : (
        <div
          style={{
            position: 'fixed',
          }}>
          <LeapFrog size={60} speed={2.5} color="#c558ef" />
        </div>

        // <p
        //   style={{
        //     fontFamily: 'var(--ff-secondary)',
        //     fontSize: 'var(--fs-700)',
        //     fontWeight: 'var(--fw-semibold)',
        //     color: 'var(--clr-accent-primary-400)',
        //     position: 'fixed',
        //     top: '50%',
        //     right: '50%',
        //     transform: 'translate(50%, -50%)',
        //     lineHeight: '0',
        //   }}>
        //   Loading...
        // </p>
      )}
    </AuthContext.Provider>
  );
};
