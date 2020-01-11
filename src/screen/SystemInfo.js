import React from 'react';
import {Link} from 'react-router-dom';
import history_icon from '../images/history.png';
import home_icon from '../images/home.png';
import check_mark_icon from "../images/check-mark.png";
import fluent_logo_icon from "../images/fluent-logo.png";
import power_cord_icon from "../images/power-cord.png";
import sound_on_icon from "../images/sound-on.png";
import screen_turn_off_icon from "../images/screen-turn-off.png";
import banner_icon from "../images/banner.png";
import chat_message_icon from "../images/chat-message.png";
import back_arrow_icon from '../images/back-arrow.png';
import info_icon from '../images/info.png';
import info_gray_icon from '../images/info-gray.png';

function SystemInfo() {
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

            <img src={info_gray_icon} style={{'color':"#bdbdbd", 'height':"66px", 'marginTop':"17px", 'marginLeft':"-70px", 'filter':"brightness(190%)"}} alt="" />

            <Link to="/">
                <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                    <img src={back_arrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt="" />
                </div>
            </Link>

            <div className="options-right" style={{'marginTop':"-90px"}}>
                <div className="options-right-scroll" id="scroller-installer" >
                    <Link to="/system-info/history">
                        <div className="btn-option">
                            <img src={history_icon} className="option-img invert-color" alt="" />

                            <p>
                                HISTORY
                            </p>
                        </div>
                    </Link>

                    <Link to="/system-info/system-info">
                        <div className="btn-option">
                            <img src={home_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                SYSTEM
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                INFO
                            </p>
                        </div>
                    </Link>
                    
                    <Link to="/system-info/dealer-info">
                        <div className="btn-option">
                            <img src={info_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                DEALER
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                INFO
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SystemInfo