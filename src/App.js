import React from 'react';
import Panel from './Panel';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import {Provider} from "react-redux";
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import codesReducer from "./Redux";
import cancel_icon from "./images/cancel.png"
import ChangeLog from "./info";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function closeNote(){
  document.getElementById("yellow-info").style.display = "none"
}

function UsersNote(){
  return(
    <div className="yellow-notes" id="yellow-info">
      <img src={cancel_icon} alt="" style={{'height':"20px", 'float':"right", 'marginTop':"10px", 'marginRight':"10px"}} onClick={() => closeNote()}/>

      <h4 style={{'marginLeft':"20px"}}>
        Did you know?
      </h4>

      <p style={{'marginLeft':"20px", 'marginRight':"20px", 'marginTop':"-10px"}}>
        The GC3 can hold up to 100 user codes including the master code, installer code and the duress code. 
      </p>
        
      <p style={{'marginLeft':"20px", 'marginRight':"20px"}}>
        For simplicity purposes, we have limited the emulator to only having a max of 8 user codes.
      </p>
    </div>
  )
}

function SystemSettingsNote(){
  return(
    <div className="yellow-notes" id="yellow-info">
      <img src={cancel_icon} alt="" style={{'height':"20px", 'float':"right", 'marginTop':"10px", 'marginRight':"10px"}} onClick={() => closeNote()}/>

      <h4 style={{'marginLeft':"20px"}}>
        Did you know?
      </h4>

      <p style={{'marginLeft':"20px", 'marginRight':"20px", 'marginTop':"-10px"}}>
        So far just the menu has been finished for system settings only allowing to view what options are available.
      </p>
        
      <p style={{'marginLeft':"20px", 'marginRight':"20px"}}>
        We are working hard to finish as many pages as possible so check back soon for more content.
      </p>
    </div>
  )
}

function InstallerToolboxNote(){
  return(
    <div className="yellow-notes" id="yellow-info">
      <img src={cancel_icon} alt="" style={{'height':"20px", 'float':"right", 'marginTop':"10px", 'marginRight':"10px"}} onClick={() => closeNote()}/>

      <h4 style={{'marginLeft':"20px"}}>
        Did you know?
      </h4>

      <p style={{'marginLeft':"20px", 'marginRight':"20px", 'marginTop':"-10px"}}>
        So far just the menu has been finished for the installer toolbox only allowing to view what options are available.
      </p>
        
      <p style={{'marginLeft':"20px", 'marginRight':"20px"}}>
        We are working hard to finish as many pages as possible so check back soon for more content.
      </p>
    </div>
  )
}

function HomeNote(){
  var funlength = 5
  var funnum = getRandomInt(1,funlength + 1)
  console.log(funnum)
  if (funnum === 1){
    return (
      <div className="yellow-notes" id="yellow-info">
        <img src={cancel_icon} alt="" style={{'height':"20px", 'float':"right", 'marginTop':"10px", 'marginRight':"10px"}} onClick={() => closeNote()}/>

        <h4 style={{'marginLeft':"20px"}}>
          Did you know?
        </h4>
  
        <p style={{'marginLeft':"20px", 'marginRight':"20px", 'marginTop':"-10px"}}>
          We are currently working on a list of fun or interesting facts about the GC3, Fluent, and alarm systems in general. 
        </p>
          
        <p style={{'marginLeft':"20px", 'marginRight':"20px"}}>
          If you have any suggestions for what should go here, message @jared in teamwork chat to let me know.
        </p>
      </div>
    )
  }
  else if (funnum === 2){
    return (
      <div className="yellow-notes" id="yellow-info">
        <img src={cancel_icon} alt="" style={{'height':"20px", 'float':"right", 'marginTop':"10px", 'marginRight':"10px"}} onClick={() => closeNote()}/>

        <h4 style={{'marginLeft':"20px"}}>
          Did you know?
        </h4>
  
        <p style={{'marginLeft':"20px", 'marginRight':"20px", 'marginTop':"-10px"}}>
          This emulator uses the newest firmware update. Panels on older updates such as 3.0.1, 3.1.3, or 3.2.0 will look slightly different due to some features not being implimented yet.
        </p>
          
        <p style={{'marginLeft':"20px", 'marginRight':"20px"}}>
          Click <a href="https://help.fluenthome.com/60316-gc3/gc3-firmware-release-notes">here</a> for more info.
        </p>
      </div>
    )
  }
  else if (funnum === 3){
    return (
      <div className="yellow-notes" id="yellow-info">
        <img src={cancel_icon} alt="" style={{'height':"20px", 'float':"right", 'marginTop':"10px", 'marginRight':"10px"}} onClick={() => closeNote()}/>

        <h4 style={{'marginLeft':"20px"}}>
          Did you know?
        </h4>
  
        <p style={{'marginLeft':"20px", 'marginRight':"20px", 'marginTop':"-10px"}}>
          The default master code on this panel is 1111 and the default installer code is 1561 on the GC3.
        </p>
          
        <p style={{'marginLeft':"20px", 'marginRight':"20px"}}>
          The panel when defualted doesn't have the duress code enabled, but techs upon install set it to 2580.
        </p>
      </div>
    )
  }
  else if (funnum === 4){
    return (
      <div className="yellow-notes" id="yellow-info">
        <img src={cancel_icon} alt="" style={{'height':"20px", 'float':"right", 'marginTop':"10px", 'marginRight':"10px"}} onClick={() => closeNote()}/>

        <h4 style={{'marginLeft':"20px"}}>
          Did you know?
        </h4>
  
        <p style={{'marginLeft':"20px", 'marginRight':"20px", 'marginTop':"-10px"}}>
          We are currently working hard to add as many features as possible to this site.
        </p>
          
        <p style={{'marginLeft':"20px", 'marginRight':"20px"}}>
          The next update should include user settings and the start of sensor programming. Check back often for new features.
        </p>
      </div>
    )
  }
  else if (funnum === 5){
    return (
      <div className="yellow-notes" id="yellow-info">
        <img src={cancel_icon} alt="" style={{'height':"20px", 'float':"right", 'marginTop':"10px", 'marginRight':"10px"}} onClick={() => closeNote()}/>

        <h4 style={{'marginLeft':"20px"}}>
          Did you know?
        </h4>
  
        <p style={{'marginLeft':"20px", 'marginRight':"20px", 'marginTop':"-10px"}}>
          The sidebar is where all the physical options for affecting the panel and other equipment is.
        </p>
          
        <p style={{'marginLeft':"20px", 'marginRight':"20px"}}>
          Currently nothing in the sidebar is implimented, as system programming is still in progress.
        </p>
      </div>
    )
  }
  else{
    return(
      <div className="yellow-notes" id="yellow-info">
        <img src={cancel_icon} alt="" style={{'height':"20px", 'float':"right", 'marginTop':"10px", 'marginRight':"10px"}} onClick={() => closeNote()}/>

        <h4 style={{'marginLeft':"20px"}}>
          Did you know?
        </h4>
  
        <p style={{'marginLeft':"20px", 'marginRight':"20px", 'marginTop':"-10px"}}>
          Several easter eggs have been hidden on the server, see how many you can find!
        </p>
          
        <p style={{'marginLeft':"20px", 'marginRight':"20px"}}>
          If you are seeing this message on the panel home page please contact the developer.
        </p>
      </div>
    )
  }
}

function App() {
  return (
    <>
      <Provider store={codesReducer}>
        <Router>
          <Header/>
          <Panel/>

          <Switch>
            <Route exact path="/" component={HomeNote}/>
            <Route path="/system-settings/users/menu" component={UsersNote}/>
            <Route path="/system-settings/menu" component={SystemSettingsNote}/>
            <Route path="/installer-toolbox/menu" component={InstallerToolboxNote}/>
            <Route path="/changelog" component={ChangeLog}/>
          </Switch>

          <SideBar/>
          <Footer/>
        </Router> 
      </Provider>
    </>
  );
}

export default App;