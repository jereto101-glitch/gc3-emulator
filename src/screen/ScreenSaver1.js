import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import backdrop1 from '../images/screen_saver/1.jpg';
import backdrop2 from '../images/screen_saver/2.jpg';
import backdrop3 from '../images/screen_saver/3.jpg';
import backdrop4 from '../images/screen_saver/4.jpg';
import backdrop5 from '../images/screen_saver/5.jpg';
import backdrop6 from '../images/screen_saver/6.jpg';
import backdrop7 from '../images/screen_saver/7.jpg';
import backdrop8 from '../images/screen_saver/8.jpg';
import backdrop9 from '../images/screen_saver/9.jpg';
import backdrop10 from '../images/screen_saver/10.jpg';
import backdrop11 from '../images/screen_saver/11.jpg';
import backdrop12 from '../images/screen_saver/12.jpg';
import backdrop13 from '../images/screen_saver/13.jpg';
import backdrop14 from '../images/screen_saver/14.jpg';
import backdrop15 from '../images/screen_saver/15.jpg';
import backdrop16 from '../images/screen_saver/16.jpg';
import backdrop17 from '../images/screen_saver/17.jpg';
import backdrop18 from '../images/screen_saver/18.jpg';
import backdrop19 from '../images/screen_saver/19.jpg';
import backdrop20 from '../images/screen_saver/20.jpg';


function ScreenSaver() {

  function homeState() {
    var retrievedState = localStorage.getItem("panelState");
    retrievedState = JSON.parse(retrievedState)

    switch (retrievedState) {
      case "0":
        window.location = "./"
        break;
      case "1":
        window.location = "./armed-stay"
        break;
      case "2":
        window.location = "./armed-away"
        break;
      case "3":
        window.location = "./not-ready"
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    const backdropArray = [backdrop1, backdrop2, backdrop3, backdrop4, backdrop5, backdrop6, backdrop7, backdrop8, backdrop9, backdrop10, backdrop11, backdrop12, backdrop13, backdrop14, backdrop15, backdrop16, backdrop17, backdrop18, backdrop19, backdrop20];
    const backdropSet = () => {
      let i = 1;
      document.getElementById('backdrop').style.backgroundImage = `url(${backdropArray[i]})`
      setInterval(() => {
        console.log(i, document.getElementById('backdrop'))
        if (i === backdropArray.length) { i = 0 } else { i++ }
        document.getElementById('backdrop').style.backgroundImage = `url(${backdropArray[i]})`
      }, 30000)
    }
    backdropSet();
  }, [])


  return (
    <Link to="/">
      <div className="screen-style">
        <span onClick={() => homeState()}>
          <div className="fill" id="backdrop" style={{ backgroundImage: `url("${backdrop1}")` }} />
        </span>
      </div>
    </Link>
  );
}

export default ScreenSaver