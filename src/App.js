import React from 'react';
import './App.css';
import Input from './Input';

function App() {
  return (
    <div className="App">
      <label style={{ fontFamily: "Poppins", fontSize: "20px" }}>Input with tags inside</label>
      <Input inInputField={true}/>
      <label style={{ fontFamily: "Poppins", fontSize: "20px" }}>Input with tags below</label>
      <Input inInputField={false}/>
    </div>
  );
}

export default App;
