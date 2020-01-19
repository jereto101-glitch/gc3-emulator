import React from 'react';
import {Link} from 'react-router-dom'
import check_mark_icon from "../images/check-mark.png";
import fluent_logo_icon from "../images/fluent-logo.png";
import power_cord_icon from "../images/power-cord.png";
import sound_on_icon from "../images/sound-on.png";
import screen_turn_off_icon from "../images/screen-turn-off.png";
import banner_icon from "../images/banner.png";
import chat_message_icon from "../images/chat-message.png";
import back_arrow_icon from "../images/back-arrow.png";
import info_icon from "../images/info.png";
import settings_gear_icon from "../images/settings-gear.png";
import check_icon from "../images/check.png";
import users_icon from "../images/users.png";
import edit_icon from "../images/edit.png";
import user_icon from "../images/user.png";
import trashcan_icon from "../images/trashcan.png";

// eslint-disable-next-line
function tooManyUsersOn(){
    document.getElementById("too-many-users").style.display='';
}

function tooManyUsersOff(){
    document.getElementById("too-many-users").style.display='none';
}

function Users() {
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

            <img src={settings_gear_icon} style={{'color':"#bdbdbd", 'height':"66px", 'marginTop':"17px", 'marginLeft':"-70px"}} alt="" />

            <Link to="/system-settings/menu">
                <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                    <img src={back_arrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt="" />
                </div>
            </Link>

            <div id="too-many-users" style={{'display':"none"}}>
                <img src={info_icon} style={{'height':"30px", 'marginTop':"36px", 'position':"absolute", 'marginLeft':"-250px"}} alt="" />

                <p style={{'marginTop':"30px", 'position':"absolute", 'marginLeft':"82px", 'fontSize':"20px", 'color':"#448cc0"}}>
                    Cannot add new user. System currently has maximum number of users.
                </p>

                <span onClick={() => tooManyUsersOff()}>
                    <div className="blue-button" style={{'height':"55px", 'width':"107px", 'marginTop':"99px", 'marginLeft':"182px"}}>
                        <img src={check_icon} className="invert-color" style={{'height':"10px", 'marginLeft':"27px", 'marginTop':"22px"}} alt="" />

                        <p style={{'marginTop':"-20px", 'marginLeft':"50px", 'color':"white"}}>
                            OK
                        </p>
                    </div>
                </span>
            </div>

            <div className="options-right">
                <div className="settings-top-bar">
                    <img src={users_icon} className="invert-color settings-bar-img" alt="" />

                    <p className="settings-bar-title">
                        Users
                    </p>

                    <Link to="/system-settings/users/new/name">
                        <div className="add-btn">
                            <p className="add-btn-plus">
                                +
                            </p>
                        </div>
                    </Link>

                    <p className="settings-bar-right-text">
                        Add User
                    </p>
                </div>

                <div className="settings-white-box">
                    <div className="options-right-scroll-options">
                        <ul id="users-list" className="list-users">
                            <li className="list-row" id="Master">
                                <img src={user_icon} className="settings-bar-img" alt="" />

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    Master User
                                </p>

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    Code: 1111
                                </p>

                                <Link to={`/system-settings/users/edit/Master`}>
                                    <img src={edit_icon} className="settings-bar-img  edit-btn" alt="" />
                                </Link>
                            </li>

                            <li className="list-row" id="User3">
                                <img src={user_icon} className="settings-bar-img" alt="" />

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    
                                </p>

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    Code: 1111
                                </p>

                                <Link to={`/system-settings/users/edit/User3`}>
                                    <img src={edit_icon} className="settings-bar-img  edit-btn" alt="" />
                                </Link>

                                <span>  
                                    <img src={trashcan_icon} class="settings-bar-img" style={{'marginLeft':"-25px", 'marginTop':"4px"}} alt="" />
                                </span>
                            </li>

                            <li className="list-row" id="User4">
                                <img src={user_icon} className="settings-bar-img" alt="" />

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    
                                </p>

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    Code:
                                </p>

                                <Link to={`/system-settings/users/edit/User4`}>
                                    <img src={edit_icon} className="settings-bar-img  edit-btn" alt="" />
                                </Link>

                                <span> 
                                    <img src={trashcan_icon} class="settings-bar-img" style={{'marginLeft':"-25px", 'marginTop':"4px"}} alt="" />
                                </span>
                            </li>

                            <li className="list-row" id="User5">
                                <img src={user_icon} className="settings-bar-img" alt="" />

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    
                                </p>

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    Code:
                                </p>

                                <Link to={`/system-settings/users/edit/User5`}>
                                    <img src={edit_icon} className="settings-bar-img  edit-btn" alt="" />
                                </Link>

                                <span> 
                                    <img src={trashcan_icon} class="settings-bar-img" style={{'marginLeft':"-25px", 'marginTop':"4px"}} alt="" />
                                </span>
                            </li>

                            <li className="list-row" id="User6">
                                <img src={user_icon} className="settings-bar-img" alt="" />

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    
                                </p>

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    Code: 
                                </p>

                                <Link to={`/system-settings/users/edit/User6`}>
                                    <img src={edit_icon} className="settings-bar-img  edit-btn" alt="" />
                                </Link>

                                <span> 
                                    <img src={trashcan_icon} class="settings-bar-img" style={{'marginLeft':"-25px", 'marginTop':"4px"}} alt="" />
                                </span>
                            </li>

                            <li className="list-row" id="User7">
                                <img src={user_icon} className="settings-bar-img" alt="" />

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    
                                </p>

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    Code:
                                </p>

                                <Link to={`/system-settings/users/edit/User7`}>
                                    <img src={edit_icon} className="settings-bar-img  edit-btn" alt="" />
                                </Link>

                                <span> 
                                    <img src={trashcan_icon} class="settings-bar-img" style={{'marginLeft':"-25px", 'marginTop':"4px"}} alt="" />
                                </span>
                            </li>

                            <li style={{'enabled':"none"}}>
                                <img src={user_icon} className="settings-bar-img" style={{'marginLeft':"31px"}} alt="" />

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    Duress
                                </p>

                                <div className="divider">

                                </div>

                                <p className="list-words">
                                    Code:
                                </p>

                                <Link to={`/system-settings/users/edit/Duress`}>
                                    <img src={edit_icon} className="settings-bar-img edit-btn" style={{'marginTop':"4px", 'position':"static"}} alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users