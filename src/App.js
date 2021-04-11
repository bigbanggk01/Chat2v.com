import './App.css';
function App() {
  return (
    <div className="App">
      
      <div class="page-header">
        <img className='img' src="love.png"/>
        <h1>ChatVuiVe<small>.com</small></h1>
      </div>
      
      <div class="container">
          <button id="signIn" type="button" className="btn btn-lg btn-primary">Sign in</button>
          
          <button id="signUp"type="button" className="btn btn-lg btn-success">Sign up</button>
      </div>
    </div>
  );
}

export default App;
