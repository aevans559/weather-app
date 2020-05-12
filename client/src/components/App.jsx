import React, { Component } from "react";
import SelectUSState from 'react-select-us-states';
import axios from "axios";
import Weather from "./Weather";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Good day!",
      city: "",
      state: "",
      addLocationClicked: false,
      forecast: []
    };
    this.addLocation = this.addLocation.bind(this);
    this.setNewValue = this.setNewValue.bind(this);
    this.callAPI = this.callAPI.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }


  callAPI() {
    axios.get(`http://localhost:8080/location/${this.state.city}.${this.state.state}`)
      .then(res => res.data)
      .then(data => {
        this.setState({
          forecast: data.list
        })
        console.log(this.state.forecast)
      })
      .catch(err => console.log(err))
  }

  setNewValue(newValue) {
    console.log(newValue)
    this.setState({
      state: newValue
    });
  }

  handleCityChange(e) {
    this.setState({
      city: e.target.value.toLowerCase()
    })
    e.preventDefault();
  }

  handleStateChange(e) {
    this.setState({
      state: e.target.value.toLowerCase()
    })
    e.preventDefault();
  }

  addLocation(e) {
    this.callAPI();
    this.setState({
      addLocationClicked: true
    })
    e.preventDefault();
  }

  render() {
    return (
      <>
        <div>{this.state.greeting}</div>
        <div id="container">
          <form onSubmit={this.addLocation}>
            <label>
              Choose a city:
              <input type="text" name="city" value={this.state.value} onChange={this.handleCityChange} />
            </label>
            <label>
              {/* Choose a state: <SelectUSState id="myiD" className="stateSelect" onChange={this.setNewValue} /> */}
              Choose a state:
              <input type="text" name="state" value={this.state.value} onChange={this.handleStateChange} />
            </label>
            <button
              type="submit"
            >
              Add Location
            </button>
          </form>
          <div>
            {this.state.addLocationClicked ?

              <Weather
                city={this.state.city}
                state={this.state.state}
                forecast={this.state.forecast}
              />

              :

              <div>Location hasn't been added yet.</div>
            }
          </div>
        </div>
      </>
    );
  }
}
