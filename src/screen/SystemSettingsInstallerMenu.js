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
import sounds_icon from "../images/sounds.png";
import bypass_icon from "../images/bypass.png";
import boxes_icon from "../images/boxes1.png";
import screen_icon from "../images/screen.png";
import calendar_icon from "../images/calendar.png";
import chat_icon from "../images/chat-icon.svg";
import test_icon from "../images/test.png";
import refresh_icon from "../images/refresh.png";
import installer_toolbox_icon from "../images/installer-toolbox.png";
import wifi_icon from "../images/wifi.png";
import radio_tower_icon from "../images/radio-tower.png";
import bell_sound_icon from "../images/bell-sound.png";
import smart_areas_settings_icon from "../images/smart-areas-settings.png";

function haze(){
    var diver = document.getElementById("scroller")
    console.log("call")
    if (diver.scrollTop === 0){
        console.log("top")
        if (diver !== undefined){
            document.getElementById("haze-top").style.display='none';
            document.getElementById("haze-bottom").style.display='';
            document.getElementById("haze-top").style.transition = "display 2s";
            document.getElementById("haze-bottom").style.transition = "display 2s";
        }
    }
    else if (diver.scrollTop === 219){
        console.log("bottom")
        if (diver !== undefined){
            document.getElementById("haze-top").style.display='';
            document.getElementById("haze-bottom").style.display='none';
            document.getElementById("haze-top").style.transition = "display 2s";
            document.getElementById("haze-bottom").style.transition = "display 2s";
        }
    }
    else{
        console.log("middle")
        if (diver !== undefined){
            document.getElementById("haze-top").style.display='';
            document.getElementById("haze-bottom").style.display='';
            document.getElementById("haze-top").style.transition = "display 2s";
            document.getElementById("haze-bottom").style.transition = "display 2s";
        }
    }
}

function SystemSettingsInstallerMenu() {
    return (
        <div id="screen-system-settings-menu" className="screen-style">
            <div className="screen-header">
                <img src={check_mark_icon} className="resize-1" alt="" />

                <p>
                    System <span style={{'fontSize':"16px"}}>Ready</span> To Arm 
                </p>

                <div className="header-right">
                    <Link to="/installer-toolboxmenu">
                        <img src={fluent_logo_icon} className="resize-3" style={{'marginTop':"-56px", 'outline':"none"}} alt="" />
                    </Link>

                    <img src={power_cord_icon} className="invert-color resize-2" style={{'marginLeft':"-22px", 'marginTop':"-21px"}} alt="" />
                    
                    <img src={sound_on_icon} className="invert-color resize-2" style={{'marginLeft':"-12px", 'marginRight':"34px", 'marginTop':"-21px"}} alt="" />

                    <Link to="/screen-saver">
                        <img src={screen_turn_off_icon} className="invert-color resize-2" style={{'outline':"none", 'marginTop':"-22px", 'marginRight':"26px"}} alt="" />
                    </Link>

                    <img src={banner_icon} className="rotateimg90" style={{'height':"18px", 'width':"22px", 'marginRight':"61px"}} alt="" />

                    <img src={chat_message_icon} className="resize-2" style={{'marginRight':"96px"}} alt="" />
                </div>
            </div>

            <div id="haze-top" style={{'display':"none", 'marginTop':"-2px"}}>
                
            </div>

            <div id="haze-bottom">

            </div>

            <img src={settings_gear_icon} style={{'color':"#bdbdbd", 'height':"66px", 'marginTop':"17px", 'marginLeft':"-70px"}} alt="" />

            <Link to="/">
                <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                    <img src={back_arrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt="" />
                </div>
            </Link>

            <div className="options-right">
                <div id="scroller" className="options-right-scroll" onScroll={() => haze()}>
                    <Link to="/system-settings/users">
                        <div className="btn-option">
                            <img src={users_icon} className="option-img invert-color" alt="" />

                            <p>
                                USERS
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/sounds">
                        <div className="btn-option">
                            <img src={sounds_icon} className="option-img invert-color" alt="" />

                            <p>
                                SOUNDS
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/bypass-sensors">
                        <div className="btn-option">
                            <img src={bypass_icon}  className="option-img invert-color rotateimg180" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                BYPASS
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                SENSORS
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/smart-home/menu">
                        <div className="btn-option">
                            <img src={boxes_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                SMART HOME
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                SETTINGS
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/screen">
                        <div className="btn-option">
                            <img src={screen_icon}  className="option-img" style={{'marginLeft':"21px"}} alt="" />

                            <p>
                                SCREEN
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/date-time">
                        <div className="btn-option">
                            <img src={calendar_icon} className="option-img invert-color" alt="" />

                            <p>
                                DATE/TIME
                            </p>
                        </div>
                    </Link>
                    
                    <Link to="/system-settings/language">
                        <div className="btn-option">
                            <img src={chat_icon} className="option-img invert-color" alt="" />

                            <p>
                                LANGUAGE
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/tests">
                        <div className="btn-option">
                            <img src={test_icon} className="option-img invert-color" style={{'marginLeft':"32px"}} alt="" />

                            <p style={{'marginTop':"0px"}}>
                                SYSTEM
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                TESTS
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/firmware-update">
                        <div className="btn-option">
                            <img src={refresh_icon} className="option-img invert-color rotateimg90" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                FIRMWARE
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                UPDATE
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/menu">
                        <div className="btn-option">
                            <img src={installer_toolbox_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>  
                                INSTALLER
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                TOOLBOX
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/network-settings/menu">
                        <div className="btn-option">
                            <img src={wifi_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                NETWORK
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                SETTINGS
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/radio-swap">
                        <div className="btn-option">
                            <img src={radio_tower_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                CELL RADIO
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                SWAP
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/sensor-chimes">
                        <div className="btn-option">
                            <img src={bell_sound_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                SENSOR
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                CHIMES
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-settings/smart-area">
                        <div className="btn-option" style={{'marginBottom':"10px"}}>
                            <img src={smart_areas_settings_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                SMART AREAS
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                SETTINGS
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SystemSettingsInstallerMenu