import React from 'react';
import { Link } from 'react-router-dom';

function HackPage() {
    return (
        <div className="screen-style">
            <div className="incorrect-code">
                <h1 style={{'textAlign':"center", 'marginTop':"100px"}}>
                    This page does not exist
                </h1>

                <p style={{'textAlign':"center", 'paddingLeft':"30px", 'paddingRight':"30px"}}>
                    Either you have found a feature that hasn't been implimented yet or have tried to navigate to a page that doesn't exist. 
                </p>

                <Link to="/">
                    <p style={{'textAlign':"center"}}>
                        Click here to return to the home screen
                    </p>
                </Link>

                <span style={{'display':"none"}} className="wifi-connection-failed" id="model-e">
                    Have you found any hidden pages yet?
                </span>
            </div>
        </div>
    );
}

export default HackPage;