import React from 'react';
import check_mark_icon from "../images/check-mark.png";
import fluent_logo_icon from "../images/fluent-logo.png";
import power_cord_icon from "../images/power-cord.png";
import sound_on_icon from "../images/sound-on.png";
import screen_turn_off_icon from "../images/screen-turn-off.png";
import banner_icon from "../images/banner.png";
import chat_message_icon from "../images/chat-message.png";
import settings_gear_icon from "../images/settings-gear.png";
import backarrow_icon from "../images/back-arrow.png";
import { Link } from 'react-router-dom';

function BypassSensors() {
    return (
        <div id="screen-bypass-sensors" className="screen-style">
            <div className="screen-header">
                <img src={check_mark_icon} className="resize-1" alt=""/>

                <p>
                    System <span style={{'fontSize':"16px"}}>Ready</span> To Arm 
                </p>

                <div className="header-right">
                    <Link to="/installer-toolbox/code">
                        <img src={fluent_logo_icon} className="resize-3" style={{'marginTop':"-56px", 'outline':"none"}} alt=""/>
                    </Link>

                    <img src={power_cord_icon} className="invert-color resize-2" style={{'marginLeft':"-22px", 'marginTop':"-21px"}} alt=""/>
                    
                    <img src={sound_on_icon} className="invert-color resize-2" style={{'marginLeft':"-12px", 'marginRight':"34px", 'marginTop':"-21px"}} alt=""/>

                    <Link to="/screen-saver">
                        <img src={screen_turn_off_icon} className="invert-color resize-2" style={{'outline':"none", 'marginTop':"-22px", 'marginRight':"26px"}} alt=""/>
                    </Link>

                    <img src={banner_icon} className="rotateimg90" style={{'height':"18px", 'width':"22px", 'marginRight':"61px"}} alt=""/>

                    <img src={chat_message_icon} className="resize-2" style={{'marginRight':"96px"}} alt=""/>
                </div>
            </div>

            <img src={settings_gear_icon} style={{'color':"#bdbdbd", 'height':":66px", 'marginTop':"17px", 'marginLeft':"-70px"}} alt=""/>

            <Link to="/system-settings">
                <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                    <img src={backarrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt=""/>
                </div>
            </Link>

            <div className="options-right">
                <div className="settings-top-bar">
                    <img src="" alt=""/>

                    <p>
                        
                    </p>
                </div>

                <div className="settings-white-box">

                </div>
            </div>
        </div>
    );
}

export default BypassSensors