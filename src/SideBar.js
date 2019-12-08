import React, {useState} from 'react';
import {Link} from 'react-router-dom';

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav(id) {
    console.log("run")
    if (document.getElementById(id) != null){
        console.log("not null")
        document.getElementById(id).style.width = "350px";
        console.log(document.getElementById(id).style.width)
        console.log(document.getElementById("yellow-info"))
    }
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav(id) {
    if (document.getElementById(id) != null){
        document.getElementById(id).style.width = "0px";
    }
}

function clearLocal(){
    window.localStorage.clear();
}

function removeLocal(item){
    window.localStorage.removeItem(item);
}

function SideBar() {
    const [wid, setWidth] = useState(window.innerWidth)
    
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    if (wid >= 1477){
        return (
            <aside>
                <div id="mainSidebar" className="sidebar" style={{'width':"350px"}}>
                    <span onClick={() => openNav('panelSidebar')}>
                        Panel
                    </span>
    
                    <span onClick={() => openNav('sensorSidebar')}>
                        Sensors
                    </span>
    
                    <span onClick={() => openNav('keyfobSidebar')}>
                        Keyfobs
                    </span>
    
                    <span onClick={() => openNav('automationSidebar')}>
                        Automation
                    </span>
    
                    <span onClick={() => openNav('alertsSidebar')}>
                        Alerts and Messages
                    </span>
    
                    <span onClick={() => openNav('infoSidebar')}>
                        Info
                    </span>

                    <span onClick={() => openNav('userSidebar')}>
                        User Settings
                    </span>
                </div>
    
                <div id="panelSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav("panelSidebar")}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Panel
                    </span>
    
                    <p>
                        Panel Tamper
                    </p>
    
                    <p>
                        Cell Tamper
                    </p>
    
                    <p>
                        Unplug Transformer
                    </p>
    
                    <p>
                        Unplug Battery
                    </p>
    
                    <p>
                        GSM In place / GSM Removed {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Battery Full / Battery Low / Battery Dead {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Remote Reboot
                    </p>
    
                    <p>
                        USB Insert / USB Remove  {/*This will switch between these values when clicked on */}
                    </p>
                </div>
                
                <div id="sensorSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('sensorSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Front Door
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Close to the Panel / Too Far Away {/*This will switch between these values when clicked on */}
                    </p>
    
                    <span>
                        Back Door
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Close to the Panel / Too Far Away {/*This will switch between these values when clicked on */}
                    </p>
    
                    <span>
                        Living Room Motion
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Too Far Away
                    </p>
    
                    <span>
                        Basement Smoke
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Close to the Panel / Too Far Away {/*This will switch between these values when clicked on */}
                    </p>
    
                    <span>
                        Basement Freeze
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery
                    </p>
    
                    <p>
                        Close to the Panel / Too Far Away {/*This will switch between these values when clicked on */}
                    </p>
    
                    <span>
                        Basement Flood
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery
                    </p>
    
                    <p>
                        Close to the Panel / Too Far Away {/*This will switch between these values when clicked on */}
                    </p>
                </div>
    
                <div id="keyfobSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('keyfobSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Keyfob 1
                    </span>
    
                    <p>
                        Arm Away
                    </p>
    
                    <p>
                        Arm Stay
                    </p>
    
                    <p>
                        Disarm
                    </p>
    
                    <p>
                        Emergency
                    </p>
    
                    <p>
                        Low Battery / No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <span>
                        Keyfob 2
                    </span>
    
                    <p>
                        Arm Away
                    </p>
    
                    <p>
                        Arm Stay
                    </p>
    
                    <p>
                        Disarm
                    </p>
    
                    <p>
                        Emergency
                    </p>
    
                    <p>
                        Low Battery / No Battery {/*This will switch between these values when clicked on */}
                    </p>
                </div>
    
                <div id="automationSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('automationSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Doorlock
                    </span>
    
                    <p>
                        Manual Unlock / Manual Lock {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Full Battery / Low Battery / No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Lock Zone Clear / Lock Zone Blocked {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Factory Reset
                    </p>
    
                    <span>
                        Light Switch
                    </span>
    
                    <p>
                        Manual Turn On / Manual Turn Off
                    </p>
    
                    <span>
                        Light Bulb
                    </span>
    
                    <p>
                        Power / No Power
                    </p>
                </div>
    
                <div id="alertsSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('alertsSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Alerts
                    </span>
    
                    <p>
                        Severe Weather
                    </p>
    
                    <span>
                        Messages
                    </span>
    
                    <p>
                        Log in Information
                    </p>
                </div>
    
                <div id="infoSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('infoSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Panel Info
                    </span>
    
                    <p>
                        <a href='https://help.fluenthome.com/60087-gc3' target="_blank" rel="noopener noreferrer" style={{'fontSize':"15px", 'padding':"0"}}>
                            GC3 Knowledge Base - Customer View
                        </a>
                    </p>
    
                    <p>
                        <a href='https://help.fluenthome.com/69030-2gig-gc3' target="_blank" rel="noopener noreferrer" style={{'fontSize':"15px", 'padding':"0"}}>
                            GC3 Knowledge Base - Account Specialist
                        </a>
                    </p>
    
                    <p>
                        <a href='https://help.fluenthome.com/60316-gc3' target="_blank" rel="noopener noreferrer" style={{'fontSize':"15px", 'padding':"0"}}>
                            GC3 Knowledge Base - Tech Support
                        </a>
                    </p>
    
                    <span>
                        Emulator Info
                    </span>
    
                    <p>
                        <Link to="/changelog" style={{'fontSize':"15px", 'padding':"0"}}>
                            Changelog
                        </Link>
                    </p>
    
                    <p>
                        <a href='mailto:techsupport@fluenthome.com?Subject=GC3%20Emulator' target="_blank" rel="noopener noreferrer" style={{'fontSize':"15px", 'padding':"0"}}>
                            Contact Us
                        </a>
                    </p>
                </div>

                <div id="userSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('userSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Emulator Commands
                    </span>

                    <p onClick={() => removeLocal('panelState')}>
                        Reset Panel State
                    </p>
    
                    <p onClick={() => removeLocal('panelSensors')}>
                        Reset Sensors
                    </p>

                    <p>
                        Reset Keyfobs and Keypads
                    </p>
    
                    <p onClick={() => removeLocal('panelAutomation')}>
                        Reset Automation
                    </p>
    
                    <p onClick={() => removeLocal('panelUsers')}>
                        Reset User Codes
                    </p>

                    <p onClick={() => removeLocal('panelSettings')}>
                        Reset Settings
                    </p>

                    <p onClick={() => clearLocal()}>
                        Reset Everything
                    </p>
    
                    <span>
                        Favourite Pages
                    </span>

                    <p>
                        + Add page to favourites
                    </p>
                </div>
            </aside>
        );
    }
    else{
        return (
            <aside>
                <div id="mainSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav("mainSidebar")} style={{'color':"white", 'marginTop':"5px"}}>
                        &times;
                    </span>
    
                    <span onClick={() => openNav('panelSidebar')}>
                        Panel
                    </span>
    
                    <span onClick={() => openNav('sensorSidebar')}>
                        Sensors
                    </span>
    
                    <span onClick={() => openNav('keyfobSidebar')}>
                        Keyfobs
                    </span>
    
                    <span onClick={() => openNav('automationSidebar')}>
                        Automation
                    </span>
    
                    <span onClick={() => openNav('alertsSidebar')}>
                        Alerts and Messages
                    </span>
    
                    <span onClick={() => openNav('infoSidebar')}>
                        Info
                    </span>

                    <span onClick={() => openNav('userSidebar')}>
                        User Settings
                    </span>
                </div>
    
                <div id="panelSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav("panelSidebar")}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Panel
                    </span>
    
                    <p>
                        Panel Tamper
                    </p>
    
                    <p>
                        Cell Tamper
                    </p>
    
                    <p>
                        Unplug Transformer
                    </p>
    
                    <p>
                        Unplug Battery
                    </p>
    
                    <p>
                        GSM In place / GSM Removed {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Battery Full / Battery Low / Battery Dead {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Remote Reboot
                    </p>
    
                    <p>
                        USB Insert / USB Remove  {/*This will switch between these values when clicked on */}
                    </p>
                </div>
                
                <div id="sensorSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('sensorSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Front Door
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Close to the Panel / Too Far Away {/*This will switch between these values when clicked on */}
                    </p>
    
                    <span>
                        Back Door
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Close to the Panel / Too Far Away {/*This will switch between these values when clicked on */}
                    </p>
    
                    <span>
                        Living Room Motion
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Too Far Away
                    </p>
    
                    <span>
                        Basement Smoke
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Close to the Panel / Too Far Away {/*This will switch between these values when clicked on */}
                    </p>
    
                    <span>
                        Basement Freeze
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery
                    </p>
    
                    <p>
                        Close to the Panel / Too Far Away {/*This will switch between these values when clicked on */}
                    </p>
    
                    <span>
                        Basement Flood
                    </span>
    
                    <p>
                        Tamper
                    </p>
    
                    <p>
                        Open/Close
                    </p>
    
                    <p>
                        Low Battery/No Battery
                    </p>
    
                    <p>
                        Close to the Panel / Too Far Away {/*This will switch between these values when clicked on */}
                    </p>
                </div>
    
                <div id="keyfobSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('keyfobSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Keyfob 1
                    </span>
    
                    <p>
                        Arm Away
                    </p>
    
                    <p>
                        Arm Stay
                    </p>
    
                    <p>
                        Disarm
                    </p>
    
                    <p>
                        Emergency
                    </p>
    
                    <p>
                        Low Battery / No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <span>
                        Keyfob 2
                    </span>
    
                    <p>
                        Arm Away
                    </p>
    
                    <p>
                        Arm Stay
                    </p>
    
                    <p>
                        Disarm
                    </p>
    
                    <p>
                        Emergency
                    </p>
    
                    <p>
                        Low Battery / No Battery {/*This will switch between these values when clicked on */}
                    </p>
                </div>
    
                <div id="automationSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('automationSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Doorlock
                    </span>
    
                    <p>
                        Manual Unlock / Manual Lock {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Full Battery / Low Battery / No Battery {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Lock Zone Clear / Lock Zone Blocked {/*This will switch between these values when clicked on */}
                    </p>
    
                    <p>
                        Factory Reset
                    </p>
    
                    <span>
                        Light Switch
                    </span>
    
                    <p>
                        Manual Turn On / Manual Turn Off
                    </p>
    
                    <span>
                        Light Bulb
                    </span>
    
                    <p>
                        Power / No Power
                    </p>
                </div>
    
                <div id="alertsSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('alertsSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Alerts
                    </span>
    
                    <p>
                        Severe Weather
                    </p>
    
                    <span>
                        Messages
                    </span>
    
                    <p>
                        Log in Information
                    </p>
                </div>
    
                <div id="infoSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('infoSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Panel Info
                    </span>
    
                    <p>
                        <a href='https://help.fluenthome.com/60087-gc3' target="_blank" rel="noopener noreferrer" style={{'fontSize':"15px", 'padding':"0"}}>
                            GC3 Knowledge Base - Customer View
                        </a>
                    </p>
    
                    <p>
                        <a href='https://help.fluenthome.com/69030-2gig-gc3' target="_blank" rel="noopener noreferrer" style={{'fontSize':"15px", 'padding':"0"}}>
                            GC3 Knowledge Base - Account Specialist
                        </a>
                    </p>
    
                    <p>
                        <a href='https://help.fluenthome.com/60316-gc3' target="_blank" rel="noopener noreferrer" style={{'fontSize':"15px", 'padding':"0"}}>
                            GC3 Knowledge Base - Tech Support
                        </a>
                    </p>
    
                    <span>
                        Emulator Info
                    </span>
    
                    <p>
                        <a href='info.html' target="_blank" style={{'fontSize':"15px", 'padding':"0"}}>
                            Changelog
                        </a>
                    </p>
    
                    <p>
                        <a href='mailto:techsupport@fluenthome.com?Subject=GC3%20Emulator' target="_blank" rel="noopener noreferrer" style={{'fontSize':"15px", 'padding':"0"}}>
                            Contact Us
                        </a>
                    </p>
                </div>

                <div id="userSidebar" className="sidebar" style={{'width':"0px"}}>
                    <span className="closebtn" onClick={() => closeNav('userSidebar')}>
                        &#x27A1;
                    </span>
    
                    <span>
                        Emulator Commands
                    </span>
    
                    <p>
                        Reset Sensors
                    </p>

                    <p>
                        Reset Keyfobs and Keypads
                    </p>
    
                    <p>
                        Reset Automation
                    </p>
    
                    <p>
                        Reset User Codes
                    </p>

                    <p>
                        Reset Settings
                    </p>

                    <p>
                        Reset Everything
                    </p>
    
                    <span>
                        Favourite Pages
                    </span>

                    <p>
                        + Add page to favourites
                    </p>
                </div>
                
                <div id="main">
                    <button className="openbtn" onClick={() => openNav('mainSidebar')}>
                        &#9776;
                    </button>
                </div>
            </aside>
        );
    }
}

export default SideBar;