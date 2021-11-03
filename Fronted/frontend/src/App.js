import React from 'react';
import './App.css';
import {Search} from './Components/Search'
import axios from 'axios';
import Alert from './Components/Alert';
import icono from './assets/img/icon.png';


export default class PersonList extends React.Component {


  state = {
    city: [],
  }

  componentDidMount = async() => {
    await axios.get(`https://localhost:44378/api/usuario`)
      .then(res => {
        const city = res.data;
        this.setState({
          city
        });
      })
  }

  
  render() {
    return (
      <div className = "App" >
        <header>
          <div className="presentation">
          <img src={icono} alt="Icono" />
        <h1>WEATHER AND NEWS</h1>
          </div>
          <Search/>
        </header>
        {
          this.state.city.map(ciu => (
            <div className="box " key={ciu.ID} >
              <h2>{ciu.Ciudad}</h2>
              <Alert id={`id${ciu.ID}`} ciudad={ciu.Ciudad}/>
            </div>
          ))
        }
      </div>

    )
  }
}
