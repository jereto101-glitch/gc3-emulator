import React from 'react'
import {Link} from 'react-router-dom'
import wifi_icon from '../images/wifi.png'
import up_arrow_icon from '../images/up-arrow.png';
import down_arrow_icon from '../images/down-arrow.png'

function SensorType(props){
    console.log(props)
    if (props === "00"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>00 - Unsused</p>
        )
    }
    else if (props === "01"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>01 - Exit/Entry 1</p>
        )
    }
    else if (props === "02"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>02 - Exit/Entry 2</p>
        ) 
    }
    else if (props === "03"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>03 - Perimeter</p>
        )
    }
    else if (props === "04"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>04 - Interior Follower</p>
        )
    }
    else if (props === "05"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>05 - Day Zone</p>
        )
    }
    else if (props === "06"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>06 - 24-Hour Silent Alarm</p>
        )
    }
    else if (props === "07"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>07 - 24-Hour Audible Alarm</p>
        )
    }
    else if (props === "08"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>08 - 24-Hour Auxiliary Alarm</p>
        )
    }
    else if (props === "09"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>9 - 24-Hour Fire</p>
        )
    }
    else if (props === "10"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>10 - Interior with Delay</p>
        )
    }
    else if (props === "14"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>14 - 24-Hour Carbon Monoxide</p>
        )
    }
    else if (props === "16"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>16 - 24-Hour Fire Verification</p>
        )
    }
    else if (props === "23"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>23 - No Response Type</p>
        )
    }
    else if (props === "24"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>24 - Silent Burglary</p>
        )
    }
    else if (props === "32"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>32 - Remote Device</p>
        )
    }
    else{
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>00 - Unsused</p>
        )
    }
}

function EquipmentCode(props){
    console.log(props)
    if (props === "0000"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0000 - Other</p>
        )
    }
    else if (props === "0862"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0862 - 2GIG Thin Door/Window Contact</p>
        )
    }
    else if (props === "0863"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0863 - 2GIG Recessed Door Contact</p>
        )
    }
    else if (props === "0865"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0865 - 2GIG Outdoor Door/Window Sensor</p>
        )
    }
    else if (props === "0869"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0869 - 2GIG POR with Pet Immunity</p>
        )
    }
    else if (props === "0864"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0864 - 2GIG Glass Break Detector</p>
        )
    }
    else if (props === "0895"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0895 - SMKT2-345 GE Smoke/Heat Detector</p>
        )
    }
    else if (props === "1058"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1085 - 2GIG Smoke Detector</p>
        )
    }
    else if (props === "0872"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0872 - SMKE1-345 Smoke Detector(USA)</p>
        )
    }
    else if (props === "0871"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0871 - SMKE1-345 Smoke Detector(Canada)</p>
        )
    }
    else if (props === "0868"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0868 - 2GIG Panic Button Remote</p>
        )
    }
    else if (props === "0860"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0860 - CO1-345 CO Detector(USA)</p>
        )
    }
    else if (props === "0859"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0859 - CO1-345 CO Detector(Canada)</p>
        )
    }
    else if (props === "1026"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1026 - 2GIG CO Detector</p>
        )
    }
    else if (props === "1069"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1069 - 2GIG FireFighter SMKT/CO Listener</p>
        )
    }
    else if (props === "0873"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0873 - 2GIG Takeover Module</p>
        )
    }
    else if (props === "0637"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0637 - HW D/W "5816"</p>
        )
    }
    else if (props === "0470"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0470 - HW R-D/W "5818MNL"</p>
        )
    }
    else if (props === "0533"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0533 - HW PIR "5890"</p>
        )
    }
    else if (props === "0530"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0530 - HW PIR "5894PI"</p>
        )
    }
    else if (props === "0519"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0519 - HW Glass Break "5853"</p>
        )
    }
    else if (props === "0589"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0589 - HW Smoke "5808W3"</p>
        )
    }
    else if (props === "0557"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0557 - HW Heat Sensor "5809"</p>
        )
    }
    else if (props === "0624"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0624 - HW Flood Sensor "5821"</p>
        )
    }
    else if (props === "0491"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0491 - HW Panic Pendant "5802MN2"</p>
        )
    }
    else if (props === "1063"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1063 - 2GIG 2GIG Doorbell</p>
        )
    }
    else if (props === "1061"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1061 - Tilt Sensor</p>
        )
    }
    else if (props === "1062"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1062 - 2GIG Tilt Sensor</p>
        )
    }
    else if (props === "1064"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1064 - 2GIG Bypass Sensor</p>
        )
    }
    else if (props === "1065"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0863 - 2GIG Flood Sensor</p>
        )
    }
    else if (props === "1066"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1066 - 2GIG Shock Sensor</p>
        )
    }
    else if (props === "1067"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1067 - 2GIG Repeater</p>
        )
    }
    else if (props === "1068"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1068 - 2GIG Translator</p>
        )
    }
    else if (props === "1070"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1070 - 2GIG F1-345</p>
        )
    }
    else if (props === "1071"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1071 - 2GIG PHB-345</p>
        )
    }
    else if (props === "1072"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1072 - 2GIG Smoke Ring</p>
        )
    }
    else if (props === "0655"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0655 - Existing Door/Window Contact</p>
        )
    }
    else if (props === "0609"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0609 - Existing Motion Detector</p>
        )
    }
    else if (props === "0475"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0475 - Existing Glass Break Detector</p>
        )
    }
    else if (props === "0616"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0616 - Existing Smoke Detector</p>
        )
    }
    else if (props === "0692"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0692 - Existing CO Detector</p>
        )
    }
    else if (props === "0708"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0708 - Existing Heat Sensor</p>
        )
    }
    else if (props === "0556"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0556 - Existing Flood/Temp Sensor</p>
        )
    }
    else if (props === "9999"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>9999 - Alarm.com Image Sensor</p>
        )
    }
    else if (props === "2058"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2058 - eSeries Smoke Detector (USA)</p>
        )
    }
    else if (props === "2061"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2061 - eSeries Tilt Sensor</p>
        )
    }
    else if (props === "2065"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2065 - eSeries Flood Sensor</p>
        )
    }
    else if (props === "2066"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2066 - eSeries Shock Sensor</p>
        )
    }
    else if (props === "2067"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2067 - eSeries Repeater</p>
        )
    }
    else if (props === "2069"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2069 - eSeries FireFighter SMKT/CO Listener</p>
        )
    }
    else if (props === "2068"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2068 - eSeries Translator</p>
        )
    }
    else if (props === "2070"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2070 - eSeries Water Sensor</p>
        )
    }
    else if (props === "2860"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2860 - eSeries CO Detector (USA)</p>
        )
    }
    else if (props === "2862"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2862 - eSeries Thin Door/Window Contact</p>
        )
    }
    else if (props === "2863"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2863 - eSeries Recessed Door Contact</p>
        )
    }
    else if (props === "2865"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2865 - eSeries Outdoor Door/Window Sensor</p>
        )
    }
    else if (props === "2864"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2864 - eSeries Glass Break Detector</p>
        )
    }
    else if (props === "2868"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2868 - eSeries Panic</p>
        )
    }
    else if (props === "2869"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2869 - eSeries PIR with Pet Immunity</p>
        )
    }
    else if (props === "2873"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2873 - eSeries Takeover Module</p>
        )
    }
    else {
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0000 - Other</p>
        )
    }
}

function SerialNumber(props){
    console.log(props)
    if (props !== null){
        var txid = props
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0000000</p> // Not working when try to put {txid} talk to stephen about fixing this
        )
    }
    else{
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0000000</p>
        )
    }
}

function SmartAreasAssignment(props){
    console.log(props)
    if (props === "s1"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>S1</p>
        )
    }
    else if(props === "s2"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>S2</p>
        )
    }
    else if(props === "s3"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>S3</p>
        )
    }
    else if(props === "s4"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>S4</p>
        )
    }
    else{
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>S1</p>
        )
    }
}

function EquipmentAge(props){
    console.log(props)
    if (props === "new"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>New</p>
        )
    }
    else if (props === "existing"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Existing</p>
        )
    }
    else{
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>New</p>
        )
    }
}

function SensorLoop(props){
    console.log(props)
    if(props === "1"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Loop 1</p>
        )
    }
    else if(props === "2"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Loop 2</p>
        )
    }
    else if(props === "3"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Loop 3</p>
        )
    }
    else{
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Loop 1</p>
        )
    }
}

function TransmissionDelay(props){
    console.log(props)
    if(props === "enabled"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Enabled</p>
        )
    }
    else if(props === "disabled"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Disabled</p>
        )
    }
    else {
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Enabled</p>
        )
    }
}

function VoiceDescriptor(props){
    console.log(props)

    var fullDescriptor = ""
    
    for(var i=1; i<7; i++){
        if (i === 1){
            if (i !== ""){
                if (props === "Abort"){
                    fullDescriptor += "Abort"
                }
                else if (props === "Ac"){
                    fullDescriptor += "Ac"
                }
                else if (props === "Access"){
                    fullDescriptor += "Access"
                }
                else if (props === "Alarm"){
                    fullDescriptor += "Alarm"
                }
                else if (props === "And"){
                    fullDescriptor += "And"
                }
                else if (props === "Anouncement"){
                    fullDescriptor += "Announcement"
                }
                else if (props === "Apartment"){
                    fullDescriptor += "Apartment"
                }
                else if (props === "Area"){
                    fullDescriptor += "Area"
                }
                else if (props === "Arm"){
                    fullDescriptor += "Arm"
                }
                else if (props === "Armed"){
                    fullDescriptor += "Armed"
                }
                else if (props === "At"){
                    fullDescriptor += "At"
                }
                else if (props === "Attic"){
                    fullDescriptor += "Attic"
                }
                else if (props === "Audio"){
                    fullDescriptor += "Audio"
                }
                else if (props === "Auto"){
                    fullDescriptor += "Auto"
                }
                else if (props === "Automation"){
                    fullDescriptor += "Automation"
                }
                else if (props === "Auxiliary"){
                    fullDescriptor += "Auxiliary"
                }
                else if (props === "Away"){
                    fullDescriptor += "Away"
                }
                else if (props === "Babys"){
                    fullDescriptor += "Babys"
                }
                else if (props === "Back"){
                    fullDescriptor += "Back"
                }
                else if (props === "Balcony"){
                    fullDescriptor += "Balcony"
                }
                else if (props === "Basement"){
                    fullDescriptor += "Basement"
                }
                else if (props === "Bathroom"){
                    fullDescriptor += "Bathroom"
                }
                else if (props === "Battery"){
                    fullDescriptor += "Battery"
                }
                else if (props === "Bedroom"){
                    fullDescriptor += "Bedroom"
                }
                else if (props === "Bell"){
                    fullDescriptor += "Bell"
                }
                else if (props === "Bonus"){
                    fullDescriptor += "Bonus"
                }
                else if (props === "Boys"){
                    fullDescriptor += "Boys"
                }
                else if (props === "Break"){
                    fullDescriptor += "Break"
                }
                else if (props === "Button"){
                    fullDescriptor += "Button"
                }
                else if (props === "Bypass"){
                    fullDescriptor += "Bypass"
                }
                else if (props === "Bypassed"){
                    fullDescriptor += "Bypassed"
                }
                else if (props === "Camera"){
                    fullDescriptor += "Camera"
                }
                else if (props === "Cabinet"){
                    fullDescriptor += "Cabinet"
                }
                else if (props === "Cancel"){
                    fullDescriptor += "Cancel"
                }
                else if (props === "Carbon_monoxide"){
                    fullDescriptor += "Carbon_monoxide"
                }
                else if (props === "Cave"){
                    fullDescriptor += "Cave"
                }
                else if (props === "Cell_radio"){
                    fullDescriptor += "Cell_radio"
                }
                else if (props === "Cellular"){
                    fullDescriptor += "Cellular"
                }
                else if (props === "Center"){
                    fullDescriptor += "Center"
                }
                else if (props === "Check"){
                    fullDescriptor += "Check"
                }
                else if (props === "Chest"){
                    fullDescriptor += "Chest"
                }
                else if (props === "Childrens"){
                    fullDescriptor += "Childrens"
                }
                else if (props === "Chime"){
                    fullDescriptor += "Chime"
                }
                else if (props === "Closet"){
                    fullDescriptor += "Closet"
                }
                else if (props === "Code"){
                    fullDescriptor += "Code"
                }
                else if (props === "Communications"){
                    fullDescriptor += "Communications"
                }
                else if (props === "Computer"){
                    fullDescriptor += "Computer"
                }
                else if (props === "Control"){
                    fullDescriptor += "Control"
                }
                else if (props === "Cool"){
                    fullDescriptor += "Cool"
                }
                else if (props === "Corner"){
                    fullDescriptor += "Corner"
                }
                else if (props === "Courtyard"){
                    fullDescriptor += "Courtyard"
                }
                else if (props === "Crawl"){
                    fullDescriptor += "Crawl"
                }
                else if (props === "Current"){
                    fullDescriptor += "Current"
                }
                else if (props === "Daughters"){
                    fullDescriptor += "Daughters"
                }
                else if (props === "Day"){
                    fullDescriptor += "Day"
                }
                else if (props === "Deck"){
                    fullDescriptor += "Deck"
                }
                else if (props === "Degrees"){
                    fullDescriptor += "Degrees"
                }
                else if (props === "Den"){
                    fullDescriptor += "Den"
                }
                else if (props === "Detached"){
                    fullDescriptor += "Detached"
                }
                else if (props === "Detector"){
                    fullDescriptor += "Detector"
                }
                else if (props === "Dim"){
                    fullDescriptor += "Dim"
                }
                else if (props === "Dining"){
                    fullDescriptor += "Dining"
                }
                else if (props === "Disarm"){
                    fullDescriptor += "Disarm"
                }
                else if (props === "Disarmed"){
                    fullDescriptor += "Disarmed"
                }
                else if (props === "Dock"){
                    fullDescriptor += "Dock"
                }
                else if (props === "Door"){
                    fullDescriptor += "Door"
                }
                else if (props === "Doorbell"){
                    fullDescriptor += "Doorbell"
                }
                else if (props === "Downstairs"){
                    fullDescriptor += "Downstairs"
                }
                else if (props === "Driveway"){
                    fullDescriptor += "Driveway"
                }
                else if (props === "East"){
                    fullDescriptor += "East"
                }
                else if (props === "Eight"){
                    fullDescriptor += "Eight"
                }
                else if (props === "Eighteen"){
                    fullDescriptor += "Eighteen"
                }
                else if (props === "Eighty"){
                    fullDescriptor += "Eighty"
                }
                else if (props === "Electric"){
                    fullDescriptor += "Electric"
                }
                else if (props === "Eleven"){
                    fullDescriptor += "Eleven"
                }
                else if (props === "Emergency"){
                    fullDescriptor += "Emergency"
                }
                else if (props === "Enter"){
                    fullDescriptor += "Enter"
                }
                else if (props === "Entrance"){
                    fullDescriptor += "Entrance"
                }
                else if (props === "Entry"){
                    fullDescriptor += "Entry"
                }
                else if (props === "Error"){
                    fullDescriptor += "Error"
                }
                else if (props === "Exercise"){
                    fullDescriptor += "Exercise"
                }
                else if (props === "Exit"){
                    fullDescriptor += "Exit"
                }
                else if (props === "Exit_now"){
                    fullDescriptor += "Exit_now"
                }
                else if (props === "Exterior"){
                    fullDescriptor += "Exterior"
                }
                else if (props === "External"){
                    fullDescriptor += "External"
                }
                else if (props === "Failure"){
                    fullDescriptor += "Failure"
                }
                else if (props === "Family"){
                    fullDescriptor += "Family"
                }
                else if (props === "Fan"){
                    fullDescriptor += "Fan"
                }
                else if (props === "Fifteen"){
                    fullDescriptor += "Fifteen"
                }
                else if (props === "Fifty"){
                    fullDescriptor += "Fifty"
                }
                else if (props === "Fire"){
                    fullDescriptor += "Fire"
                }
                else if (props === "Fire_alert"){
                    fullDescriptor += "Fire_alert"
                }
                else if (props === "Fire_detector"){
                    fullDescriptor += "Fire_detector"
                }
                else if (props === "First"){
                    fullDescriptor += "First"
                }
                else if (props === "Five"){
                    fullDescriptor += "Five"
                }
                else if (props === "Flood"){
                    fullDescriptor += "Flood"
                }
                else if (props === "Floor"){
                    fullDescriptor += "Floor"
                }
                else if (props === "Fluid"){
                    fullDescriptor += "Fluid"
                }
                else if (props === "Foil"){
                    fullDescriptor += "Foil"
                }
                else if (props === "For"){
                    fullDescriptor += "For"
                }
                else if (props === "Fourty"){
                    fullDescriptor += "Fourty"
                }
                else if (props === "Four"){
                    fullDescriptor += "Four"
                }
                else if (props === "Fourteen"){
                    fullDescriptor += "Fourteen"
                }
                else if (props === "Forth"){
                    fullDescriptor += "Forth"
                }
                else if (props === "Foyer"){
                    fullDescriptor += "Foyer"
                }
                else if (props === "Freeze"){
                    fullDescriptor += "Freeze"
                }
                else if (props === "Freezer"){
                    fullDescriptor += "Freezer"
                }
                else if (props === "Front"){
                    fullDescriptor += "Front"
                }
                else if (props === "Furnace"){
                    fullDescriptor += "Furnace"
                }
                else if (props === "Game"){
                    fullDescriptor += "Game"
                }
                else if (props === "Garage"){
                    fullDescriptor += "Garage"
                }
                else if (props === "Gas"){
                    fullDescriptor += "Gas"
                }
                else if (props === "Gate"){
                    fullDescriptor += "Gate"
                }
                else if (props === "Girls"){
                    fullDescriptor += "Girls"
                }
                else if (props === "Glass"){
                    fullDescriptor += "Glass"
                }
                else if (props === "Glass_break"){
                    fullDescriptor += "Glass_break"
                }
                else if (props === "Guest"){
                    fullDescriptor += "Guest"
                }
                else if (props === "Gun"){
                    fullDescriptor += "Gun"
                }
                else if (props === "Hall"){
                    fullDescriptor += "Hall"
                }
                else if (props === "Hallway"){
                    fullDescriptor += "Hallway"
                }
                else if (props === "Hang_up"){
                    fullDescriptor += "Hang_up"
                }
                else if (props === "Hanging"){
                    fullDescriptor += "Hanging"
                }
                else if (props === "Heat"){
                    fullDescriptor += "Heat"
                }
                else if (props === "High"){
                    fullDescriptor += "High"
                }
                else if (props === "Home"){
                    fullDescriptor += "Home"
                }
                else if (props === "House"){
                    fullDescriptor += "House"
                }
                else if (props === "Ice"){
                    fullDescriptor += "Ice"
                }
                else if (props === "Image"){
                    fullDescriptor += "Image"
                }
                else if (props === "Image_sensor"){
                    fullDescriptor += "Image_sensor"
                }
                else if (props === "Inside"){
                    fullDescriptor += "Inside"
                }
                else if (props === "Instant"){
                    fullDescriptor += "Instant"
                }
                else if (props === "Interior"){
                    fullDescriptor += "Interior"
                }
                else if (props === "Intrusion"){
                    fullDescriptor += "Intrusion"
                }
                else if (props === "Is"){
                    fullDescriptor += "Is"
                }
                else if (props === "Key"){
                    fullDescriptor += "Key"
                }
                else if (props === "Keyfob"){
                    fullDescriptor += "Keyfob"
                }
                else if (props === "Keypads"){
                    fullDescriptor += "Keypads"
                }
                else if (props === "Kids"){
                    fullDescriptor += "Kids"
                }
                else if (props === "Kitchen"){
                    fullDescriptor += "Kitchen"
                }
                else if (props === "Laundry"){
                    fullDescriptor += "Laundry"
                }
                else if (props === "Left"){
                    fullDescriptor += "Left"
                }
                else if (props === "Level"){
                    fullDescriptor += "Level"
                }
                else if (props === "Library"){
                    fullDescriptor += "Library"
                }
                else if (props === "Light"){
                    fullDescriptor += "Light"
                }
                else if (props === "Lights"){
                    fullDescriptor += "Lights"
                }
                else if (props === "Liquor"){
                    fullDescriptor += "Liquor"
                }
                else if (props === "Living"){
                    fullDescriptor += "Living"
                }
                else if (props === "Loading"){
                    fullDescriptor += "Loading"
                }
                else if (props === "Lock"){
                    fullDescriptor += "Lock"
                }
                else if (props === "Loft"){
                    fullDescriptor += "Loft"
                }
                else if (props === "Low"){
                    fullDescriptor += "Low"
                }
                else if (props === "Main"){
                    fullDescriptor += "Main"
                }
                else if (props === "Maintenance"){
                    fullDescriptor += "Maintenance"
                }
                else if (props === "Man"){
                    fullDescriptor += "Man"
                }
                else if (props === "Master"){
                    fullDescriptor += "Master"
                }
                else if (props === "Medical"){
                    fullDescriptor += "Medical"
                }
                else if (props === "Medicine"){
                    fullDescriptor += "Medicine"
                }
                else if (props === "Menu"){
                    fullDescriptor += "Menu"
                }
                else if (props === "Middle"){
                    fullDescriptor += "Middle"
                }
                else if (props === "Monitor"){
                    fullDescriptor += "Monitor"
                }
                else if (props === "Motion"){
                    fullDescriptor += "Motion"
                }
                else if (props === "Motion_detector"){
                    fullDescriptor += "Motion_detector"
                }
                else if (props === "Mud"){
                    fullDescriptor += "Mud"
                }
                else if (props === "Nine"){
                    fullDescriptor += "Nine"
                }
                else if (props === "Nineteen"){
                    fullDescriptor += "Nineteen"
                }
                else if (props === "Ninety"){
                    fullDescriptor += "Ninety"
                }
                else if (props === "No_delay"){
                    fullDescriptor += "No_delay"
                }
                else if (props === "No_entry_delay"){
                    fullDescriptor += "No_entry_delay"
                }
                else if (props === "North"){
                    fullDescriptor += "North"
                }
                else if (props === "Not"){
                    fullDescriptor += "Not"
                }
                else if (props === "Not_ready"){
                    fullDescriptor += "Not_ready"
                }
                else if (props === "Nursery"){
                    fullDescriptor += "Nursery"
                }
                else if (props === "Off"){
                    fullDescriptor += "Off"
                }
                else if (props === "Office"){
                    fullDescriptor += "Office"
                }
                else if (props === "On"){
                    fullDescriptor += "On"
                }
                else if (props === "One"){
                    fullDescriptor += "One"
                }
                else if (props === "One_hundred"){
                    fullDescriptor += "One_hundred"
                }
                else if (props === "Output"){
                    fullDescriptor += "Output"
                }
                else if (props === "Outside"){
                    fullDescriptor += "Outside"
                }
                else if (props === "Overhead"){
                    fullDescriptor += "Overhead"
                }
                else if (props === "Panel"){
                    fullDescriptor += "Panel"
                }
                else if (props === "Panic"){
                    fullDescriptor += "Panic"
                }
                else if (props === "Pantry"){
                    fullDescriptor += "Pantry"
                }
                else if (props === "Patio"){
                    fullDescriptor += "Patio"
                }
                else if (props === "Perimeter"){
                    fullDescriptor += "Perimeter"
                }
                else if (props === "Phone_line"){
                    fullDescriptor += "Phone_line"
                }
                else if (props === "Play"){
                    fullDescriptor += "Play"
                }
                else if (props === "Police"){
                    fullDescriptor += "Police"
                }
                else if (props === "Pool"){
                    fullDescriptor += "Pool"
                }
                else if (props === "Porch"){
                    fullDescriptor += "Porch"
                }
                else if (props === "Pound"){
                    fullDescriptor += "Pound"
                }
                else if (props === "Power"){
                    fullDescriptor += "Power"
                }
                else if (props === "Press"){
                    fullDescriptor += "Press"
                }
                else if (props === "Previous"){
                    fullDescriptor += "Previous"
                }
                else if (props === "Pump"){
                    fullDescriptor += "Pump"
                }
                else if (props === "Radio"){
                    fullDescriptor += "Radio"
                }
                else if (props === "Ready"){
                    fullDescriptor += "Ready"
                }
                else if (props === "Rear"){
                    fullDescriptor += "Rear"
                }
                else if (props === "Refrigerator"){
                    fullDescriptor += "Refrigerator"
                }
                else if (props === "Relay"){
                    fullDescriptor += "Relay"
                }
                else if (props === "Remote"){
                    fullDescriptor += "Remote"
                }
                else if (props === "Repeat"){
                    fullDescriptor += "Repeat"
                }
                else if (props === "Rf_jam"){
                    fullDescriptor += "Rf_jam"
                }
                else if (props === "Right"){
                    fullDescriptor += "Right"
                }
                else if (props === "Room"){
                    fullDescriptor += "Room"
                }
                else if (props === "Safe"){
                    fullDescriptor += "Safe"
                }
                else if (props === "Second"){
                    fullDescriptor += "Second"
                }
                else if (props === "Security"){
                    fullDescriptor += "Security"
                }
                else if (props === "Sensor"){
                    fullDescriptor += "Sensor"
                }
                else if (props === "Sensors"){
                    fullDescriptor += "Sensors"
                }
                else if (props === "Service"){
                    fullDescriptor += "Service"
                }
                else if (props === "Session"){
                    fullDescriptor += "Session"
                }
                else if (props === "Set"){
                    fullDescriptor += "Set"
                }
                else if (props === "Seven"){
                    fullDescriptor += "Seven"
                }
                else if (props === "Seventeen"){
                    fullDescriptor += "Seventeen"
                }
                else if (props === "Seventy"){
                    fullDescriptor += "Seventy"
                }
                else if (props === "Shed"){
                    fullDescriptor += "Shed"
                }
                else if (props === "Shop"){
                    fullDescriptor += "Shop"
                }
                else if (props === "Side"){
                    fullDescriptor += "Side"
                }
                else if (props === "Silent"){
                    fullDescriptor += "Silent"
                }
                else if (props === "Siren"){
                    fullDescriptor += "Siren"
                }
                else if (props === "Six"){
                    fullDescriptor += "Six"
                }
                else if (props === "Sixteen"){
                    fullDescriptor += "Sixteen"
                }
                else if (props === "Sixty"){
                    fullDescriptor += "Sixty"
                }
                else if (props === "Skylight"){
                    fullDescriptor += "Skylight"
                }
                else if (props === "Sliding"){
                    fullDescriptor += "Sliding"
                }
                else if (props === "Smoke"){
                    fullDescriptor += "Smoke"
                }
                else if (props === "Sons"){
                    fullDescriptor += "Sons"
                }
                else if (props === "Sounder"){
                    fullDescriptor += "Sounder"
                }
                else if (props === "South"){
                    fullDescriptor += "South"
                }
                else if (props === "Space"){
                    fullDescriptor += "Space"
                }
                else if (props === "Spare"){
                    fullDescriptor += "Spare"
                }
                else if (props === "Stairs"){
                    fullDescriptor += "Stairs"
                }
                else if (props === "Star"){
                    fullDescriptor += "Star"
                }
                else if (props === "Status"){
                    fullDescriptor += "Status"
                }
                else if (props === "Stay"){
                    fullDescriptor += "Stay"
                }
                else if (props === "Stop"){
                    fullDescriptor += "Shop"
                }
                else if (props === "Storage"){
                    fullDescriptor += "Storage"
                }
                else if (props === "Study"){
                    fullDescriptor += "Study"
                }
                else if (props === "Sump"){
                    fullDescriptor += "Sump"
                }
                else if (props === "Sun"){
                    fullDescriptor += "Sun"
                }
                else if (props === "Sunroom"){
                    fullDescriptor += "Sunroom"
                }
                else if (props === "Supervision"){
                    fullDescriptor += "Supervision"
                }
                else if (props === "Switch"){
                    fullDescriptor += "Switch"
                }
                else if (props === "System"){
                    fullDescriptor += "System"
                }
                else if (props === "Tamper"){
                    fullDescriptor += "Tamper"
                }
                else if (props === "Temperature"){
                    fullDescriptor += "Temperature"
                }
                else if (props === "Ten"){
                    fullDescriptor += "Ten"
                }
                else if (props === "Terminated"){
                    fullDescriptor += "Terminated"
                }
                else if (props === "Theater"){
                    fullDescriptor += "Theater"
                }
                else if (props === "Thermostat"){
                    fullDescriptor += "Thermostat"
                }
                else if (props === "Third"){
                    fullDescriptor += "Third"
                }
                else if (props === "Thirteen"){
                    fullDescriptor += "Thirteen"
                }
                else if (props === "Thirty"){
                    fullDescriptor += "Thirty"
                }
                else if (props === "Three"){
                    fullDescriptor += "Three"
                }
                else if (props === "To"){
                    fullDescriptor += "To"
                }
                else if (props === "Tool"){
                    fullDescriptor += "Tool"
                }
                else if (props === "Transmitted"){
                    fullDescriptor += "Transmitted"
                }
                else if (props === "Transmitter"){
                    fullDescriptor += "Transmitter"
                }
                else if (props === "Trouble"){
                    fullDescriptor += "Trouble"
                }
                else if (props === "Turn"){
                    fullDescriptor += "Turn"
                }
                else if (props === "Tv"){
                    fullDescriptor += "Tv"
                }
                else if (props === "Twelve"){
                    fullDescriptor += "Twelve"
                }
                else if (props === "Twenty"){
                    fullDescriptor += "Twenty"
                }
                else if (props === "Two"){
                    fullDescriptor += "Two"
                }
                else if (props === "Unlock"){
                    fullDescriptor += "Unlock"
                }
                else if (props === "Upper"){
                    fullDescriptor += "Upper"
                }
                else if (props === "Upstairs"){
                    fullDescriptor += "Upstairs"
                }
                else if (props === "User"){
                    fullDescriptor += "User"
                }
                else if (props === "Utility"){
                    fullDescriptor += "Utility"
                }
                else if (props === "Valve"){
                    fullDescriptor += "Valve"
                }
                else if (props === "Video"){
                    fullDescriptor += "Video"
                }
                else if (props === "Voice"){
                    fullDescriptor += "Voice"
                }
                else if (props === "Wall"){
                    fullDescriptor += "Wall"
                }
                else if (props === "Warehouse"){
                    fullDescriptor += "Warehouse"
                }
                else if (props === "Water"){
                    fullDescriptor += "Water"
                }
                else if (props === "West"){
                    fullDescriptor += "West"
                }
                else if (props === "Window"){
                    fullDescriptor += "Window"
                }
                else if (props === "Wing"){
                    fullDescriptor += "Wing"
                }
                else if (props === "Wireless"){
                    fullDescriptor += "Wireless"
                }
                else if (props === "Yard"){
                    fullDescriptor += "Yard"
                }
                else if (props === "Zero"){
                    fullDescriptor += "Zero"
                }
                else if (props === "Zone"){
                    fullDescriptor += "Zone"
                }
            }
            else{
                return (
                    <p className="css-grid-align-right" style={{'color':"#404956"}}>{`<None>`}</p>
                )
            }
        }
        else if (i === 2){
            if (i !== ""){
                if (i !== ""){
                    if (props === "Abort"){
                        fullDescriptor += " Abort"
                    }
                    else if (props === "Ac"){
                        fullDescriptor += " Ac"
                    }
                    else if (props === "Access"){
                        fullDescriptor += " Access"
                    }
                    else if (props === "Alarm"){
                        fullDescriptor += " Alarm"
                    }
                    else if (props === "And"){
                        fullDescriptor += " And"
                    }
                    else if (props === "Anouncement"){
                        fullDescriptor += " Announcement"
                    }
                    else if (props === "Apartment"){
                        fullDescriptor += " Apartment"
                    }
                    else if (props === "Area"){
                        fullDescriptor += " Area"
                    }
                    else if (props === "Arm"){
                        fullDescriptor += " Arm"
                    }
                    else if (props === "Armed"){
                        fullDescriptor += " Armed"
                    }
                    else if (props === "At"){
                        fullDescriptor += " At"
                    }
                    else if (props === "Attic"){
                        fullDescriptor += " Attic"
                    }
                    else if (props === "Audio"){
                        fullDescriptor += " Audio"
                    }
                    else if (props === "Auto"){
                        fullDescriptor += " Auto"
                    }
                    else if (props === "Automation"){
                        fullDescriptor += " Automation"
                    }
                    else if (props === "Auxiliary"){
                        fullDescriptor += " Auxiliary"
                    }
                    else if (props === "Away"){
                        fullDescriptor += " Away"
                    }
                    else if (props === "Babys"){
                        fullDescriptor += " Babys"
                    }
                    else if (props === "Back"){
                        fullDescriptor += " Back"
                    }
                    else if (props === "Balcony"){
                        fullDescriptor += " Balcony"
                    }
                    else if (props === "Basement"){
                        fullDescriptor += " Basement"
                    }
                    else if (props === "Bathroom"){
                        fullDescriptor += " Bathroom"
                    }
                    else if (props === "Battery"){
                        fullDescriptor += " Battery"
                    }
                    else if (props === "Bedroom"){
                        fullDescriptor += " Bedroom"
                    }
                    else if (props === "Bell"){
                        fullDescriptor += " Bell"
                    }
                    else if (props === "Bonus"){
                        fullDescriptor += " Bonus"
                    }
                    else if (props === "Boys"){
                        fullDescriptor += " Boys"
                    }
                    else if (props === "Break"){
                        fullDescriptor += " Break"
                    }
                    else if (props === "Button"){
                        fullDescriptor += " Button"
                    }
                    else if (props === "Bypass"){
                        fullDescriptor += " Bypass"
                    }
                    else if (props === "Bypassed"){
                        fullDescriptor += " Bypassed"
                    }
                    else if (props === "Camera"){
                        fullDescriptor += " Camera"
                    }
                    else if (props === "Cabinet"){
                        fullDescriptor += " Cabinet"
                    }
                    else if (props === "Cancel"){
                        fullDescriptor += " Cancel"
                    }
                    else if (props === "Carbon_monoxide"){
                        fullDescriptor += " Carbon_monoxide"
                    }
                    else if (props === "Cave"){
                        fullDescriptor += " Cave"
                    }
                    else if (props === "Cell_radio"){
                        fullDescriptor += " Cell_radio"
                    }
                    else if (props === "Cellular"){
                        fullDescriptor += " Cellular"
                    }
                    else if (props === "Center"){
                        fullDescriptor += " Center"
                    }
                    else if (props === "Check"){
                        fullDescriptor += " Check"
                    }
                    else if (props === "Chest"){
                        fullDescriptor += " Chest"
                    }
                    else if (props === "Childrens"){
                        fullDescriptor += " Childrens"
                    }
                    else if (props === "Chime"){
                        fullDescriptor += " Chime"
                    }
                    else if (props === "Closet"){
                        fullDescriptor += " Closet"
                    }
                    else if (props === "Code"){
                        fullDescriptor += " Code"
                    }
                    else if (props === "Communications"){
                        fullDescriptor += " Communications"
                    }
                    else if (props === "Computer"){
                        fullDescriptor += " Computer"
                    }
                    else if (props === "Control"){
                        fullDescriptor += " Control"
                    }
                    else if (props === "Cool"){
                        fullDescriptor += " Cool"
                    }
                    else if (props === "Corner"){
                        fullDescriptor += " Corner"
                    }
                    else if (props === "Courtyard"){
                        fullDescriptor += " Courtyard"
                    }
                    else if (props === "Crawl"){
                        fullDescriptor += " Crawl"
                    }
                    else if (props === "Current"){
                        fullDescriptor += " Current"
                    }
                    else if (props === "Daughters"){
                        fullDescriptor += " Daughters"
                    }
                    else if (props === "Day"){
                        fullDescriptor += " Day"
                    }
                    else if (props === "Deck"){
                        fullDescriptor += " Deck"
                    }
                    else if (props === "Degrees"){
                        fullDescriptor += " Degrees"
                    }
                    else if (props === "Den"){
                        fullDescriptor += " Den"
                    }
                    else if (props === "Detached"){
                        fullDescriptor += " Detached"
                    }
                    else if (props === "Detector"){
                        fullDescriptor += " Detector"
                    }
                    else if (props === "Dim"){
                        fullDescriptor += " Dim"
                    }
                    else if (props === "Dining"){
                        fullDescriptor += " Dining"
                    }
                    else if (props === "Disarm"){
                        fullDescriptor += " Disarm"
                    }
                    else if (props === "Disarmed"){
                        fullDescriptor += " Disarmed"
                    }
                    else if (props === "Dock"){
                        fullDescriptor += " Dock"
                    }
                    else if (props === "Door"){
                        fullDescriptor += " Door"
                    }
                    else if (props === "Doorbell"){
                        fullDescriptor += " Doorbell"
                    }
                    else if (props === "Downstairs"){
                        fullDescriptor += " Downstairs"
                    }
                    else if (props === "Driveway"){
                        fullDescriptor += " Driveway"
                    }
                    else if (props === "East"){
                        fullDescriptor += " East"
                    }
                    else if (props === "Eight"){
                        fullDescriptor += " Eight"
                    }
                    else if (props === "Eighteen"){
                        fullDescriptor += " Eighteen"
                    }
                    else if (props === "Eighty"){
                        fullDescriptor += " Eighty"
                    }
                    else if (props === "Electric"){
                        fullDescriptor += " Electric"
                    }
                    else if (props === "Eleven"){
                        fullDescriptor += " Eleven"
                    }
                    else if (props === "Emergency"){
                        fullDescriptor += " Emergency"
                    }
                    else if (props === "Enter"){
                        fullDescriptor += " Enter"
                    }
                    else if (props === "Entrance"){
                        fullDescriptor += " Entrance"
                    }
                    else if (props === "Entry"){
                        fullDescriptor += " Entry"
                    }
                    else if (props === "Error"){
                        fullDescriptor += " Error"
                    }
                    else if (props === "Exercise"){
                        fullDescriptor += " Exercise"
                    }
                    else if (props === "Exit"){
                        fullDescriptor += " Exit"
                    }
                    else if (props === "Exit_now"){
                        fullDescriptor += " Exit_now"
                    }
                    else if (props === "Exterior"){
                        fullDescriptor += " Exterior"
                    }
                    else if (props === "External"){
                        fullDescriptor += " External"
                    }
                    else if (props === "Failure"){
                        fullDescriptor += " Failure"
                    }
                    else if (props === "Family"){
                        fullDescriptor += " Family"
                    }
                    else if (props === "Fan"){
                        fullDescriptor += " Fan"
                    }
                    else if (props === "Fifteen"){
                        fullDescriptor += " Fifteen"
                    }
                    else if (props === "Fifty"){
                        fullDescriptor += " Fifty"
                    }
                    else if (props === "Fire"){
                        fullDescriptor += " Fire"
                    }
                    else if (props === "Fire_alert"){
                        fullDescriptor += " Fire_alert"
                    }
                    else if (props === "Fire_detector"){
                        fullDescriptor += " Fire_detector"
                    }
                    else if (props === "First"){
                        fullDescriptor += " First"
                    }
                    else if (props === "Five"){
                        fullDescriptor += " Five"
                    }
                    else if (props === "Flood"){
                        fullDescriptor += " Flood"
                    }
                    else if (props === "Floor"){
                        fullDescriptor += " Floor"
                    }
                    else if (props === "Fluid"){
                        fullDescriptor += " Fluid"
                    }
                    else if (props === "Foil"){
                        fullDescriptor += " Foil"
                    }
                    else if (props === "For"){
                        fullDescriptor += " For"
                    }
                    else if (props === "Fourty"){
                        fullDescriptor += " Fourty"
                    }
                    else if (props === "Four"){
                        fullDescriptor += " Four"
                    }
                    else if (props === "Fourteen"){
                        fullDescriptor += " Fourteen"
                    }
                    else if (props === "Forth"){
                        fullDescriptor += " Forth"
                    }
                    else if (props === "Foyer"){
                        fullDescriptor += " Foyer"
                    }
                    else if (props === "Freeze"){
                        fullDescriptor += " Freeze"
                    }
                    else if (props === "Freezer"){
                        fullDescriptor += " Freezer"
                    }
                    else if (props === "Front"){
                        fullDescriptor += " Front"
                    }
                    else if (props === "Furnace"){
                        fullDescriptor += " Furnace"
                    }
                    else if (props === "Game"){
                        fullDescriptor += " Game"
                    }
                    else if (props === "Garage"){
                        fullDescriptor += " Garage"
                    }
                    else if (props === "Gas"){
                        fullDescriptor += " Gas"
                    }
                    else if (props === "Gate"){
                        fullDescriptor += " Gate"
                    }
                    else if (props === "Girls"){
                        fullDescriptor += " Girls"
                    }
                    else if (props === "Glass"){
                        fullDescriptor += " Glass"
                    }
                    else if (props === "Glass_break"){
                        fullDescriptor += " Glass_break"
                    }
                    else if (props === "Guest"){
                        fullDescriptor += " Guest"
                    }
                    else if (props === "Gun"){
                        fullDescriptor += " Gun"
                    }
                    else if (props === "Hall"){
                        fullDescriptor += " Hall"
                    }
                    else if (props === "Hallway"){
                        fullDescriptor += " Hallway"
                    }
                    else if (props === "Hang_up"){
                        fullDescriptor += " Hang_up"
                    }
                    else if (props === "Hanging"){
                        fullDescriptor += " Hanging"
                    }
                    else if (props === "Heat"){
                        fullDescriptor += " Heat"
                    }
                    else if (props === "High"){
                        fullDescriptor += " High"
                    }
                    else if (props === "Home"){
                        fullDescriptor += " Home"
                    }
                    else if (props === "House"){
                        fullDescriptor += " House"
                    }
                    else if (props === "Ice"){
                        fullDescriptor += " Ice"
                    }
                    else if (props === "Image"){
                        fullDescriptor += " Image"
                    }
                    else if (props === "Image_sensor"){
                        fullDescriptor += " Image_sensor"
                    }
                    else if (props === "Inside"){
                        fullDescriptor += " Inside"
                    }
                    else if (props === "Instant"){
                        fullDescriptor += " Instant"
                    }
                    else if (props === "Interior"){
                        fullDescriptor += " Interior"
                    }
                    else if (props === "Intrusion"){
                        fullDescriptor += " Intrusion"
                    }
                    else if (props === "Is"){
                        fullDescriptor += " Is"
                    }
                    else if (props === "Key"){
                        fullDescriptor += " Key"
                    }
                    else if (props === "Keyfob"){
                        fullDescriptor += " Keyfob"
                    }
                    else if (props === "Keypads"){
                        fullDescriptor += " Keypads"
                    }
                    else if (props === "Kids"){
                        fullDescriptor += " Kids"
                    }
                    else if (props === "Kitchen"){
                        fullDescriptor += " Kitchen"
                    }
                    else if (props === "Laundry"){
                        fullDescriptor += " Laundry"
                    }
                    else if (props === "Left"){
                        fullDescriptor += " Left"
                    }
                    else if (props === "Level"){
                        fullDescriptor += " Level"
                    }
                    else if (props === "Library"){
                        fullDescriptor += " Library"
                    }
                    else if (props === "Light"){
                        fullDescriptor += " Light"
                    }
                    else if (props === "Lights"){
                        fullDescriptor += " Lights"
                    }
                    else if (props === "Liquor"){
                        fullDescriptor += " Liquor"
                    }
                    else if (props === "Living"){
                        fullDescriptor += " Living"
                    }
                    else if (props === "Loading"){
                        fullDescriptor += " Loading"
                    }
                    else if (props === "Lock"){
                        fullDescriptor += " Lock"
                    }
                    else if (props === "Loft"){
                        fullDescriptor += " Loft"
                    }
                    else if (props === "Low"){
                        fullDescriptor += " Low"
                    }
                    else if (props === "Main"){
                        fullDescriptor += " Main"
                    }
                    else if (props === "Maintenance"){
                        fullDescriptor += " Maintenance"
                    }
                    else if (props === "Man"){
                        fullDescriptor += " Man"
                    }
                    else if (props === "Master"){
                        fullDescriptor += " Master"
                    }
                    else if (props === "Medical"){
                        fullDescriptor += " Medical"
                    }
                    else if (props === "Medicine"){
                        fullDescriptor += " Medicine"
                    }
                    else if (props === "Menu"){
                        fullDescriptor += " Menu"
                    }
                    else if (props === "Middle"){
                        fullDescriptor += " Middle"
                    }
                    else if (props === "Monitor"){
                        fullDescriptor += " Monitor"
                    }
                    else if (props === "Motion"){
                        fullDescriptor += " Motion"
                    }
                    else if (props === "Motion_detector"){
                        fullDescriptor += " Motion_detector"
                    }
                    else if (props === "Mud"){
                        fullDescriptor += " Mud"
                    }
                    else if (props === "Nine"){
                        fullDescriptor += " Nine"
                    }
                    else if (props === "Nineteen"){
                        fullDescriptor += " Nineteen"
                    }
                    else if (props === "Ninety"){
                        fullDescriptor += " Ninety"
                    }
                    else if (props === "No_delay"){
                        fullDescriptor += " No_delay"
                    }
                    else if (props === "No_entry_delay"){
                        fullDescriptor += " No_entry_delay"
                    }
                    else if (props === "North"){
                        fullDescriptor += " North"
                    }
                    else if (props === "Not"){
                        fullDescriptor += " Not"
                    }
                    else if (props === "Not_ready"){
                        fullDescriptor += " Not_ready"
                    }
                    else if (props === "Nursery"){
                        fullDescriptor += " Nursery"
                    }
                    else if (props === "Off"){
                        fullDescriptor += " Off"
                    }
                    else if (props === "Office"){
                        fullDescriptor += " Office"
                    }
                    else if (props === "On"){
                        fullDescriptor += " On"
                    }
                    else if (props === "One"){
                        fullDescriptor += " One"
                    }
                    else if (props === "One_hundred"){
                        fullDescriptor += " One_hundred"
                    }
                    else if (props === "Output"){
                        fullDescriptor += " Output"
                    }
                    else if (props === "Outside"){
                        fullDescriptor += " Outside"
                    }
                    else if (props === "Overhead"){
                        fullDescriptor += " Overhead"
                    }
                    else if (props === "Panel"){
                        fullDescriptor += " Panel"
                    }
                    else if (props === "Panic"){
                        fullDescriptor += " Panic"
                    }
                    else if (props === "Pantry"){
                        fullDescriptor += " Pantry"
                    }
                    else if (props === "Patio"){
                        fullDescriptor += " Patio"
                    }
                    else if (props === "Perimeter"){
                        fullDescriptor += " Perimeter"
                    }
                    else if (props === "Phone_line"){
                        fullDescriptor += " Phone_line"
                    }
                    else if (props === "Play"){
                        fullDescriptor += " Play"
                    }
                    else if (props === "Police"){
                        fullDescriptor += " Police"
                    }
                    else if (props === "Pool"){
                        fullDescriptor += " Pool"
                    }
                    else if (props === "Porch"){
                        fullDescriptor += " Porch"
                    }
                    else if (props === "Pound"){
                        fullDescriptor += " Pound"
                    }
                    else if (props === "Power"){
                        fullDescriptor += " Power"
                    }
                    else if (props === "Press"){
                        fullDescriptor += " Press"
                    }
                    else if (props === "Previous"){
                        fullDescriptor += " Previous"
                    }
                    else if (props === "Pump"){
                        fullDescriptor += " Pump"
                    }
                    else if (props === "Radio"){
                        fullDescriptor += " Radio"
                    }
                    else if (props === "Ready"){
                        fullDescriptor += " Ready"
                    }
                    else if (props === "Rear"){
                        fullDescriptor += " Rear"
                    }
                    else if (props === "Refrigerator"){
                        fullDescriptor += " Refrigerator"
                    }
                    else if (props === "Relay"){
                        fullDescriptor += " Relay"
                    }
                    else if (props === "Remote"){
                        fullDescriptor += " Remote"
                    }
                    else if (props === "Repeat"){
                        fullDescriptor += " Repeat"
                    }
                    else if (props === "Rf_jam"){
                        fullDescriptor += " Rf_jam"
                    }
                    else if (props === "Right"){
                        fullDescriptor += " Right"
                    }
                    else if (props === "Room"){
                        fullDescriptor += " Room"
                    }
                    else if (props === "Safe"){
                        fullDescriptor += " Safe"
                    }
                    else if (props === "Second"){
                        fullDescriptor += " Second"
                    }
                    else if (props === "Security"){
                        fullDescriptor += " Security"
                    }
                    else if (props === "Sensor"){
                        fullDescriptor += " Sensor"
                    }
                    else if (props === "Sensors"){
                        fullDescriptor += " Sensors"
                    }
                    else if (props === "Service"){
                        fullDescriptor += " Service"
                    }
                    else if (props === "Session"){
                        fullDescriptor += " Session"
                    }
                    else if (props === "Set"){
                        fullDescriptor += " Set"
                    }
                    else if (props === "Seven"){
                        fullDescriptor += " Seven"
                    }
                    else if (props === "Seventeen"){
                        fullDescriptor += " Seventeen"
                    }
                    else if (props === "Seventy"){
                        fullDescriptor += " Seventy"
                    }
                    else if (props === "Shed"){
                        fullDescriptor += " Shed"
                    }
                    else if (props === "Shop"){
                        fullDescriptor += " Shop"
                    }
                    else if (props === "Side"){
                        fullDescriptor += " Side"
                    }
                    else if (props === "Silent"){
                        fullDescriptor += " Silent"
                    }
                    else if (props === "Siren"){
                        fullDescriptor += " Siren"
                    }
                    else if (props === "Six"){
                        fullDescriptor += " Six"
                    }
                    else if (props === "Sixteen"){
                        fullDescriptor += " Sixteen"
                    }
                    else if (props === "Sixty"){
                        fullDescriptor += " Sixty"
                    }
                    else if (props === "Skylight"){
                        fullDescriptor += " Skylight"
                    }
                    else if (props === "Sliding"){
                        fullDescriptor += " Sliding"
                    }
                    else if (props === "Smoke"){
                        fullDescriptor += " Smoke"
                    }
                    else if (props === "Sons"){
                        fullDescriptor += " Sons"
                    }
                    else if (props === "Sounder"){
                        fullDescriptor += " Sounder"
                    }
                    else if (props === "South"){
                        fullDescriptor += " South"
                    }
                    else if (props === "Space"){
                        fullDescriptor += " Space"
                    }
                    else if (props === "Spare"){
                        fullDescriptor += " Spare"
                    }
                    else if (props === "Stairs"){
                        fullDescriptor += " Stairs"
                    }
                    else if (props === "Star"){
                        fullDescriptor += " Star"
                    }
                    else if (props === "Status"){
                        fullDescriptor += " Status"
                    }
                    else if (props === "Stay"){
                        fullDescriptor += " Stay"
                    }
                    else if (props === "Stop"){
                        fullDescriptor += " Shop"
                    }
                    else if (props === "Storage"){
                        fullDescriptor += " Storage"
                    }
                    else if (props === "Study"){
                        fullDescriptor += " Study"
                    }
                    else if (props === "Sump"){
                        fullDescriptor += " Sump"
                    }
                    else if (props === "Sun"){
                        fullDescriptor += " Sun"
                    }
                    else if (props === "Sunroom"){
                        fullDescriptor += " Sunroom"
                    }
                    else if (props === "Supervision"){
                        fullDescriptor += " Supervision"
                    }
                    else if (props === "Switch"){
                        fullDescriptor += " Switch"
                    }
                    else if (props === "System"){
                        fullDescriptor += " System"
                    }
                    else if (props === "Tamper"){
                        fullDescriptor += " Tamper"
                    }
                    else if (props === "Temperature"){
                        fullDescriptor += " Temperature"
                    }
                    else if (props === "Ten"){
                        fullDescriptor += " Ten"
                    }
                    else if (props === "Terminated"){
                        fullDescriptor += " Terminated"
                    }
                    else if (props === "Theater"){
                        fullDescriptor += " Theater"
                    }
                    else if (props === "Thermostat"){
                        fullDescriptor += " Thermostat"
                    }
                    else if (props === "Third"){
                        fullDescriptor += " Third"
                    }
                    else if (props === "Thirteen"){
                        fullDescriptor += " Thirteen"
                    }
                    else if (props === "Thirty"){
                        fullDescriptor += " Thirty"
                    }
                    else if (props === "Three"){
                        fullDescriptor += " Three"
                    }
                    else if (props === "To"){
                        fullDescriptor += " To"
                    }
                    else if (props === "Tool"){
                        fullDescriptor += " Tool"
                    }
                    else if (props === "Transmitted"){
                        fullDescriptor += " Transmitted"
                    }
                    else if (props === "Transmitter"){
                        fullDescriptor += " Transmitter"
                    }
                    else if (props === "Trouble"){
                        fullDescriptor += " Trouble"
                    }
                    else if (props === "Turn"){
                        fullDescriptor += " Turn"
                    }
                    else if (props === "Tv"){
                        fullDescriptor += " Tv"
                    }
                    else if (props === "Twelve"){
                        fullDescriptor += " Twelve"
                    }
                    else if (props === "Twenty"){
                        fullDescriptor += " Twenty"
                    }
                    else if (props === "Two"){
                        fullDescriptor += " Two"
                    }
                    else if (props === "Unlock"){
                        fullDescriptor += " Unlock"
                    }
                    else if (props === "Upper"){
                        fullDescriptor += " Upper"
                    }
                    else if (props === "Upstairs"){
                        fullDescriptor += " Upstairs"
                    }
                    else if (props === "User"){
                        fullDescriptor += " User"
                    }
                    else if (props === "Utility"){
                        fullDescriptor += " Utility"
                    }
                    else if (props === "Valve"){
                        fullDescriptor += " Valve"
                    }
                    else if (props === "Video"){
                        fullDescriptor += " Video"
                    }
                    else if (props === "Voice"){
                        fullDescriptor += " Voice"
                    }
                    else if (props === "Wall"){
                        fullDescriptor += " Wall"
                    }
                    else if (props === "Warehouse"){
                        fullDescriptor += " Warehouse"
                    }
                    else if (props === "Water"){
                        fullDescriptor += " Water"
                    }
                    else if (props === "West"){
                        fullDescriptor += " West"
                    }
                    else if (props === "Window"){
                        fullDescriptor += " Window"
                    }
                    else if (props === "Wing"){
                        fullDescriptor += " Wing"
                    }
                    else if (props === "Wireless"){
                        fullDescriptor += " Wireless"
                    }
                    else if (props === "Yard"){
                        fullDescriptor += " Yard"
                    }
                    else if (props === "Zero"){
                        fullDescriptor += " Zero"
                    }
                    else if (props === "Zone"){
                        fullDescriptor += " Zone"
                    }
                }
                else{
                    return (
                        <p className="css-grid-align-right" style={{'color':"#404956"}}>{fullDescriptor}</p>
                    )
                }
            }
            else{
                break
            }
        }
        else if (i === 3){
            if (i !== ""){
                if (i !== ""){
                    if (props === "Abort"){
                        fullDescriptor += " Abort"
                    }
                    else if (props === "Ac"){
                        fullDescriptor += " Ac"
                    }
                    else if (props === "Access"){
                        fullDescriptor += " Access"
                    }
                    else if (props === "Alarm"){
                        fullDescriptor += " Alarm"
                    }
                    else if (props === "And"){
                        fullDescriptor += " And"
                    }
                    else if (props === "Anouncement"){
                        fullDescriptor += " Announcement"
                    }
                    else if (props === "Apartment"){
                        fullDescriptor += " Apartment"
                    }
                    else if (props === "Area"){
                        fullDescriptor += " Area"
                    }
                    else if (props === "Arm"){
                        fullDescriptor += " Arm"
                    }
                    else if (props === "Armed"){
                        fullDescriptor += " Armed"
                    }
                    else if (props === "At"){
                        fullDescriptor += " At"
                    }
                    else if (props === "Attic"){
                        fullDescriptor += " Attic"
                    }
                    else if (props === "Audio"){
                        fullDescriptor += " Audio"
                    }
                    else if (props === "Auto"){
                        fullDescriptor += " Auto"
                    }
                    else if (props === "Automation"){
                        fullDescriptor += " Automation"
                    }
                    else if (props === "Auxiliary"){
                        fullDescriptor += " Auxiliary"
                    }
                    else if (props === "Away"){
                        fullDescriptor += " Away"
                    }
                    else if (props === "Babys"){
                        fullDescriptor += " Babys"
                    }
                    else if (props === "Back"){
                        fullDescriptor += " Back"
                    }
                    else if (props === "Balcony"){
                        fullDescriptor += " Balcony"
                    }
                    else if (props === "Basement"){
                        fullDescriptor += " Basement"
                    }
                    else if (props === "Bathroom"){
                        fullDescriptor += " Bathroom"
                    }
                    else if (props === "Battery"){
                        fullDescriptor += " Battery"
                    }
                    else if (props === "Bedroom"){
                        fullDescriptor += " Bedroom"
                    }
                    else if (props === "Bell"){
                        fullDescriptor += " Bell"
                    }
                    else if (props === "Bonus"){
                        fullDescriptor += " Bonus"
                    }
                    else if (props === "Boys"){
                        fullDescriptor += " Boys"
                    }
                    else if (props === "Break"){
                        fullDescriptor += " Break"
                    }
                    else if (props === "Button"){
                        fullDescriptor += " Button"
                    }
                    else if (props === "Bypass"){
                        fullDescriptor += " Bypass"
                    }
                    else if (props === "Bypassed"){
                        fullDescriptor += " Bypassed"
                    }
                    else if (props === "Camera"){
                        fullDescriptor += " Camera"
                    }
                    else if (props === "Cabinet"){
                        fullDescriptor += " Cabinet"
                    }
                    else if (props === "Cancel"){
                        fullDescriptor += " Cancel"
                    }
                    else if (props === "Carbon_monoxide"){
                        fullDescriptor += " Carbon_monoxide"
                    }
                    else if (props === "Cave"){
                        fullDescriptor += " Cave"
                    }
                    else if (props === "Cell_radio"){
                        fullDescriptor += " Cell_radio"
                    }
                    else if (props === "Cellular"){
                        fullDescriptor += " Cellular"
                    }
                    else if (props === "Center"){
                        fullDescriptor += " Center"
                    }
                    else if (props === "Check"){
                        fullDescriptor += " Check"
                    }
                    else if (props === "Chest"){
                        fullDescriptor += " Chest"
                    }
                    else if (props === "Childrens"){
                        fullDescriptor += " Childrens"
                    }
                    else if (props === "Chime"){
                        fullDescriptor += " Chime"
                    }
                    else if (props === "Closet"){
                        fullDescriptor += " Closet"
                    }
                    else if (props === "Code"){
                        fullDescriptor += " Code"
                    }
                    else if (props === "Communications"){
                        fullDescriptor += " Communications"
                    }
                    else if (props === "Computer"){
                        fullDescriptor += " Computer"
                    }
                    else if (props === "Control"){
                        fullDescriptor += " Control"
                    }
                    else if (props === "Cool"){
                        fullDescriptor += " Cool"
                    }
                    else if (props === "Corner"){
                        fullDescriptor += " Corner"
                    }
                    else if (props === "Courtyard"){
                        fullDescriptor += " Courtyard"
                    }
                    else if (props === "Crawl"){
                        fullDescriptor += " Crawl"
                    }
                    else if (props === "Current"){
                        fullDescriptor += " Current"
                    }
                    else if (props === "Daughters"){
                        fullDescriptor += " Daughters"
                    }
                    else if (props === "Day"){
                        fullDescriptor += " Day"
                    }
                    else if (props === "Deck"){
                        fullDescriptor += " Deck"
                    }
                    else if (props === "Degrees"){
                        fullDescriptor += " Degrees"
                    }
                    else if (props === "Den"){
                        fullDescriptor += " Den"
                    }
                    else if (props === "Detached"){
                        fullDescriptor += " Detached"
                    }
                    else if (props === "Detector"){
                        fullDescriptor += " Detector"
                    }
                    else if (props === "Dim"){
                        fullDescriptor += " Dim"
                    }
                    else if (props === "Dining"){
                        fullDescriptor += " Dining"
                    }
                    else if (props === "Disarm"){
                        fullDescriptor += " Disarm"
                    }
                    else if (props === "Disarmed"){
                        fullDescriptor += " Disarmed"
                    }
                    else if (props === "Dock"){
                        fullDescriptor += " Dock"
                    }
                    else if (props === "Door"){
                        fullDescriptor += " Door"
                    }
                    else if (props === "Doorbell"){
                        fullDescriptor += " Doorbell"
                    }
                    else if (props === "Downstairs"){
                        fullDescriptor += " Downstairs"
                    }
                    else if (props === "Driveway"){
                        fullDescriptor += " Driveway"
                    }
                    else if (props === "East"){
                        fullDescriptor += " East"
                    }
                    else if (props === "Eight"){
                        fullDescriptor += " Eight"
                    }
                    else if (props === "Eighteen"){
                        fullDescriptor += " Eighteen"
                    }
                    else if (props === "Eighty"){
                        fullDescriptor += " Eighty"
                    }
                    else if (props === "Electric"){
                        fullDescriptor += " Electric"
                    }
                    else if (props === "Eleven"){
                        fullDescriptor += " Eleven"
                    }
                    else if (props === "Emergency"){
                        fullDescriptor += " Emergency"
                    }
                    else if (props === "Enter"){
                        fullDescriptor += " Enter"
                    }
                    else if (props === "Entrance"){
                        fullDescriptor += " Entrance"
                    }
                    else if (props === "Entry"){
                        fullDescriptor += " Entry"
                    }
                    else if (props === "Error"){
                        fullDescriptor += " Error"
                    }
                    else if (props === "Exercise"){
                        fullDescriptor += " Exercise"
                    }
                    else if (props === "Exit"){
                        fullDescriptor += " Exit"
                    }
                    else if (props === "Exit_now"){
                        fullDescriptor += " Exit_now"
                    }
                    else if (props === "Exterior"){
                        fullDescriptor += " Exterior"
                    }
                    else if (props === "External"){
                        fullDescriptor += " External"
                    }
                    else if (props === "Failure"){
                        fullDescriptor += " Failure"
                    }
                    else if (props === "Family"){
                        fullDescriptor += " Family"
                    }
                    else if (props === "Fan"){
                        fullDescriptor += " Fan"
                    }
                    else if (props === "Fifteen"){
                        fullDescriptor += " Fifteen"
                    }
                    else if (props === "Fifty"){
                        fullDescriptor += " Fifty"
                    }
                    else if (props === "Fire"){
                        fullDescriptor += " Fire"
                    }
                    else if (props === "Fire_alert"){
                        fullDescriptor += " Fire_alert"
                    }
                    else if (props === "Fire_detector"){
                        fullDescriptor += " Fire_detector"
                    }
                    else if (props === "First"){
                        fullDescriptor += " First"
                    }
                    else if (props === "Five"){
                        fullDescriptor += " Five"
                    }
                    else if (props === "Flood"){
                        fullDescriptor += " Flood"
                    }
                    else if (props === "Floor"){
                        fullDescriptor += " Floor"
                    }
                    else if (props === "Fluid"){
                        fullDescriptor += " Fluid"
                    }
                    else if (props === "Foil"){
                        fullDescriptor += " Foil"
                    }
                    else if (props === "For"){
                        fullDescriptor += " For"
                    }
                    else if (props === "Fourty"){
                        fullDescriptor += " Fourty"
                    }
                    else if (props === "Four"){
                        fullDescriptor += " Four"
                    }
                    else if (props === "Fourteen"){
                        fullDescriptor += " Fourteen"
                    }
                    else if (props === "Forth"){
                        fullDescriptor += " Forth"
                    }
                    else if (props === "Foyer"){
                        fullDescriptor += " Foyer"
                    }
                    else if (props === "Freeze"){
                        fullDescriptor += " Freeze"
                    }
                    else if (props === "Freezer"){
                        fullDescriptor += " Freezer"
                    }
                    else if (props === "Front"){
                        fullDescriptor += " Front"
                    }
                    else if (props === "Furnace"){
                        fullDescriptor += " Furnace"
                    }
                    else if (props === "Game"){
                        fullDescriptor += " Game"
                    }
                    else if (props === "Garage"){
                        fullDescriptor += " Garage"
                    }
                    else if (props === "Gas"){
                        fullDescriptor += " Gas"
                    }
                    else if (props === "Gate"){
                        fullDescriptor += " Gate"
                    }
                    else if (props === "Girls"){
                        fullDescriptor += " Girls"
                    }
                    else if (props === "Glass"){
                        fullDescriptor += " Glass"
                    }
                    else if (props === "Glass_break"){
                        fullDescriptor += " Glass_break"
                    }
                    else if (props === "Guest"){
                        fullDescriptor += " Guest"
                    }
                    else if (props === "Gun"){
                        fullDescriptor += " Gun"
                    }
                    else if (props === "Hall"){
                        fullDescriptor += " Hall"
                    }
                    else if (props === "Hallway"){
                        fullDescriptor += " Hallway"
                    }
                    else if (props === "Hang_up"){
                        fullDescriptor += " Hang_up"
                    }
                    else if (props === "Hanging"){
                        fullDescriptor += " Hanging"
                    }
                    else if (props === "Heat"){
                        fullDescriptor += " Heat"
                    }
                    else if (props === "High"){
                        fullDescriptor += " High"
                    }
                    else if (props === "Home"){
                        fullDescriptor += " Home"
                    }
                    else if (props === "House"){
                        fullDescriptor += " House"
                    }
                    else if (props === "Ice"){
                        fullDescriptor += " Ice"
                    }
                    else if (props === "Image"){
                        fullDescriptor += " Image"
                    }
                    else if (props === "Image_sensor"){
                        fullDescriptor += " Image_sensor"
                    }
                    else if (props === "Inside"){
                        fullDescriptor += " Inside"
                    }
                    else if (props === "Instant"){
                        fullDescriptor += " Instant"
                    }
                    else if (props === "Interior"){
                        fullDescriptor += " Interior"
                    }
                    else if (props === "Intrusion"){
                        fullDescriptor += " Intrusion"
                    }
                    else if (props === "Is"){
                        fullDescriptor += " Is"
                    }
                    else if (props === "Key"){
                        fullDescriptor += " Key"
                    }
                    else if (props === "Keyfob"){
                        fullDescriptor += " Keyfob"
                    }
                    else if (props === "Keypads"){
                        fullDescriptor += " Keypads"
                    }
                    else if (props === "Kids"){
                        fullDescriptor += " Kids"
                    }
                    else if (props === "Kitchen"){
                        fullDescriptor += " Kitchen"
                    }
                    else if (props === "Laundry"){
                        fullDescriptor += " Laundry"
                    }
                    else if (props === "Left"){
                        fullDescriptor += " Left"
                    }
                    else if (props === "Level"){
                        fullDescriptor += " Level"
                    }
                    else if (props === "Library"){
                        fullDescriptor += " Library"
                    }
                    else if (props === "Light"){
                        fullDescriptor += " Light"
                    }
                    else if (props === "Lights"){
                        fullDescriptor += " Lights"
                    }
                    else if (props === "Liquor"){
                        fullDescriptor += " Liquor"
                    }
                    else if (props === "Living"){
                        fullDescriptor += " Living"
                    }
                    else if (props === "Loading"){
                        fullDescriptor += " Loading"
                    }
                    else if (props === "Lock"){
                        fullDescriptor += " Lock"
                    }
                    else if (props === "Loft"){
                        fullDescriptor += " Loft"
                    }
                    else if (props === "Low"){
                        fullDescriptor += " Low"
                    }
                    else if (props === "Main"){
                        fullDescriptor += " Main"
                    }
                    else if (props === "Maintenance"){
                        fullDescriptor += " Maintenance"
                    }
                    else if (props === "Man"){
                        fullDescriptor += " Man"
                    }
                    else if (props === "Master"){
                        fullDescriptor += " Master"
                    }
                    else if (props === "Medical"){
                        fullDescriptor += " Medical"
                    }
                    else if (props === "Medicine"){
                        fullDescriptor += " Medicine"
                    }
                    else if (props === "Menu"){
                        fullDescriptor += " Menu"
                    }
                    else if (props === "Middle"){
                        fullDescriptor += " Middle"
                    }
                    else if (props === "Monitor"){
                        fullDescriptor += " Monitor"
                    }
                    else if (props === "Motion"){
                        fullDescriptor += " Motion"
                    }
                    else if (props === "Motion_detector"){
                        fullDescriptor += " Motion_detector"
                    }
                    else if (props === "Mud"){
                        fullDescriptor += " Mud"
                    }
                    else if (props === "Nine"){
                        fullDescriptor += " Nine"
                    }
                    else if (props === "Nineteen"){
                        fullDescriptor += " Nineteen"
                    }
                    else if (props === "Ninety"){
                        fullDescriptor += " Ninety"
                    }
                    else if (props === "No_delay"){
                        fullDescriptor += " No_delay"
                    }
                    else if (props === "No_entry_delay"){
                        fullDescriptor += " No_entry_delay"
                    }
                    else if (props === "North"){
                        fullDescriptor += " North"
                    }
                    else if (props === "Not"){
                        fullDescriptor += " Not"
                    }
                    else if (props === "Not_ready"){
                        fullDescriptor += " Not_ready"
                    }
                    else if (props === "Nursery"){
                        fullDescriptor += " Nursery"
                    }
                    else if (props === "Off"){
                        fullDescriptor += " Off"
                    }
                    else if (props === "Office"){
                        fullDescriptor += " Office"
                    }
                    else if (props === "On"){
                        fullDescriptor += " On"
                    }
                    else if (props === "One"){
                        fullDescriptor += " One"
                    }
                    else if (props === "One_hundred"){
                        fullDescriptor += " One_hundred"
                    }
                    else if (props === "Output"){
                        fullDescriptor += " Output"
                    }
                    else if (props === "Outside"){
                        fullDescriptor += " Outside"
                    }
                    else if (props === "Overhead"){
                        fullDescriptor += " Overhead"
                    }
                    else if (props === "Panel"){
                        fullDescriptor += " Panel"
                    }
                    else if (props === "Panic"){
                        fullDescriptor += " Panic"
                    }
                    else if (props === "Pantry"){
                        fullDescriptor += " Pantry"
                    }
                    else if (props === "Patio"){
                        fullDescriptor += " Patio"
                    }
                    else if (props === "Perimeter"){
                        fullDescriptor += " Perimeter"
                    }
                    else if (props === "Phone_line"){
                        fullDescriptor += " Phone_line"
                    }
                    else if (props === "Play"){
                        fullDescriptor += " Play"
                    }
                    else if (props === "Police"){
                        fullDescriptor += " Police"
                    }
                    else if (props === "Pool"){
                        fullDescriptor += " Pool"
                    }
                    else if (props === "Porch"){
                        fullDescriptor += " Porch"
                    }
                    else if (props === "Pound"){
                        fullDescriptor += " Pound"
                    }
                    else if (props === "Power"){
                        fullDescriptor += " Power"
                    }
                    else if (props === "Press"){
                        fullDescriptor += " Press"
                    }
                    else if (props === "Previous"){
                        fullDescriptor += " Previous"
                    }
                    else if (props === "Pump"){
                        fullDescriptor += " Pump"
                    }
                    else if (props === "Radio"){
                        fullDescriptor += " Radio"
                    }
                    else if (props === "Ready"){
                        fullDescriptor += " Ready"
                    }
                    else if (props === "Rear"){
                        fullDescriptor += " Rear"
                    }
                    else if (props === "Refrigerator"){
                        fullDescriptor += " Refrigerator"
                    }
                    else if (props === "Relay"){
                        fullDescriptor += " Relay"
                    }
                    else if (props === "Remote"){
                        fullDescriptor += " Remote"
                    }
                    else if (props === "Repeat"){
                        fullDescriptor += " Repeat"
                    }
                    else if (props === "Rf_jam"){
                        fullDescriptor += " Rf_jam"
                    }
                    else if (props === "Right"){
                        fullDescriptor += " Right"
                    }
                    else if (props === "Room"){
                        fullDescriptor += " Room"
                    }
                    else if (props === "Safe"){
                        fullDescriptor += " Safe"
                    }
                    else if (props === "Second"){
                        fullDescriptor += " Second"
                    }
                    else if (props === "Security"){
                        fullDescriptor += " Security"
                    }
                    else if (props === "Sensor"){
                        fullDescriptor += " Sensor"
                    }
                    else if (props === "Sensors"){
                        fullDescriptor += " Sensors"
                    }
                    else if (props === "Service"){
                        fullDescriptor += " Service"
                    }
                    else if (props === "Session"){
                        fullDescriptor += " Session"
                    }
                    else if (props === "Set"){
                        fullDescriptor += " Set"
                    }
                    else if (props === "Seven"){
                        fullDescriptor += " Seven"
                    }
                    else if (props === "Seventeen"){
                        fullDescriptor += " Seventeen"
                    }
                    else if (props === "Seventy"){
                        fullDescriptor += " Seventy"
                    }
                    else if (props === "Shed"){
                        fullDescriptor += " Shed"
                    }
                    else if (props === "Shop"){
                        fullDescriptor += " Shop"
                    }
                    else if (props === "Side"){
                        fullDescriptor += " Side"
                    }
                    else if (props === "Silent"){
                        fullDescriptor += " Silent"
                    }
                    else if (props === "Siren"){
                        fullDescriptor += " Siren"
                    }
                    else if (props === "Six"){
                        fullDescriptor += " Six"
                    }
                    else if (props === "Sixteen"){
                        fullDescriptor += " Sixteen"
                    }
                    else if (props === "Sixty"){
                        fullDescriptor += " Sixty"
                    }
                    else if (props === "Skylight"){
                        fullDescriptor += " Skylight"
                    }
                    else if (props === "Sliding"){
                        fullDescriptor += " Sliding"
                    }
                    else if (props === "Smoke"){
                        fullDescriptor += " Smoke"
                    }
                    else if (props === "Sons"){
                        fullDescriptor += " Sons"
                    }
                    else if (props === "Sounder"){
                        fullDescriptor += " Sounder"
                    }
                    else if (props === "South"){
                        fullDescriptor += " South"
                    }
                    else if (props === "Space"){
                        fullDescriptor += " Space"
                    }
                    else if (props === "Spare"){
                        fullDescriptor += " Spare"
                    }
                    else if (props === "Stairs"){
                        fullDescriptor += " Stairs"
                    }
                    else if (props === "Star"){
                        fullDescriptor += " Star"
                    }
                    else if (props === "Status"){
                        fullDescriptor += " Status"
                    }
                    else if (props === "Stay"){
                        fullDescriptor += " Stay"
                    }
                    else if (props === "Stop"){
                        fullDescriptor += " Shop"
                    }
                    else if (props === "Storage"){
                        fullDescriptor += " Storage"
                    }
                    else if (props === "Study"){
                        fullDescriptor += " Study"
                    }
                    else if (props === "Sump"){
                        fullDescriptor += " Sump"
                    }
                    else if (props === "Sun"){
                        fullDescriptor += " Sun"
                    }
                    else if (props === "Sunroom"){
                        fullDescriptor += " Sunroom"
                    }
                    else if (props === "Supervision"){
                        fullDescriptor += " Supervision"
                    }
                    else if (props === "Switch"){
                        fullDescriptor += " Switch"
                    }
                    else if (props === "System"){
                        fullDescriptor += " System"
                    }
                    else if (props === "Tamper"){
                        fullDescriptor += " Tamper"
                    }
                    else if (props === "Temperature"){
                        fullDescriptor += " Temperature"
                    }
                    else if (props === "Ten"){
                        fullDescriptor += " Ten"
                    }
                    else if (props === "Terminated"){
                        fullDescriptor += " Terminated"
                    }
                    else if (props === "Theater"){
                        fullDescriptor += " Theater"
                    }
                    else if (props === "Thermostat"){
                        fullDescriptor += " Thermostat"
                    }
                    else if (props === "Third"){
                        fullDescriptor += " Third"
                    }
                    else if (props === "Thirteen"){
                        fullDescriptor += " Thirteen"
                    }
                    else if (props === "Thirty"){
                        fullDescriptor += " Thirty"
                    }
                    else if (props === "Three"){
                        fullDescriptor += " Three"
                    }
                    else if (props === "To"){
                        fullDescriptor += " To"
                    }
                    else if (props === "Tool"){
                        fullDescriptor += " Tool"
                    }
                    else if (props === "Transmitted"){
                        fullDescriptor += " Transmitted"
                    }
                    else if (props === "Transmitter"){
                        fullDescriptor += " Transmitter"
                    }
                    else if (props === "Trouble"){
                        fullDescriptor += " Trouble"
                    }
                    else if (props === "Turn"){
                        fullDescriptor += " Turn"
                    }
                    else if (props === "Tv"){
                        fullDescriptor += " Tv"
                    }
                    else if (props === "Twelve"){
                        fullDescriptor += " Twelve"
                    }
                    else if (props === "Twenty"){
                        fullDescriptor += " Twenty"
                    }
                    else if (props === "Two"){
                        fullDescriptor += " Two"
                    }
                    else if (props === "Unlock"){
                        fullDescriptor += " Unlock"
                    }
                    else if (props === "Upper"){
                        fullDescriptor += " Upper"
                    }
                    else if (props === "Upstairs"){
                        fullDescriptor += " Upstairs"
                    }
                    else if (props === "User"){
                        fullDescriptor += " User"
                    }
                    else if (props === "Utility"){
                        fullDescriptor += " Utility"
                    }
                    else if (props === "Valve"){
                        fullDescriptor += " Valve"
                    }
                    else if (props === "Video"){
                        fullDescriptor += " Video"
                    }
                    else if (props === "Voice"){
                        fullDescriptor += " Voice"
                    }
                    else if (props === "Wall"){
                        fullDescriptor += " Wall"
                    }
                    else if (props === "Warehouse"){
                        fullDescriptor += " Warehouse"
                    }
                    else if (props === "Water"){
                        fullDescriptor += " Water"
                    }
                    else if (props === "West"){
                        fullDescriptor += " West"
                    }
                    else if (props === "Window"){
                        fullDescriptor += " Window"
                    }
                    else if (props === "Wing"){
                        fullDescriptor += " Wing"
                    }
                    else if (props === "Wireless"){
                        fullDescriptor += " Wireless"
                    }
                    else if (props === "Yard"){
                        fullDescriptor += " Yard"
                    }
                    else if (props === "Zero"){
                        fullDescriptor += " Zero"
                    }
                    else if (props === "Zone"){
                        fullDescriptor += " Zone"
                    }
                }
                else{
                    return (
                        <p className="css-grid-align-right" style={{'color':"#404956"}}>{fullDescriptor}</p>
                    )
                }
            }
            else{
                break
            }
        }
        else if (i === 4){
            if (i !== ""){
                if (i !== ""){
                    if (props === "Abort"){
                        fullDescriptor += " Abort"
                    }
                    else if (props === "Ac"){
                        fullDescriptor += " Ac"
                    }
                    else if (props === "Access"){
                        fullDescriptor += " Access"
                    }
                    else if (props === "Alarm"){
                        fullDescriptor += " Alarm"
                    }
                    else if (props === "And"){
                        fullDescriptor += " And"
                    }
                    else if (props === "Anouncement"){
                        fullDescriptor += " Announcement"
                    }
                    else if (props === "Apartment"){
                        fullDescriptor += " Apartment"
                    }
                    else if (props === "Area"){
                        fullDescriptor += " Area"
                    }
                    else if (props === "Arm"){
                        fullDescriptor += " Arm"
                    }
                    else if (props === "Armed"){
                        fullDescriptor += " Armed"
                    }
                    else if (props === "At"){
                        fullDescriptor += " At"
                    }
                    else if (props === "Attic"){
                        fullDescriptor += " Attic"
                    }
                    else if (props === "Audio"){
                        fullDescriptor += " Audio"
                    }
                    else if (props === "Auto"){
                        fullDescriptor += " Auto"
                    }
                    else if (props === "Automation"){
                        fullDescriptor += " Automation"
                    }
                    else if (props === "Auxiliary"){
                        fullDescriptor += " Auxiliary"
                    }
                    else if (props === "Away"){
                        fullDescriptor += " Away"
                    }
                    else if (props === "Babys"){
                        fullDescriptor += " Babys"
                    }
                    else if (props === "Back"){
                        fullDescriptor += " Back"
                    }
                    else if (props === "Balcony"){
                        fullDescriptor += " Balcony"
                    }
                    else if (props === "Basement"){
                        fullDescriptor += " Basement"
                    }
                    else if (props === "Bathroom"){
                        fullDescriptor += " Bathroom"
                    }
                    else if (props === "Battery"){
                        fullDescriptor += " Battery"
                    }
                    else if (props === "Bedroom"){
                        fullDescriptor += " Bedroom"
                    }
                    else if (props === "Bell"){
                        fullDescriptor += " Bell"
                    }
                    else if (props === "Bonus"){
                        fullDescriptor += " Bonus"
                    }
                    else if (props === "Boys"){
                        fullDescriptor += " Boys"
                    }
                    else if (props === "Break"){
                        fullDescriptor += " Break"
                    }
                    else if (props === "Button"){
                        fullDescriptor += " Button"
                    }
                    else if (props === "Bypass"){
                        fullDescriptor += " Bypass"
                    }
                    else if (props === "Bypassed"){
                        fullDescriptor += " Bypassed"
                    }
                    else if (props === "Camera"){
                        fullDescriptor += " Camera"
                    }
                    else if (props === "Cabinet"){
                        fullDescriptor += " Cabinet"
                    }
                    else if (props === "Cancel"){
                        fullDescriptor += " Cancel"
                    }
                    else if (props === "Carbon_monoxide"){
                        fullDescriptor += " Carbon_monoxide"
                    }
                    else if (props === "Cave"){
                        fullDescriptor += " Cave"
                    }
                    else if (props === "Cell_radio"){
                        fullDescriptor += " Cell_radio"
                    }
                    else if (props === "Cellular"){
                        fullDescriptor += " Cellular"
                    }
                    else if (props === "Center"){
                        fullDescriptor += " Center"
                    }
                    else if (props === "Check"){
                        fullDescriptor += " Check"
                    }
                    else if (props === "Chest"){
                        fullDescriptor += " Chest"
                    }
                    else if (props === "Childrens"){
                        fullDescriptor += " Childrens"
                    }
                    else if (props === "Chime"){
                        fullDescriptor += " Chime"
                    }
                    else if (props === "Closet"){
                        fullDescriptor += " Closet"
                    }
                    else if (props === "Code"){
                        fullDescriptor += " Code"
                    }
                    else if (props === "Communications"){
                        fullDescriptor += " Communications"
                    }
                    else if (props === "Computer"){
                        fullDescriptor += " Computer"
                    }
                    else if (props === "Control"){
                        fullDescriptor += " Control"
                    }
                    else if (props === "Cool"){
                        fullDescriptor += " Cool"
                    }
                    else if (props === "Corner"){
                        fullDescriptor += " Corner"
                    }
                    else if (props === "Courtyard"){
                        fullDescriptor += " Courtyard"
                    }
                    else if (props === "Crawl"){
                        fullDescriptor += " Crawl"
                    }
                    else if (props === "Current"){
                        fullDescriptor += " Current"
                    }
                    else if (props === "Daughters"){
                        fullDescriptor += " Daughters"
                    }
                    else if (props === "Day"){
                        fullDescriptor += " Day"
                    }
                    else if (props === "Deck"){
                        fullDescriptor += " Deck"
                    }
                    else if (props === "Degrees"){
                        fullDescriptor += " Degrees"
                    }
                    else if (props === "Den"){
                        fullDescriptor += " Den"
                    }
                    else if (props === "Detached"){
                        fullDescriptor += " Detached"
                    }
                    else if (props === "Detector"){
                        fullDescriptor += " Detector"
                    }
                    else if (props === "Dim"){
                        fullDescriptor += " Dim"
                    }
                    else if (props === "Dining"){
                        fullDescriptor += " Dining"
                    }
                    else if (props === "Disarm"){
                        fullDescriptor += " Disarm"
                    }
                    else if (props === "Disarmed"){
                        fullDescriptor += " Disarmed"
                    }
                    else if (props === "Dock"){
                        fullDescriptor += " Dock"
                    }
                    else if (props === "Door"){
                        fullDescriptor += " Door"
                    }
                    else if (props === "Doorbell"){
                        fullDescriptor += " Doorbell"
                    }
                    else if (props === "Downstairs"){
                        fullDescriptor += " Downstairs"
                    }
                    else if (props === "Driveway"){
                        fullDescriptor += " Driveway"
                    }
                    else if (props === "East"){
                        fullDescriptor += " East"
                    }
                    else if (props === "Eight"){
                        fullDescriptor += " Eight"
                    }
                    else if (props === "Eighteen"){
                        fullDescriptor += " Eighteen"
                    }
                    else if (props === "Eighty"){
                        fullDescriptor += " Eighty"
                    }
                    else if (props === "Electric"){
                        fullDescriptor += " Electric"
                    }
                    else if (props === "Eleven"){
                        fullDescriptor += " Eleven"
                    }
                    else if (props === "Emergency"){
                        fullDescriptor += " Emergency"
                    }
                    else if (props === "Enter"){
                        fullDescriptor += " Enter"
                    }
                    else if (props === "Entrance"){
                        fullDescriptor += " Entrance"
                    }
                    else if (props === "Entry"){
                        fullDescriptor += " Entry"
                    }
                    else if (props === "Error"){
                        fullDescriptor += " Error"
                    }
                    else if (props === "Exercise"){
                        fullDescriptor += " Exercise"
                    }
                    else if (props === "Exit"){
                        fullDescriptor += " Exit"
                    }
                    else if (props === "Exit_now"){
                        fullDescriptor += " Exit_now"
                    }
                    else if (props === "Exterior"){
                        fullDescriptor += " Exterior"
                    }
                    else if (props === "External"){
                        fullDescriptor += " External"
                    }
                    else if (props === "Failure"){
                        fullDescriptor += " Failure"
                    }
                    else if (props === "Family"){
                        fullDescriptor += " Family"
                    }
                    else if (props === "Fan"){
                        fullDescriptor += " Fan"
                    }
                    else if (props === "Fifteen"){
                        fullDescriptor += " Fifteen"
                    }
                    else if (props === "Fifty"){
                        fullDescriptor += " Fifty"
                    }
                    else if (props === "Fire"){
                        fullDescriptor += " Fire"
                    }
                    else if (props === "Fire_alert"){
                        fullDescriptor += " Fire_alert"
                    }
                    else if (props === "Fire_detector"){
                        fullDescriptor += " Fire_detector"
                    }
                    else if (props === "First"){
                        fullDescriptor += " First"
                    }
                    else if (props === "Five"){
                        fullDescriptor += " Five"
                    }
                    else if (props === "Flood"){
                        fullDescriptor += " Flood"
                    }
                    else if (props === "Floor"){
                        fullDescriptor += " Floor"
                    }
                    else if (props === "Fluid"){
                        fullDescriptor += " Fluid"
                    }
                    else if (props === "Foil"){
                        fullDescriptor += " Foil"
                    }
                    else if (props === "For"){
                        fullDescriptor += " For"
                    }
                    else if (props === "Fourty"){
                        fullDescriptor += " Fourty"
                    }
                    else if (props === "Four"){
                        fullDescriptor += " Four"
                    }
                    else if (props === "Fourteen"){
                        fullDescriptor += " Fourteen"
                    }
                    else if (props === "Forth"){
                        fullDescriptor += " Forth"
                    }
                    else if (props === "Foyer"){
                        fullDescriptor += " Foyer"
                    }
                    else if (props === "Freeze"){
                        fullDescriptor += " Freeze"
                    }
                    else if (props === "Freezer"){
                        fullDescriptor += " Freezer"
                    }
                    else if (props === "Front"){
                        fullDescriptor += " Front"
                    }
                    else if (props === "Furnace"){
                        fullDescriptor += " Furnace"
                    }
                    else if (props === "Game"){
                        fullDescriptor += " Game"
                    }
                    else if (props === "Garage"){
                        fullDescriptor += " Garage"
                    }
                    else if (props === "Gas"){
                        fullDescriptor += " Gas"
                    }
                    else if (props === "Gate"){
                        fullDescriptor += " Gate"
                    }
                    else if (props === "Girls"){
                        fullDescriptor += " Girls"
                    }
                    else if (props === "Glass"){
                        fullDescriptor += " Glass"
                    }
                    else if (props === "Glass_break"){
                        fullDescriptor += " Glass_break"
                    }
                    else if (props === "Guest"){
                        fullDescriptor += " Guest"
                    }
                    else if (props === "Gun"){
                        fullDescriptor += " Gun"
                    }
                    else if (props === "Hall"){
                        fullDescriptor += " Hall"
                    }
                    else if (props === "Hallway"){
                        fullDescriptor += " Hallway"
                    }
                    else if (props === "Hang_up"){
                        fullDescriptor += " Hang_up"
                    }
                    else if (props === "Hanging"){
                        fullDescriptor += " Hanging"
                    }
                    else if (props === "Heat"){
                        fullDescriptor += " Heat"
                    }
                    else if (props === "High"){
                        fullDescriptor += " High"
                    }
                    else if (props === "Home"){
                        fullDescriptor += " Home"
                    }
                    else if (props === "House"){
                        fullDescriptor += " House"
                    }
                    else if (props === "Ice"){
                        fullDescriptor += " Ice"
                    }
                    else if (props === "Image"){
                        fullDescriptor += " Image"
                    }
                    else if (props === "Image_sensor"){
                        fullDescriptor += " Image_sensor"
                    }
                    else if (props === "Inside"){
                        fullDescriptor += " Inside"
                    }
                    else if (props === "Instant"){
                        fullDescriptor += " Instant"
                    }
                    else if (props === "Interior"){
                        fullDescriptor += " Interior"
                    }
                    else if (props === "Intrusion"){
                        fullDescriptor += " Intrusion"
                    }
                    else if (props === "Is"){
                        fullDescriptor += " Is"
                    }
                    else if (props === "Key"){
                        fullDescriptor += " Key"
                    }
                    else if (props === "Keyfob"){
                        fullDescriptor += " Keyfob"
                    }
                    else if (props === "Keypads"){
                        fullDescriptor += " Keypads"
                    }
                    else if (props === "Kids"){
                        fullDescriptor += " Kids"
                    }
                    else if (props === "Kitchen"){
                        fullDescriptor += " Kitchen"
                    }
                    else if (props === "Laundry"){
                        fullDescriptor += " Laundry"
                    }
                    else if (props === "Left"){
                        fullDescriptor += " Left"
                    }
                    else if (props === "Level"){
                        fullDescriptor += " Level"
                    }
                    else if (props === "Library"){
                        fullDescriptor += " Library"
                    }
                    else if (props === "Light"){
                        fullDescriptor += " Light"
                    }
                    else if (props === "Lights"){
                        fullDescriptor += " Lights"
                    }
                    else if (props === "Liquor"){
                        fullDescriptor += " Liquor"
                    }
                    else if (props === "Living"){
                        fullDescriptor += " Living"
                    }
                    else if (props === "Loading"){
                        fullDescriptor += " Loading"
                    }
                    else if (props === "Lock"){
                        fullDescriptor += " Lock"
                    }
                    else if (props === "Loft"){
                        fullDescriptor += " Loft"
                    }
                    else if (props === "Low"){
                        fullDescriptor += " Low"
                    }
                    else if (props === "Main"){
                        fullDescriptor += " Main"
                    }
                    else if (props === "Maintenance"){
                        fullDescriptor += " Maintenance"
                    }
                    else if (props === "Man"){
                        fullDescriptor += " Man"
                    }
                    else if (props === "Master"){
                        fullDescriptor += " Master"
                    }
                    else if (props === "Medical"){
                        fullDescriptor += " Medical"
                    }
                    else if (props === "Medicine"){
                        fullDescriptor += " Medicine"
                    }
                    else if (props === "Menu"){
                        fullDescriptor += " Menu"
                    }
                    else if (props === "Middle"){
                        fullDescriptor += " Middle"
                    }
                    else if (props === "Monitor"){
                        fullDescriptor += " Monitor"
                    }
                    else if (props === "Motion"){
                        fullDescriptor += " Motion"
                    }
                    else if (props === "Motion_detector"){
                        fullDescriptor += " Motion_detector"
                    }
                    else if (props === "Mud"){
                        fullDescriptor += " Mud"
                    }
                    else if (props === "Nine"){
                        fullDescriptor += " Nine"
                    }
                    else if (props === "Nineteen"){
                        fullDescriptor += " Nineteen"
                    }
                    else if (props === "Ninety"){
                        fullDescriptor += " Ninety"
                    }
                    else if (props === "No_delay"){
                        fullDescriptor += " No_delay"
                    }
                    else if (props === "No_entry_delay"){
                        fullDescriptor += " No_entry_delay"
                    }
                    else if (props === "North"){
                        fullDescriptor += " North"
                    }
                    else if (props === "Not"){
                        fullDescriptor += " Not"
                    }
                    else if (props === "Not_ready"){
                        fullDescriptor += " Not_ready"
                    }
                    else if (props === "Nursery"){
                        fullDescriptor += " Nursery"
                    }
                    else if (props === "Off"){
                        fullDescriptor += " Off"
                    }
                    else if (props === "Office"){
                        fullDescriptor += " Office"
                    }
                    else if (props === "On"){
                        fullDescriptor += " On"
                    }
                    else if (props === "One"){
                        fullDescriptor += " One"
                    }
                    else if (props === "One_hundred"){
                        fullDescriptor += " One_hundred"
                    }
                    else if (props === "Output"){
                        fullDescriptor += " Output"
                    }
                    else if (props === "Outside"){
                        fullDescriptor += " Outside"
                    }
                    else if (props === "Overhead"){
                        fullDescriptor += " Overhead"
                    }
                    else if (props === "Panel"){
                        fullDescriptor += " Panel"
                    }
                    else if (props === "Panic"){
                        fullDescriptor += " Panic"
                    }
                    else if (props === "Pantry"){
                        fullDescriptor += " Pantry"
                    }
                    else if (props === "Patio"){
                        fullDescriptor += " Patio"
                    }
                    else if (props === "Perimeter"){
                        fullDescriptor += " Perimeter"
                    }
                    else if (props === "Phone_line"){
                        fullDescriptor += " Phone_line"
                    }
                    else if (props === "Play"){
                        fullDescriptor += " Play"
                    }
                    else if (props === "Police"){
                        fullDescriptor += " Police"
                    }
                    else if (props === "Pool"){
                        fullDescriptor += " Pool"
                    }
                    else if (props === "Porch"){
                        fullDescriptor += " Porch"
                    }
                    else if (props === "Pound"){
                        fullDescriptor += " Pound"
                    }
                    else if (props === "Power"){
                        fullDescriptor += " Power"
                    }
                    else if (props === "Press"){
                        fullDescriptor += " Press"
                    }
                    else if (props === "Previous"){
                        fullDescriptor += " Previous"
                    }
                    else if (props === "Pump"){
                        fullDescriptor += " Pump"
                    }
                    else if (props === "Radio"){
                        fullDescriptor += " Radio"
                    }
                    else if (props === "Ready"){
                        fullDescriptor += " Ready"
                    }
                    else if (props === "Rear"){
                        fullDescriptor += " Rear"
                    }
                    else if (props === "Refrigerator"){
                        fullDescriptor += " Refrigerator"
                    }
                    else if (props === "Relay"){
                        fullDescriptor += " Relay"
                    }
                    else if (props === "Remote"){
                        fullDescriptor += " Remote"
                    }
                    else if (props === "Repeat"){
                        fullDescriptor += " Repeat"
                    }
                    else if (props === "Rf_jam"){
                        fullDescriptor += " Rf_jam"
                    }
                    else if (props === "Right"){
                        fullDescriptor += " Right"
                    }
                    else if (props === "Room"){
                        fullDescriptor += " Room"
                    }
                    else if (props === "Safe"){
                        fullDescriptor += " Safe"
                    }
                    else if (props === "Second"){
                        fullDescriptor += " Second"
                    }
                    else if (props === "Security"){
                        fullDescriptor += " Security"
                    }
                    else if (props === "Sensor"){
                        fullDescriptor += " Sensor"
                    }
                    else if (props === "Sensors"){
                        fullDescriptor += " Sensors"
                    }
                    else if (props === "Service"){
                        fullDescriptor += " Service"
                    }
                    else if (props === "Session"){
                        fullDescriptor += " Session"
                    }
                    else if (props === "Set"){
                        fullDescriptor += " Set"
                    }
                    else if (props === "Seven"){
                        fullDescriptor += " Seven"
                    }
                    else if (props === "Seventeen"){
                        fullDescriptor += " Seventeen"
                    }
                    else if (props === "Seventy"){
                        fullDescriptor += " Seventy"
                    }
                    else if (props === "Shed"){
                        fullDescriptor += " Shed"
                    }
                    else if (props === "Shop"){
                        fullDescriptor += " Shop"
                    }
                    else if (props === "Side"){
                        fullDescriptor += " Side"
                    }
                    else if (props === "Silent"){
                        fullDescriptor += " Silent"
                    }
                    else if (props === "Siren"){
                        fullDescriptor += " Siren"
                    }
                    else if (props === "Six"){
                        fullDescriptor += " Six"
                    }
                    else if (props === "Sixteen"){
                        fullDescriptor += " Sixteen"
                    }
                    else if (props === "Sixty"){
                        fullDescriptor += " Sixty"
                    }
                    else if (props === "Skylight"){
                        fullDescriptor += " Skylight"
                    }
                    else if (props === "Sliding"){
                        fullDescriptor += " Sliding"
                    }
                    else if (props === "Smoke"){
                        fullDescriptor += " Smoke"
                    }
                    else if (props === "Sons"){
                        fullDescriptor += " Sons"
                    }
                    else if (props === "Sounder"){
                        fullDescriptor += " Sounder"
                    }
                    else if (props === "South"){
                        fullDescriptor += " South"
                    }
                    else if (props === "Space"){
                        fullDescriptor += " Space"
                    }
                    else if (props === "Spare"){
                        fullDescriptor += " Spare"
                    }
                    else if (props === "Stairs"){
                        fullDescriptor += " Stairs"
                    }
                    else if (props === "Star"){
                        fullDescriptor += " Star"
                    }
                    else if (props === "Status"){
                        fullDescriptor += " Status"
                    }
                    else if (props === "Stay"){
                        fullDescriptor += " Stay"
                    }
                    else if (props === "Stop"){
                        fullDescriptor += " Shop"
                    }
                    else if (props === "Storage"){
                        fullDescriptor += " Storage"
                    }
                    else if (props === "Study"){
                        fullDescriptor += " Study"
                    }
                    else if (props === "Sump"){
                        fullDescriptor += " Sump"
                    }
                    else if (props === "Sun"){
                        fullDescriptor += " Sun"
                    }
                    else if (props === "Sunroom"){
                        fullDescriptor += " Sunroom"
                    }
                    else if (props === "Supervision"){
                        fullDescriptor += " Supervision"
                    }
                    else if (props === "Switch"){
                        fullDescriptor += " Switch"
                    }
                    else if (props === "System"){
                        fullDescriptor += " System"
                    }
                    else if (props === "Tamper"){
                        fullDescriptor += " Tamper"
                    }
                    else if (props === "Temperature"){
                        fullDescriptor += " Temperature"
                    }
                    else if (props === "Ten"){
                        fullDescriptor += " Ten"
                    }
                    else if (props === "Terminated"){
                        fullDescriptor += " Terminated"
                    }
                    else if (props === "Theater"){
                        fullDescriptor += " Theater"
                    }
                    else if (props === "Thermostat"){
                        fullDescriptor += " Thermostat"
                    }
                    else if (props === "Third"){
                        fullDescriptor += " Third"
                    }
                    else if (props === "Thirteen"){
                        fullDescriptor += " Thirteen"
                    }
                    else if (props === "Thirty"){
                        fullDescriptor += " Thirty"
                    }
                    else if (props === "Three"){
                        fullDescriptor += " Three"
                    }
                    else if (props === "To"){
                        fullDescriptor += " To"
                    }
                    else if (props === "Tool"){
                        fullDescriptor += " Tool"
                    }
                    else if (props === "Transmitted"){
                        fullDescriptor += " Transmitted"
                    }
                    else if (props === "Transmitter"){
                        fullDescriptor += " Transmitter"
                    }
                    else if (props === "Trouble"){
                        fullDescriptor += " Trouble"
                    }
                    else if (props === "Turn"){
                        fullDescriptor += " Turn"
                    }
                    else if (props === "Tv"){
                        fullDescriptor += " Tv"
                    }
                    else if (props === "Twelve"){
                        fullDescriptor += " Twelve"
                    }
                    else if (props === "Twenty"){
                        fullDescriptor += " Twenty"
                    }
                    else if (props === "Two"){
                        fullDescriptor += " Two"
                    }
                    else if (props === "Unlock"){
                        fullDescriptor += " Unlock"
                    }
                    else if (props === "Upper"){
                        fullDescriptor += " Upper"
                    }
                    else if (props === "Upstairs"){
                        fullDescriptor += " Upstairs"
                    }
                    else if (props === "User"){
                        fullDescriptor += " User"
                    }
                    else if (props === "Utility"){
                        fullDescriptor += " Utility"
                    }
                    else if (props === "Valve"){
                        fullDescriptor += " Valve"
                    }
                    else if (props === "Video"){
                        fullDescriptor += " Video"
                    }
                    else if (props === "Voice"){
                        fullDescriptor += " Voice"
                    }
                    else if (props === "Wall"){
                        fullDescriptor += " Wall"
                    }
                    else if (props === "Warehouse"){
                        fullDescriptor += " Warehouse"
                    }
                    else if (props === "Water"){
                        fullDescriptor += " Water"
                    }
                    else if (props === "West"){
                        fullDescriptor += " West"
                    }
                    else if (props === "Window"){
                        fullDescriptor += " Window"
                    }
                    else if (props === "Wing"){
                        fullDescriptor += " Wing"
                    }
                    else if (props === "Wireless"){
                        fullDescriptor += " Wireless"
                    }
                    else if (props === "Yard"){
                        fullDescriptor += " Yard"
                    }
                    else if (props === "Zero"){
                        fullDescriptor += " Zero"
                    }
                    else if (props === "Zone"){
                        fullDescriptor += " Zone"
                    }
                }
                else{
                    return (
                        <p className="css-grid-align-right" style={{'color':"#404956"}}>{fullDescriptor}</p>
                    )
                }
            }
            else{
                break
            }
        }
        else if (i === 5){
            if (i !== ""){
                if (i !== ""){
                    if (props === "Abort"){
                        fullDescriptor += " Abort"
                    }
                    else if (props === "Ac"){
                        fullDescriptor += " Ac"
                    }
                    else if (props === "Access"){
                        fullDescriptor += " Access"
                    }
                    else if (props === "Alarm"){
                        fullDescriptor += " Alarm"
                    }
                    else if (props === "And"){
                        fullDescriptor += " And"
                    }
                    else if (props === "Anouncement"){
                        fullDescriptor += " Announcement"
                    }
                    else if (props === "Apartment"){
                        fullDescriptor += " Apartment"
                    }
                    else if (props === "Area"){
                        fullDescriptor += " Area"
                    }
                    else if (props === "Arm"){
                        fullDescriptor += " Arm"
                    }
                    else if (props === "Armed"){
                        fullDescriptor += " Armed"
                    }
                    else if (props === "At"){
                        fullDescriptor += " At"
                    }
                    else if (props === "Attic"){
                        fullDescriptor += " Attic"
                    }
                    else if (props === "Audio"){
                        fullDescriptor += " Audio"
                    }
                    else if (props === "Auto"){
                        fullDescriptor += " Auto"
                    }
                    else if (props === "Automation"){
                        fullDescriptor += " Automation"
                    }
                    else if (props === "Auxiliary"){
                        fullDescriptor += " Auxiliary"
                    }
                    else if (props === "Away"){
                        fullDescriptor += " Away"
                    }
                    else if (props === "Babys"){
                        fullDescriptor += " Babys"
                    }
                    else if (props === "Back"){
                        fullDescriptor += " Back"
                    }
                    else if (props === "Balcony"){
                        fullDescriptor += " Balcony"
                    }
                    else if (props === "Basement"){
                        fullDescriptor += " Basement"
                    }
                    else if (props === "Bathroom"){
                        fullDescriptor += " Bathroom"
                    }
                    else if (props === "Battery"){
                        fullDescriptor += " Battery"
                    }
                    else if (props === "Bedroom"){
                        fullDescriptor += " Bedroom"
                    }
                    else if (props === "Bell"){
                        fullDescriptor += " Bell"
                    }
                    else if (props === "Bonus"){
                        fullDescriptor += " Bonus"
                    }
                    else if (props === "Boys"){
                        fullDescriptor += " Boys"
                    }
                    else if (props === "Break"){
                        fullDescriptor += " Break"
                    }
                    else if (props === "Button"){
                        fullDescriptor += " Button"
                    }
                    else if (props === "Bypass"){
                        fullDescriptor += " Bypass"
                    }
                    else if (props === "Bypassed"){
                        fullDescriptor += " Bypassed"
                    }
                    else if (props === "Camera"){
                        fullDescriptor += " Camera"
                    }
                    else if (props === "Cabinet"){
                        fullDescriptor += " Cabinet"
                    }
                    else if (props === "Cancel"){
                        fullDescriptor += " Cancel"
                    }
                    else if (props === "Carbon_monoxide"){
                        fullDescriptor += " Carbon_monoxide"
                    }
                    else if (props === "Cave"){
                        fullDescriptor += " Cave"
                    }
                    else if (props === "Cell_radio"){
                        fullDescriptor += " Cell_radio"
                    }
                    else if (props === "Cellular"){
                        fullDescriptor += " Cellular"
                    }
                    else if (props === "Center"){
                        fullDescriptor += " Center"
                    }
                    else if (props === "Check"){
                        fullDescriptor += " Check"
                    }
                    else if (props === "Chest"){
                        fullDescriptor += " Chest"
                    }
                    else if (props === "Childrens"){
                        fullDescriptor += " Childrens"
                    }
                    else if (props === "Chime"){
                        fullDescriptor += " Chime"
                    }
                    else if (props === "Closet"){
                        fullDescriptor += " Closet"
                    }
                    else if (props === "Code"){
                        fullDescriptor += " Code"
                    }
                    else if (props === "Communications"){
                        fullDescriptor += " Communications"
                    }
                    else if (props === "Computer"){
                        fullDescriptor += " Computer"
                    }
                    else if (props === "Control"){
                        fullDescriptor += " Control"
                    }
                    else if (props === "Cool"){
                        fullDescriptor += " Cool"
                    }
                    else if (props === "Corner"){
                        fullDescriptor += " Corner"
                    }
                    else if (props === "Courtyard"){
                        fullDescriptor += " Courtyard"
                    }
                    else if (props === "Crawl"){
                        fullDescriptor += " Crawl"
                    }
                    else if (props === "Current"){
                        fullDescriptor += " Current"
                    }
                    else if (props === "Daughters"){
                        fullDescriptor += " Daughters"
                    }
                    else if (props === "Day"){
                        fullDescriptor += " Day"
                    }
                    else if (props === "Deck"){
                        fullDescriptor += " Deck"
                    }
                    else if (props === "Degrees"){
                        fullDescriptor += " Degrees"
                    }
                    else if (props === "Den"){
                        fullDescriptor += " Den"
                    }
                    else if (props === "Detached"){
                        fullDescriptor += " Detached"
                    }
                    else if (props === "Detector"){
                        fullDescriptor += " Detector"
                    }
                    else if (props === "Dim"){
                        fullDescriptor += " Dim"
                    }
                    else if (props === "Dining"){
                        fullDescriptor += " Dining"
                    }
                    else if (props === "Disarm"){
                        fullDescriptor += " Disarm"
                    }
                    else if (props === "Disarmed"){
                        fullDescriptor += " Disarmed"
                    }
                    else if (props === "Dock"){
                        fullDescriptor += " Dock"
                    }
                    else if (props === "Door"){
                        fullDescriptor += " Door"
                    }
                    else if (props === "Doorbell"){
                        fullDescriptor += " Doorbell"
                    }
                    else if (props === "Downstairs"){
                        fullDescriptor += " Downstairs"
                    }
                    else if (props === "Driveway"){
                        fullDescriptor += " Driveway"
                    }
                    else if (props === "East"){
                        fullDescriptor += " East"
                    }
                    else if (props === "Eight"){
                        fullDescriptor += " Eight"
                    }
                    else if (props === "Eighteen"){
                        fullDescriptor += " Eighteen"
                    }
                    else if (props === "Eighty"){
                        fullDescriptor += " Eighty"
                    }
                    else if (props === "Electric"){
                        fullDescriptor += " Electric"
                    }
                    else if (props === "Eleven"){
                        fullDescriptor += " Eleven"
                    }
                    else if (props === "Emergency"){
                        fullDescriptor += " Emergency"
                    }
                    else if (props === "Enter"){
                        fullDescriptor += " Enter"
                    }
                    else if (props === "Entrance"){
                        fullDescriptor += " Entrance"
                    }
                    else if (props === "Entry"){
                        fullDescriptor += " Entry"
                    }
                    else if (props === "Error"){
                        fullDescriptor += " Error"
                    }
                    else if (props === "Exercise"){
                        fullDescriptor += " Exercise"
                    }
                    else if (props === "Exit"){
                        fullDescriptor += " Exit"
                    }
                    else if (props === "Exit_now"){
                        fullDescriptor += " Exit_now"
                    }
                    else if (props === "Exterior"){
                        fullDescriptor += " Exterior"
                    }
                    else if (props === "External"){
                        fullDescriptor += " External"
                    }
                    else if (props === "Failure"){
                        fullDescriptor += " Failure"
                    }
                    else if (props === "Family"){
                        fullDescriptor += " Family"
                    }
                    else if (props === "Fan"){
                        fullDescriptor += " Fan"
                    }
                    else if (props === "Fifteen"){
                        fullDescriptor += " Fifteen"
                    }
                    else if (props === "Fifty"){
                        fullDescriptor += " Fifty"
                    }
                    else if (props === "Fire"){
                        fullDescriptor += " Fire"
                    }
                    else if (props === "Fire_alert"){
                        fullDescriptor += " Fire_alert"
                    }
                    else if (props === "Fire_detector"){
                        fullDescriptor += " Fire_detector"
                    }
                    else if (props === "First"){
                        fullDescriptor += " First"
                    }
                    else if (props === "Five"){
                        fullDescriptor += " Five"
                    }
                    else if (props === "Flood"){
                        fullDescriptor += " Flood"
                    }
                    else if (props === "Floor"){
                        fullDescriptor += " Floor"
                    }
                    else if (props === "Fluid"){
                        fullDescriptor += " Fluid"
                    }
                    else if (props === "Foil"){
                        fullDescriptor += " Foil"
                    }
                    else if (props === "For"){
                        fullDescriptor += " For"
                    }
                    else if (props === "Fourty"){
                        fullDescriptor += " Fourty"
                    }
                    else if (props === "Four"){
                        fullDescriptor += " Four"
                    }
                    else if (props === "Fourteen"){
                        fullDescriptor += " Fourteen"
                    }
                    else if (props === "Forth"){
                        fullDescriptor += " Forth"
                    }
                    else if (props === "Foyer"){
                        fullDescriptor += " Foyer"
                    }
                    else if (props === "Freeze"){
                        fullDescriptor += " Freeze"
                    }
                    else if (props === "Freezer"){
                        fullDescriptor += " Freezer"
                    }
                    else if (props === "Front"){
                        fullDescriptor += " Front"
                    }
                    else if (props === "Furnace"){
                        fullDescriptor += " Furnace"
                    }
                    else if (props === "Game"){
                        fullDescriptor += " Game"
                    }
                    else if (props === "Garage"){
                        fullDescriptor += " Garage"
                    }
                    else if (props === "Gas"){
                        fullDescriptor += " Gas"
                    }
                    else if (props === "Gate"){
                        fullDescriptor += " Gate"
                    }
                    else if (props === "Girls"){
                        fullDescriptor += " Girls"
                    }
                    else if (props === "Glass"){
                        fullDescriptor += " Glass"
                    }
                    else if (props === "Glass_break"){
                        fullDescriptor += " Glass_break"
                    }
                    else if (props === "Guest"){
                        fullDescriptor += " Guest"
                    }
                    else if (props === "Gun"){
                        fullDescriptor += " Gun"
                    }
                    else if (props === "Hall"){
                        fullDescriptor += " Hall"
                    }
                    else if (props === "Hallway"){
                        fullDescriptor += " Hallway"
                    }
                    else if (props === "Hang_up"){
                        fullDescriptor += " Hang_up"
                    }
                    else if (props === "Hanging"){
                        fullDescriptor += " Hanging"
                    }
                    else if (props === "Heat"){
                        fullDescriptor += " Heat"
                    }
                    else if (props === "High"){
                        fullDescriptor += " High"
                    }
                    else if (props === "Home"){
                        fullDescriptor += " Home"
                    }
                    else if (props === "House"){
                        fullDescriptor += " House"
                    }
                    else if (props === "Ice"){
                        fullDescriptor += " Ice"
                    }
                    else if (props === "Image"){
                        fullDescriptor += " Image"
                    }
                    else if (props === "Image_sensor"){
                        fullDescriptor += " Image_sensor"
                    }
                    else if (props === "Inside"){
                        fullDescriptor += " Inside"
                    }
                    else if (props === "Instant"){
                        fullDescriptor += " Instant"
                    }
                    else if (props === "Interior"){
                        fullDescriptor += " Interior"
                    }
                    else if (props === "Intrusion"){
                        fullDescriptor += " Intrusion"
                    }
                    else if (props === "Is"){
                        fullDescriptor += " Is"
                    }
                    else if (props === "Key"){
                        fullDescriptor += " Key"
                    }
                    else if (props === "Keyfob"){
                        fullDescriptor += " Keyfob"
                    }
                    else if (props === "Keypads"){
                        fullDescriptor += " Keypads"
                    }
                    else if (props === "Kids"){
                        fullDescriptor += " Kids"
                    }
                    else if (props === "Kitchen"){
                        fullDescriptor += " Kitchen"
                    }
                    else if (props === "Laundry"){
                        fullDescriptor += " Laundry"
                    }
                    else if (props === "Left"){
                        fullDescriptor += " Left"
                    }
                    else if (props === "Level"){
                        fullDescriptor += " Level"
                    }
                    else if (props === "Library"){
                        fullDescriptor += " Library"
                    }
                    else if (props === "Light"){
                        fullDescriptor += " Light"
                    }
                    else if (props === "Lights"){
                        fullDescriptor += " Lights"
                    }
                    else if (props === "Liquor"){
                        fullDescriptor += " Liquor"
                    }
                    else if (props === "Living"){
                        fullDescriptor += " Living"
                    }
                    else if (props === "Loading"){
                        fullDescriptor += " Loading"
                    }
                    else if (props === "Lock"){
                        fullDescriptor += " Lock"
                    }
                    else if (props === "Loft"){
                        fullDescriptor += " Loft"
                    }
                    else if (props === "Low"){
                        fullDescriptor += " Low"
                    }
                    else if (props === "Main"){
                        fullDescriptor += " Main"
                    }
                    else if (props === "Maintenance"){
                        fullDescriptor += " Maintenance"
                    }
                    else if (props === "Man"){
                        fullDescriptor += " Man"
                    }
                    else if (props === "Master"){
                        fullDescriptor += " Master"
                    }
                    else if (props === "Medical"){
                        fullDescriptor += " Medical"
                    }
                    else if (props === "Medicine"){
                        fullDescriptor += " Medicine"
                    }
                    else if (props === "Menu"){
                        fullDescriptor += " Menu"
                    }
                    else if (props === "Middle"){
                        fullDescriptor += " Middle"
                    }
                    else if (props === "Monitor"){
                        fullDescriptor += " Monitor"
                    }
                    else if (props === "Motion"){
                        fullDescriptor += " Motion"
                    }
                    else if (props === "Motion_detector"){
                        fullDescriptor += " Motion_detector"
                    }
                    else if (props === "Mud"){
                        fullDescriptor += " Mud"
                    }
                    else if (props === "Nine"){
                        fullDescriptor += " Nine"
                    }
                    else if (props === "Nineteen"){
                        fullDescriptor += " Nineteen"
                    }
                    else if (props === "Ninety"){
                        fullDescriptor += " Ninety"
                    }
                    else if (props === "No_delay"){
                        fullDescriptor += " No_delay"
                    }
                    else if (props === "No_entry_delay"){
                        fullDescriptor += " No_entry_delay"
                    }
                    else if (props === "North"){
                        fullDescriptor += " North"
                    }
                    else if (props === "Not"){
                        fullDescriptor += " Not"
                    }
                    else if (props === "Not_ready"){
                        fullDescriptor += " Not_ready"
                    }
                    else if (props === "Nursery"){
                        fullDescriptor += " Nursery"
                    }
                    else if (props === "Off"){
                        fullDescriptor += " Off"
                    }
                    else if (props === "Office"){
                        fullDescriptor += " Office"
                    }
                    else if (props === "On"){
                        fullDescriptor += " On"
                    }
                    else if (props === "One"){
                        fullDescriptor += " One"
                    }
                    else if (props === "One_hundred"){
                        fullDescriptor += " One_hundred"
                    }
                    else if (props === "Output"){
                        fullDescriptor += " Output"
                    }
                    else if (props === "Outside"){
                        fullDescriptor += " Outside"
                    }
                    else if (props === "Overhead"){
                        fullDescriptor += " Overhead"
                    }
                    else if (props === "Panel"){
                        fullDescriptor += " Panel"
                    }
                    else if (props === "Panic"){
                        fullDescriptor += " Panic"
                    }
                    else if (props === "Pantry"){
                        fullDescriptor += " Pantry"
                    }
                    else if (props === "Patio"){
                        fullDescriptor += " Patio"
                    }
                    else if (props === "Perimeter"){
                        fullDescriptor += " Perimeter"
                    }
                    else if (props === "Phone_line"){
                        fullDescriptor += " Phone_line"
                    }
                    else if (props === "Play"){
                        fullDescriptor += " Play"
                    }
                    else if (props === "Police"){
                        fullDescriptor += " Police"
                    }
                    else if (props === "Pool"){
                        fullDescriptor += " Pool"
                    }
                    else if (props === "Porch"){
                        fullDescriptor += " Porch"
                    }
                    else if (props === "Pound"){
                        fullDescriptor += " Pound"
                    }
                    else if (props === "Power"){
                        fullDescriptor += " Power"
                    }
                    else if (props === "Press"){
                        fullDescriptor += " Press"
                    }
                    else if (props === "Previous"){
                        fullDescriptor += " Previous"
                    }
                    else if (props === "Pump"){
                        fullDescriptor += " Pump"
                    }
                    else if (props === "Radio"){
                        fullDescriptor += " Radio"
                    }
                    else if (props === "Ready"){
                        fullDescriptor += " Ready"
                    }
                    else if (props === "Rear"){
                        fullDescriptor += " Rear"
                    }
                    else if (props === "Refrigerator"){
                        fullDescriptor += " Refrigerator"
                    }
                    else if (props === "Relay"){
                        fullDescriptor += " Relay"
                    }
                    else if (props === "Remote"){
                        fullDescriptor += " Remote"
                    }
                    else if (props === "Repeat"){
                        fullDescriptor += " Repeat"
                    }
                    else if (props === "Rf_jam"){
                        fullDescriptor += " Rf_jam"
                    }
                    else if (props === "Right"){
                        fullDescriptor += " Right"
                    }
                    else if (props === "Room"){
                        fullDescriptor += " Room"
                    }
                    else if (props === "Safe"){
                        fullDescriptor += " Safe"
                    }
                    else if (props === "Second"){
                        fullDescriptor += " Second"
                    }
                    else if (props === "Security"){
                        fullDescriptor += " Security"
                    }
                    else if (props === "Sensor"){
                        fullDescriptor += " Sensor"
                    }
                    else if (props === "Sensors"){
                        fullDescriptor += " Sensors"
                    }
                    else if (props === "Service"){
                        fullDescriptor += " Service"
                    }
                    else if (props === "Session"){
                        fullDescriptor += " Session"
                    }
                    else if (props === "Set"){
                        fullDescriptor += " Set"
                    }
                    else if (props === "Seven"){
                        fullDescriptor += " Seven"
                    }
                    else if (props === "Seventeen"){
                        fullDescriptor += " Seventeen"
                    }
                    else if (props === "Seventy"){
                        fullDescriptor += " Seventy"
                    }
                    else if (props === "Shed"){
                        fullDescriptor += " Shed"
                    }
                    else if (props === "Shop"){
                        fullDescriptor += " Shop"
                    }
                    else if (props === "Side"){
                        fullDescriptor += " Side"
                    }
                    else if (props === "Silent"){
                        fullDescriptor += " Silent"
                    }
                    else if (props === "Siren"){
                        fullDescriptor += " Siren"
                    }
                    else if (props === "Six"){
                        fullDescriptor += " Six"
                    }
                    else if (props === "Sixteen"){
                        fullDescriptor += " Sixteen"
                    }
                    else if (props === "Sixty"){
                        fullDescriptor += " Sixty"
                    }
                    else if (props === "Skylight"){
                        fullDescriptor += " Skylight"
                    }
                    else if (props === "Sliding"){
                        fullDescriptor += " Sliding"
                    }
                    else if (props === "Smoke"){
                        fullDescriptor += " Smoke"
                    }
                    else if (props === "Sons"){
                        fullDescriptor += " Sons"
                    }
                    else if (props === "Sounder"){
                        fullDescriptor += " Sounder"
                    }
                    else if (props === "South"){
                        fullDescriptor += " South"
                    }
                    else if (props === "Space"){
                        fullDescriptor += " Space"
                    }
                    else if (props === "Spare"){
                        fullDescriptor += " Spare"
                    }
                    else if (props === "Stairs"){
                        fullDescriptor += " Stairs"
                    }
                    else if (props === "Star"){
                        fullDescriptor += " Star"
                    }
                    else if (props === "Status"){
                        fullDescriptor += " Status"
                    }
                    else if (props === "Stay"){
                        fullDescriptor += " Stay"
                    }
                    else if (props === "Stop"){
                        fullDescriptor += " Shop"
                    }
                    else if (props === "Storage"){
                        fullDescriptor += " Storage"
                    }
                    else if (props === "Study"){
                        fullDescriptor += " Study"
                    }
                    else if (props === "Sump"){
                        fullDescriptor += " Sump"
                    }
                    else if (props === "Sun"){
                        fullDescriptor += " Sun"
                    }
                    else if (props === "Sunroom"){
                        fullDescriptor += " Sunroom"
                    }
                    else if (props === "Supervision"){
                        fullDescriptor += " Supervision"
                    }
                    else if (props === "Switch"){
                        fullDescriptor += " Switch"
                    }
                    else if (props === "System"){
                        fullDescriptor += " System"
                    }
                    else if (props === "Tamper"){
                        fullDescriptor += " Tamper"
                    }
                    else if (props === "Temperature"){
                        fullDescriptor += " Temperature"
                    }
                    else if (props === "Ten"){
                        fullDescriptor += " Ten"
                    }
                    else if (props === "Terminated"){
                        fullDescriptor += " Terminated"
                    }
                    else if (props === "Theater"){
                        fullDescriptor += " Theater"
                    }
                    else if (props === "Thermostat"){
                        fullDescriptor += " Thermostat"
                    }
                    else if (props === "Third"){
                        fullDescriptor += " Third"
                    }
                    else if (props === "Thirteen"){
                        fullDescriptor += " Thirteen"
                    }
                    else if (props === "Thirty"){
                        fullDescriptor += " Thirty"
                    }
                    else if (props === "Three"){
                        fullDescriptor += " Three"
                    }
                    else if (props === "To"){
                        fullDescriptor += " To"
                    }
                    else if (props === "Tool"){
                        fullDescriptor += " Tool"
                    }
                    else if (props === "Transmitted"){
                        fullDescriptor += " Transmitted"
                    }
                    else if (props === "Transmitter"){
                        fullDescriptor += " Transmitter"
                    }
                    else if (props === "Trouble"){
                        fullDescriptor += " Trouble"
                    }
                    else if (props === "Turn"){
                        fullDescriptor += " Turn"
                    }
                    else if (props === "Tv"){
                        fullDescriptor += " Tv"
                    }
                    else if (props === "Twelve"){
                        fullDescriptor += " Twelve"
                    }
                    else if (props === "Twenty"){
                        fullDescriptor += " Twenty"
                    }
                    else if (props === "Two"){
                        fullDescriptor += " Two"
                    }
                    else if (props === "Unlock"){
                        fullDescriptor += " Unlock"
                    }
                    else if (props === "Upper"){
                        fullDescriptor += " Upper"
                    }
                    else if (props === "Upstairs"){
                        fullDescriptor += " Upstairs"
                    }
                    else if (props === "User"){
                        fullDescriptor += " User"
                    }
                    else if (props === "Utility"){
                        fullDescriptor += " Utility"
                    }
                    else if (props === "Valve"){
                        fullDescriptor += " Valve"
                    }
                    else if (props === "Video"){
                        fullDescriptor += " Video"
                    }
                    else if (props === "Voice"){
                        fullDescriptor += " Voice"
                    }
                    else if (props === "Wall"){
                        fullDescriptor += " Wall"
                    }
                    else if (props === "Warehouse"){
                        fullDescriptor += " Warehouse"
                    }
                    else if (props === "Water"){
                        fullDescriptor += " Water"
                    }
                    else if (props === "West"){
                        fullDescriptor += " West"
                    }
                    else if (props === "Window"){
                        fullDescriptor += " Window"
                    }
                    else if (props === "Wing"){
                        fullDescriptor += " Wing"
                    }
                    else if (props === "Wireless"){
                        fullDescriptor += " Wireless"
                    }
                    else if (props === "Yard"){
                        fullDescriptor += " Yard"
                    }
                    else if (props === "Zero"){
                        fullDescriptor += " Zero"
                    }
                    else if (props === "Zone"){
                        fullDescriptor += " Zone"
                    }
                }
                else{
                    return (
                        <p className="css-grid-align-right" style={{'color':"#404956"}}>{fullDescriptor}</p>
                    )
                }
            }
            else{
                break
            }
        }
        else if (i === 6){
            if (i !== ""){
                if (i !== ""){
                    if (props === "Abort"){
                        fullDescriptor += " Abort"
                    }
                    else if (props === "Ac"){
                        fullDescriptor += " Ac"
                    }
                    else if (props === "Access"){
                        fullDescriptor += " Access"
                    }
                    else if (props === "Alarm"){
                        fullDescriptor += " Alarm"
                    }
                    else if (props === "And"){
                        fullDescriptor += " And"
                    }
                    else if (props === "Anouncement"){
                        fullDescriptor += " Announcement"
                    }
                    else if (props === "Apartment"){
                        fullDescriptor += " Apartment"
                    }
                    else if (props === "Area"){
                        fullDescriptor += " Area"
                    }
                    else if (props === "Arm"){
                        fullDescriptor += " Arm"
                    }
                    else if (props === "Armed"){
                        fullDescriptor += " Armed"
                    }
                    else if (props === "At"){
                        fullDescriptor += " At"
                    }
                    else if (props === "Attic"){
                        fullDescriptor += " Attic"
                    }
                    else if (props === "Audio"){
                        fullDescriptor += " Audio"
                    }
                    else if (props === "Auto"){
                        fullDescriptor += " Auto"
                    }
                    else if (props === "Automation"){
                        fullDescriptor += " Automation"
                    }
                    else if (props === "Auxiliary"){
                        fullDescriptor += " Auxiliary"
                    }
                    else if (props === "Away"){
                        fullDescriptor += " Away"
                    }
                    else if (props === "Babys"){
                        fullDescriptor += " Babys"
                    }
                    else if (props === "Back"){
                        fullDescriptor += " Back"
                    }
                    else if (props === "Balcony"){
                        fullDescriptor += " Balcony"
                    }
                    else if (props === "Basement"){
                        fullDescriptor += " Basement"
                    }
                    else if (props === "Bathroom"){
                        fullDescriptor += " Bathroom"
                    }
                    else if (props === "Battery"){
                        fullDescriptor += " Battery"
                    }
                    else if (props === "Bedroom"){
                        fullDescriptor += " Bedroom"
                    }
                    else if (props === "Bell"){
                        fullDescriptor += " Bell"
                    }
                    else if (props === "Bonus"){
                        fullDescriptor += " Bonus"
                    }
                    else if (props === "Boys"){
                        fullDescriptor += " Boys"
                    }
                    else if (props === "Break"){
                        fullDescriptor += " Break"
                    }
                    else if (props === "Button"){
                        fullDescriptor += " Button"
                    }
                    else if (props === "Bypass"){
                        fullDescriptor += " Bypass"
                    }
                    else if (props === "Bypassed"){
                        fullDescriptor += " Bypassed"
                    }
                    else if (props === "Camera"){
                        fullDescriptor += " Camera"
                    }
                    else if (props === "Cabinet"){
                        fullDescriptor += " Cabinet"
                    }
                    else if (props === "Cancel"){
                        fullDescriptor += " Cancel"
                    }
                    else if (props === "Carbon_monoxide"){
                        fullDescriptor += " Carbon_monoxide"
                    }
                    else if (props === "Cave"){
                        fullDescriptor += " Cave"
                    }
                    else if (props === "Cell_radio"){
                        fullDescriptor += " Cell_radio"
                    }
                    else if (props === "Cellular"){
                        fullDescriptor += " Cellular"
                    }
                    else if (props === "Center"){
                        fullDescriptor += " Center"
                    }
                    else if (props === "Check"){
                        fullDescriptor += " Check"
                    }
                    else if (props === "Chest"){
                        fullDescriptor += " Chest"
                    }
                    else if (props === "Childrens"){
                        fullDescriptor += " Childrens"
                    }
                    else if (props === "Chime"){
                        fullDescriptor += " Chime"
                    }
                    else if (props === "Closet"){
                        fullDescriptor += " Closet"
                    }
                    else if (props === "Code"){
                        fullDescriptor += " Code"
                    }
                    else if (props === "Communications"){
                        fullDescriptor += " Communications"
                    }
                    else if (props === "Computer"){
                        fullDescriptor += " Computer"
                    }
                    else if (props === "Control"){
                        fullDescriptor += " Control"
                    }
                    else if (props === "Cool"){
                        fullDescriptor += " Cool"
                    }
                    else if (props === "Corner"){
                        fullDescriptor += " Corner"
                    }
                    else if (props === "Courtyard"){
                        fullDescriptor += " Courtyard"
                    }
                    else if (props === "Crawl"){
                        fullDescriptor += " Crawl"
                    }
                    else if (props === "Current"){
                        fullDescriptor += " Current"
                    }
                    else if (props === "Daughters"){
                        fullDescriptor += " Daughters"
                    }
                    else if (props === "Day"){
                        fullDescriptor += " Day"
                    }
                    else if (props === "Deck"){
                        fullDescriptor += " Deck"
                    }
                    else if (props === "Degrees"){
                        fullDescriptor += " Degrees"
                    }
                    else if (props === "Den"){
                        fullDescriptor += " Den"
                    }
                    else if (props === "Detached"){
                        fullDescriptor += " Detached"
                    }
                    else if (props === "Detector"){
                        fullDescriptor += " Detector"
                    }
                    else if (props === "Dim"){
                        fullDescriptor += " Dim"
                    }
                    else if (props === "Dining"){
                        fullDescriptor += " Dining"
                    }
                    else if (props === "Disarm"){
                        fullDescriptor += " Disarm"
                    }
                    else if (props === "Disarmed"){
                        fullDescriptor += " Disarmed"
                    }
                    else if (props === "Dock"){
                        fullDescriptor += " Dock"
                    }
                    else if (props === "Door"){
                        fullDescriptor += " Door"
                    }
                    else if (props === "Doorbell"){
                        fullDescriptor += " Doorbell"
                    }
                    else if (props === "Downstairs"){
                        fullDescriptor += " Downstairs"
                    }
                    else if (props === "Driveway"){
                        fullDescriptor += " Driveway"
                    }
                    else if (props === "East"){
                        fullDescriptor += " East"
                    }
                    else if (props === "Eight"){
                        fullDescriptor += " Eight"
                    }
                    else if (props === "Eighteen"){
                        fullDescriptor += " Eighteen"
                    }
                    else if (props === "Eighty"){
                        fullDescriptor += " Eighty"
                    }
                    else if (props === "Electric"){
                        fullDescriptor += " Electric"
                    }
                    else if (props === "Eleven"){
                        fullDescriptor += " Eleven"
                    }
                    else if (props === "Emergency"){
                        fullDescriptor += " Emergency"
                    }
                    else if (props === "Enter"){
                        fullDescriptor += " Enter"
                    }
                    else if (props === "Entrance"){
                        fullDescriptor += " Entrance"
                    }
                    else if (props === "Entry"){
                        fullDescriptor += " Entry"
                    }
                    else if (props === "Error"){
                        fullDescriptor += " Error"
                    }
                    else if (props === "Exercise"){
                        fullDescriptor += " Exercise"
                    }
                    else if (props === "Exit"){
                        fullDescriptor += " Exit"
                    }
                    else if (props === "Exit_now"){
                        fullDescriptor += " Exit_now"
                    }
                    else if (props === "Exterior"){
                        fullDescriptor += " Exterior"
                    }
                    else if (props === "External"){
                        fullDescriptor += " External"
                    }
                    else if (props === "Failure"){
                        fullDescriptor += " Failure"
                    }
                    else if (props === "Family"){
                        fullDescriptor += " Family"
                    }
                    else if (props === "Fan"){
                        fullDescriptor += " Fan"
                    }
                    else if (props === "Fifteen"){
                        fullDescriptor += " Fifteen"
                    }
                    else if (props === "Fifty"){
                        fullDescriptor += " Fifty"
                    }
                    else if (props === "Fire"){
                        fullDescriptor += " Fire"
                    }
                    else if (props === "Fire_alert"){
                        fullDescriptor += " Fire_alert"
                    }
                    else if (props === "Fire_detector"){
                        fullDescriptor += " Fire_detector"
                    }
                    else if (props === "First"){
                        fullDescriptor += " First"
                    }
                    else if (props === "Five"){
                        fullDescriptor += " Five"
                    }
                    else if (props === "Flood"){
                        fullDescriptor += " Flood"
                    }
                    else if (props === "Floor"){
                        fullDescriptor += " Floor"
                    }
                    else if (props === "Fluid"){
                        fullDescriptor += " Fluid"
                    }
                    else if (props === "Foil"){
                        fullDescriptor += " Foil"
                    }
                    else if (props === "For"){
                        fullDescriptor += " For"
                    }
                    else if (props === "Fourty"){
                        fullDescriptor += " Fourty"
                    }
                    else if (props === "Four"){
                        fullDescriptor += " Four"
                    }
                    else if (props === "Fourteen"){
                        fullDescriptor += " Fourteen"
                    }
                    else if (props === "Forth"){
                        fullDescriptor += " Forth"
                    }
                    else if (props === "Foyer"){
                        fullDescriptor += " Foyer"
                    }
                    else if (props === "Freeze"){
                        fullDescriptor += " Freeze"
                    }
                    else if (props === "Freezer"){
                        fullDescriptor += " Freezer"
                    }
                    else if (props === "Front"){
                        fullDescriptor += " Front"
                    }
                    else if (props === "Furnace"){
                        fullDescriptor += " Furnace"
                    }
                    else if (props === "Game"){
                        fullDescriptor += " Game"
                    }
                    else if (props === "Garage"){
                        fullDescriptor += " Garage"
                    }
                    else if (props === "Gas"){
                        fullDescriptor += " Gas"
                    }
                    else if (props === "Gate"){
                        fullDescriptor += " Gate"
                    }
                    else if (props === "Girls"){
                        fullDescriptor += " Girls"
                    }
                    else if (props === "Glass"){
                        fullDescriptor += " Glass"
                    }
                    else if (props === "Glass_break"){
                        fullDescriptor += " Glass_break"
                    }
                    else if (props === "Guest"){
                        fullDescriptor += " Guest"
                    }
                    else if (props === "Gun"){
                        fullDescriptor += " Gun"
                    }
                    else if (props === "Hall"){
                        fullDescriptor += " Hall"
                    }
                    else if (props === "Hallway"){
                        fullDescriptor += " Hallway"
                    }
                    else if (props === "Hang_up"){
                        fullDescriptor += " Hang_up"
                    }
                    else if (props === "Hanging"){
                        fullDescriptor += " Hanging"
                    }
                    else if (props === "Heat"){
                        fullDescriptor += " Heat"
                    }
                    else if (props === "High"){
                        fullDescriptor += " High"
                    }
                    else if (props === "Home"){
                        fullDescriptor += " Home"
                    }
                    else if (props === "House"){
                        fullDescriptor += " House"
                    }
                    else if (props === "Ice"){
                        fullDescriptor += " Ice"
                    }
                    else if (props === "Image"){
                        fullDescriptor += " Image"
                    }
                    else if (props === "Image_sensor"){
                        fullDescriptor += " Image_sensor"
                    }
                    else if (props === "Inside"){
                        fullDescriptor += " Inside"
                    }
                    else if (props === "Instant"){
                        fullDescriptor += " Instant"
                    }
                    else if (props === "Interior"){
                        fullDescriptor += " Interior"
                    }
                    else if (props === "Intrusion"){
                        fullDescriptor += " Intrusion"
                    }
                    else if (props === "Is"){
                        fullDescriptor += " Is"
                    }
                    else if (props === "Key"){
                        fullDescriptor += " Key"
                    }
                    else if (props === "Keyfob"){
                        fullDescriptor += " Keyfob"
                    }
                    else if (props === "Keypads"){
                        fullDescriptor += " Keypads"
                    }
                    else if (props === "Kids"){
                        fullDescriptor += " Kids"
                    }
                    else if (props === "Kitchen"){
                        fullDescriptor += " Kitchen"
                    }
                    else if (props === "Laundry"){
                        fullDescriptor += " Laundry"
                    }
                    else if (props === "Left"){
                        fullDescriptor += " Left"
                    }
                    else if (props === "Level"){
                        fullDescriptor += " Level"
                    }
                    else if (props === "Library"){
                        fullDescriptor += " Library"
                    }
                    else if (props === "Light"){
                        fullDescriptor += " Light"
                    }
                    else if (props === "Lights"){
                        fullDescriptor += " Lights"
                    }
                    else if (props === "Liquor"){
                        fullDescriptor += " Liquor"
                    }
                    else if (props === "Living"){
                        fullDescriptor += " Living"
                    }
                    else if (props === "Loading"){
                        fullDescriptor += " Loading"
                    }
                    else if (props === "Lock"){
                        fullDescriptor += " Lock"
                    }
                    else if (props === "Loft"){
                        fullDescriptor += " Loft"
                    }
                    else if (props === "Low"){
                        fullDescriptor += " Low"
                    }
                    else if (props === "Main"){
                        fullDescriptor += " Main"
                    }
                    else if (props === "Maintenance"){
                        fullDescriptor += " Maintenance"
                    }
                    else if (props === "Man"){
                        fullDescriptor += " Man"
                    }
                    else if (props === "Master"){
                        fullDescriptor += " Master"
                    }
                    else if (props === "Medical"){
                        fullDescriptor += " Medical"
                    }
                    else if (props === "Medicine"){
                        fullDescriptor += " Medicine"
                    }
                    else if (props === "Menu"){
                        fullDescriptor += " Menu"
                    }
                    else if (props === "Middle"){
                        fullDescriptor += " Middle"
                    }
                    else if (props === "Monitor"){
                        fullDescriptor += " Monitor"
                    }
                    else if (props === "Motion"){
                        fullDescriptor += " Motion"
                    }
                    else if (props === "Motion_detector"){
                        fullDescriptor += " Motion_detector"
                    }
                    else if (props === "Mud"){
                        fullDescriptor += " Mud"
                    }
                    else if (props === "Nine"){
                        fullDescriptor += " Nine"
                    }
                    else if (props === "Nineteen"){
                        fullDescriptor += " Nineteen"
                    }
                    else if (props === "Ninety"){
                        fullDescriptor += " Ninety"
                    }
                    else if (props === "No_delay"){
                        fullDescriptor += " No_delay"
                    }
                    else if (props === "No_entry_delay"){
                        fullDescriptor += " No_entry_delay"
                    }
                    else if (props === "North"){
                        fullDescriptor += " North"
                    }
                    else if (props === "Not"){
                        fullDescriptor += " Not"
                    }
                    else if (props === "Not_ready"){
                        fullDescriptor += " Not_ready"
                    }
                    else if (props === "Nursery"){
                        fullDescriptor += " Nursery"
                    }
                    else if (props === "Off"){
                        fullDescriptor += " Off"
                    }
                    else if (props === "Office"){
                        fullDescriptor += " Office"
                    }
                    else if (props === "On"){
                        fullDescriptor += " On"
                    }
                    else if (props === "One"){
                        fullDescriptor += " One"
                    }
                    else if (props === "One_hundred"){
                        fullDescriptor += " One_hundred"
                    }
                    else if (props === "Output"){
                        fullDescriptor += " Output"
                    }
                    else if (props === "Outside"){
                        fullDescriptor += " Outside"
                    }
                    else if (props === "Overhead"){
                        fullDescriptor += " Overhead"
                    }
                    else if (props === "Panel"){
                        fullDescriptor += " Panel"
                    }
                    else if (props === "Panic"){
                        fullDescriptor += " Panic"
                    }
                    else if (props === "Pantry"){
                        fullDescriptor += " Pantry"
                    }
                    else if (props === "Patio"){
                        fullDescriptor += " Patio"
                    }
                    else if (props === "Perimeter"){
                        fullDescriptor += " Perimeter"
                    }
                    else if (props === "Phone_line"){
                        fullDescriptor += " Phone_line"
                    }
                    else if (props === "Play"){
                        fullDescriptor += " Play"
                    }
                    else if (props === "Police"){
                        fullDescriptor += " Police"
                    }
                    else if (props === "Pool"){
                        fullDescriptor += " Pool"
                    }
                    else if (props === "Porch"){
                        fullDescriptor += " Porch"
                    }
                    else if (props === "Pound"){
                        fullDescriptor += " Pound"
                    }
                    else if (props === "Power"){
                        fullDescriptor += " Power"
                    }
                    else if (props === "Press"){
                        fullDescriptor += " Press"
                    }
                    else if (props === "Previous"){
                        fullDescriptor += " Previous"
                    }
                    else if (props === "Pump"){
                        fullDescriptor += " Pump"
                    }
                    else if (props === "Radio"){
                        fullDescriptor += " Radio"
                    }
                    else if (props === "Ready"){
                        fullDescriptor += " Ready"
                    }
                    else if (props === "Rear"){
                        fullDescriptor += " Rear"
                    }
                    else if (props === "Refrigerator"){
                        fullDescriptor += " Refrigerator"
                    }
                    else if (props === "Relay"){
                        fullDescriptor += " Relay"
                    }
                    else if (props === "Remote"){
                        fullDescriptor += " Remote"
                    }
                    else if (props === "Repeat"){
                        fullDescriptor += " Repeat"
                    }
                    else if (props === "Rf_jam"){
                        fullDescriptor += " Rf_jam"
                    }
                    else if (props === "Right"){
                        fullDescriptor += " Right"
                    }
                    else if (props === "Room"){
                        fullDescriptor += " Room"
                    }
                    else if (props === "Safe"){
                        fullDescriptor += " Safe"
                    }
                    else if (props === "Second"){
                        fullDescriptor += " Second"
                    }
                    else if (props === "Security"){
                        fullDescriptor += " Security"
                    }
                    else if (props === "Sensor"){
                        fullDescriptor += " Sensor"
                    }
                    else if (props === "Sensors"){
                        fullDescriptor += " Sensors"
                    }
                    else if (props === "Service"){
                        fullDescriptor += " Service"
                    }
                    else if (props === "Session"){
                        fullDescriptor += " Session"
                    }
                    else if (props === "Set"){
                        fullDescriptor += " Set"
                    }
                    else if (props === "Seven"){
                        fullDescriptor += " Seven"
                    }
                    else if (props === "Seventeen"){
                        fullDescriptor += " Seventeen"
                    }
                    else if (props === "Seventy"){
                        fullDescriptor += " Seventy"
                    }
                    else if (props === "Shed"){
                        fullDescriptor += " Shed"
                    }
                    else if (props === "Shop"){
                        fullDescriptor += " Shop"
                    }
                    else if (props === "Side"){
                        fullDescriptor += " Side"
                    }
                    else if (props === "Silent"){
                        fullDescriptor += " Silent"
                    }
                    else if (props === "Siren"){
                        fullDescriptor += " Siren"
                    }
                    else if (props === "Six"){
                        fullDescriptor += " Six"
                    }
                    else if (props === "Sixteen"){
                        fullDescriptor += " Sixteen"
                    }
                    else if (props === "Sixty"){
                        fullDescriptor += " Sixty"
                    }
                    else if (props === "Skylight"){
                        fullDescriptor += " Skylight"
                    }
                    else if (props === "Sliding"){
                        fullDescriptor += " Sliding"
                    }
                    else if (props === "Smoke"){
                        fullDescriptor += " Smoke"
                    }
                    else if (props === "Sons"){
                        fullDescriptor += " Sons"
                    }
                    else if (props === "Sounder"){
                        fullDescriptor += " Sounder"
                    }
                    else if (props === "South"){
                        fullDescriptor += " South"
                    }
                    else if (props === "Space"){
                        fullDescriptor += " Space"
                    }
                    else if (props === "Spare"){
                        fullDescriptor += " Spare"
                    }
                    else if (props === "Stairs"){
                        fullDescriptor += " Stairs"
                    }
                    else if (props === "Star"){
                        fullDescriptor += " Star"
                    }
                    else if (props === "Status"){
                        fullDescriptor += " Status"
                    }
                    else if (props === "Stay"){
                        fullDescriptor += " Stay"
                    }
                    else if (props === "Stop"){
                        fullDescriptor += " Shop"
                    }
                    else if (props === "Storage"){
                        fullDescriptor += " Storage"
                    }
                    else if (props === "Study"){
                        fullDescriptor += " Study"
                    }
                    else if (props === "Sump"){
                        fullDescriptor += " Sump"
                    }
                    else if (props === "Sun"){
                        fullDescriptor += " Sun"
                    }
                    else if (props === "Sunroom"){
                        fullDescriptor += " Sunroom"
                    }
                    else if (props === "Supervision"){
                        fullDescriptor += " Supervision"
                    }
                    else if (props === "Switch"){
                        fullDescriptor += " Switch"
                    }
                    else if (props === "System"){
                        fullDescriptor += " System"
                    }
                    else if (props === "Tamper"){
                        fullDescriptor += " Tamper"
                    }
                    else if (props === "Temperature"){
                        fullDescriptor += " Temperature"
                    }
                    else if (props === "Ten"){
                        fullDescriptor += " Ten"
                    }
                    else if (props === "Terminated"){
                        fullDescriptor += " Terminated"
                    }
                    else if (props === "Theater"){
                        fullDescriptor += " Theater"
                    }
                    else if (props === "Thermostat"){
                        fullDescriptor += " Thermostat"
                    }
                    else if (props === "Third"){
                        fullDescriptor += " Third"
                    }
                    else if (props === "Thirteen"){
                        fullDescriptor += " Thirteen"
                    }
                    else if (props === "Thirty"){
                        fullDescriptor += " Thirty"
                    }
                    else if (props === "Three"){
                        fullDescriptor += " Three"
                    }
                    else if (props === "To"){
                        fullDescriptor += " To"
                    }
                    else if (props === "Tool"){
                        fullDescriptor += " Tool"
                    }
                    else if (props === "Transmitted"){
                        fullDescriptor += " Transmitted"
                    }
                    else if (props === "Transmitter"){
                        fullDescriptor += " Transmitter"
                    }
                    else if (props === "Trouble"){
                        fullDescriptor += " Trouble"
                    }
                    else if (props === "Turn"){
                        fullDescriptor += " Turn"
                    }
                    else if (props === "Tv"){
                        fullDescriptor += " Tv"
                    }
                    else if (props === "Twelve"){
                        fullDescriptor += " Twelve"
                    }
                    else if (props === "Twenty"){
                        fullDescriptor += " Twenty"
                    }
                    else if (props === "Two"){
                        fullDescriptor += " Two"
                    }
                    else if (props === "Unlock"){
                        fullDescriptor += " Unlock"
                    }
                    else if (props === "Upper"){
                        fullDescriptor += " Upper"
                    }
                    else if (props === "Upstairs"){
                        fullDescriptor += " Upstairs"
                    }
                    else if (props === "User"){
                        fullDescriptor += " User"
                    }
                    else if (props === "Utility"){
                        fullDescriptor += " Utility"
                    }
                    else if (props === "Valve"){
                        fullDescriptor += " Valve"
                    }
                    else if (props === "Video"){
                        fullDescriptor += " Video"
                    }
                    else if (props === "Voice"){
                        fullDescriptor += " Voice"
                    }
                    else if (props === "Wall"){
                        fullDescriptor += " Wall"
                    }
                    else if (props === "Warehouse"){
                        fullDescriptor += " Warehouse"
                    }
                    else if (props === "Water"){
                        fullDescriptor += " Water"
                    }
                    else if (props === "West"){
                        fullDescriptor += " West"
                    }
                    else if (props === "Window"){
                        fullDescriptor += " Window"
                    }
                    else if (props === "Wing"){
                        fullDescriptor += " Wing"
                    }
                    else if (props === "Wireless"){
                        fullDescriptor += " Wireless"
                    }
                    else if (props === "Yard"){
                        fullDescriptor += " Yard"
                    }
                    else if (props === "Zero"){
                        fullDescriptor += " Zero"
                    }
                    else if (props === "Zone"){
                        fullDescriptor += " Zone"
                    }
                    return (
                        <p className="css-grid-align-right" style={{'color':"#404956"}}>{fullDescriptor}</p>
                    )
                }
                else{
                    return (
                        <p className="css-grid-align-right" style={{'color':"#404956"}}>{fullDescriptor}</p>
                    )
                }
            }
            else{
                break
            }
        }
    }
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>{`<None>`}</p>
        )
}

function SensorReports(props){
    console.log(props)

    if (props === "enabled"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Enabled</p>
        )
    }
    else if(props === "disabled"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Disabled</p>
        )
    }
    else{
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Enabled</p>
        )
    }
}

function SensorSupervised(props){
    console.log(props)

    if (props === "enabled"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Enabled</p>
        )
    }
    else if(props === "disabled"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Disabled</p>
        )
    }
    else{
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Enabled</p>
        )
    }
}

function SensorChime(props){
    console.log(props)
    if (props === "disbabled"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Disable</p>
        )
    }
    else if(props === "voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Voice Only</p>
        )
    }
    else if(props === "ding1voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #1 with Voice</p>
        )
    }
    else if(props === "ding2"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #2</p>
        )
    }
    else if(props === "ding2voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #2 with Voice</p>
        )
    }
    else if(props === "ding1"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #1</p>
        )
    }
    else if(props === "ding"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong</p>
        )
    }
    else if(props === "dingvoice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong with Voice</p>
        )
    }
    else if(props === "ding3"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #3</p>
        )
    }
    else if(props === "ding3voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #3 with Voice</p>
        )
    }
    else if(props === "chime1"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Chime #1</p>
        )
    }
    else if(props === "chime1voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Chime #1 with Voice</p>
        )
    }
    else if(props === "chime2"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Chime #2</p>
        )
    }
    else if(props === "chime2voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Chime #2 with Voice</p>
        )
    }
    else{
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Disabled</p>
        )
    }
}

function updateProgramming(id){
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)

    if (id === "zone-one"){
        SensorType(retrievedSensors.sensor1.sensorType)
        EquipmentCode(retrievedSensors.sensor1.equipmentCode)
        SerialNumber(retrievedSensors.sensor1.serialNumber)
        SmartAreasAssignment(retrievedSensors.sensor1.smartAreasAssignment)
        EquipmentAge(retrievedSensors.sensor1.equipmentAge)
        SensorLoop(retrievedSensors.sensor1.sensorLoop)
        TransmissionDelay(retrievedSensors.sensor1.transmissionDelay)
        VoiceDescriptor(retrievedSensors.sensor1.voiceDescriptor)
        SensorReports(retrievedSensors.sensor1.sensorReports)
        SensorSupervised(retrievedSensors.sensor1.sensorSupervised)
        SensorChime(retrievedSensors.sensor1.sensorChime)
    }
    else if (id === "zone-two"){
        SensorType(retrievedSensors.sensor2.sensorType)
        EquipmentCode(retrievedSensors.sensor2.equipmentCode)
        SerialNumber(retrievedSensors.sensor2.serialNumber)
        SmartAreasAssignment(retrievedSensors.sensor2.smartAreasAssignment)
        EquipmentAge(retrievedSensors.sensor2.equipmentAge)
        SensorLoop(retrievedSensors.sensor2.sensorLoop)
        TransmissionDelay(retrievedSensors.sensor2.transmissionDelay)
        VoiceDescriptor(retrievedSensors.sensor2.voiceDescriptor)
        SensorReports(retrievedSensors.sensor2.sensorReports)
        SensorSupervised(retrievedSensors.sensor2.sensorSupervised)
        SensorChime(retrievedSensors.sensor2.sensorChime)
    }
    else if (id === "zone-three"){
        SensorType(retrievedSensors.sensor3.sensorType)
        EquipmentCode(retrievedSensors.sensor3.equipmentCode)
        SerialNumber(retrievedSensors.sensor3.serialNumber)
        SmartAreasAssignment(retrievedSensors.sensor3.smartAreasAssignment)
        EquipmentAge(retrievedSensors.sensor3.equipmentAge)
        SensorLoop(retrievedSensors.sensor3.sensorLoop)
        TransmissionDelay(retrievedSensors.sensor3.transmissionDelay)
        VoiceDescriptor(retrievedSensors.sensor3.voiceDescriptor)
        SensorReports(retrievedSensors.sensor3.sensorReports)
        SensorSupervised(retrievedSensors.sensor3.sensorSupervised)
        SensorChime(retrievedSensors.sensor3.sensorChime)
    }
    else if (id === "zone-four"){
        SensorType(retrievedSensors.sensor4.sensorType)
        EquipmentCode(retrievedSensors.sensor4.equipmentCode)
        SerialNumber(retrievedSensors.sensor4.serialNumber)
        SmartAreasAssignment(retrievedSensors.sensor4.smartAreasAssignment)
        EquipmentAge(retrievedSensors.sensor4.equipmentAge)
        SensorLoop(retrievedSensors.sensor4.sensorLoop)
        TransmissionDelay(retrievedSensors.sensor4.transmissionDelay)
        VoiceDescriptor(retrievedSensors.sensor4.voiceDescriptor)
        SensorReports(retrievedSensors.sensor4.sensorReports)
        SensorSupervised(retrievedSensors.sensor4.sensorSupervised)
        SensorChime(retrievedSensors.sensor4.sensorChime)
    }
    else if (id === "zone-five"){
        SensorType(retrievedSensors.sensor5.sensorType)
        EquipmentCode(retrievedSensors.sensor5.equipmentCode)
        SerialNumber(retrievedSensors.sensor5.serialNumber)
        SmartAreasAssignment(retrievedSensors.sensor5.smartAreasAssignment)
        EquipmentAge(retrievedSensors.sensor5.equipmentAge)
        SensorLoop(retrievedSensors.sensor5.sensorLoop)
        TransmissionDelay(retrievedSensors.sensor5.transmissionDelay)
        VoiceDescriptor(retrievedSensors.sensor5.voiceDescriptor)
        SensorReports(retrievedSensors.sensor5.sensorReports)
        SensorSupervised(retrievedSensors.sensor5.sensorSupervised)
        SensorChime(retrievedSensors.sensor5.sensorChime)
    }
    else if (id === "zone-six"){
        SensorType(retrievedSensors.sensor6.sensorType)
        EquipmentCode(retrievedSensors.sensor6.equipmentCode)
        SerialNumber(retrievedSensors.sensor6.serialNumber)
        SmartAreasAssignment(retrievedSensors.sensor6.smartAreasAssignment)
        EquipmentAge(retrievedSensors.sensor6.equipmentAge)
        SensorLoop(retrievedSensors.sensor6.sensorLoop)
        TransmissionDelay(retrievedSensors.sensor6.transmissionDelay)
        VoiceDescriptor(retrievedSensors.sensor6.voiceDescriptor)
        SensorReports(retrievedSensors.sensor6.sensorReports)
        SensorSupervised(retrievedSensors.sensor6.sensorSupervised)
        SensorChime(retrievedSensors.sensor6.sensorChime)
    }
    else if (id === "zone-seven"){
        SensorType(retrievedSensors.sensor7.sensorType)
        EquipmentCode(retrievedSensors.sensor7.equipmentCode)
        SerialNumber(retrievedSensors.sensor7.serialNumber)
        SmartAreasAssignment(retrievedSensors.sensor7.smartAreasAssignment)
        EquipmentAge(retrievedSensors.sensor7.equipmentAge)
        SensorLoop(retrievedSensors.sensor7.sensorLoop)
        TransmissionDelay(retrievedSensors.sensor7.transmissionDelay)
        VoiceDescriptor(retrievedSensors.sensor7.voiceDescriptor)
        SensorReports(retrievedSensors.sensor7.sensorReports)
        SensorSupervised(retrievedSensors.sensor7.sensorSupervised)
        SensorChime(retrievedSensors.sensor7.sensorChime)
    }
    else if (id === "zone-eight"){
        SensorType(retrievedSensors.sensor8.sensorType)
        EquipmentCode(retrievedSensors.sensor8.equipmentCode)
        SerialNumber(retrievedSensors.sensor8.serialNumber)
        SmartAreasAssignment(retrievedSensors.sensor8.smartAreasAssignment)
        EquipmentAge(retrievedSensors.sensor8.equipmentAge)
        SensorLoop(retrievedSensors.sensor8.sensorLoop)
        TransmissionDelay(retrievedSensors.sensor8.transmissionDelay)
        VoiceDescriptor(retrievedSensors.sensor8.voiceDescriptor)
        SensorReports(retrievedSensors.sensor8.sensorReports)
        SensorSupervised(retrievedSensors.sensor8.sensorSupervised)
        SensorChime(retrievedSensors.sensor8.sensorChime)
    }
}

function choseZone(id){
    if (document.getElementById("zone-eight") !== null){
        var selector = id
        var el = document.querySelector('.config-container-scroll');
        console.log(el.scrollTop);
        document.getElementById("zone-one").style.backgroundColor = "white";
        document.getElementById("zone-one").style.color = "gray";
        document.getElementById("zone-one").style.backgroundImage = "linear-gradient(to right, white, transparent)";
        document.getElementById("zone-two").style.backgroundColor = "white";
        document.getElementById("zone-two").style.color = "gray";
        document.getElementById("zone-two").style.backgroundImage = "linear-gradient(to right, white, transparent)";
        document.getElementById("zone-three").style.backgroundColor = "white";
        document.getElementById("zone-three").style.color = "gray";
        document.getElementById("zone-three").style.backgroundImage = "linear-gradient(to right, white, transparent)";
        document.getElementById("zone-four").style.backgroundColor = "white";
        document.getElementById("zone-four").style.color = "gray";
        document.getElementById("zone-four").style.backgroundImage = "linear-gradient(to right, white, transparent)";
        document.getElementById("zone-five").style.backgroundColor = "white";
        document.getElementById("zone-five").style.color = "gray";
        document.getElementById("zone-five").style.backgroundImage = "linear-gradient(to right, white, transparent)";
        document.getElementById("zone-six").style.backgroundColor = "white";
        document.getElementById("zone-six").style.color = "gray";
        document.getElementById("zone-six").style.backgroundImage = "linear-gradient(to right, white, transparent)";
        document.getElementById("zone-seven").style.backgroundColor = "white";
        document.getElementById("zone-seven").style.color = "gray";
        document.getElementById("zone-seven").style.backgroundImage = "linear-gradient(to right, white, transparent)";
        document.getElementById("zone-eight").style.backgroundColor = "white";
        document.getElementById("zone-eight").style.color = "gray";
        document.getElementById("zone-eight").style.backgroundImage = "linear-gradient(to right, white, transparent)";
        document.getElementById(selector).style.backgroundColor = "#448cc0";
        document.getElementById(selector).style.color = "white";
        document.getElementById(selector).style.backgroundImage = "linear-gradient(to right, #3f94d1, transparent)";
        if (selector === "zone-one"){
            el.scrollTop = 0;
        }
        else if (selector === "zone-two"){
            el.scrollTop = 29;
        }
        else if (selector === "zone-three"){
            el.scrollTop = 58;
        }
        else if (selector === "zone-four"){
            el.scrollTop = 87;
        }
        else if (selector === "zone-five"){
            el.scrollTop = 116;
        }
        else if (selector === "zone-six"){
            el.scrollTop = 145;
        }
        else if (selector === "zone-seven"){
            el.scrollTop = 174;
        }
        else if (selector === "zone-eight"){
            el.scrollTop = 232;
        }
        updateProgramming(selector)
    }
}

function SystemConfigurationWireless(){
    return(
        <div className="screen-style">
            <div className="screen-header">
                <img src={wifi_icon} className="resize-1 invert-color" alt="" />

                <p>
                    Wireless Zones
                </p>

                <Link to="/installer-toolbox/system-configuration/menu">
                    <div className="blue-button configuration-buttons" style={{'width':"250px", 'marginLeft':"8px",'float':"right", 'marginTop':"-27px", 'marginRight':"17px", 'boxShadow':"2px 2px 6px #383e56"}}>
                        <p style={{'marginTop':"-5px", 'marginRight':"15px"}}>
                            Return to System Configuration
                        </p>
                    </div>
                </Link>
            </div>

            <div className="screen-left-settings">
                <div className="config-container">
                    <div className="config-container-scroll">
                        <div style={{'marginTop':"110px"}}/> {/* May be a good idea to add a slight white haze to the top of this. */}

                        <ul className="programming-list">
                            <li><p id="zone-one" tabIndex="0" onClick={() => choseZone("zone-one")}>Wireless Zone 001</p></li>
                            <li><p id="zone-two" tabIndex="0" onClick={() => choseZone("zone-two")}>Wireless Zone 002</p></li>
                            <li><p id="zone-three" tabIndex="0" onClick={() => choseZone("zone-three")}>Wireless Zone 003</p></li>
                            <li><p id="zone-four" tabIndex="0" onClick={() => choseZone("zone-four")}>Wireless Zone 004</p></li>
                            <li><p id="zone-five" tabIndex="0" onClick={() => choseZone("zone-five")}>Wireless Zone 005</p></li>
                            <li><p id="zone-six" tabIndex="0" onClick={() => choseZone("zone-six")}>Wireless Zone 006</p></li>
                            <li><p id="zone-seven" tabIndex="0" onClick={() => choseZone("zone-seven")}>Wireless Zone 007</p></li>
                            <li><p id="zone-eight" tabIndex="0" onClick={() => choseZone("zone-eight")}>Wireless Zone 008</p></li>
                        </ul>

                        <div style={{'marginTop':"110px"}}/> {/* May be a good idea to add a slight white haze to the bottom of this. */}
                    </div>
                </div>
            </div>

            <div className="screen-right-settings">
                <Link to="/installer-toolbox/system-configuration/wireless-zones/edit" style={{'textDecoration':"none"}}>
                    <div className="config-container">
                        <div className="config-container-scroll">
                            <ul className="programming-list" style={{'marginTop':"0", 'marginBottom':"0"}}>
                                <li className="programming-right-side-list-option" style={{'borderTop':"none"}}><p style={{'color':"#404956"}}>Sensor Type</p> <SensorType/></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Equiment Code</p> <EquipmentCode/></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Serial Number</p> <SerialNumber/></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Smart Areas Assignment</p> <SmartAreasAssignment/></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Equipment Age</p> <EquipmentAge/></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Sensor Loop</p> <SensorLoop/></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Transmission Delay</p> <TransmissionDelay/></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Voice Descriptor</p> <VoiceDescriptor/></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Sensor Reports</p> <SensorReports/></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Sensor Supervised</p> <SensorSupervised/></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Sensor Chime</p> <SensorChime/></li>
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>

            <div style={{'bottom':"0",'width':"645px", 'height':"55px", 'position':"absolute", 'marginBottom':"108px", 'display': "inline-grid", 'gridTemplateColumns':"336px auto auto auto", 'marginLeft':"-310px"}}>
                <div className="blue-button configuration-buttons" style={{'width':"296px", 'marginLeft':"8px"}}>
                    <p style={{'marginTop':"10px"}}>
                        Go To Zone
                    </p>
                </div>

                <div className="blue-button configuration-buttons">
                    <img src={up_arrow_icon} style={{'height':"15px", 'marginTop':"10px"}} alt="" />
                </div>

                <Link to="/installer-toolbox/system-configuration/wireless-zones/edit">
                    <div className="blue-button configuration-buttons">
                        <p style={{'marginTop':"10px"}}>
                            Edit Zone
                        </p>
                    </div>
                </Link>

                <div className="blue-button configuration-buttons" onLoad={() => choseZone("zone-one")}>
                    <img src={down_arrow_icon} style={{'height':"15px", 'marginTop':"10px"}} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SystemConfigurationWireless