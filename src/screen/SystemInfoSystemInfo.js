import React from 'react'
import {Link} from 'react-router-dom'
import home_icon from '../images/home.png'
import check_mark_icon from "../images/check-mark.png";
import fluent_logo_icon from "../images/fluent-logo.png";
import power_cord_icon from "../images/power-cord.png";
import sound_on_icon from "../images/sound-on.png";
import screen_turn_off_icon from "../images/screen-turn-off.png";
import banner_icon from "../images/banner.png";
import chat_message_icon from "../images/chat-message.png";
import back_arrow_icon from "../images/back-arrow.png";
import info_gray_icon from '../images/info-gray.png';

function SystemInfoSystemInfo() {
    return (
        <div id="screen-users" className="screen-style">
            <div className="screen-header">
                <img src={check_mark_icon} className="resize-1" alt=""/>

                <p style={{'paddingTop':"9px"}}>
                    System
                </p>

                <p style={{'marginTop':"-16px"}}>
                    Ready to Arm
                </p>

                <div className="header-right" style={{'marginTop':"-11px"}}>
                    <Link to="/installer-toolbox/code">
                        <img src={fluent_logo_icon} className="resize-3" style={{'outline':"none", 'marginTop':"-35px", 'marginBottom':"29px"}} alt=""/>
                    </Link>

                    <img src={power_cord_icon} className="resize-2" style={{'marginLeft':"-22px", 'marginTop':"-21px"}} alt=""/>
                    
                    <img src={sound_on_icon} className="resize-2" style={{'marginLeft':"-12px", 'marginRight':"34px", 'marginTop':"-21px"}} alt=""/>

                    <Link to="/screen-saver">
                        <img src={screen_turn_off_icon} className="resize-2" style={{'outline':"none", 'marginTop':"-22px", 'marginRight':"20px"}} alt=""/>
                    </Link>

                    <img src={banner_icon} style={{'height':"22px", 'marginRight':"49px"}} alt=""/>

                    <img src={chat_message_icon} className="resize-2" alt="" />
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
                    <img src={home_icon} className="invert-color settings-bar-img" alt="" />

                    <p className="settings-bar-title">
                        System Info
                    </p>
                </div>

                <div className="settings-white-box">
                    <div className="system-info-box">
                        <p>
                            <strong>
                                Z-Wave Home ID:
                            </strong>
                        </p>

                        <p>
                            F575571B
                        </p>

                        <p>
                            <strong>
                                Serial Number:
                            </strong>
                        </p>

                        <p>
                            GC3 - 1927010020053572
                        </p>

                        <p>
                            <strong>
                                Firmware Version:
                            </strong>
                        </p>

                        <p>
                            3.2.4
                        </p>

                        <p>
                            <strong>
                                Build Version:
                            </strong>
                        </p>

                        <p>
                            6725
                        </p>

                        <p>
                            <strong>
                                Radio Modem:
                            </strong>
                        </p>

                        <p>

                        </p>

                        <p>
                            <strong>
                                ZWave Version:
                            </strong>
                        </p>

                        <p>
                            Z-Wave 4.54
                        </p>

                        <p>
                            <strong>
                                Open Source Licenses:
                            </strong>
                        </p>

                        <Link to="/system-info/license-info">
                            <div className="system-info-button blue-button">
                                License Info
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SystemInfoSystemInfo