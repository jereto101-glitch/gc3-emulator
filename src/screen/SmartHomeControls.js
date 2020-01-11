import React from 'react';
import {Link} from 'react-router-dom';
import lights_icon from '../images/light.png';
import locks_icon from '../images/doorlock.png';
import thermostat_icon from "../images/thermostat.png";
import garage_door_icon from "../images/garage-door.png";
import scenes_icon from "../images/scenes.png";
import rooms_icon from "../images/rooms.png";
import check_mark_icon from "../images/check-mark.png";
import fluent_logo_icon from "../images/fluent-logo.png";
import power_cord_icon from "../images/power-cord.png";
import sound_on_icon from "../images/sound-on.png";
import screen_turn_off_icon from "../images/screen-turn-off.png";
import banner_icon from "../images/banner.png";
import chat_message_icon from "../images/chat-message.png";
import back_arrow_icon from '../images/back-arrow.png';
import smart_home_controls_icon from "../images/smart-home-controls-gray.png";

function SmartHomeControls() {
    return (
        <div className="screen-style" >
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

            <img src={smart_home_controls_icon} style={{'color':"#bdbdbd", 'height':"66px", 'marginTop':"17px", 'marginLeft':"-70px", 'filter':"brightness(100%)"}} alt="" />

            <Link to="/">
                <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                    <img src={back_arrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt="" />
                </div>
            </Link>

            <div className="options-right" style={{'marginTop':"-90px"}}>
                <div className="options-right-scroll" id="scroller-installer" >
                    <Link to="/smart-home-controls/lights">
                        <div className="btn-option">
                            <img src={lights_icon} className="option-img invert-color" alt="" />

                            <p>
                                LIGHTS
                            </p>
                        </div>
                    </Link>

                    <Link to="/smart-home-controls/locks">
                        <div className="btn-option">
                            <img src={locks_icon} className="option-img invert-color" alt="" />

                            <p>
                                LOCKS
                            </p>
                        </div>
                    </Link>

                    <Link to="/smart-home-controls/thermostats">
                        <div className="btn-option">
                            <img src={thermostat_icon} className="option-img invert-color" alt="" />

                            <p>
                                THERMOSTATS
                            </p>
                        </div>
                    </Link>

                    <Link to="/smart-home-controls/garage-doors">
                        <div className="btn-option">
                            <img src={garage_door_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                GARAGE
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                DOORS
                            </p>
                        </div>
                    </Link>
                    
                    <Link to="/smart-home-controls/scenes">
                        <div className="btn-option">
                            <img src={scenes_icon} className="option-img invert-color" alt="" />

                            <p>
                                SCENES
                            </p>
                        </div>
                    </Link>

                    <Link to="/smart-home-controls/rooms">
                        <div className="btn-option">
                            <img src={rooms_icon} className="option-img invert-color" alt="" />

                            <p>
                                ROOMS
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SmartHomeControls