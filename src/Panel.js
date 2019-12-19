import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ArmingAway from './screen/ArmingAway';
import ArmingStay from "./screen/ArmingStay";
import BypassSensors from "./screen/BypassSensors";
import Home from './screen/Home';
import Emergency from './screen/Emergency';
import InstallerCode from './screen/InstallerCode';
import InstallerMenu from './screen/InstallerMenu';
import ScreenSaver from './screen/ScreenSaver';
import HackPage from './screen/HackPage';
import Alarm from './screen/Alarm';
import SystemSettingsCode from './screen/SystemSettingsCode';
import SystemSettingsMenu from './screen/SystemSettingsMenu';
import SystemSettingsInstallerMenu from './screen/SystemSettingsInstallerMenu';
import WorkInProgress from './screen/WorkInProgress';
// import WorkInProgressHack from './screen/WorkInProgressHack';
import SystemConfiguration from './screen/SystemConfiguration';
import SmartHomeSettings from './screen/SmartHomeSettings';
import NetworkSettings from './screen/NetworkSettings';
import SystemInfo from './screen/SystemInfo';
import DinoGame from './screen/DinoGame';
import SmartHomeControls from './screen/SmartHomeControls';
import SystemConfigurationWirelessZones from './screen/SystemConfigurationWirelessZones'
// import Users from "./screen/Users";
// import UsersEditUser from "./screen/UsersEditUser";

function colorCheck(){
    setInterval(function(){
        var retrievedState = localStorage.getItem('panelState');
        retrievedState = JSON.parse(retrievedState)
        console.log(retrievedState.mode)
    
        if (retrievedState.mode === "0"){
            document.getElementById("home-circle").style.backgroundColor = "#9ad682"
            document.getElementById("home-box").style.backgroundColor = "#9ad682"
        }
        else if (retrievedState.mode === "1"){
            document.getElementById("home-circle").style.backgroundColor = "#d38181"
            document.getElementById("home-box").style.backgroundColor = "#d38181"
        }
        else if (retrievedState.mode === "2"){
            document.getElementById("home-circle").style.backgroundColor = "#d38181"
            document.getElementById("home-box").style.backgroundColor = "#d38181"
        }
        else if (retrievedState.mode === "3"){
            document.getElementById("home-circle").style.backgroundColor = "gray"
            document.getElementById("home-box").style.backgroundColor = "gray"
        }
    }, 1000)
}

function HomeButton(){
    var retrievedState = localStorage.getItem('panelState');
    retrievedState = JSON.parse(retrievedState)

    if(window.location.pathname.split('/')[1] === "installer-toolbox"){
        return(
            <div id="home-circle" className="btn-home-gray">
                <div id="home-box" className="home-square-gray">
                </div>
            </div>
        )
    }
    else if(retrievedState.mode === "1" || retrievedState.mode === "2"){
        return(
            <div id="home-circle" className="btn-home-gray">
                <div id="home-box" className="home-square-gray"> {/* Need to update to red color here */}
                </div>
            </div>
        )
    }
    else{
        return(
            <div id="home-circle" className="btn-home-green">
                <div id="home-box" className="home-square-green">
                </div>
            </div>
        )
    }   
}

function EmergencyButton(){
    if(window.location.pathname.split('/')[1] === "installer-toolbox"){
        return(
            <div id="emergency-circle" className="btn-emergency-gray">
                <p id="emergency-plus" className="emergency-plus-gray">
                    +
                </p>
            </div>
        )
    } // Need to update to flashing white on alarm, need to check/graph colors displayed by buttons and set up statements to track this
    else{
        return(
            <div id="emergency-circle" className="btn-emergency-white">
                <p id="emergency-plus" className="emergency-plus-white">
                    +
                </p>
            </div>
        )
    } 
}

function Panel() {
    return (
        <div className="casing-rim">
            <div className="casing-plate">
                <Switch>
                    <Route path="/alarm" component={Alarm} />
                    <Route path="/arming-away" component={ArmingAway} />
                    <Route path="/arming-stay" component={ArmingStay} />
                    <Route path="/system-settings/bypass-sensors" component={BypassSensors} />
                    <Route path="/emergency" component={Emergency} />
                    <Route path="/installer-toolbox/code" component={InstallerCode} />
                    <Route path="/installer-toolbox/menu" component={InstallerMenu} />
                    <Route path="/installer-toolbox/system-configuration/menu" component={SystemConfiguration} />
                    <Route path="/installer-toolbox/system-configuration/wireless-zones/menu" component={SystemConfigurationWirelessZones} />
                    <Route path="/installer-toolbox/system-configuration/wireless-zones/edit" component={WorkInProgress} />
                    <Route path="/installer-toolbox/system-configuration/wired-zones" component={WorkInProgress} />
                    <Route path="/installer-toolbox/system-configuration/keyfobs" component={WorkInProgress} />
                    <Route path="/installer-toolbox/system-configuration/keypads" component={WorkInProgress} />
                    <Route path="/installer-toolbox/system-configuration/panel-programming" component={WorkInProgress} />
                    <Route path="/installer-toolbox/system-configuration/image-sensors" component={WorkInProgress} />
                    <Route path="/installer-toolbox/smart-home/menu" component={SmartHomeSettings} />
                    <Route path="/installer-toolbox/smart-home/add-devices" component={WorkInProgress} />
                    <Route path="/installer-toolbox/smart-home/remove-devices" component={WorkInProgress} />
                    <Route path="/installer-toolbox/smart-home/check-network" component={WorkInProgress} />
                    <Route path="/installer-toolbox/smart-home/rediscover-network" component={WorkInProgress} />
                    <Route path="/installer-toolbox/smart-home/view-all" component={WorkInProgress} />
                    <Route path="/installer-toolbox/smart-home/device-association" component={WorkInProgress} />
                    <Route path="/installer-toolbox/smart-home/advanced" component={WorkInProgress} />
                    <Route path="/installer-toolbox/walk-test" component={WorkInProgress} />
                    <Route path="/installer-toolbox/network-test" component={WorkInProgress} />
                    <Route path="/installer-toolbox/restore-defaults" component={WorkInProgress} />
                    <Route path="/installer-toolbox/disable-sounder" component={WorkInProgress} />
                    <Route path="/installer-toolbox/network-settings/menu" component={NetworkSettings} />
                    <Route path="/installer-toolbox/network-settings/wireless" component={NetworkSettings} />
                    <Route path="/installer-toolbox/network-settings/access-point" component={NetworkSettings} />
                    <Route path="/installer-toolbox/system-pairing" component={WorkInProgress} />
                    <Route path="/installer-toolbox/demo" component={WorkInProgress} />
                    <Route path="/screen-saver" component={ScreenSaver} />
                    <Route path="/system-settings/code" component={SystemSettingsCode} />
                    <Route path="/system-settings/menu" component={SystemSettingsMenu} />
                    <Route path="/system-settings/installer-menu" component={SystemSettingsInstallerMenu} />
                    <Route path="/system-settings/users/menu" component={WorkInProgress} />
                    <Route path="/system-settings/users/edit/:id" component={WorkInProgress} />
                    <Route path="/system-settings/users/new/name" component={WorkInProgress} />
                    <Route path="/system-settings/sounds" component={WorkInProgress} />
                    <Route path="/system-settings/smart-home/menu" component={SmartHomeSettings} />
                    <Route path="/system-settings/smart-home/add-devices" component={WorkInProgress} />
                    <Route path="/system-settings/smart-home/remove-devices" component={WorkInProgress} />
                    <Route path="/system-settings/smart-home/check-network" component={WorkInProgress} />
                    <Route path="/system-settings/smart-home/rediscover-network" component={WorkInProgress} />
                    <Route path="/system-settings/smart-home/view-all" component={WorkInProgress} />
                    <Route path="/system-settings/smart-home/device-association" component={WorkInProgress} />
                    <Route path="/system-settings/smart-home/advanced" component={WorkInProgress} />
                    <Route path="/system-settings/screen" component={WorkInProgress} />
                    <Route path="/system-settings/date-time" component={WorkInProgress} />
                    <Route path="/system-settings/language" component={WorkInProgress} />
                    <Route path="/system-settings/tests" component={WorkInProgress} />
                    <Route path="/system-settings/firmware-update" component={WorkInProgress} />
                    <Route path="/system-settings/network-settings/menu" component={NetworkSettings} />
                    <Route path="/system-settings/network-settings/wireless" component={NetworkSettings} />
                    <Route path="/system-settings/network-settings/access-point" component={NetworkSettings} />
                    <Route path="/system-settings/tradio-swap" component={WorkInProgress} />
                    <Route path="/system-settings/sensor-chimes" component={WorkInProgress} />
                    <Route path="/system-settings/smart-area" component={WorkInProgress} />
                    <Route path="/smart-home-controls/menu" component={SmartHomeControls} />
                    <Route path="/smart-home-controls/lights" component={WorkInProgress} />
                    <Route path="/smart-home-controls/locks" component={WorkInProgress} />
                    <Route path="/smart-home-controls/thermostats" component={WorkInProgress} />
                    <Route path="/smart-home-controls/garage-doors" component={WorkInProgress} />
                    <Route path="/smart-home-controls/scenes" component={WorkInProgress} />
                    <Route path="/smart-home-controls/rooms" component={WorkInProgress} />
                    <Route path="/smart-areas/code" component={WorkInProgress} />
                    <Route path="/system-info/menu" component={SystemInfo} />
                    <Route path="/system-info/history" component={WorkInProgress} />
                    <Route path="/system-info/system-info" component={WorkInProgress} />
                    <Route path="/system-info/dealer-info" component={WorkInProgress} />
                    <Route path="/broadband-failure" component={DinoGame} />
                    <Route exact path="/" component={Home} />
                    <Route component={HackPage}/>
                </Switch>
        
                <Link to="/emergency">
                    <EmergencyButton/>
                </Link>

                <Link to="/">
                    <HomeButton/>
                </Link>
            
                <div className="microphone" onLoad={() => colorCheck()}>
                </div>
            </div>
        </div>
    );
}

export default Panel;