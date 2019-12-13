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

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  if(check === true){
    mobileDeny()
  }
};

function mobileDeny(){
  return(
    <div style={{'backgroundColor':"white",'height':"100%",'width':"100%", 'zIndex':"9999", 'overFlow':"hidden"}}>
      <h3>
        This page is not compatible for mobile
      </h3>

      <p>
        We'd love for you to check us out on a desktop or tablet to be able to expirience the full 
      </p>
    </div>
  )
}

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