import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from 'axios';

export default function Card(mensaje){

    const [author, setAuthor] = useState([]);

    async function  traerApi(){
        await axios.get(`https://newsapi.org/v2/everything?q=${mensaje.ciudad}&apiKey=9548ac7273b243a7bf6baacdf72c5cb6`)
       .then(res => {
                   const aux = res.data.articles;
                   setAuthor(aux)
       })
      }
          useEffect( () => {
            traerApi();
            }, [])

return (
    <div className="news">
        
        {
            author.map((item) => {
                console.log(item);
                <div className="card" key="1">
                <img src="" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="card-text">{item.author}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            })
        }
    </div>

    );
  }