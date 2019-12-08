import React from 'react';
import check_mark_icon from "../images/check-mark.png";
import emergency_panic_icon from "../images/emergency-panic.png";
import emergency_fire_icon from "../images/emergency-fire.svg";
import emergency_medical_icon from "../images/emergency-medical.png";

function Emergency() {
    return (
        <div id="screen-emergency"  className="screen-style">
            <div className="screen-header">
                <img src={check_mark_icon} className="resize-1" alt=""/>

                <p style={{'marginTop':"-1px;"}}>
                    System <span style={{'fontSize':"16px"}}>Ready</span> To Arm 
                </p>

                <p style={{'marginLeft':"360px", 'marginTop':"-34px", 'fontSize':"16px"}}>
                    Touch and hold a button for two seconds
                </p>
            </div>

            <div className="btn-panic" style={{'marginLeft':"5.3%"}}>
                <img src={emergency_panic_icon} className="invert-color panic-img" alt=""/>

                <h3 style={{'color':"white", 'marginTop':"50px", 'fontSize':"27px", 'position':"absolute", 'marginLeft':"58px", 'fontWeight':"300"}}>
                    PANIC
                </h3>
            </div>

            <div className="btn-panic">
                <img src={emergency_fire_icon} className="invert-color panic-img" alt=""/>

                <h3 style={{'color':"white", 'marginTop':"50px", 'fontSize':"27px", 'position':"absolute", 'marginLeft':"69px", 'fontWeight':"300"}}>
                    FIRE
                </h3>
            </div>

            <div className="btn-panic">
                <img src={emergency_medical_icon} className="invert-color panic-img" alt=""/>

                <h3 style={{'color':"white", 'marginTop':"50px", 'fontSize':"27px", 'position':"absolute", 'marginLeft':"16px", 'fontWeight':"300"}}>
                    EMERGENCY
                </h3>
            </div>
        </div>
    );
}

export default Emergency;