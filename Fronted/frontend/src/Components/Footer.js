import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import './Footer.css';


export const Footer = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [show, setShow] = useState(false);

  
    useEffect(() => {
      fetch("https://localhost:44378/api/usuario")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
      <div className="footer">
              <div className="history" onClick={() => setShow(true)}>
                Ver historial
          </div>

        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        ><table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Otro</th>
          </tr>
        </thead>
        <tbody>
              {items.map(item => (
          <tr  key={item.idCiudad}>
            <th scope="row">{item.idCiudad}</th>
            <td> {item.Ciudad}</td> 
            <td>{item.Otro}</td>
          </tr>
              ))}
        </tbody>
      </table>
       

        </Modal>
        <p>NicePeople 2021 © Todos los derechos reservados</p>
    </div>
      );
    }
}
