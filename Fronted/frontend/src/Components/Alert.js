import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import './Alert.css';
import Card from './Card';



export default  function Example(mensaje) {
    
    const [show, setShow] = useState(false);
    const [weather, setWeather] = useState([]);
    const [descrip, setDescrip] = useState([]);
    const [icon, setIcon] = useState();
    const [windSpeed, setWindSeep] = useState();
    const [temp, setTemp] = useState();
    
    useEffect( () => {
     let traerApi = async() => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${mensaje.ciudad}&appid=dbf16ad10e6191d9e557dce0d336a1e5`)
       .then(res => {
         const weather = res.data;
         setWeather(weather)
         setDescrip(weather.weather[0].description)
         setIcon(weather.weather[0].icon)
         setWindSeep(weather.wind.speed)
         setTemp(parseFloat((weather.main.temp) - 273.15).toFixed(2))
       })
      }
      traerApi();
          }, [])
            
    return (
                <>
                {console.log(weather)}
        <button type="button" onClick={() => setShow(true)} className="boton">Wether and News...</button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          id="bootstrap-overrides"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Weather {weather.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body_modal">
              <div className="clima">
                <p>Weather Descripcion: {descrip}</p>
                <p>Wind Speed: {windSpeed} m/s</p>
                <p>Temperature: {temp} C°</p>

              </div>        
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather" />
            <Card ciudad={weather.name}/>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
