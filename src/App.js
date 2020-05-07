import React from 'react';
import './App.css';
import Input from './Input';
import TagInInput from './TagInInput';

function App() {
  return (
    <div className="App">
      <label style={{ fontFamily: "Poppins", fontSize: "20px" }}>Input with tags inside</label>
      <TagInInput />
      <label style={{ fontFamily: "Poppins", fontSize: "20px" }}>Input with tags below</label>
      <Input />
    </div>
  );
}

export default App;
