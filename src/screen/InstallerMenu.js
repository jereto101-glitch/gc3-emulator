import React from 'react';
import {Link} from 'react-router-dom';
import installer_toolbox_icon from "../images/installer-toolbox.png";
import installer_icon from "../images/installer.png";
import back_arrow_icon from "../images/back-arrow.png";
import tool_icon from "../images/tool.png";
import boxes_icon from "../images/boxes.png";
import walk_icon from "../images/walk.png";
import radio_tower_icon from "../images/radio-tower.png";
import wifi_icon from "../images/wifi.png";
import restore_icon from "../images/restore.png";
import sound_off_icon from "../images/sound-off.png";
import pair_icon from "../images/pair.png";
import demo_icon from "../images/demo.png";

function hazeInstaller(){
    var divers = document.getElementById("scroller-installer")
    console.log(divers.scrollTop)
    if (divers.scrollTop === 0){
        console.log("top")
        if (document.getElementById("scroller-installer") !== undefined){
            document.getElementById("haze-top").style.display='none';
            document.getElementById("haze-bottom").style.display='';
            document.getElementById("haze-top").style.transition = "display 2s";
            document.getElementById("haze-bottom").style.transition = "display 2s";
        }
    }
    else if (divers.scrollTop === 89){
        console.log("bottom")
        if (document.getElementById("scroller-installer") !== undefined){
            document.getElementById("haze-top").style.display='';
            document.getElementById("haze-bottom").style.display='none';
            document.getElementById("haze-top").style.transition = "display 2s";
            document.getElementById("haze-bottom").style.transition = "display 2s";
        }
    }
    else{
        console.log("middle")
        if (document.getElementById("scroller-installer") !== undefined){
            document.getElementById("haze-top").style.display='';
            document.getElementById("haze-bottom").style.display='';
            document.getElementById("haze-top").style.transition = "display 2s";
            document.getElementById("haze-bottom").style.transition = "display 2s";
        }
    }
}

function InstallerMenu() {
    return (
        <div className="screen-style" >
            <div className="screen-header">
                <img src={installer_toolbox_icon} className="resize-1 invert-color" alt="" />

                <p>
                    Installer Toolbox
                </p>
            </div>

            <div id="haze-top" style={{'display':"none"}}>
                
            </div>

            <div id="haze-bottom">

            </div>

            <img src={installer_icon} style={{'color':"#bdbdbd", 'height':"66px", 'marginTop':"17px", 'marginLeft':"-70px"}} alt="" />

            <Link to="/">
                <div className="blue-button" style={{'height':"47px", 'width':"76px", 'marginTop':"103px", 'marginLeft':"30px"}}>
                    <img src={back_arrow_icon} className="invert-color rotateimg180" style={{'height':"23px", 'marginLeft':"26px", 'marginTop':"12px"}} alt="" />
                </div>
            </Link>

            <div className="options-right" style={{'marginTop':"0px"}}>
                <div className="options-right-scroll" id="scroller-installer" onScroll={() => hazeInstaller()}>
                    <Link to="/installer-toolbox/system-configuration/menu">
                        <div className="btn-option">
                            <img src={tool_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                SYSTEM
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                CONFIGURATION
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/smart-home/menu">
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

                    <Link to="/installer-toolbox/walk-test">
                        <div className="btn-option">
                            <img src={walk_icon} className="option-img invert-color" alt="" />

                            <p>
                                WALK TEST
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/radio-status">
                        <div className="btn-option">
                            <img src={radio_tower_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                RADIO
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                STATUS
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/network-test">
                        <div className="btn-option">
                            <img src={wifi_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                NETWORK
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                TEST
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/restore-defaults">
                        <div className="btn-option">
                            <img src={restore_icon} className="option-img invert-color" alt=""/>

                            <p style={{'marginTop':"0px"}}>
                                RESTORE
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                DEFAULTS
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/disable-sounder">
                        <div className="btn-option">
                            <img src={sound_off_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                DISABLE
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                SOUNDER
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/network-settings/menu">
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

                    <Link to="/installer-toolbox/system-pairing">
                        <div className="btn-option">
                            <img src={pair_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                SYSTEM
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                PAIRING
                            </p>
                        </div>
                    </Link>

                    <Link to="/installer-toolbox/demo">
                        <div className="btn-option" style={{'marginBottom':"10px"}}>
                            <img src={demo_icon} className="option-img invert-color" alt="" />

                            <p style={{'marginTop':"0px"}}>
                                DEMO
                            </p>

                            <p style={{'marginTop':"-17px"}}>
                                MODE
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default InstallerMenu