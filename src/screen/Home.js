import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import check_mark_icon from "../images/check-mark.png";
import fluent_logo_icon from "../images/fluent-logo.png";
import power_cord_icon from "../images/power-cord.png";
import sound_on_icon from "../images/sound-on.png";
import screen_turn_off_icon from "../images/screen-turn-off.png";
import banner_icon from "../images/banner.png";
import chat_message_icon from "../images/chat-message.png";
import arm_stay_icon from "../images/arm-stay.png";
import arm_away_icon from "../images/arm-away.png";
import info_icon from "../images/info.png";
import smart_home_controls_icon from "../images/smart-home-controls.png";
import smart_areas_icon from "../images/smart-areas.png";
import settings_icon from "../images/settings.png";
import silence_icon from "../images/silence.png";
import disarm_icon from "../images/disarm.png";
import Weather from "../Weather"

function statusChange(status){
    var retrievedState = localStorage.getItem('panelState');
    retrievedState = JSON.parse(retrievedState)

    if (status === "Disarm"){
        retrievedState.mode = "0";
    }
    else if (status === "ArmStay"){
        retrievedState.mode = "1";
    }
    else if (status === "ArmAway"){
        retrievedState.mode = "2";
    }
    else if (status === "NotReady"){
        retrievedState.mode = "3";
    }

    localStorage.setItem('panelState', JSON.stringify(retrievedState));
}



function Disarmed(){
    const [Time_Value,setTime_Value] = useState("")
    const [Week_Day,setWeek_Day] = useState("")
    const [Month,setMonth] = useState("")
    const [Check, setCheck] = useState(false)

    function getTime(){
        var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return (time)
    }
    
    var time_value = ""
    setInterval(() => {
        time_value = getTime()
        setTime_Value(time_value)
    },1000)

    function getWeekDay(){
        if(Check === false){
            setTime_Value(getTime())
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            console.log(weekday[new Date().getDay()])
            setWeek_Day(weekday[new Date().getDay()])
            setCheck(true)
        }
    }

    function getMonth(){
        if(Check === false){
            var month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            console.log(month[new Date().getMonth()])
            setMonth(month[new Date().getMonth()])
            setCheck(true)
        }
    }

    getWeekDay()
    getMonth()

    return (
        <div className="screen-style">
            <div className="screen-header">
                <img src={check_mark_icon} className="disarm-icon" alt=""/>

                <p style={{'paddingTop':"9px"}}>
                    System
                </p>

                <p style={{'marginTop':"-16px"}}>
                    Ready to Arm
                </p>

                <div className="header-right" style={{'marginTop':"-11px"}}>
                    <Link to="/installer-toolbox/code">
                        <img src={fluent_logo_icon} className="fluent-logo-icon" alt=""/>
                    </Link>

                    <img src={power_cord_icon} className="power-cord-icon" alt=""/>
                    
                    <img src={sound_on_icon} className="sound-on-icon" alt=""/>

                    <Link to="/screen-saver">
                        <img src={screen_turn_off_icon} className="screen-turn-off-icon" alt=""/>
                    </Link>

                    <img src={banner_icon} className="banner-icon" alt=""/>

                    <img src={chat_message_icon} className="chat-message-icon" alt="" />
                </div>
            </div>

            <div className="screen-left" style={{'display':"grid", 'gridTemplateColumns':"auto auto", 'alignItems':"start", 'gridTemplateRows':"187px auto"}}>
                <Link to="/arming-stay" style={{'textDecoration':"none", 'justifySelf':"start"}}>
                    <div className="btn-arm-stay" onClick={() => statusChange("ArmStay")} style={{'display':"grid", 'gridTemplateRows':"auto auto", 'justifyContent':"center", 'alignItems':"center", 'marginLeft':"11px"}}>
                        <img src={arm_stay_icon} className="invert-color arm-stay-logo" alt=""/>

                        <h3 style={{'color':"white", 'marginTop':"20px", 'fontSize':"20px", 'fontWeight':"300"}}>
                            ARM STAY
                        </h3>
                    </div>
                </Link>
                
                <Link to="/arming-away" style={{'textDecoration':"none", 'justifySelf':"end"}}>
                    <div className="btn-arm-away" onClick={() => statusChange("ArmAway")} style={{'display':"grid", 'gridTemplateRows':"auto auto", 'justifyContent':"center", 'alignItems':"center", 'marginRight':"11px"}}>
                        <img src={arm_away_icon} className="invert-color arm-away-logo" alt=""/>

                        <h3 style={{'color':"white", 'marginTop':"18px", 'fontSize':"20px", 'fontWeight':"300"}}>
                            ARM AWAY
                        </h3>
                    </div>
                </Link>

                <div className="white-section" style={{'gridColumn':"span 2", 'justifySelf':"center", 'marginLeft':"2px"}}>
                    <h2 style={{'float':"left", 'color':"gray", 'fontSize':"13px"}} id="toggle-2">
                        Silent Exit
                    </h2>

                    <label className="switch" /* onClick={swapGrayBlack2(document.getElementById('toggle-2').style.color)} */>
                        <input type="checkbox"/>

                        <span className="slider round"></span>
                    </label>

                    <h2 style={{'float':"left", 'marginLeft':"48px", 'color':"gray", 'fontSize':"13px"}} id="toggle-1">
                        Entry Delay
                    </h2>

                    <label className="switch" /* onClick={swapGrayBlack(document.getElementById('toggle-1').style.color)} */>
                        <input type="checkbox" defaultChecked/>

                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div className="screen-right">
                <div className="time-top">
                    <div>
                        {Time_Value}
                    </div>

                    <div style={{'fontSize':"18px",'marginTop':"-10px"}}>
                        {Week_Day}, {Month} {new Date().getDate()}
                    </div>
                </div>

                <div className="time-bottom" style={{'marginLeft':"9px"}}>

                </div>

                <div className="weather-top" style={{'marginLeft':"9px"}}>
                    <Weather/>
                </div>

                <div className="weather-bottom" style={{'marginLeft':"9px"}}>
                    
                </div>
            </div>

            <div className="screen-bottom">
            <Link to="/smart-home-controls/menu">
                    <div className="blue-button" style={{'marginLeft':"-327px", 'marginTop':"7px", 'width':"22%"}}>
                        <img src={smart_home_controls_icon} style={{'height':"35px", 'marginLeft':"8px", 'marginTop':"9px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-39px", 'fontSize':"13px", 'marginLeft':"48px"}}>
                            SMART HOME
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-13px", 'fontSize':"13px", 'marginLeft':"57px"}}>
                            CONTROLS
                        </h4>
                    </div>
                </Link>

                <Link to="/smart-areas/code">
                    <div className="blue-button" style={{'marginLeft':"-159px", 'width':"22%", 'marginTop':"7px"}}>
                        <img src={smart_areas_icon} style={{'height':"30px", 'marginLeft':"7px", 'marginTop':"13px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-28px", 'fontSize':"13px", 'marginLeft':"45px"}}>
                            SMART AREAS
                        </h4>
                    </div>
                </Link>

                <Link to="/system-info/menu">
                    <div className="blue-button" style={{'marginLeft':"348px", 'width':"22%"}}>
                        <img src={info_icon} style={{'height':"30px", 'marginLeft':"12px", 'marginTop':"13px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-38px", 'fontSize':"13px", 'marginLeft':"51px"}}>
                            SYSTEM INFO
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-12px", 'fontSize':"13px", 'marginLeft':"56px"}}>
                            AND USAGE
                        </h4>
                    </div>
                </Link>

                <Link to="/system-settings/code">
                    <div className="blue-button" style={{'marginLeft':"514px", 'width':"22%"}}>
                        <img src={settings_icon} style={{'height':"30px", 'marginLeft':"10px", 'marginTop':"14px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-39px", 'fontSize':"13px", 'marginLeft':"65px"}}>
                            SYSTEM
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-13px", 'fontSize':"13px", 'marginLeft':"59px"}}>
                            SETTINGS
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}

function Stay(){
    const [Time_Value,setTime_Value] = useState("")
    const [Week_Day,setWeek_Day] = useState("")
    const [Month,setMonth] = useState("")
    const [Check, setCheck] = useState(false)

    function getTime(){
        var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return (time)
    }
    
    var time_value = ""
    setInterval(() => {
        time_value = getTime()
        setTime_Value(time_value)
    },1000)

    function getWeekDay(){
        if(Check === false){
            setTime_Value(getTime())
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            console.log(weekday[new Date().getDay()])
            setWeek_Day(weekday[new Date().getDay()])
            setCheck(true)
        }
    }

    function getMonth(){
        if(Check === false){
            var month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            console.log(month[new Date().getMonth()])
            setMonth(month[new Date().getMonth()])
            setCheck(true)
        }
    }

    getWeekDay()
    getMonth()

    // document.getElementById("arm-stay-code-home").style.display="none"; 
    // document.getElementById("weather-arm-stay-home").style.display="";

    return (
        <div className="screen-style">
           <div className="screen-header">
                <img src={arm_stay_icon} className="disarm-icon" alt=""/>

                <p style={{'paddingTop':"9px"}}>
                    System
                </p>

                <p style={{'marginTop':"-16px"}}>
                    Armed (STAY)
                </p>

                <div className="header-right" style={{'marginTop':"-11px"}}>
                    <Link to="/installer-toolbox/code">
                        <img src={fluent_logo_icon} className="fluent-logo-icon" alt=""/>
                    </Link>

                    <img src={power_cord_icon} className="power-cord-icon" alt=""/>
                    
                    <img src={sound_on_icon} className="sound-on-icon" alt=""/>

                    <Link to="/screen-saver">
                        <img src={screen_turn_off_icon} className="screen-turn-off-icon" alt=""/>
                    </Link>

                    <img src={banner_icon} className="banner-icon" alt=""/>

                    <img src={chat_message_icon} className="chat-message-icon" alt="" />
                </div>
            </div>

            <div className="screen-left">
                <div className="arm-top" style={{'paddingTop':"10px", 'height':"68px", 'marginTop':"10px", 'marginLeft':"13px"}}>
                    <img src={arm_stay_icon} className="invert-color resize-arm" style={{'height':"72px"}} alt=""/>
                </div>

                <div className="arm-bottom" style={{'marginLeft':"13px"}}>

                </div>

                <div className="disarm-top" style={{'marginLeft':"13px"}}>

                </div>

                <div className="disarm-bottom" style={{'marginLeft':"13px", 'height':"130px"}}>
                    <a href="." /* onClick={} */>
                        <div className="blue-button" style={{'height':"50px", 'width':"260px", 'marginLeft':"30px", 'marginTop':"4px"}}>
                            <img src={silence_icon} className="invert-color resize-mini" style={{'marginTop':"15px"}} alt=""/>

                            <p className="arm-button">
                                SILENCE
                            </p>
                        </div>
                    </a>

                    <Link to="/alarm">
                        <div className="blue-button" style={{'height':"50px", 'width':"260px", 'marginLeft':"30px", 'marginTop':"10px", 'backgroundColor':"#c43737", 'backgroundImage':"linear-gradient(to right, transparent,#be0f0f)"}}>
                            <img src={disarm_icon} className="invert-color resize-mini" style={{'marginTop':"15px"}} alt="" />

                            <p className="arm-button">
                                DISARM
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="screen-right" id="weather-arm-stay-home">
                <div className="time-top">
                    <div>
                        {Time_Value}
                    </div>

                    <div style={{'fontSize':"18px",'marginTop':"-10px"}}>
                        {Week_Day}, {Month} {new Date().getDate()}
                    </div>
                </div>

                <div className="time-bottom" style={{'marginLeft':"9px"}}>

                </div>

                <div className="weather-top" style={{'marginLeft':"9px"}}>
                    <Weather/>
                </div>

                <div className="weather-bottom" style={{'marginLeft':"9px"}}>
                    
                </div>
            </div>

            <div className="screen-bottom">
            <Link to="/smart-home-controls/menu">
                    <div className="blue-button" style={{'marginLeft':"-327px", 'marginTop':"7px", 'width':"22%"}}>
                        <img src={smart_home_controls_icon} style={{'height':"35px", 'marginLeft':"8px", 'marginTop':"9px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-39px", 'fontSize':"13px", 'marginLeft':"48px"}}>
                            SMART HOME
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-13px", 'fontSize':"13px", 'marginLeft':"57px"}}>
                            CONTROLS
                        </h4>
                    </div>
                </Link>

                <Link to="/smart-areas/code">
                    <div className="blue-button" style={{'marginLeft':"-159px", 'width':"22%", 'marginTop':"7px"}}>
                        <img src={smart_areas_icon} style={{'height':"30px", 'marginLeft':"7px", 'marginTop':"13px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-28px", 'fontSize':"13px", 'marginLeft':"45px"}}>
                            SMART AREAS
                        </h4>
                    </div>
                </Link>

                <Link to="/system-info/menu">
                    <div className="blue-button" style={{'marginLeft':"348px", 'width':"22%"}}>
                        <img src={info_icon} style={{'height':"30px", 'marginLeft':"12px", 'marginTop':"13px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-38px", 'fontSize':"13px", 'marginLeft':"51px"}}>
                            SYSTEM INFO
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-12px", 'fontSize':"13px", 'marginLeft':"56px"}}>
                            AND USAGE
                        </h4>
                    </div>
                </Link>

                <Link to="/system-settings/code">
                    <div className="blue-button" style={{'marginLeft':"514px", 'width':"22%"}}>
                        <img src={settings_icon} style={{'height':"30px", 'marginLeft':"10px", 'marginTop':"14px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-39px", 'fontSize':"13px", 'marginLeft':"65px"}}>
                            SYSTEM
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-13px", 'fontSize':"13px", 'marginLeft':"59px"}}>
                            SETTINGS
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}

function Away(){
    const [Time_Value,setTime_Value] = useState("")
    const [Week_Day,setWeek_Day] = useState("")
    const [Month,setMonth] = useState("")
    const [Check, setCheck] = useState(false)

    function getTime(){
        var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return (time)
    }
    
    var time_value = ""
    setInterval(() => {
        time_value = getTime()
        setTime_Value(time_value)
    },1000)

    function getWeekDay(){
        if(Check === false){
            setTime_Value(getTime())
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            console.log(weekday[new Date().getDay()])
            setWeek_Day(weekday[new Date().getDay()])
            setCheck(true)
        }
    }

    function getMonth(){
        if(Check === false){
            var month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            console.log(month[new Date().getMonth()])
            setMonth(month[new Date().getMonth()])
            setCheck(true)
        }
    }

    getWeekDay()
    getMonth()

    // document.getElementById("arm-away-code-home").style.display="none"; 
    // document.getElementById("weather-arm-away-home").style.display="";

    return (
        <div className="screen-style">
            <div className="screen-header">
                <img src={arm_away_icon} className="disarm-icon" alt=""/>

                <p style={{'paddingTop':"9px"}}>
                    System
                </p>

                <p style={{'marginTop':"-16px"}}>
                    Armed (AWAY)
                </p>

                <div className="header-right" style={{'marginTop':"-11px"}}>
                    <Link to="/installer-toolbox/code">
                        <img src={fluent_logo_icon} className="fluent-logo-icon" alt=""/>
                    </Link>

                    <img src={power_cord_icon} className="power-cord-icon" alt=""/>
                    
                    <img src={sound_on_icon} className="sound-on-icon" alt=""/>

                    <Link to="/screen-saver">
                        <img src={screen_turn_off_icon} className="screen-turn-off-icon" alt=""/>
                    </Link>

                    <img src={banner_icon} className="banner-icon" alt=""/>

                    <img src={chat_message_icon} className="chat-message-icon" alt="" />
                </div>
            </div>

            <div className="screen-left">
                <div className="arm-top" style={{'paddingTop':"10px", 'height':"68px", 'marginTop':"10px", 'marginLeft':"13px"}}>
                    <img src={arm_away_icon} className="invert-color resize-arm" style={{'height':"72px"}} alt=""/>
                </div>

                <div className="arm-bottom" style={{'marginLeft':"13px"}}>

                </div>

                <div className="disarm-top" style={{'marginLeft':"13px"}}>

                </div>

                <div className="disarm-bottom" style={{'marginLeft':"13px", 'height':"130px"}}>
                    <a href="." /* onClick={} */>
                        <div className="blue-button" style={{'height':"50px", 'width':"260px", 'marginLeft':"30px", 'marginTop':"4px"}}>
                            <img src={silence_icon} className="invert-color resize-mini" style={{'marginTop':"15px"}} alt=""/>

                            <p className="arm-button">
                                SILENCE
                            </p>
                        </div>
                    </a>

                    <Link to="/alarm">
                        <div className="blue-button" style={{'height':"50px", 'width':"260px", 'marginLeft':"30px", 'marginTop':"10px", 'backgroundColor':"#c43737", 'backgroundImage':"linear-gradient(to right, transparent,#be0f0f)"}}>
                            <img src={disarm_icon} className="invert-color resize-mini" style={{'marginTop':"15px"}} alt="" />

                            <p className="arm-button">
                                DISARM
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="screen-right" id="weather-arm-away-home">
                <div className="time-top">
                    <div>
                        {Time_Value}
                    </div>

                    <div style={{'fontSize':"18px",'marginTop':"-10px"}}>
                        {Week_Day}, {Month} {new Date().getDate()}
                    </div>
                </div>

                <div className="time-bottom" style={{'marginLeft':"9px"}}>

                </div>

                <div className="weather-top" style={{'marginLeft':"9px"}}>
                    <Weather/>
                </div>

                <div className="weather-bottom" style={{'marginLeft':"9px"}}>
                    
                </div>
            </div>

            <div className="screen-bottom">
                <Link to="/smart-home-controls/menu">
                    <div className="blue-button" style={{'marginLeft':"-327px", 'marginTop':"7px", 'width':"22%"}}>
                        <img src={smart_home_controls_icon} style={{'height':"35px", 'marginLeft':"8px", 'marginTop':"9px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-39px", 'fontSize':"13px", 'marginLeft':"48px"}}>
                            SMART HOME
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-13px", 'fontSize':"13px", 'marginLeft':"57px"}}>
                            CONTROLS
                        </h4>
                    </div>
                </Link>

                <Link to="/smart-areas/code">
                    <div className="blue-button" style={{'marginLeft':"-159px", 'width':"22%", 'marginTop':"7px"}}>
                        <img src={smart_areas_icon} style={{'height':"30px", 'marginLeft':"7px", 'marginTop':"13px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-28px", 'fontSize':"13px", 'marginLeft':"45px"}}>
                            SMART AREAS
                        </h4>
                    </div>
                </Link>

                <Link to="/system-info/menu">
                    <div className="blue-button" style={{'marginLeft':"348px", 'width':"22%"}}>
                        <img src={info_icon} style={{'height':"30px", 'marginLeft':"12px", 'marginTop':"13px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-38px", 'fontSize':"13px", 'marginLeft':"51px"}}>
                            SYSTEM INFO
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-12px", 'fontSize':"13px", 'marginLeft':"56px"}}>
                            AND USAGE
                        </h4>
                    </div>
                </Link>

                <Link to="/system-settings/code">
                    <div className="blue-button" style={{'marginLeft':"514px", 'width':"22%"}}>
                        <img src={settings_icon} style={{'height':"30px", 'marginLeft':"10px", 'marginTop':"14px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-39px", 'fontSize':"13px", 'marginLeft':"65px"}}>
                            SYSTEM
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-13px", 'fontSize':"13px", 'marginLeft':"59px"}}>
                            SETTINGS
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}

function NotReady(){
    const [Time_Value,setTime_Value] = useState("")
    const [Week_Day,setWeek_Day] = useState("")
    const [Month,setMonth] = useState("")
    const [Check, setCheck] = useState(false)

    function getTime(){
        var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return (time)
    }
    
    var time_value = ""
    setInterval(() => {
        time_value = getTime()
        setTime_Value(time_value)
    },1000)

    function getWeekDay(){
        if(Check === false){
            setTime_Value(getTime())
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            console.log(weekday[new Date().getDay()])
            setWeek_Day(weekday[new Date().getDay()])
            setCheck(true)
        }
    }

    function getMonth(){
        if(Check === false){
            var month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            console.log(month[new Date().getMonth()])
            setMonth(month[new Date().getMonth()])
            setCheck(true)
        }
    }

    getWeekDay()
    getMonth()

    //Not finished - Need to update!!!
    return (
        <div className="screen-style">
            <div className="screen-header">
                <img src={check_mark_icon} className="disarm-icon" alt=""/>

                <p style={{'paddingTop':"9px"}}>
                    System
                </p>

                <p style={{'marginTop':"-16px"}}>
                    Not Ready to Arm
                </p>

                <div className="header-right" style={{'marginTop':"-11px"}}>
                    <Link to="/installer-toolbox/code">
                        <img src={fluent_logo_icon} className="fluent-logo-icon" alt=""/>
                    </Link>

                    <img src={power_cord_icon} className="power-cord-icon" alt=""/>
                    
                    <img src={sound_on_icon} className="sound-on-icon" alt=""/>

                    <Link to="/screen-saver">
                        <img src={screen_turn_off_icon} className="screen-turn-off-icon" alt=""/>
                    </Link>

                    <img src={banner_icon} className="banner-icon" alt=""/>

                    <img src={chat_message_icon} className="chat-message-icon" alt="" />
                </div>
            </div>

            <div className="screen-left">
                <div className="btn-arm-stay" onClick={() => statusChange("stay")}>
                    <img src={arm_stay_icon} className="invert-color arm-stay-logo" alt=""/>

                    <h3 style={{'color':"white", 'marginTop':"20px", 'fontSize':"20px", 'position':"absolute", 'marginLeft':"-126px", 'float':"left", 'fontWeight':"300"}}>
                        ARM STAY
                    </h3>
                </div>

                <div className="btn-arm-away" onClick={() => statusChange("away")}>
                    <img src={arm_away_icon} className="invert-color arm-away-logo" alt=""/>

                    <h3 style={{'color':"white", 'marginTop':"20px", 'fontSize':"20px", 'position':"absolute", 'marginLeft':"178px", 'fontWeight':"300"}}>
                        ARM AWAY
                    </h3>
                </div>

                <div className="white-section">
                    <h2 style={{'float':"left", 'color':"gray", 'fontSize':"13px"}} id="toggle-2">
                        Silent Exit
                    </h2>

                    <label className="switch" /* onClick={swapGrayBlack2(document.getElementById('toggle-2').style.color)} */>
                        <input type="checkbox"/>

                        <span className="slider round"></span>
                    </label>

                    <h2 style={{'float':"left", 'marginLeft':"24px", 'color':"gray", 'fontSize':"13px"}} id="toggle-1">
                        Entry Delay
                    </h2>

                    <label className="switch" /* onClick={swapGrayBlack(document.getElementById('toggle-1').style.color)} */>
                        <input type="checkbox" defaultChecked/>

                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div className="screen-right">
                <div className="time-top">
                    <div>
                        {Time_Value}
                    </div>

                    <div style={{'fontSize':"18px",'marginTop':"-10px"}}>
                        {Week_Day}, {Month} {new Date().getDate()}
                    </div>
                </div>

                <div className="time-bottom" style={{'marginLeft':"9px"}}>

                </div>

                <div className="weather-top" style={{'marginLeft':"9px"}}>
                    <Weather/>
                </div>

                <div className="weather-bottom" style={{'marginLeft':"9px"}}>
                    
                </div>
            </div>

            <div className="screen-bottom">
            <Link to="/smart-home-controls/menu">
                    <div className="blue-button" style={{'marginLeft':"-327px", 'marginTop':"7px", 'width':"22%"}}>
                        <img src={smart_home_controls_icon} style={{'height':"35px", 'marginLeft':"8px", 'marginTop':"9px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-39px", 'fontSize':"13px", 'marginLeft':"48px"}}>
                            SMART HOME
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-13px", 'fontSize':"13px", 'marginLeft':"57px"}}>
                            CONTROLS
                        </h4>
                    </div>
                </Link>

                <Link to="/smart-areas/code">
                    <div className="blue-button" style={{'marginLeft':"-159px", 'width':"22%", 'marginTop':"7px"}}>
                        <img src={smart_areas_icon} style={{'height':"30px", 'marginLeft':"7px", 'marginTop':"13px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-28px", 'fontSize':"13px", 'marginLeft':"45px"}}>
                            SMART AREAS
                        </h4>
                    </div>
                </Link>

                <Link to="/system-info/menu">
                    <div className="blue-button" style={{'marginLeft':"348px", 'width':"22%"}}>
                        <img src={info_icon} style={{'height':"30px", 'marginLeft':"12px", 'marginTop':"13px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-38px", 'fontSize':"13px", 'marginLeft':"51px"}}>
                            SYSTEM INFO
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-12px", 'fontSize':"13px", 'marginLeft':"56px"}}>
                            AND USAGE
                        </h4>
                    </div>
                </Link>

                <Link to="/system-settings/code">
                    <div className="blue-button" style={{'marginLeft':"514px", 'width':"22%"}}>
                        <img src={settings_icon} style={{'height':"30px", 'marginLeft':"10px", 'marginTop':"14px"}} className="invert-color" alt="" />

                        <h4 style={{'color':"white", 'marginTop':"-39px", 'fontSize':"13px", 'marginLeft':"65px"}}>
                            SYSTEM
                        </h4>

                        <h4 style={{'color':"white", 'marginTop':"-13px", 'fontSize':"13px", 'marginLeft':"59px"}}>
                            SETTINGS
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}

function Home() {
    while(window.location.pathname === "/"){
        var retrievedState = localStorage.getItem('panelState');
        retrievedState = JSON.parse(retrievedState)
        console.log(retrievedState.mode)

        if (retrievedState.mode === "0"){
            return <Disarmed />
        }
        else if (retrievedState.mode === "1"){
            return <Stay />
        }
        else if (retrievedState.mode === "2"){
            return <Away />
        }
        else if (retrievedState.mode === "3"){
            return <NotReady />
        } 
    }
}
export default Home