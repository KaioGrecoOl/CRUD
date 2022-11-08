import React, { useEffect, useState } from "react";
import './App.css';
import Axios from  'axios'
import Card from './components/cards/cards'

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState([]);
  // console.log(values);
  console.log(listGames);

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handlerClickButton = () => {
    Axios.post("http://localhost:3003/register", {
      name: values.name,
      price: values.price,
      category: values.category,
    }).then((response) => {
      console.log(response);
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:3003/getCards").then((response) => {
      // console.log(response);
      setListGames(response.data)
    });
  }, []);


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
          name="price"
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
      {typeof listGames !== "undefined" &&
        listGames.map((value) => (
          <Card
          listCard={listGames}
          setListCard={setListGames}
          key={value.id}
          id={value.id}
          name={value.name}
          price={value.price}
          category={value.category}
        />
        ))}
    </div>
  );
}

export default App;
