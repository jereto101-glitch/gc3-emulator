import React from 'react'
import {Link} from 'react-router-dom'
import rooms_icon from '../images/rooms.png'
import check_mark_icon from "../images/check-mark.png";
import fluent_logo_icon from "../images/fluent-logo.png";
import power_cord_icon from "../images/power-cord.png";
import sound_on_icon from "../images/sound-on.png";
import screen_turn_off_icon from "../images/screen-turn-off.png";
import banner_icon from "../images/banner.png";
import chat_message_icon from "../images/chat-message.png";
import back_arrow_icon from "../images/back-arrow.png";
import info_gray_icon from '../images/info-gray.png';

function SmartHomeControlsLocks() {
    return (
        <div id="screen-users" className="screen-style">
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

            <img src={info_gray_icon} style={{'color':"#bdbdbd", 'height':"66px", 'marginTop':"17px", 'marginLeft':"-70px", 'filter':"brightness(190%)"}} alt="" />

            <Link to="/system-info/menu">
                <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                    <img src={back_arrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt="" />
                </div>
            </Link>

            <div className="options-right">
                <div className="settings-top-bar">
                    <img src={rooms_icon} className="invert-color settings-bar-img" alt="" />

                    <p className="settings-bar-title">
                        Locks
                    </p>
                </div>

                <div className="settings-white-box">
                    <div className="system-info-box">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmartHomeControlsLocks