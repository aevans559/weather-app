import React, { Component } from "react";
// import SelectUSState from 'react-select-us-states';
import axios from "axios";
import Weather from "../Weather/Weather";
import styles from "./App.module.css"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "FiveCast",
      city: "",
      state: "",
      addLocationClicked: 0,
      forecast: [],
      cityList: [],
    };
    this.addLocation = this.addLocation.bind(this);
    // this.setNewValue = this.setNewValue.bind(this);
    this.callAPI = this.callAPI.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }


  callAPI() {
    axios.get(`http://localhost:8080/location/${this.state.city}.${this.state.state}`)
      .then(res => res.data)
      .then(data => {
        this.state.forecast.push(data.list)
        console.log(this.state.forecast)
      })
      .catch(err => console.log(err))
  }

  // setNewValue(newValue) {
  //   console.log(newValue)
  //   this.setState({
  //     state: newValue
  //   });
  // }

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
    this.state.cityList.push([this.state.city, this.state.state]);
    ++this.state.addLocationClicked;
    document.getElementById("input-form").reset();
    console.log(this.state.cityList)
    console.log(this.state.addLocationClicked)
    e.preventDefault();
  }

  render() {
    return (
      <>
        <div className={styles.headerContainer}>
          <div className={styles.pageGreeting}>{this.state.greeting}</div>
          <form id="input-form" onSubmit={this.addLocation}>
            <label className={styles.cityChoice}>
              {/* Choose a city: */}
              <input type="text" name="city" placeholder="Choose a city" value={this.state.value} onChange={this.handleCityChange} />
            </label>
            <label className={styles.stateChoice}>
              {/* Choose a state: <SelectUSState id="myiD" className="stateSelect" onChange={this.setNewValue} /> */}
              {/* Choose a state: */}
              <input type="text" name="state" placeholder="Choose a state" minLength="4" value={this.state.value} onChange={this.handleStateChange} />
            </label>
            <button
              type="submit"
            >
              Add Location
            </button>
          </form>
        </div>
        <div className={styles.placeholder}>
          {
            this.state.addLocationClicked > 0 ?
              this.state.cityList.map((city, index) => {
                return (<Weather
                  key={index}
                  city={city[0]}
                  state={city[1]}
                  forecast={this.state.forecast[index]}
                />)
              })

              :

              <div className={styles.noLocation}>Location hasn't been added yet.</div>
          }
        </div>
      </>
    );
  }
}
