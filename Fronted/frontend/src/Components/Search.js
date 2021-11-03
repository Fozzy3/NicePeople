import React, { useState, useEffect, Fragment} from 'react';
import './Search.css';
import axios from 'axios';

export const Search = () => {

    const [history, setWeather] = useState([]);
    const [datos, setDatos] = useState({
      buscarCiudad: ''
  })
  
  const handleInputChange = (event) => {
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      })
  }
  
  const enviarDatos = async (event) => {
      event.preventDefault()
      console.log(datos.buscarCiudad)
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${datos.buscarCiudad}&appid=dbf16ad10e6191d9e557dce0d336a1e5`)
      .then(function (res){
        const history = res.data;
        setWeather(history)
        console.log(history)
      });
    }

    return (
        <Fragment>
        <form onSubmit={enviarDatos}>
            <input type="search" onChange={handleInputChange} name="buscarCiudad" placeholder="Busca tu cidad Favorita"/>
        <li>{datos.buscarCiudad}</li>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </Fragment>
        )
}
