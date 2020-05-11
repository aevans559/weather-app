import React from 'react'

const Weather = (props) => {
    return (
        <div className="location-container">
            {props.city}, {props.state}
            <div className="forecast-container">
                <ul className="day-one-forecast">
                    {props.forecast.slice(0, 6).map(time => {
                        {
                            return <li>{time.dt_txt.slice(0, 10)} Temperature: {Math.round(time.main.temp)}º</li>
                        }
                    })}
                </ul>
                <ul className="day-two-forecast">
                    {props.forecast.slice(7, 14).map(time => {
                        {
                            return <li>{time.dt_txt.slice(0, 10)} Temperature: {Math.round(time.main.temp)}º</li>
                        }
                    })}
                </ul>
                <ul className="day-three-forecast">
                    {props.forecast.slice(15, 22).map(time => {
                        {
                            return <li>{time.dt_txt.slice(0, 10)} Temperature: {Math.round(time.main.temp)}º</li>
                        }
                    })}
                </ul>
                <ul className="day-four-forecast">
                    {props.forecast.slice(23, 30).map(time => {
                        {
                            return <li>{time.dt_txt.slice(0, 10)} Temperature: {Math.round(time.main.temp)}º</li>
                        }
                    })}
                </ul>
                <ul className="day-five-forecast">
                    {props.forecast.slice(31, 38).map(time => {
                        {
                            return <li>{time.dt_txt.slice(0, 10)} Temperature: {Math.round(time.main.temp)}º</li>
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Weather
