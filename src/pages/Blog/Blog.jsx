import React from 'react';
import styles from './Blog.module.css';

const BLOG_DATA = [
  {
    _id: 1,
    question:
      'What are the different ways to manage a state in a React application?',
    answer:
      "State management is simply a way to engender communication and sharing of data across components. It creates a concrete data structure to represent your app's State that you can read and write. ",
  },
  {
    _id: 2,
    question: 'How does prototypical inheritance work?',
    answer:
      'Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.',
  },
  {
    _id: 3,
    question: 'What is a unit test? Why should we write unit tests?',
    answer: '',
  },
  {
    _id: 4,
    question: 'React vs. Angular vs. Vue?',
    answer: '',
  },
];

const Blog = () => {
  return (
    <section className="container">
      <h2>Blog</h2>
    </section>
  );
};

export default Blog;
