import React, { useState, useEffect } from 'react';
import './Weather.css';
import axios from 'axios';


export default function Weather() {
  const [loaded, setLoaded] = useState(false)
  const [DayOne, setDayOne] = useState({})
  const [DayTwo, setDayTwo] = useState({})
  const [DayThree, setDayThree] = useState({})
  const [DayFour, setDayFour] = useState({})
  const [DayFive, setDayFive] = useState({})


  useEffect(() => {
      axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/97e6ec6817b01beafc69fb62e1fc22ba/53.5096909,-113.4971125`)
        .then(res => {
          res.data.daily.data.map(obj => {
            const day = new Date(obj.time * 1000)
            obj.day = day.toString().split(` `)[0]
            obj.temperatureMax = Math.round(obj.temperatureMax)
            obj.temperatureMin = Math.round(obj.temperatureMin)
            switch (obj.icon) {
              case 'sun':
                obj.bgPos = `-24px -110px`
                break;
              case 'clear-day':
                obj.bgPos = `-24px -110px`
                break;
              case 'fog':
                obj.bgPos = `-24px -2px`
                break;
              case 'partly-cloudy-day':
                obj.bgPos = `-51px -1px`
                break;
              default:
                obj.bgPos = `-240px -188px`
            }

            return obj
          })
          setDayOne(res.data.daily.data[0])
          setDayTwo(res.data.daily.data[1])
          setDayThree(res.data.daily.data[2])
          setDayFour(res.data.daily.data[3])
          setDayFive(res.data.daily.data[4])
          setLoaded(true)

        })


      }, []
  )

if(loaded===false){
  return(<div className="weather" style={{display:`flex`, justifyContent:`center`, alignItems:`center`}}>Loading</div>)
} else {
  return (
    <div className="weather">
      <div className="text-center" style={{ color: "#4da1c3" }}>Daily Forcast</div>
      <div className="fiveDay">
        <div className="day">
          <div className="text-center">{DayOne.day}</div>
          <div className="text-center icon" style={{ backgroundPosition: DayOne.bgPos }} title={DayOne.icon}>&nbsp;</div>
          <div className="text-center high">{DayOne.temperatureMax}°</div>
          <div className="text-center low">{DayOne.temperatureMin}°</div>
        </div>
        <div className="day">
          <div className="text-center">{DayTwo.day}</div>
          <div className="text-center icon" style={{ backgroundPosition: DayTwo.bgPos }} title={DayTwo.icon}>&nbsp;</div>
          <div className="text-center high">{DayTwo.temperatureMax}°</div>
          <div className="text-center low">{DayTwo.temperatureMin}°</div>
        </div>
        <div className="day">
          <div className="text-center">{DayThree.day}</div>
          <div className="text-center icon" style={{ backgroundPosition: DayThree.bgPos }} title={DayThree.icon}>&nbsp;</div>
          <div className="text-center high">{DayThree.temperatureMax}°</div>
          <div className="text-center low">{DayThree.temperatureMin}°</div>
        </div>
        <div className="day">
          <div className="text-center">{DayFour.day}</div>
          <div className="text-center icon" style={{ backgroundPosition: DayFour.bgPos }} title={DayFour.icon}>&nbsp;</div>
          <div className="text-center high">{DayFour.temperatureMax}°</div>
          <div className="text-center low">{DayFour.temperatureMin}°</div>
        </div>
        <div className="day">
          <div className="text-center">{DayFive.day}</div>
          <div className="text-center icon" style={{ backgroundPosition: DayFive.bgPos }} title={DayFive.icon}>&nbsp;</div>
          <div className="text-center high">{DayFive.temperatureMax}°</div>
          <div className="text-center low">{DayFive.temperatureMin}°</div>
        </div>
      </div>
      <div className="text-center" style={{ color: '#4fa5c6' }}>Edmonton, AB</div>
    </div>
  );
}
}