import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from 'axios';

export default function Card(mensaje){

    const [author, setAuthor] = useState([]);

    let i;

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
                author.map((value, index) => {
                    return (<div className="card" key={index}>
                    <img  className="card-image" src={value.urlToImage} alt="NoticeImage" />
                    <div className="card-body">
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                        <a href={value.url} target="_blank" rel="noopener noreferrer">
                            <div className="verNoticia">
                                <span>Ver Noticia</span>
                            </div>
                        </a>
                    </div>
                    </div>)
                    
                 })
                 

                }

        
    </div>

    )
  }