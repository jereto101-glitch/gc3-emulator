import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import check_mark_icon from "../images/check-mark.png";
import backdrop1 from '../images/screen_saver/1.jpg'
import backdrop2 from '../images/screen_saver/2.jpg'
import backdrop3 from '../images/screen_saver/3.jpg'
import backdrop4 from '../images/screen_saver/4.jpg'
import backdrop5 from '../images/screen_saver/5.jpg'
import backdrop6 from '../images/screen_saver/6.jpg'
import backdrop7 from '../images/screen_saver/7.jpg'
import backdrop8 from '../images/screen_saver/8.jpg'
import backdrop9 from '../images/screen_saver/9.jpg'
import backdrop10 from '../images/screen_saver/10.jpg'
import backdrop11 from '../images/screen_saver/11.jpg'
import backdrop12 from '../images/screen_saver/12.jpg'
import backdrop13 from '../images/screen_saver/13.jpg'
import backdrop14 from '../images/screen_saver/14.jpg'
import backdrop15 from '../images/screen_saver/15.jpg'
import backdrop16 from '../images/screen_saver/16.jpg'
import backdrop17 from '../images/screen_saver/17.jpg'
import backdrop18 from '../images/screen_saver/18.jpg'
import backdrop19 from '../images/screen_saver/19.jpg'
import backdrop20 from '../images/screen_saver/20.jpg'

function homeState(){
    var retrievedState = localStorage.getItem("panelState");
    retrievedState = JSON.parse(retrievedState)

    if (retrievedState === "0") {
        window.location = "./"
    }
    else if (retrievedState === "1"){
        window.location = "./armed-stay"
    }
    else if (retrievedState === "2"){
        window.location = "./armed-away"
    }
    else if (retrievedState === "3"){
        window.location = "./not-ready"
    }
}

function ScreenSaver() {
    useEffect(() => {
        backdropSet()
        console.log(document.getElementById('backdrop'))
    },[])

    const [Backdrop, setBackdrop] = useState(backdrop1)

    function backdropSet(){
        var i = 1
        console.log("before")
        document.getElementById('backdrop').style.backgroundImage = `url("${backdrop1}")`
        console.log(document.getElementById('backdrop').style)

        setInterval(() => {
            if(i < 20){
                i = i + 1
            }
            else{
                i = 1
            }
            if(i === 1){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop1}")`
                setBackdrop(backdrop1)
            }
            else if(i === 2){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop2}")`
                setBackdrop(backdrop2)
            }
            else if(i === 3){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop3}")`
                setBackdrop(backdrop3)
            }
            else if(i === 4){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop4}")`
                setBackdrop(backdrop4)
            }
            else if(i === 5){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop5}")`
                setBackdrop(backdrop5)
            }
            else if(i === 6){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop6}")`
                setBackdrop(backdrop6)
            }
            else if(i === 7){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop7}")`
                setBackdrop(backdrop7)
            }
            else if(i === 8){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop8}")`
                setBackdrop(backdrop8)
            }
            else if(i === 9){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop9}")`
                setBackdrop(backdrop9)
            }
            else if(i === 10){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop10}")`
                setBackdrop(backdrop10)
            }
            else if(i === 11){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop11}")`
                setBackdrop(backdrop11)
            }
            else if(i === 12){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop12}")`
                setBackdrop(backdrop12)
            }
            else if(i === 13){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop13}")`
                setBackdrop(backdrop13)
            }
            else if(i === 14){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop14}")`
                setBackdrop(backdrop14)
            }
            else if(i === 15){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop15}")`
                setBackdrop(backdrop15)
            }
            else if(i === 16){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop16}")`
                setBackdrop(backdrop16)
            }
            else if(i === 17){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop17}")`
                setBackdrop(backdrop17)
            }
            else if(i === 18){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop18}")`
                setBackdrop(backdrop18)
            }
            else if(i === 19){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop19}")`
                setBackdrop(backdrop19)
            }
            else if(i === 20){
                document.getElementById('backdrop').style.backgroundImage = `url("${backdrop20}")`
                setBackdrop(backdrop20)
            }
            console.log("direct: ", document.getElementById('backdrop').style.backgroundImage,"Backdrop: ", Backdrop,"i: ", i)
        }, 30000)
        console.log("after")
    }
    
    return (
        <Link to="/">
            <div className="screen-style">
                <span onClick={() => homeState()}>
                    <div className="fill" id="backdrop" style={{'backgroundImage':""}}>
                        <img src={check_mark_icon} className="disarm-icon" alt=""/>
                    </div>
                </span>
            </div>
        </Link>
    );
}

export default ScreenSaver