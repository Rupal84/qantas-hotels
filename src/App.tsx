import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Rating } from './components/Rating';

function App() {
  return (
     <Rating onChange={(rating) => console.log(rating)} />
  );
}

export default App;
