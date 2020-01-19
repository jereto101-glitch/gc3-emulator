import React from 'react';
import check_mark_icon from "../images/check-mark.png";
import settings_icon from "../images/settings.png";
import info_icon from "../images/info.png";
import check_icon from "../images/check.png";
import cancel_icon from "../images/cancel.png";
import backspace_icon from "../images/backspace.png";
import {Link} from "react-router-dom"

function addCode(key){
    var retrievedCodes = localStorage.getItem('panelUsers');
    retrievedCodes = JSON.parse(retrievedCodes)

    var code = document.getElementById("code-store").value;
    
	if(code.length < 4){
        code = code + "" + key;
        document.getElementById("code-store").value = code
	}
	if(code.length === 4){
        var userpass = "False"
        if (code === retrievedCodes.master.code){
            userpass = "True";
        }
        else if (code === retrievedCodes.installer.code){
            userpass = "Installer"
        }

        if (userpass === "True"){
            document.getElementById("code-store").value = "";
            window.location.href = './menu';
        }
        else if (userpass === "Installer"){
            document.getElementById("code-store").value = "";
            window.location.href = './installer-menu';
        }
        else{
            document.getElementById("code-store").value = "";
            badCodeNoteOn()
        }
	}
}

function emptyCode(){
	document.getElementById("code-store").value = "";
}

function backspaceCode(){
    var code = document.getElementById("code-store").value;
    code = code.slice(0, -1);
    document.getElementById("code-store").value = code
}

function badCodeNoteOn(){
    document.getElementById("incorrect-code").style.display='';
}

function badCodeNoteOff(){
    document.getElementById("incorrect-code").style.display='none';
}

function SystemSettingsCode() {
    return (
        <div id="screen-system-settings-code" className="screen-style">
            <div className="screen-header">
                <img src={check_mark_icon} className="disarm-icon" alt="" />

                <p>
                    System <span style={{'fontSize':"16px"}}>Ready</span> To Arm 
                </p>

                <p style={{'float':"right", 'position':"absolute", 'marginLeft':"478px", 'marginTop':"-43px"}}>
                    Enter your code to access
                </p>

                <p style={{'float':"right", 'marginRight':"7px", 'marginTop':"-24px"}}>
                    System Settings
                </p>
            </div>

            <div className="setting-logo-top">

            </div>

            <div className="setting-logo-bottom">
                <img src={settings_icon} className="invert-color" style={{'height':"100px", 'marginTop':"20px", 'marginLeft':"113px"}} alt=""/>
            </div>

            <div id="incorrect-code" style={{'display':"none"}}>
                <img src={info_icon} style={{'height':"30px", 'marginTop':"36px", 'position':"absolute", 'marginLeft':"-125px"}} alt="" />

                <p style={{'marginTop':"40px", 'position':"absolute", 'marginLeft':"212px", 'fontSize':"20px", 'color':"#448cc0"}}>
                    Invalid code
                </p>

                <span onClick={() => badCodeNoteOff()}>
                    <div className="blue-button" style={{'height':"55px", 'width':"107px", 'marginTop':"99px", 'marginLeft':"182px"}}>
                        <img src={check_icon} className="invert-color" style={{'height':"10px", 'marginLeft':"27px", 'marginTop':"22px"}} alt="" />

                        <p style={{'marginTop':"-20px", 'marginLeft':"50px", 'color':"white"}}>
                            OK
                        </p>
                    </div>
                </span>
            </div>

            <div className="cancel-top">
                <Link to="/">
                    <div className="blue-button" style={{'marginTop':"13px", 'marginLeft':"47px", 'width':"237px", 'height':"54px"}}>
                        <img src={cancel_icon} className="invert-color" style={{'height':"26px", 'position':"absolute", 'marginTop':"13px", 'marginLeft':"69px"}} alt="" />

                        <p style={{'color':"white", 'marginLeft':"103px", 'marginTop':"18px"}}>CANCEL</p>
                    </div>
                </Link>
            </div>

            <div className="cancel-bottom">
                
            </div>

            <div className="code-feild">
                <input type="password" name="code" value="" maxLength="4" id="code-store" disabled style={{'border':"0"}}/>
            </div>

            <div className="right-side-code">
                <div className="key-button number" onClick={() => addCode('1')}>
                    <p>
                        1
                    </p>
                </div>

                <div className="key-button number" onClick={() => addCode('2')}>
                    <p>
                        2
                    </p>
                </div>
                
                <div className="key-button number" onClick={() => addCode('3')}>
                    <p>
                        3
                    </p>
                    </div>

                    <div className="key-button number" onClick={() => addCode('4')}>
                    <p>
                        4
                    </p>
                </div>

                <div className="key-button number" onClick={() => addCode('5')}>
                    <p>
                        5
                    </p>
                </div>

                <div className="key-button number" onClick={() => addCode('6')}>
                    <p>
                        6
                    </p>
                </div>

                <div className="key-button number" onClick={() => addCode('7')}>
                    <p>
                        7
                    </p>
                </div>

                <div className="key-button number" onClick={() => addCode('8')}>
                    <p>
                        8
                    </p>
                </div>

                <div className="key-button number" onClick={() => addCode('9')}>
                    <p>
                        9
                    </p>
                </div>

                <div className="key-button" onClick={() => backspaceCode()}>
                    <img src={backspace_icon} style={{'height':"26px", 'marginTop':"6px", 'marginLeft':"23px"}} alt="" />
                </div>

                <div className="key-button number" onClick={() => addCode('0')}>
                    <p>
                        0
                    </p>
                </div>

                <div className="key-button" onClick={() => emptyCode()}>
                    <p style={{'fontSize':"16px", 'marginTop':"10px"}}>
                        CANCEL
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SystemSettingsCode