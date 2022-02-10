import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         input: ``,
         description: ``,

        //  lat: ``
      }
    }
    changeHandler1 = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
    })}

    // changeHandler1 = (event) => {
        
    //     this.setState({
    //         lat: event.target.value
    // })}

    checkWeather = (event) => {
        event.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=5bc775205e68f6b982b87654ca6166ce`)
        .then(response => {
            console.log(response)
            this.setState({
                description: response.data.main.temp - 273.15
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
  render() {
    return (<div>
        <input type="text" name="input" value={this.state.input} onChange={this.changeHandler1}></input>
        {/* <input type="text" name="lat" value={this.state.lat} onChange={this.changeHandler1}></input> */}
        <button onClick={this.checkWeather}>Check Weather</button>
        <h2>{this.state.description}</h2>
    </div>);
  }
}

export default Weather;
