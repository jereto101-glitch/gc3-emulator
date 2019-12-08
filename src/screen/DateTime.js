import React from 'react';
import header_logo from "./images/fluent-logo-header.png";

function Panel() {
    return (
        <div id="screen-date-time" className="screen-style" style={{'display':" none;">
                    <div className="screen-header">
                        <img src="images/check-mark.png" className="resize-1">
                        <p>
                            System <span style={{'fontSize':"16px">Ready</span> To Arm 
                        </p>

                        <div className="header-right">
                            <a href="." onClick="return swapPage('screen-installer-code')">
                                <img src="images/fluent-logo.png" className="resize-3" style={{'marginTop':"-56px; outline:none;">
                            </a>

                            <img src="images/power-cord.png" className="invert-color resize-2" style={{'marginLeft':"-22px; 'marginTop':"-21px;">
                            
                            <img src="images/sound-on.png" className="invert-color resize-2" style={{'marginLeft':"-12px; 'marginRight':"34px; 'marginTop':"-21px;">

                            <a href="." onClick="return swapPage('screen-off')">
                                <img src="images/screen-turn-off.png" className="invert-color resize-2" style={{outline:none; 'marginTop':"-22px; 'marginRight':"26px;">
                            </a>

                            <img src="images/banner.png" className="rotateimg90" style={{'height':"18px; 'width':"22px; 'marginRight':"61px;">

                            <img src="images/chat-message.png" className="resize-2" style={{'marginRight':"96px;">
                        </div>
                    </div>

                    <img src="images/settings-gear.png" style={{'color':"#bdbdbd; 'height':"66px; 'marginTop':"17px; 'marginLeft':"-70px;">

                    <a href="." onClick="return swapPage('screen-system-settings-menu')">
                        <div className="blue-button" style={{'height':"47px; 'width':"76px; 'marginTop':"103px; 'marginLeft':"30px;">
                            <img src="images/back-arrow.png" className="invert-color rotateimg180" style={{'height':"23px; 'marginLeft':"26px; 'marginTop':"12px;">
                        </div>
                    </a>

                    <div className="options-right">
                        <div className="settings-top-bar">
                            <img src="">

                            <p>
                                
                            </p>
                        </div>

                        <div className="settings-white-box">

                        </div>
                    </div>
                </div>
    );
}