import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Shop</h1>
        <input
          type="text"
          name="name"
          placeholder='Name' 
          className="register-input" 
        />
        <input
          type="text"
          name="cost"
          placeholder='Price' 
          className="register-input" 
        />
        <input
          type="text"
          name="category"
          placeholder='Category' 
          className="register-input" 
        />
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}

export default App;
