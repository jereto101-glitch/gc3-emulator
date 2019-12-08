import React from 'react';
import { Link } from 'react-router-dom';
import check_icon from "../images/check.png";
import backspace_icon from "../images/backspace.png";
import info_icon from "../images/info.png";
import cancel_icon from "../images/cancel.png";

function statusChange(status){
    var retrievedState = localStorage.getItem('panelState');
    retrievedState = JSON.parse(retrievedState)
    console.log("call")

    if (status === "Disarm"){
        retrievedState.mode = "0";
        console.log("disarm")
    }
    else if (status === "ArmStay"){
        retrievedState.mode = "1";
        console.log("stay")
    }
    else if (status === "ArmAway"){
        retrievedState.mode = "2";
        console.log("away")
    }
    else if (status === "NotReady"){
        retrievedState.mode = "3";
        console.log("not")
    }

    localStorage.setItem('panelState', JSON.stringify(retrievedState));
}

function addCode(key){
    var retrievedCodes = localStorage.getItem('panelUsers');
    retrievedCodes = JSON.parse(retrievedCodes)

    var code = document.getElementById("code-store").value;
    
	if(code.length < 4){
        code = code + "" + key;
        document.getElementById("code-store").value = code
	}
	if(code.length === 4){
        var userpass
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
            statusChange("Disarm")
            document.getElementById("code-store").value = "";
            window.location.href = './';
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

function Alarm() {
    return (
        <div className="screen-style">
            <div className="screen-header">
                
            </div>

            <div className="screen-left">
                <div className="event-header-top" style={{'paddingTop':"10px", 'marginLeft':"20px"}}>
                    <p style={{'color':"white", 'marginTop':"-1px", 'marginLeft':"10px"}}>
                        Events
                    </p>
                </div>

                <div className="event-header-bottom" style={{'marginLeft':"20px"}}>
                    <div className="events-left">
                        <div className="events-left-scroll">

                        </div>
                    </div>
                </div>

                <div className="events-top" style={{'marginLeft':"20px"}}>
                    <Link to="./">
                        <div  className="blue-button" style={{'height':"55px", 'width':"226px", 'marginTop':"145px", 'marginLeft':"45px"}}>
                            <img src={cancel_icon} className="invert-color" style={{'height':"23px", 'marginLeft':"27px", 'marginTop':"16px"}} alt="" />

                            <p style={{'color':"white", 'marginTop':"-25px", 'marginLeft':"100px"}}>
                                CANCEL
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="events-bottom" style={{'marginLeft':"20px"}}>
                    
                </div>
            </div>

            <div className="screen-right">
                <div id="incorrect-code" style={{'display':"none", 'marginLeft':"-225px", 'marginTop':"85px"}}>
                    <img src={info_icon} style={{'height':"30px", 'marginTop':"36px", 'position':"absolute", 'marginLeft':"-125px"}} alt=""/>

                    <p style={{'marginTop':"40px", 'position':"absolute", 'marginLeft':"212px", 'fontSize':"20px", 'color':"#448cc0"}}>
                        Invalid code
                    </p>

                    <span onClick={() => badCodeNoteOff()}>
                        <div className="blue-button" style={{'height':"55px", 'width':"107px", 'marginTop':"99px", 'marginLeft':"182px"}}>
                            <img src={check_icon} className="invert-color" style={{'height':"10px", 'marginLeft':"27px", 'marginTop':"22px"}} alt=""/>

                            <p style={{'marginTop':"-20px", 'marginLeft':"50px", 'color':"white"}}>
                                OK
                            </p>
                        </div>
                    </span>
                </div>

                <div className="code-feild" style={{'marginTop':"58px", 'marginLeft':"27px"}}>
                    <input type="password" name="code" value="" maxLength="4" id="code-store" disabled style={{'border':"0"}} />
                </div>

                <div className="right-side-code">
                    <div className="key-button number" onClick={() => addCode('1')} style={{'marginLeft':"-160px", 'marginTop':"320px"}}>
                        <p>
                            1
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCode('2')} style={{'marginLeft':"-60px", 'marginTop':"320px"}}>
                        <p>
                            2
                        </p>
                    </div>
                    
                    <div className="key-button number" onClick={() => addCode('3')} style={{'marginTop':"320px"}}>
                        <p>
                            3
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCode('4')} style={{'marginLeft':"-290px", 'marginTop':"369px"}}>
                        <p>
                            4
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCode('5')} style={{'marginLeft':"-189px", 'marginTop':"369px"}}>
                        <p>
                            5
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCode('6')} style={{'marginLeft':"41px"}}>
                        <p>
                            6
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCode('7')} style={{'marginLeft':"-290px", 'marginTop':"59px"}}>
                        <p>
                            7
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCode('8')} style={{'marginLeft':"-189px", 'marginTop':"59px"}}>
                        <p>
                            8
                        </p>
                    </div>

                    <div className="key-button number" onClick={() => addCode('9')} style={{'marginLeft':"41px"}}>
                        <p>
                            9
                        </p>
                    </div>

                    <div className="key-button" onClick={() => backspaceCode()} style={{'marginLeft':"-290px", 'marginTop':"59px"}}>
                        <img src={backspace_icon} style={{'height':"26px", 'marginTop':"6px", 'marginLeft':"23px"}} alt=""/>
                    </div>

                    <div className="key-button number" onClick={() => addCode('0')} style={{'marginLeft':"-189px", 'marginTop':"59px"}}>
                        <p>
                            0
                        </p>
                    </div>

                    <div className="key-button" onClick={() => emptyCode()} style={{'marginLeft':"41px"}}>
                        <p style={{'fontSize':"16px", 'marginTop':"10px"}}>
                            CANCEL
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alarm;