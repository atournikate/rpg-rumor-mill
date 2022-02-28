import React from 'react';
import './App.css';
import Button from './Components/Button';
import Rumor from './Components/Rumor';
import Footer from './Components/Footer';
import Header from './Components/Header';


const App = () => {

 const onClickHandler = () => {
  window.location.reload(false);

 }

  return (
    <div className="App">
      <Header />

      <div className="container d-flex flex-column col-md-10 col-sm-11 justify-content-center align-items-center ">

        <div className="row m-3 p-3 rounded shadow">
          <Rumor />
          <Button clicked={onClickHandler}/>
        
        </div>
      
      </div>

          <Footer />
    </div>
  );
}

export default App;
