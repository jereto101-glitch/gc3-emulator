import React from 'react';
import { Link } from 'react-router-dom';
import construction from '../images/construction.png';

function WorkInProgress() {
    return (
        <div className="screen-style" style={{'background':`url(${construction}) no-repeat`}}>
            <div className="incorrect-code">
                <h1 style={{'textAlign':"center", 'marginTop':"120px"}}>
                    Under Construction
                </h1>

                <p style={{'textAlign':"center", 'paddingLeft':"30px", 'paddingRight':"30px"}}>
                    We are currently still working on this page and will be uploading it as soon as possible. 
                </p>

                <Link to="/">
                    <p style={{'textAlign':"center"}}>
                        Click here to return to the home page
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default WorkInProgress;