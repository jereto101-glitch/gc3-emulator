import React from 'react';
import header_logo from "./images/fluent-logo-header.png";

function Panel() {
    return (
        <div id="screen-verify-users-code" className="screen-style" style={{'display':" none;">
                    <input type="text" name="vusercode" value="" maxlength="4" id="vuser-code-store" disabled className="user-code-input"/>

                    <div className="key-button number" onClick="addUserCodeVerify('1');" style={{'marginLeft':"184px;">
                        <p>
                            1
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCodeVerify('2');">
                        <p>
                            2
                        </p>
                    </div>
                    
                    <div className="key-button number" onClick="addUserCodeVerify('3');">
                        <p>
                            3
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCodeVerify('4');" style={{'marginLeft':"184px;">
                        <p>
                            4
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCodeVerify('5');">
                        <p>
                            5
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCodeVerify('6');">
                        <p>
                            6
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCodeVerify('7');"style={{'marginLeft':"184px;">
                        <p>
                            7
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCodeVerify('8');">
                        <p>
                            8
                        </p>
                    </div>

                    <div className="key-button number" onClick="addUserCodeVerify('9');">
                        <p>
                            9
                        </p>
                    </div>

                    <div className="key-button" onClick="verifybackspaceUserCode()" style={{'marginLeft':"184px;">
                        <img src="images/backspace.png" style={{'height':"26px; 'marginTop':"6px; 'marginLeft':"23px;">
                    </div>

                    <div className="key-button number" onClick="addUserCodeVerify('0');">
                        <p>
                            0
                        </p>
                    </div>

                    <div className="key-button" onClick="verifyCode()" id="vsubmit-user-code" style={{background-'color':"#d2dde6; 'backgroundImage':"none">
                        <p style={{'fontSize':"16px; 'marginTop':"10px; 'color':"white;">
                            Next
                        </p>
                    </div>
                </div>
    );
}