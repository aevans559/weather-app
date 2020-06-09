import React from 'react';
import styles from './Weather.module.css';
import clear from '../../../../clearweather.png';
import clouds from '../../../../cloudyweather.png';
import rain from '../../../../rainyweather.png';

const Weather = (props) => {
    const condition = props.forecast[3].weather[0].main;

    const clearStyle = {
        width: '120px',
        height: '180px',
        backgroundImage: `url(${clear})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const cloudStyle = {
        width: '120px',
        height: '180px',
        backgroundImage: `url(${clouds})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const rainStyle = {
        width: '120px',
        height: '180px',
        backgroundImage: `url(${rain})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className={styles.weatherContainer}>
            <span className={styles.location}>{props.city.toUpperCase()}, {props.state.toUpperCase()}</span>
            <div className={styles.forecastContainer}>
                <div className={styles.dayContainer}>
                    <div className={styles.date}>
                        {new Date(props.forecast[0].dt_txt.slice()).toString().slice(0, 3)}
                    </div>
                    <ul className={styles.dayForecast} style={condition === "Clear" ? clearStyle : condition === "Clouds" ? cloudStyle : condition === "Rain" ? rainStyle : null}>
                        {props.forecast.slice(0, 7).map((time, id) => {
                            {
                                return <li key={id} className={styles.hourlyForecast}>{time.dt_txt.slice(11, 16)} Temp: {Math.round(time.main.temp)}º</li>
                            }
                        })}
                    </ul>
                </div>
                <div className={styles.dayContainer}>
                    <div className={styles.date}>
                        {new Date(props.forecast[8].dt_txt.slice()).toString().slice(0, 3)}
                    </div>
                    <ul className={styles.dayForecast} style={condition === "Clear" ? clearStyle : condition === "Clouds" ? cloudStyle : condition === "Rain" ? rainStyle : null}>
                        {props.forecast.slice(8, 15).map((time, id) => {
                            {
                                return <li key={id} className={styles.hourlyForecast}>{time.dt_txt.slice(11, 16)} Temp: {Math.round(time.main.temp)}º</li>
                            }
                        })}
                    </ul>
                </div>
                <div className={styles.dayContainer}>
                    <div className={styles.date}>
                        {new Date(props.forecast[16].dt_txt.slice()).toString().slice(0, 3)}
                    </div>
                    <ul className={styles.dayForecast} style={condition === "Clear" ? clearStyle : condition === "Clouds" ? cloudStyle : condition === "Rain" ? rainStyle : null}>
                        {props.forecast.slice(16, 23).map((time, id) => {
                            {
                                return <li key={id} className={styles.hourlyForecast}>{time.dt_txt.slice(11, 16)} Temp: {Math.round(time.main.temp)}º</li>
                            }
                        })}
                    </ul>
                </div>
                <div className={styles.dayContainer}>
                    <div className={styles.date}>
                        {new Date(props.forecast[24].dt_txt.slice()).toString().slice(0, 3)}
                    </div>
                    <ul className={styles.dayForecast} style={condition === "Clear" ? clearStyle : condition === "Clouds" ? cloudStyle : condition === "Rain" ? rainStyle : null}>
                        {props.forecast.slice(24, 31).map((time, id) => {
                            {
                                return <li key={id} className={styles.hourlyForecast}>{time.dt_txt.slice(11, 16)} Temp: {Math.round(time.main.temp)}º</li>
                            }
                        })}
                    </ul>
                </div>
                <div className={styles.dayContainer}>
                    <div className={styles.date}>
                        {new Date(props.forecast[32].dt_txt.slice()).toString().slice(0, 3)}
                    </div>
                    <ul className={styles.dayForecast} style={condition === "Clear" ? clearStyle : condition === "Clouds" ? cloudStyle : condition === "Rain" ? rainStyle : null}>
                        {props.forecast.slice(32, 39).map((time, id) => {
                            {
                                return <li key={id} className={styles.hourlyForecast}>{time.dt_txt.slice(11, 16)} Temp: {Math.round(time.main.temp)}º</li>
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Weather