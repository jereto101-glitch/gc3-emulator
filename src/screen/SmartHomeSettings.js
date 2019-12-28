import React from 'react';
import {Link} from 'react-router-dom';
import box_add from '../images/box-add.png';
import box_remove from '../images/box-remove.png';
import network_icon from '../images/network.png';
import rediscover_icon from '../images/rediscover.png';
import boxes_icon from '../images/boxes.png';
import installer_toolbox_icon from '../images/installer-toolbox.png';
import installer_icon from '../images/installer.png';
import back_arrow_icon from '../images/back-arrow.png';
import box_all_icon from '../images/all-box.png'
import z_wave_icon from '../images/z-wave.png'
import check_mark_icon from "../images/check-mark.png";
import fluent_logo_icon from "../images/fluent-logo.png";
import power_cord_icon from "../images/power-cord.png";
import sound_on_icon from "../images/sound-on.png";
import screen_turn_off_icon from "../images/screen-turn-off.png";
import banner_icon from "../images/banner.png";
import chat_message_icon from "../images/chat-message.png";
import settings_icon from '../images/settings-gear.png'

function SmartHomeSettings() {
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
                        <Link to="/system-settings/smart-home/add-devices">
                            <div className="btn-option">
                                <img src={box_add} className="option-img invert-color" alt="" />

                                <p style={{'marginTop':"0px"}}>
                                    ADD
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    DEVICES
                                </p>
                            </div>
                        </Link>

                        <Link to="/system-settings/smart-home/remove-devices">
                            <div className="btn-option">
                                <img src={box_remove} className="option-img invert-color" alt="" />

                                <p style={{'marginTop':"0px"}}>
                                    REMOVE
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    DEVICES
                                </p>
                            </div>
                        </Link>

                        <Link to="/system-settings/smart-home/check-network">
                            <div className="btn-option">
                                <img src={network_icon} className="option-img invert-color" alt="" />

                                <p style={{'marginTop':"0px"}}>
                                    CHECK
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    NETWORK
                                </p>
                            </div>
                        </Link>

                        <Link to="/system-settings/smart-home/rediscover-network">
                            <div className="btn-option">
                                <img src={rediscover_icon} className="option-img invert-color" alt="" />

                                <p style={{'marginTop':"0px"}}>
                                    REDISCOVER
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    NETWORK
                                </p>
                            </div>
                        </Link>

                        <Link to="/system-settings/smart-home/view-all">
                            <div className="btn-option">
                                <img src={box_all_icon} className="option-img invert-color" alt="" />

                                <p style={{'marginTop':"0px"}}>
                                    VIEW ALL
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    DEVICES
                                </p>
                            </div>
                        </Link>

                        <Link to="/system-settings/smart-home/device-association">
                            <div className="btn-option">
                                <img src={boxes_icon} className="option-img invert-color" alt=""/>

                                <p style={{'marginTop':"0px"}}>
                                    DEVICE
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    ASSOCIATION
                                </p>
                            </div>
                        </Link>

                        <Link to="/system-settings/smart-home/advanced">
                            <div className="btn-option">
                                <img src={z_wave_icon} className="option-img invert-color" alt=""/>

                                <p style={{'marginTop':"0px"}}>
                                    ADVANCED
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
    else {
        return (
            <div className="screen-style" >
                <div className="screen-header">
                    <img src={installer_toolbox_icon} className="resize-1 invert-color" alt="" />

                    <p>
                        Smart Home Settings
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
                        <Link to="/installer-toolboxs/smart-home/add-devices">
                            <div className="btn-option">
                                <img src={box_add} className="option-img invert-color" alt="" />

                                <p style={{'marginTop':"0px"}}>
                                    ADD
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    DEVICES
                                </p>
                            </div>
                        </Link>

                        <Link to="/installer-toolbox/smart-home/remove-devices">
                            <div className="btn-option">
                                <img src={box_remove} className="option-img invert-color" alt="" />

                                <p style={{'marginTop':"0px"}}>
                                    REMOVE
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    DEVICES
                                </p>
                            </div>
                        </Link>

                        <Link to="/installer-toolbox/smart-home/check-network">
                            <div className="btn-option">
                                <img src={network_icon} className="option-img invert-color" alt="" />

                                <p style={{'marginTop':"0px"}}>
                                    CHECK
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    NETWORK
                                </p>
                            </div>
                        </Link>

                        <Link to="/installer-toolbox/smart-home/rediscover-network">
                            <div className="btn-option">
                                <img src={rediscover_icon} className="option-img invert-color" alt="" />

                                <p style={{'marginTop':"0px"}}>
                                    REDISCOVER
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    NETWORK
                                </p>
                            </div>
                        </Link>

                        <Link to="/installer-toolbox/smart-home/view-all">
                            <div className="btn-option">
                                <img src={box_all_icon} className="option-img invert-color" alt="" />

                                <p style={{'marginTop':"0px"}}>
                                    VIEW ALL
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    DEVICES
                                </p>
                            </div>
                        </Link>

                        <Link to="/installer-toolbox/smart-home/device-association">
                            <div className="btn-option">
                                <img src={boxes_icon} className="option-img invert-color" alt=""/>

                                <p style={{'marginTop':"0px"}}>
                                    DEVICE
                                </p>

                                <p style={{'marginTop':"-17px"}}>
                                    ASSOCIATION
                                </p>
                            </div>
                        </Link>

                        <Link to="/installer-toolbox/smart-home/advanced">
                            <div className="btn-option">
                                <img src={z_wave_icon} className="option-img invert-color" alt=""/>

                                <p style={{'marginTop':"0px"}}>
                                    ADVANCED
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
}

export default SmartHomeSettings