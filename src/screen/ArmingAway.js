import React from 'react';
import {Link} from 'react-router-dom';
import lock_icon from "../images/lock.png";
import arm_away_icon from "../images/arm-away.png";
import silence_icon from "../images/silence.png";
import disarm_icon from "../images/disarm.png";
import info_icon from "../images/info.png";
import check_icon from "../images/check.png";
import backspace_icon from "../images/backspace.png";
import ProgressBar from 'progressbar.js'

function statusChange(status){
    var retrievedState = localStorage.getItem('panelState');
    retrievedState = JSON.parse(retrievedState)

    if (status === "Disarm"){
        retrievedState.mode = "0";
    }
    else if (status === "ArmStay"){
        retrievedState.mode = "1";
    }
    else if (status === "ArmAway"){
        retrievedState.mode = "2";
    }
    else if (status === "NotReady"){
        retrievedState.mode = "3";
    }

    localStorage.setItem('panelState', JSON.stringify(retrievedState));
}

function addCodeArmAway(key){
    var retrievedCodes = localStorage.getItem('panelUsers');
    retrievedCodes = JSON.parse(retrievedCodes)

    var code = document.getElementById("code-store-arm-away").value;
    
	if(code.length < 4){
        code = code + "" + key;
        document.getElementById("code-store-arm-away").value = code
	}
	if(code.length === 4){
        var userpass = "False"
        if (code === retrievedCodes.master.code){
            userpass = "True";
        }
        else if (code === retrievedCodes.user3.code){
            if (retrievedCodes.user3.access === "1"){
                userpass = "True";
            }
        }
        else if (code === retrievedCodes.user4.code){
            if (retrievedCodes.user3.access === "1"){
                userpass = "True";
            }
        }
        else if (code === retrievedCodes.user5.code){
            if (retrievedCodes.user3.access === "1"){
                userpass = "True";
            }
        }
        else if (code === retrievedCodes.user6.code){
            if (retrievedCodes.user3.access === "1"){
                userpass = "True";
            }
        }
        else if (code === retrievedCodes.user7.code){
            if (retrievedCodes.user3.access === "1"){
                userpass = "True";
            }
        }
        else if (code === retrievedCodes.duress.code){
            userpass = "True";
        }

        if (userpass === "True"){
            document.getElementById("code-store-arm-away").value = "";
            statusChange("Disarm")
            window.location.href = './';
        }
        else{
            document.getElementById("code-store-arm-away").value = "";
            badCodeNoteOnArmAway()
        }
	}
}

function emptyCodeArmAway(){
	document.getElementById("code-store-arm-away").value = "";
}

function backspaceCodeArmAway(){
    var code = document.getElementById("code-store-arm-away").value;
    code = code.slice(0, -1);
    document.getElementById("code-store-arm-away").value = code
}

function badCodeNoteOnArmAway(){
    document.getElementById("incorrect-code-arm-away").style.display='';
}

function badCodeNoteOffArmAway(){
    document.getElementById("incorrect-code-arm-away").style.display='none';
}

function timer(){
    var i = 60
    var interval = setInterval(function(){
        if (i === 0){
            if (document.getElementById("countdown") !== null){
                document.getElementById("countdown").style.marginLeft = "103px"
                clearInterval(interval)
                window.location = "."
            }
        }
        else if (i <= 10){
            i = i - 1
            if (document.getElementById("countdown") !== null){
                document.getElementById("countdown").innerHTML = i
                document.getElementById("countdown").style.marginLeft = "103px"
            } 
        }
        else if (i <= 20){
            i = i - 1
            if (document.getElementById("countdown") !== null){
                document.getElementById("countdown").innerHTML = i
                document.getElementById("countdown").style.marginLeft = "90px" 
            }
        }
        else{
            i = i - 1
            if (document.getElementById("countdown") !== null){
                document.getElementById("countdown").innerHTML = i
                document.getElementById("countdown").style.marginLeft = "83px"
            }
        }
    }, 1000)
}

function spinner(){
    var container = document.getElementById("container")

    if(container !== undefined){
        if(document.getElementById("container").style.useless !== "False"){
            var bar = new ProgressBar.Circle(container, {
                strokeWidth: 8,
                duration: 60000,
                color: '#f1ba20',
                trailColor: '#307bbb',
                trailWidth: 0,

            });

            bar.animate(-1.0); 
            timer()
            document.getElementById("container").style.useless = "False"
        }
    }
}

function codeSet(){
    document.getElementById("arm-away-main").style.display = 'none';
    document.getElementById("arm-away-code").style.display = "";
}

function ArmingAway() {
    statusChange("ArmAway")

    return (
        <div className="screen-style" >
            <div className="screen-header">
                <img src={lock_icon} className="resize-1 invert-color" alt=""/>

                <p style={{'paddingTop':"6px"}}>
                    System
                </p>

                <p style={{'marginTop':"-14px"}}>
                    Arming (AWAY)
                </p>

                <p style={{'float':"right", 'marginTop':"-43px", 'marginRight':"18px"}}>
                    Exit Now
                </p>
            </div>

            <div id="container" style={{'useless':"True"}}>
                <div id="countdown" style={{'marginLeft':"63px"}}>
                    1:00
                </div>
            </div>

            <div className="screen-right" id="arm-away-main" onLoad={() => spinner()}>
                <div className="arm-top" style={{'paddingTop':"10px"}}>
                    <img src={arm_away_icon} className="invert-color resize-arm" alt=""/>
                </div>

                <div className="arm-bottom">

                </div>

                <div className="disarm-top">

                </div>

                <div className="disarm-bottom">
                    <Link to="/arming-away/silent">
                        <div className="blue-button" style={{'height':"60px", 'width':"260px", 'marginLeft':"30px", 'marginTop':"10px"}}>
                            <img src={silence_icon} className="invert-color resize-mini" alt=""/>

                            <p className="arm-button">
                                SILENCE
                            </p>
                        </div>
                    </Link>

                    <span onClick={() => codeSet()}>
                        <div className="blue-button" style={{'height':"60px", 'width':"260px", 'marginLeft':"30px", 'marginTop':"10px", 'backgroundColor':"#c43737", 'backgroundImage': "linear-gradient(to right, transparent,#be0f0f)"}}>
                            <img src={disarm_icon} className="invert-color resize-mini" alt=""/>

                            <p className="arm-button">
                                DISARM
                            </p>
                        </div>
                    </span>
                </div>
            </div>

            <div className="screen-right" id="arm-away-code" style={{'display':"none"}}>
                <div id="incorrect-code-arm-away" style={{'display':"none"}}>
                    <img src={info_icon} style={{'height':"30px", 'marginTop':"36px", 'position':"absolute", 'marginLeft':"-125px"}} alt=""/>

                    <p style={{'marginTop':"40px", 'position':"absolute", 'marginLeft':"212px", 'fontSize':"20px", 'color':"#448cc0"}}>
                        Invalid code
                    </p>

                    <span onClick={() => badCodeNoteOffArmAway()}>
                        <div className="blue-button" style={{'height':"55px", 'width':"107px", 'marginTop':"99px", 'marginLeft':"182px"}}>
                            <img src={check_icon} className="invert-color" style={{'height':"10px", 'marginLeft':"27px", 'marginTop':"22px"}} alt=""/>

                            <p style={{'marginTop':"-20px", 'marginLeft':"50px", 'color':"white"}}>
                                OK
                            </p>
                        </div>
                    </span>
                </div>

                <div className="code-feild" style={{'marginTop':"-260px", 'marginLeft':"27px"}}>
                    <input type="password" name="code-arm-away" value="" maxLength="4" id="code-store-arm-away" disabled style={{'border':"0"}}/>
                </div>

                <div className="right-side-code">
                    <div className="key-button number" onClick={() => addCodeArmAway('1')} style={{'marginLeft':"-160px", 'marginTop':"10px"}}>
                        <p>
                            1
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCodeArmAway('2')} style={{'marginLeft':"-60px"}}>
                        <p>
                            2
                        </p>
                    </div>
                    
                    <div className="key-button number" onClick={() => addCodeArmAway('3')}>
                        <p>
                            3
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCodeArmAway('4')} style={{'marginLeft':"-290px", 'marginTop':"59px"}}>
                        <p>
                            4
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCodeArmAway('5')} style={{'marginLeft':"-189px", 'marginTop':"59px"}}>
                        <p>
                            5
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCodeArmAway('6')} style={{'marginLeft':"41px"}}>
                        <p>
                            6
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCodeArmAway('7')} style={{'marginLeft':"-290px", 'marginTop':"59px"}}>
                        <p>
                            7
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCodeArmAway('8')} style={{'marginLeft':"-189px", 'marginTop':"59px"}}>
                        <p>
                            8
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCodeArmAway('9')} style={{'marginLeft':"41px"}}>
                        <p>
                            9
                        </p>
                    </div>

                    <div className="key-button" onClick={() => backspaceCodeArmAway()} style={{'marginLeft':"-290px", 'marginTop':"59px"}}>
                        <img src={backspace_icon} style={{'height':"26px", 'marginTop':"6px", 'marginLeft':"23px"}} alt=""/>
                    </div>

                    <div className="key-button number" onClick={() => addCodeArmAway('0')} style={{'marginLeft':"-189px", 'marginTop':"59px"}}>
                        <p>
                            0
                        </p>
                    </div>

                    <div className="key-button" onClick={() => emptyCodeArmAway()} style={{'marginLeft':"41px"}}>
                        <p style={{'fontSize':"16px", 'marginTop':"10px"}}>
                            CLEAR
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArmingAway