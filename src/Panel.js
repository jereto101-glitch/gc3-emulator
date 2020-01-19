import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ArmingAway from './screen/ArmingAway';
import ArmingStay from "./screen/ArmingStay";
import BypassSensors from "./screen/BypassSensors";
import Home from './screen/Home';
import Emergency from './screen/Emergency';
import InstallerCode from './screen/InstallerCode';
import InstallerMenu from './screen/InstallerMenu';
import ScreenSaver from './screen/ScreenSaver1';
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
import SystemConfigurationWirelessZones from './screen/SystemConfigurationWirelessZones';
import SystemConfigurationWiredZones from './screen/SystemConfigurationWiredZones';
import SystemConfigurationKeyfobs from './screen/SystemConfigurationKeyfobs';
import SystemConfigurationKeypads from './screen/SystemConfigurationKeypads';
import SystemConfigurationWirelessEdit from './screen/SystemConfigurationWirelessZonesEditZone';
import SystemInfoDealerInfo from './screen/SystemInfoDealerInfo';
import SystemInfoSystemInfo from './screen/SystemInfoSystemInfo';
import Users from './screen/Users'
import SmartHomeControlsGarageDoors from './screen/SmartHomeControlsGarageDoors'
import SmartHomeControlsLights from './screen/SmartHomeControlsLights'
import SmartHomeControlsLocks from './screen/SmartHomeControlsLocks'
import SmartHomeControlsThermostats from './screen/SmartHomeControlsThermostats'
// import Users from "./screen/Users";
// import UsersEditUser from "./screen/UsersEditUser";

function HomeButton(){
    setInterval(()=>{
        if(document.getElementById("home-box") !== null){
            var retrievedState = localStorage.getItem('panelState');
            retrievedState = JSON.parse(retrievedState)

            if(window.location.pathname.split('/')[1] === "installer-toolbox"){
                document.getElementById("home-circle").className = "btn-home-gray"
                document.getElementById("home-box").className = "home-square-gray"
            }
            else if(retrievedState.mode === "1" || retrievedState.mode === "2"){
                document.getElementById("home-circle").className = "btn-home-red"
                document.getElementById("home-box").className = "home-square-red"
            }
            else{
                document.getElementById("home-circle").className = "btn-home-green"
                document.getElementById("home-box").className = "home-square-green"
            }   
        }
    },1000)
}

function EmergencyButton(){
    setInterval(()=>{
        if(document.getElementById("emergency-circle") !== null){
            if(window.location.pathname.split('/')[1] === "installer-toolbox"){
                document.getElementById("emergency-circle").className = "btn-emergency-gray"
                document.getElementById("emergency-plus").className = "emergency-plus-gray"
            } // Need to update to flashing white on alarm, need to check/graph colors displayed by buttons and set up statements to track this
            else{
                document.getElementById("emergency-circle").className = "btn-emergency-white"
                document.getElementById("emergency-plus").className = "emergency-plus-white"
            } 
        }    
    },1000)
}

function Panel() {
    useEffect(() => {
        EmergencyButton()
        HomeButton()
    });

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
                    <Route path="/installer-toolbox/system-configuration/wireless-zones/edit" component={SystemConfigurationWirelessEdit} />
                    <Route path="/installer-toolbox/system-configuration/wired-zones/menu" component={SystemConfigurationWiredZones} />
                    <Route path="/installer-toolbox/system-configuration/wired-zones/edit" component={WorkInProgress} />
                    <Route path="/installer-toolbox/system-configuration/keyfobs/menu" component={SystemConfigurationKeyfobs} />
                    <Route path="/installer-toolbox/system-configuration/keyfobs/edit" component={WorkInProgress} />
                    <Route path="/installer-toolbox/system-configuration/keypads/menu" component={SystemConfigurationKeypads} />
                    <Route path="/installer-toolbox/system-configuration/keypads/edit" component={WorkInProgress} />
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
                    <Route path="/system-settings/users/menu" component={Users} />
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
                    <Route path="/smart-home-controls/lights" component={SmartHomeControlsLights} />
                    <Route path="/smart-home-controls/locks" component={SmartHomeControlsLocks} />
                    <Route path="/smart-home-controls/thermostats" component={SmartHomeControlsThermostats} />
                    <Route path="/smart-home-controls/garage-doors" component={SmartHomeControlsGarageDoors} />
                    <Route path="/smart-home-controls/scenes" component={WorkInProgress} />
                    <Route path="/smart-home-controls/rooms" component={WorkInProgress} />
                    <Route path="/smart-areas/code" component={WorkInProgress} />
                    <Route path="/system-info/menu" component={SystemInfo} />
                    <Route path="/system-info/history" component={WorkInProgress} />
                    <Route path="/system-info/system-info" component={SystemInfoSystemInfo} />
                    <Route path="/system-info/dealer-info" component={SystemInfoDealerInfo} />
                    <Route path="/system-info/license-info" component={WorkInProgress} />
                    <Route path="/broadband-failure" component={DinoGame} />
                    <Route exact path="/" component={Home} />
                    <Route component={HackPage}/>
                </Switch>
        
                <Link to="/emergency">
                    <div id="emergency-circle" className="btn-emergency-white">
                        <p id="emergency-plus" className="emergency-plus-white">
                            +
                        </p>
                    </div>
                </Link>

                <Link to="/">
                    <div id="home-circle" className="btn-home-green">
                        <div id="home-box" className="home-square-green">
                        </div>
                    </div>
                </Link>
            
                <div className="microphone">
                </div>
            </div>
        </div>
    );
}

export default Panel;