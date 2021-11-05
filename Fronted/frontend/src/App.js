import React, { useState, useEffect } from 'react';
import './App.css';
import {Search} from './Components/Search'
import Alert from './Components/Alert';
import icono from './assets/img/icon.png';
import {Footer} from './Components/Footer';


  export const App = () => {

    const [savecity, setSaveCity] = useState("Search your favorite city")
    
    const city = [
      {
          "ID": 1,
          "Ciudad": "Bogota"
      },
      {
          "ID": 2,
          "Ciudad": "New York"
      },
      {
          "ID": 3,
          "Ciudad": "London"
      },
      {
          "ID": 4,
          "Ciudad": "Paris"
      },
      {
          "ID": 5,
          "Ciudad": "Tokyo"
      },
      {
          "ID": 6,
          "Ciudad": "Berlin"
      },
      {
          "ID": 7,
          "Ciudad": "Singapore"
      },
      {
          "ID": 8,
          "Ciudad": "Cairo"
      }
  ]

  function sayHello(name){
    setSaveCity(name)
    let fecha = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    var url = 'https://localhost:44378/api/usuario';
    var data = {Ciudad: `${name}`, Otro: `${fecha}`};
    
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}     


  return (
    <div className = "App" >
    <header>
      <div className="presentation">
      <img src={icono} alt="Icono" />
    <h1>WEATHER AND NEWS</h1>
      </div>
      <Search guardarCiudad={(name) => sayHello(name)} />
    </header>
    <div className="box " key={savecity} >
          <h2>{savecity}</h2>
          <Alert ciudad={savecity}/>
        </div>
    {
      city.map(ciu => (
        <div className="box " key={ciu.ID} >
          <h2>{ciu.Ciudad}</h2>
          <Alert ciudad={ciu.Ciudad}/>
        </div>
      ))
    }
    <Footer/>
  </div>
  )
}
