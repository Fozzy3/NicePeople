import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';


export default  function Example(mensaje) {
    
    const [show, setShow] = useState(false);
    const [weather, setWeather] = useState([]);

        useEffect( async() => {
             await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${mensaje.ciudad}&appid=dbf16ad10e6191d9e557dce0d336a1e5`)
            .then(res => {
              const weather = res.data;
              setWeather(weather)
            })}, [])
            
            return (
                <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {mensaje.ciudad}

            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
