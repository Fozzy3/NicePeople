import React, { useState, Fragment} from 'react';
import './Search.css';
import axios from 'axios';

export const Search = (props) => {

    const [history, setWeather] = useState([]);
    const [datos, setDatos] = useState({buscarCiudad: ''})    
    let {name, guardarCiudad} = props
  
  const handleInputChange = (event) => {
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      })
    }
    name = datos.buscarCiudad
  const enviarDatos = async (event) => {
      event.preventDefault()
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${datos.buscarCiudad}&appid=dbf16ad10e6191d9e557dce0d336a1e5`)
      .then(function (res){
        const data = res.data;
        setWeather(data)
      });
    }

    return (
        <Fragment>
        <form onSubmit={enviarDatos}>
            <input 
            type="search" 
            onChange={handleInputChange} 
            name="buscarCiudad" 
            placeholder="Busca tu cidad Favorita" 
            autoComplete="off" 
            spellCheck="false"
            />
            <button type="submit" className="btn btn-primary" onClick={() => guardarCiudad(name)} >Enviar</button>
        </form>
        </Fragment>
        )
}
