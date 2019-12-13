import React from 'react';
import {Link} from 'react-router-dom';
import wifi_icon from '../images/wifi.png';
import hardwired_icon from '../images/hardwired.png';
import keyfob_icon from '../images/keyfob.png';
import keypad_icon from '../images/keypad.png';
import tool_icon from '../images/tool.png';
import installer_toolbox_icon from '../images/installer-toolbox.png';
import installer_icon from '../images/installer.png';
import back_arrow_icon from '../images/back-arrow.png';
import image_sensor_icon from '../images/image-sensor.png'

function SystemConfiguration() {
    return (
        <div className="screen-style" >
            <div className="screen-header">
                <img src={installer_toolbox_icon} className="resize-1 invert-color" alt="" />

                <p>
                    System Configuration
                </p>
            </div>

            <img src={installer_icon} style={{'color':"#bdbdbd", 'height':"66px", 'marginTop':"17px", 'marginLeft':"-70px"}} alt="" />

            <Link to="/">
                <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                    <img src={back_arrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt="" />
                </div>
            </Link>

            <div className="options-right" style={{'marginTop':"0px"}}>
                <div className="options-right-scroll" id="scroller-installer" >
                    <Link to="/installer-toolbox/system-configuration/wireless-zones/menu">
                        <div className="btn-option">
                            <img src={wifi_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                WIRELESS
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                ZONES
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/system-configuration/wired-zones">
                        <div className="btn-option">
                            <img src={hardwired_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                WIRED
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                ZONES
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/system-configuration/keyfobs">
                        <div className="btn-option">
                            <img src={keyfob_icon} className="option-img invert-color" alt="" />

                            <p>
                                KEYFOBS
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/system-configuration/keypads">
                        <div className="btn-option">
                            <img src={keypad_icon} className="option-img" alt="" />

                            <p>
                                KEYPADS
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/system-configuration/panel-programming">
                        <div className="btn-option">
                            <img src={tool_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                PANEL
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                PROGRAMMING
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/system-configuration/image-sensors">
                        <div className="btn-option">
                            <img src={image_sensor_icon} className="option-img" alt=""/>

                            <p style={{'marginTop':"0px"}}>
                                IMAGE
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                SENSORS
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SystemConfiguration