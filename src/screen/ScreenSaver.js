import React from 'react';
import {Link} from 'react-router-dom'

function homeState(){
    var retrievedState = localStorage.getItem("panelState");
    retrievedState = JSON.parse(retrievedState)

    if (retrievedState === "0") {
        window.location = "./"
    }
    else if (retrievedState === "1"){
        window.location = "./rmed-stay"
    }
    else if (retrievedState === "2"){
        window.location = "./armed-away"
    }
    else if (retrievedState === "3"){
        window.location = "./not-ready"
    }
}

function ScreenSaver() {
    return (
        <Link to="/">
            <div className="screen-style">
                <span onClick={homeState()}>
                    <div className="fill">

                    </div>
                </span>
            </div>
        </Link>
    );
}

export default ScreenSaver