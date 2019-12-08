import React from 'react';
import header_logo from "./images/fluent-logo-header.png";

function Panel() {
    return (
        <div id="screen-users-code" className="screen-style" style={{'display':" none;">
                    <div id="user-code-taken" style={{'display':"none;">
                        <img src="images/info.png" style={{'height':"30px; 'marginTop':"36px; 'position':"absolute; 'marginLeft':"-250px;">

                        <p style={{'marginTop':"30px; 'position':"absolute; 'marginLeft':"82px; 'fontSize':"20px; 'color':"#448cc0;">
                            That code is already assigned. Please enter a new code.
                        </p>

                        <a href="." onClick="takenCodeOff()">
                            <div className="blue-button" style={{'height':"55px; 'width':"107px; 'marginTop':"99px; 'marginLeft':"182px;">
                                <img src="images/check.png" className="invert-color" style={{'height':"10px; 'marginLeft':"27px; 'marginTop':"22px;">

                                <p style={{'marginTop':"-20px; 'marginLeft':"50px; 'color':"white;">
                                    OK
                                </p>
                            </div>
                        </a>
                    </div>

                    <input type="text" name="usercode" value="" maxlength="4" id="user-code-store" disabled className="user-code-input"/>

                    <div className="key-button number" onClick="addUserCode('1');" style={{'marginLeft':"184px;">
                        <p>
                            1
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCode('2');">
                        <p>
                            2
                        </p>
                    </div>
                    
                    <div className="key-button number" onClick="addUserCode('3');">
                        <p>
                            3
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCode('4');" style={{'marginLeft':"184px;">
                        <p>
                            4
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCode('5');">
                        <p>
                            5
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCode('6');">
                        <p>
                            6
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCode('7');"style={{'marginLeft':"184px;">
                        <p>
                            7
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCode('8');">
                        <p>
                            8
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCode('9');">
                        <p>
                            9
                        </p>
                    </div>

                    <div className="key-button" onClick="backspaceUserCode()" style={{'marginLeft':"184px;">
                        <img src="images/backspace.png" style={{'height':"26px; 'marginTop':"6px; 'marginLeft':"23px;">
                    </div>

                    <div className="key-button number" onClick="addUserCode('0');">
                        <p>
                            0
                        </p>
                    </div>

                    <div className="key-button" onClick="newUserCode(document.getElementById('user-code-store').value)" id="submit-user-code" style={{background-'color':"#d2dde6; 'backgroundImage':"none">
                        <p style={{'fontSize':"16px; 'marginTop':"10px; 'color':"white;">
                            Next
                        </p>
                    </div>
                </div>
    );
}