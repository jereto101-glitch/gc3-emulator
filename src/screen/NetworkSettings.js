import React from 'react';
import {Link} from 'react-router-dom';
import wifi_icon from '../images/wifi.png';
import hardwired_icon from '../images/hardwired.png';
import installer_toolbox_icon from '../images/installer-toolbox.png';
import installer_icon from '../images/installer.png';
import back_arrow_icon from '../images/back-arrow.png';
import radio_icon from '../images/radio-tower.png'
import check_mark_icon from "../images/check-mark.png";
import fluent_logo_icon from "../images/fluent-logo.png";
import power_cord_icon from "../images/power-cord.png";
import sound_on_icon from "../images/sound-on.png";
import screen_turn_off_icon from "../images/screen-turn-off.png";
import banner_icon from "../images/banner.png";
import chat_message_icon from "../images/chat-message.png";
import settings_icon from '../images/settings-gear.png';

function NetworkSettings() {
    if(window.location.pathname.split('/')[1] === "system-settings"){
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
                        <img src={fluent_logo_icon} className="resize-3" style={{'marginTop':"-56px", 'outline':"none"}} alt=""/>
                    </Link>

                    <img src={power_cord_icon} className="invert-color resize-2" style={{'marginLeft':"-22px", 'marginTop':"-21px"}} alt=""/>
                    
                    <img src={sound_on_icon} className="invert-color resize-2" style={{'marginLeft':"-12px", 'marginRight':"34px", 'marginTop':"-21px"}} alt=""/>

                    <Link to="/screen-saver">
                        <img src={screen_turn_off_icon} className="invert-color resize-2" style={{'outline':"none", 'marginTop':"-22px", 'marginRight':"26px"}} alt=""/>
                    </Link>

                    <img src={banner_icon} style={{'height':"22px", 'marginRight':"61px"}} alt=""/>

                    <img src={chat_message_icon} className="resize-2" style={{'marginRight':"96px"}} alt="" />
                </div>
            </div>
    
                <img src={settings_icon} style={{'color':"#bdbdbd", 'height':"66px", 'marginTop':"17px", 'marginLeft':"-70px"}} alt="" />

                <Link to="/system-settings/menu">
                    <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                        <img src={back_arrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt="" />
                    </div>
                </Link>
    
                <div className="options-right" style={{'marginTop':"-90px"}}>
                    <div className="options-right-scroll" id="scroller-installer" >
                        <Link to="/system-settings/network-settings/wireless">
                            <div className="btn-option">
                                <img src={wifi_icon} className="option-img invert-color" alt="" />
    
                                <p>
                                    WIRELESS
                                </p>
                            </div>
                        </Link>
    
                        <div className="btn-option" style={{'backgroundColor':"#b1bdce", 'backgroundImage':"linear-gradient(to bottom right, #b1bdce, transparent)"}}>
                            <img src={hardwired_icon} className="option-img invert-color" alt="" />
    
                            <p>
                                WIRED
                            </p>
                        </div>
    
                        <Link to="/system-settings/network-settings/access-point">
                            <div className="btn-option">
                                <img src={radio_icon} className="option-img invert-color" alt="" />
    
                                <p style={{'marginTop':"0px"}}>
                                    ACCESS
                                </p>
    
                                <p style={{'marginTop':"-17px"}}>
                                    POINT
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="screen-style" >
                <div className="screen-header">
                    <img src={installer_toolbox_icon} className="resize-1 invert-color" alt="" />
    
                    <p>
                        Network Settings
                    </p>
                </div>
    
                <img src={installer_icon} style={{'color':"#bdbdbd", 'height':"66px", 'marginTop':"17px", 'marginLeft':"-70px"}} alt="" />
    
                <Link to="/installer-toolbox/menu">
                    <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                        <img src={back_arrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt="" />
                    </div>
                </Link>
    
                <div className="options-right" style={{'marginTop':"0px"}}>
                    <div className="options-right-scroll" id="scroller-installer" >
                        <Link to="/system-settings/network-settings/wireless">
                            <div className="btn-option">
                                <img src={wifi_icon} className="option-img invert-color" alt="" />
    
                                <p>
                                    WIRELESS
                                </p>
                            </div>
                        </Link>
    
                        <div className="btn-option" style={{'backgroundColor':"#b1bdce", 'backgroundImage':"linear-gradient(to bottom right, #b1bdce, transparent)"}}>
                            <img src={hardwired_icon} className="option-img invert-color" alt="" />
    
                            <p>
                                WIRED
                            </p>
                        </div>
    
                        <Link to="/system-settings/network-settings/access-point">
                            <div className="btn-option">
                                <img src={radio_icon} className="option-img invert-color" alt="" />
    
                                <p style={{'marginTop':"0px"}}>
                                    ACCESS
                                </p>
    
                                <p style={{'marginTop':"-17px"}}>
                                    POINT
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default NetworkSettings