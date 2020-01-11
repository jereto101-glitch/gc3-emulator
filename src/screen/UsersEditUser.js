import React from 'react';
import {Link} from 'react-router-dom'
import check_mark_icon from "../images/check-mark.png";
import fluent_logo_icon from "../images/fluent-logo.png";
import power_cord_icon from "../images/power-cord.png";
import sound_on_icon from "../images/sound-on.png";
import screen_turn_off_icon from "../images/screen-turn-off.png";
import banner_icon from "../images/banner.png";
import chat_message_icon from "../images/chat-message.png";
import settings_gear_icon from "../images/settings-gear.png";
import back_arrow_icon from "../images/back-arrow.png";
import users_icon from "../images/users.png";
import edit_icon from "../images/edit.png";

function UsersEditUser() {
    const {id} = window.match.params

    console.log(id) // "foo"
    return (
        <div id="screen-users-edit-user" className="screen-style">
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

            <img src={settings_gear_icon} style={{'color':"#bdbdbd", 'height':"66px", 'marginTop':"17px", 'marginLeft':"-70px"}} alt="" />

            <Link to="/system-settings/users/menu">
                <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                    <img src={back_arrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt="" />
                </div>
            </Link>

            <div className="options-right">
                <div className="settings-top-bar">
                    <img src={users_icon} className="invert-color settings-bar-img" alt="" />

                    <p className="settings-bar-title">
                        Edit User
                    </p>
                </div>

                <div className="settings-white-box">
                    <div className="options-right-scroll-options">
                        <ul className="edit-users-list">
                            <li className="edit-users-row">
                                <p>
                                    <span className="edit-users-element">Active</span> <span className="edit-users-divider">|</span>
                                </p> 

                                <span id="edit-user-activity"> 
                                    <label className="switch" style={{'float':"right", 'marginTop':"-40px", 'marginRight':"5px"}}>
                                        <input type="checkbox" checked />

                                        <span className="slider round"></span>
                                    </label>
                                </span>
                            </li>
                            
                            <li className="edit-users-row">
                                <p>
                                    <span className="edit-users-element">User Number</span> <span className="edit-users-divider">|</span> <span id="UserNumber"></span>
                                </p> 
                            </li>

                            <li className="edit-users-row">
                                <p>
                                    <span className="edit-users-element">Name</span> <span className="edit-users-divider">|</span> <span id="UserName"></span>
                                </p>

                                <img src={edit_icon} className="edit-users-element-edit-btn" alt="" />
                            </li>

                            <li className="edit-users-row">
                                <p>
                                    <span className="edit-users-element">Code</span> <span className="edit-users-divider">|</span> <span id="UserCode"></span>
                                </p>

                                <img src={edit_icon} className="edit-users-element-edit-btn" alt="" />
                            </li>

                            <li className="edit-users-row" style={{'height':"40px"}}>
                                <p className="edit-users-element">Smart Areas</p>
                            </li>
                        </ul>

                        <input type="checkbox" className="" /> System 
                        
                        <br />

                        <input type="checkbox" className="" /> Smart Area 2
                        
                        <br />

                        <input type="checkbox" className="" /> Smart Area 3 
                        
                        <br />

                        <input type="checkbox" className="" /> Smart Area 4 

                        <p className="edit-users-row">Schedules</p>

                        <p className="edit-users-row">Add Schedule <span style={{'float':"right"}}> + </span></p> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsersEditUser