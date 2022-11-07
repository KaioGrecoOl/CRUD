import React, { useState } from "react";
import './App.css';

function App() {
  const [values, setValues] = useState();
  // console.log(values);

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handlerClickButton = () => {
    console.log(values);
  }


  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Shop</h1>
        <input
          type="text"
          name="name"
          placeholder='Name' 
          className="register-input" 
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="cost"
          placeholder='Price' 
          className="register-input" 
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="category"
          placeholder='Category' 
          className="register-input" 
          onChange={handleChangeValues}
        />
        <button 
          onClick={() => handlerClickButton()}
          className="register-button"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default App;
