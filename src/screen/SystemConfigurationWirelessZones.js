import React from 'react'
import {Link} from 'react-router-dom'
import wifi_icon from '../images/wifi.png'
import up_arrow_icon from '../images/up-arrow.png';
import down_arrow_icon from '../images/down-arrow.png'

function SensorType(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.sensorType
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.sensorType
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.sensorType
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.sensorType
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.sensorType
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.sensorType
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.sensorType
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.sensorType
    }
    console.log("sensorType: ", datapass)

    if (datapass === "00"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>00 - Unsused</p>
        )
    }
    else if (datapass === "01"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>01 - Exit/Entry 1</p>
        )
    }
    else if (datapass === "02"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>02 - Exit/Entry 2</p>
        ) 
    }
    else if (datapass === "03"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>03 - Perimeter</p>
        )
    }
    else if (datapass === "04"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>04 - Interior Follower</p>
        )
    }
    else if (datapass === "05"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>05 - Day Zone</p>
        )
    }
    else if (datapass === "06"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>06 - 24-Hour Silent Alarm</p>
        )
    }
    else if (datapass === "07"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>07 - 24-Hour Audible Alarm</p>
        )
    }
    else if (datapass === "08"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>08 - 24-Hour Auxiliary Alarm</p>
        )
    }
    else if (datapass === "09"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>9 - 24-Hour Fire</p>
        )
    }
    else if (datapass === "10"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>10 - Interior with Delay</p>
        )
    }
    else if (datapass === "14"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>14 - 24-Hour Carbon Monoxide</p>
        )
    }
    else if (datapass === "16"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>16 - 24-Hour Fire Verification</p>
        )
    }
    else if (datapass === "23"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>23 - No Response Type</p>
        )
    }
    else if (datapass === "24"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>24 - Silent Burglary</p>
        )
    }
    else if (datapass === "32"){
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

function EquipmentCode(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.equipmentCode
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.equipmentCode
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.equipmentCode
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.equipmentCode
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.equipmentCode
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.equipmentCode
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.equipmentCode
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.equipmentCode
    }
    console.log("equipmentCode: ", datapass)

    if (datapass === "0000"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0000 - Other</p>
        )
    }
    else if (datapass === "0862"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0862 - 2GIG Thin Door/Window Contact</p>
        )
    }
    else if (datapass === "0863"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0863 - 2GIG Recessed Door Contact</p>
        )
    }
    else if (datapass === "0865"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0865 - 2GIG Outdoor Door/Window Sensor</p>
        )
    }
    else if (datapass === "0869"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0869 - 2GIG POR with Pet Immunity</p>
        )
    }
    else if (datapass === "0864"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0864 - 2GIG Glass Break Detector</p>
        )
    }
    else if (datapass === "0895"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0895 - SMKT2-345 GE Smoke/Heat Detector</p>
        )
    }
    else if (datapass === "1058"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1085 - 2GIG Smoke Detector</p>
        )
    }
    else if (datapass === "0872"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0872 - SMKE1-345 Smoke Detector(USA)</p>
        )
    }
    else if (datapass === "0871"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0871 - SMKE1-345 Smoke Detector(Canada)</p>
        )
    }
    else if (datapass === "0868"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0868 - 2GIG Panic Button Remote</p>
        )
    }
    else if (datapass === "0860"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0860 - CO1-345 CO Detector(USA)</p>
        )
    }
    else if (datapass === "0859"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0859 - CO1-345 CO Detector(Canada)</p>
        )
    }
    else if (datapass === "1026"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1026 - 2GIG CO Detector</p>
        )
    }
    else if (datapass === "1069"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1069 - 2GIG FireFighter SMKT/CO Listener</p>
        )
    }
    else if (datapass === "0873"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0873 - 2GIG Takeover Module</p>
        )
    }
    else if (datapass === "0637"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0637 - HW D/W "5816"</p>
        )
    }
    else if (datapass === "0470"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0470 - HW R-D/W "5818MNL"</p>
        )
    }
    else if (datapass === "0533"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0533 - HW PIR "5890"</p>
        )
    }
    else if (datapass === "0530"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0530 - HW PIR "5894PI"</p>
        )
    }
    else if (datapass === "0519"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0519 - HW Glass Break "5853"</p>
        )
    }
    else if (datapass === "0589"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0589 - HW Smoke "5808W3"</p>
        )
    }
    else if (datapass === "0557"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0557 - HW Heat Sensor "5809"</p>
        )
    }
    else if (datapass === "0624"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0624 - HW Flood Sensor "5821"</p>
        )
    }
    else if (datapass === "0491"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0491 - HW Panic Pendant "5802MN2"</p>
        )
    }
    else if (datapass === "1063"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1063 - 2GIG 2GIG Doorbell</p>
        )
    }
    else if (datapass === "1061"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1061 - Tilt Sensor</p>
        )
    }
    else if (datapass === "1062"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1062 - 2GIG Tilt Sensor</p>
        )
    }
    else if (datapass === "1064"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1064 - 2GIG Bypass Sensor</p>
        )
    }
    else if (datapass === "1065"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0863 - 2GIG Flood Sensor</p>
        )
    }
    else if (datapass === "1066"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1066 - 2GIG Shock Sensor</p>
        )
    }
    else if (datapass === "1067"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1067 - 2GIG Repeater</p>
        )
    }
    else if (datapass === "1068"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1068 - 2GIG Translator</p>
        )
    }
    else if (datapass === "1070"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1070 - 2GIG F1-345</p>
        )
    }
    else if (datapass === "1071"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1071 - 2GIG PHB-345</p>
        )
    }
    else if (datapass === "1072"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>1072 - 2GIG Smoke Ring</p>
        )
    }
    else if (datapass === "0655"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0655 - Existing Door/Window Contact</p>
        )
    }
    else if (datapass === "0609"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0609 - Existing Motion Detector</p>
        )
    }
    else if (datapass === "0475"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0475 - Existing Glass Break Detector</p>
        )
    }
    else if (datapass === "0616"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0616 - Existing Smoke Detector</p>
        )
    }
    else if (datapass === "0692"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0692 - Existing CO Detector</p>
        )
    }
    else if (datapass === "0708"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0708 - Existing Heat Sensor</p>
        )
    }
    else if (datapass === "0556"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0556 - Existing Flood/Temp Sensor</p>
        )
    }
    else if (datapass === "9999"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>9999 - Alarm.com Image Sensor</p>
        )
    }
    else if (datapass === "2058"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2058 - eSeries Smoke Detector (USA)</p>
        )
    }
    else if (datapass === "2061"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2061 - eSeries Tilt Sensor</p>
        )
    }
    else if (datapass === "2065"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2065 - eSeries Flood Sensor</p>
        )
    }
    else if (datapass === "2066"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2066 - eSeries Shock Sensor</p>
        )
    }
    else if (datapass === "2067"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2067 - eSeries Repeater</p>
        )
    }
    else if (datapass === "2069"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2069 - eSeries FireFighter SMKT/CO Listener</p>
        )
    }
    else if (datapass === "2068"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2068 - eSeries Translator</p>
        )
    }
    else if (datapass === "2070"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2070 - eSeries Water Sensor</p>
        )
    }
    else if (datapass === "2860"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2860 - eSeries CO Detector (USA)</p>
        )
    }
    else if (datapass === "2862"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2862 - eSeries Thin Door/Window Contact</p>
        )
    }
    else if (datapass === "2863"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2863 - eSeries Recessed Door Contact</p>
        )
    }
    else if (datapass === "2865"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2865 - eSeries Outdoor Door/Window Sensor</p>
        )
    }
    else if (datapass === "2864"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2864 - eSeries Glass Break Detector</p>
        )
    }
    else if (datapass === "2868"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2868 - eSeries Panic</p>
        )
    }
    else if (datapass === "2869"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>2869 - eSeries PIR with Pet Immunity</p>
        )
    }
    else if (datapass === "2873"){
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

function SerialNumber(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.serialNumber
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.serialNumber
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.serialNumber
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.serialNumber
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.serialNumber
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.serialNumber
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.serialNumber
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.serialNumber
    }
    console.log("serialNumber: ", datapass)

    if (datapass !== null){
        if(typeof datapass !== "object"){
            return(
                <p className="css-grid-align-right" style={{'color':"#404956"}}>{datapass}</p> // Not working when try to put {txid} talk to stephen about fixing this
            )
        }
        else{
            return(
                <p className="css-grid-align-right" style={{'color':"#404956"}}>0000000</p>
            )
        }
    }
    else{
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>0000000</p>
        )
    }
}

function SmartAreasAssignment(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.smartAreasAssignment
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.smartAreasAssignment
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.smartAreasAssignment
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.smartAreasAssignment
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.smartAreasAssignment
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.smartAreasAssignment
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.smartAreasAssignment
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.smartAreasAssignment
    }
    console.log("smartAreasAssignment: ", datapass)

    if (datapass === "s1"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>S1</p>
        )
    }
    else if(datapass === "s2"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>S2</p>
        )
    }
    else if(datapass === "s3"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>S3</p>
        )
    }
    else if(datapass === "s4"){
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

function EquipmentAge(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.equipmentAge
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.equipmentAge
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.equipmentAge
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.equipmentAge
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.equipmentAge
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.equipmentAge
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.equipmentAge
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.equipmentAge
    }
    console.log("equipmentAge: ", datapass)

    if (datapass === "new"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>New</p>
        )
    }
    else if (datapass === "existing"){
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

function SensorLoop(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.sensorLoop
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.sensorLoop
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.sensorLoop
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.sensorLoop
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.sensorLoop
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.sensorLoop
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.sensorLoop
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.sensorLoop
    }
    console.log("sensorLoop: ", datapass)

    if(datapass === "1"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Loop 1</p>
        )
    }
    else if(datapass === "2"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Loop 2</p>
        )
    }
    else if(datapass === "3"){
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

function TransmissionDelay(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.transmissionDelay
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.transmissionDelay
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.transmissionDelay
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.transmissionDelay
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.transmissionDelay
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.transmissionDelay
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.transmissionDelay
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.transmissionDelay
    }
    console.log("transmissionDelay: ", datapass)

    if(datapass === "enabled"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Enabled</p>
        )
    }
    else if(datapass === "disabled"){
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

function VoiceDescriptor(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.voiceDescriptor
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.voiceDescriptor
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.voiceDescriptor
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.voiceDescriptor
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.voiceDescriptor
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.voiceDescriptor
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.voiceDescriptor
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.voiceDescriptor
    }
    console.log("voiceDescriptor: ", datapass)

    var fullDescriptor = ""
    
    for(var i=1; i<7; i++){
        if (i === 1){
            if (i !== ""){
                if (datapass === "Abort"){
                    fullDescriptor += "Abort"
                }
                else if (datapass === "Ac"){
                    fullDescriptor += "Ac"
                }
                else if (datapass === "Access"){
                    fullDescriptor += "Access"
                }
                else if (datapass === "Alarm"){
                    fullDescriptor += "Alarm"
                }
                else if (datapass === "And"){
                    fullDescriptor += "And"
                }
                else if (datapass === "Anouncement"){
                    fullDescriptor += "Announcement"
                }
                else if (datapass === "Apartment"){
                    fullDescriptor += "Apartment"
                }
                else if (datapass === "Area"){
                    fullDescriptor += "Area"
                }
                else if (datapass === "Arm"){
                    fullDescriptor += "Arm"
                }
                else if (datapass === "Armed"){
                    fullDescriptor += "Armed"
                }
                else if (datapass === "At"){
                    fullDescriptor += "At"
                }
                else if (datapass === "Attic"){
                    fullDescriptor += "Attic"
                }
                else if (datapass === "Audio"){
                    fullDescriptor += "Audio"
                }
                else if (datapass === "Auto"){
                    fullDescriptor += "Auto"
                }
                else if (datapass === "Automation"){
                    fullDescriptor += "Automation"
                }
                else if (datapass === "Auxiliary"){
                    fullDescriptor += "Auxiliary"
                }
                else if (datapass === "Away"){
                    fullDescriptor += "Away"
                }
                else if (datapass === "Babys"){
                    fullDescriptor += "Babys"
                }
                else if (datapass === "Back"){
                    fullDescriptor += "Back"
                }
                else if (datapass === "Balcony"){
                    fullDescriptor += "Balcony"
                }
                else if (datapass === "Basement"){
                    fullDescriptor += "Basement"
                }
                else if (datapass === "Bathroom"){
                    fullDescriptor += "Bathroom"
                }
                else if (datapass === "Battery"){
                    fullDescriptor += "Battery"
                }
                else if (datapass === "Bedroom"){
                    fullDescriptor += "Bedroom"
                }
                else if (datapass === "Bell"){
                    fullDescriptor += "Bell"
                }
                else if (datapass === "Bonus"){
                    fullDescriptor += "Bonus"
                }
                else if (datapass === "Boys"){
                    fullDescriptor += "Boys"
                }
                else if (datapass === "Break"){
                    fullDescriptor += "Break"
                }
                else if (datapass === "Button"){
                    fullDescriptor += "Button"
                }
                else if (datapass === "Bypass"){
                    fullDescriptor += "Bypass"
                }
                else if (datapass === "Bypassed"){
                    fullDescriptor += "Bypassed"
                }
                else if (datapass === "Camera"){
                    fullDescriptor += "Camera"
                }
                else if (datapass === "Cabinet"){
                    fullDescriptor += "Cabinet"
                }
                else if (datapass === "Cancel"){
                    fullDescriptor += "Cancel"
                }
                else if (datapass === "Carbon_monoxide"){
                    fullDescriptor += "Carbon_monoxide"
                }
                else if (datapass === "Cave"){
                    fullDescriptor += "Cave"
                }
                else if (datapass === "Cell_radio"){
                    fullDescriptor += "Cell_radio"
                }
                else if (datapass === "Cellular"){
                    fullDescriptor += "Cellular"
                }
                else if (datapass === "Center"){
                    fullDescriptor += "Center"
                }
                else if (datapass === "Check"){
                    fullDescriptor += "Check"
                }
                else if (datapass === "Chest"){
                    fullDescriptor += "Chest"
                }
                else if (datapass === "Childrens"){
                    fullDescriptor += "Childrens"
                }
                else if (datapass === "Chime"){
                    fullDescriptor += "Chime"
                }
                else if (datapass === "Closet"){
                    fullDescriptor += "Closet"
                }
                else if (datapass === "Code"){
                    fullDescriptor += "Code"
                }
                else if (datapass === "Communications"){
                    fullDescriptor += "Communications"
                }
                else if (datapass === "Computer"){
                    fullDescriptor += "Computer"
                }
                else if (datapass === "Control"){
                    fullDescriptor += "Control"
                }
                else if (datapass === "Cool"){
                    fullDescriptor += "Cool"
                }
                else if (datapass === "Corner"){
                    fullDescriptor += "Corner"
                }
                else if (datapass === "Courtyard"){
                    fullDescriptor += "Courtyard"
                }
                else if (datapass === "Crawl"){
                    fullDescriptor += "Crawl"
                }
                else if (datapass === "Current"){
                    fullDescriptor += "Current"
                }
                else if (datapass === "Daughters"){
                    fullDescriptor += "Daughters"
                }
                else if (datapass === "Day"){
                    fullDescriptor += "Day"
                }
                else if (datapass === "Deck"){
                    fullDescriptor += "Deck"
                }
                else if (datapass === "Degrees"){
                    fullDescriptor += "Degrees"
                }
                else if (datapass === "Den"){
                    fullDescriptor += "Den"
                }
                else if (datapass === "Detached"){
                    fullDescriptor += "Detached"
                }
                else if (datapass === "Detector"){
                    fullDescriptor += "Detector"
                }
                else if (datapass === "Dim"){
                    fullDescriptor += "Dim"
                }
                else if (datapass === "Dining"){
                    fullDescriptor += "Dining"
                }
                else if (datapass === "Disarm"){
                    fullDescriptor += "Disarm"
                }
                else if (datapass === "Disarmed"){
                    fullDescriptor += "Disarmed"
                }
                else if (datapass === "Dock"){
                    fullDescriptor += "Dock"
                }
                else if (datapass === "Door"){
                    fullDescriptor += "Door"
                }
                else if (datapass === "Doorbell"){
                    fullDescriptor += "Doorbell"
                }
                else if (datapass === "Downstairs"){
                    fullDescriptor += "Downstairs"
                }
                else if (datapass === "Driveway"){
                    fullDescriptor += "Driveway"
                }
                else if (datapass === "East"){
                    fullDescriptor += "East"
                }
                else if (datapass === "Eight"){
                    fullDescriptor += "Eight"
                }
                else if (datapass === "Eighteen"){
                    fullDescriptor += "Eighteen"
                }
                else if (datapass === "Eighty"){
                    fullDescriptor += "Eighty"
                }
                else if (datapass === "Electric"){
                    fullDescriptor += "Electric"
                }
                else if (datapass === "Eleven"){
                    fullDescriptor += "Eleven"
                }
                else if (datapass === "Emergency"){
                    fullDescriptor += "Emergency"
                }
                else if (datapass === "Enter"){
                    fullDescriptor += "Enter"
                }
                else if (datapass === "Entrance"){
                    fullDescriptor += "Entrance"
                }
                else if (datapass === "Entry"){
                    fullDescriptor += "Entry"
                }
                else if (datapass === "Error"){
                    fullDescriptor += "Error"
                }
                else if (datapass === "Exercise"){
                    fullDescriptor += "Exercise"
                }
                else if (datapass === "Exit"){
                    fullDescriptor += "Exit"
                }
                else if (datapass === "Exit_now"){
                    fullDescriptor += "Exit_now"
                }
                else if (datapass === "Exterior"){
                    fullDescriptor += "Exterior"
                }
                else if (datapass === "External"){
                    fullDescriptor += "External"
                }
                else if (datapass === "Failure"){
                    fullDescriptor += "Failure"
                }
                else if (datapass === "Family"){
                    fullDescriptor += "Family"
                }
                else if (datapass === "Fan"){
                    fullDescriptor += "Fan"
                }
                else if (datapass === "Fifteen"){
                    fullDescriptor += "Fifteen"
                }
                else if (datapass === "Fifty"){
                    fullDescriptor += "Fifty"
                }
                else if (datapass === "Fire"){
                    fullDescriptor += "Fire"
                }
                else if (datapass === "Fire_alert"){
                    fullDescriptor += "Fire_alert"
                }
                else if (datapass === "Fire_detector"){
                    fullDescriptor += "Fire_detector"
                }
                else if (datapass === "First"){
                    fullDescriptor += "First"
                }
                else if (datapass === "Five"){
                    fullDescriptor += "Five"
                }
                else if (datapass === "Flood"){
                    fullDescriptor += "Flood"
                }
                else if (datapass === "Floor"){
                    fullDescriptor += "Floor"
                }
                else if (datapass === "Fluid"){
                    fullDescriptor += "Fluid"
                }
                else if (datapass === "Foil"){
                    fullDescriptor += "Foil"
                }
                else if (datapass === "For"){
                    fullDescriptor += "For"
                }
                else if (datapass === "Fourty"){
                    fullDescriptor += "Fourty"
                }
                else if (datapass === "Four"){
                    fullDescriptor += "Four"
                }
                else if (datapass === "Fourteen"){
                    fullDescriptor += "Fourteen"
                }
                else if (datapass === "Forth"){
                    fullDescriptor += "Forth"
                }
                else if (datapass === "Foyer"){
                    fullDescriptor += "Foyer"
                }
                else if (datapass === "Freeze"){
                    fullDescriptor += "Freeze"
                }
                else if (datapass === "Freezer"){
                    fullDescriptor += "Freezer"
                }
                else if (datapass === "Front"){
                    fullDescriptor += "Front"
                }
                else if (datapass === "Furnace"){
                    fullDescriptor += "Furnace"
                }
                else if (datapass === "Game"){
                    fullDescriptor += "Game"
                }
                else if (datapass === "Garage"){
                    fullDescriptor += "Garage"
                }
                else if (datapass === "Gas"){
                    fullDescriptor += "Gas"
                }
                else if (datapass === "Gate"){
                    fullDescriptor += "Gate"
                }
                else if (datapass === "Girls"){
                    fullDescriptor += "Girls"
                }
                else if (datapass === "Glass"){
                    fullDescriptor += "Glass"
                }
                else if (datapass === "Glass_break"){
                    fullDescriptor += "Glass_break"
                }
                else if (datapass === "Guest"){
                    fullDescriptor += "Guest"
                }
                else if (datapass === "Gun"){
                    fullDescriptor += "Gun"
                }
                else if (datapass === "Hall"){
                    fullDescriptor += "Hall"
                }
                else if (datapass === "Hallway"){
                    fullDescriptor += "Hallway"
                }
                else if (datapass === "Hang_up"){
                    fullDescriptor += "Hang_up"
                }
                else if (datapass === "Hanging"){
                    fullDescriptor += "Hanging"
                }
                else if (datapass === "Heat"){
                    fullDescriptor += "Heat"
                }
                else if (datapass === "High"){
                    fullDescriptor += "High"
                }
                else if (datapass === "Home"){
                    fullDescriptor += "Home"
                }
                else if (datapass === "House"){
                    fullDescriptor += "House"
                }
                else if (datapass === "Ice"){
                    fullDescriptor += "Ice"
                }
                else if (datapass === "Image"){
                    fullDescriptor += "Image"
                }
                else if (datapass === "Image_sensor"){
                    fullDescriptor += "Image_sensor"
                }
                else if (datapass === "Inside"){
                    fullDescriptor += "Inside"
                }
                else if (datapass === "Instant"){
                    fullDescriptor += "Instant"
                }
                else if (datapass === "Interior"){
                    fullDescriptor += "Interior"
                }
                else if (datapass === "Intrusion"){
                    fullDescriptor += "Intrusion"
                }
                else if (datapass === "Is"){
                    fullDescriptor += "Is"
                }
                else if (datapass === "Key"){
                    fullDescriptor += "Key"
                }
                else if (datapass === "Keyfob"){
                    fullDescriptor += "Keyfob"
                }
                else if (datapass === "Keypads"){
                    fullDescriptor += "Keypads"
                }
                else if (datapass === "Kids"){
                    fullDescriptor += "Kids"
                }
                else if (datapass === "Kitchen"){
                    fullDescriptor += "Kitchen"
                }
                else if (datapass === "Laundry"){
                    fullDescriptor += "Laundry"
                }
                else if (datapass === "Left"){
                    fullDescriptor += "Left"
                }
                else if (datapass === "Level"){
                    fullDescriptor += "Level"
                }
                else if (datapass === "Library"){
                    fullDescriptor += "Library"
                }
                else if (datapass === "Light"){
                    fullDescriptor += "Light"
                }
                else if (datapass === "Lights"){
                    fullDescriptor += "Lights"
                }
                else if (datapass === "Liquor"){
                    fullDescriptor += "Liquor"
                }
                else if (datapass === "Living"){
                    fullDescriptor += "Living"
                }
                else if (datapass === "Loading"){
                    fullDescriptor += "Loading"
                }
                else if (datapass === "Lock"){
                    fullDescriptor += "Lock"
                }
                else if (datapass === "Loft"){
                    fullDescriptor += "Loft"
                }
                else if (datapass === "Low"){
                    fullDescriptor += "Low"
                }
                else if (datapass === "Main"){
                    fullDescriptor += "Main"
                }
                else if (datapass === "Maintenance"){
                    fullDescriptor += "Maintenance"
                }
                else if (datapass === "Man"){
                    fullDescriptor += "Man"
                }
                else if (datapass === "Master"){
                    fullDescriptor += "Master"
                }
                else if (datapass === "Medical"){
                    fullDescriptor += "Medical"
                }
                else if (datapass === "Medicine"){
                    fullDescriptor += "Medicine"
                }
                else if (datapass === "Menu"){
                    fullDescriptor += "Menu"
                }
                else if (datapass === "Middle"){
                    fullDescriptor += "Middle"
                }
                else if (datapass === "Monitor"){
                    fullDescriptor += "Monitor"
                }
                else if (datapass === "Motion"){
                    fullDescriptor += "Motion"
                }
                else if (datapass === "Motion_detector"){
                    fullDescriptor += "Motion_detector"
                }
                else if (datapass === "Mud"){
                    fullDescriptor += "Mud"
                }
                else if (datapass === "Nine"){
                    fullDescriptor += "Nine"
                }
                else if (datapass === "Nineteen"){
                    fullDescriptor += "Nineteen"
                }
                else if (datapass === "Ninety"){
                    fullDescriptor += "Ninety"
                }
                else if (datapass === "No_delay"){
                    fullDescriptor += "No_delay"
                }
                else if (datapass === "No_entry_delay"){
                    fullDescriptor += "No_entry_delay"
                }
                else if (datapass === "North"){
                    fullDescriptor += "North"
                }
                else if (datapass === "Not"){
                    fullDescriptor += "Not"
                }
                else if (datapass === "Not_ready"){
                    fullDescriptor += "Not_ready"
                }
                else if (datapass === "Nursery"){
                    fullDescriptor += "Nursery"
                }
                else if (datapass === "Off"){
                    fullDescriptor += "Off"
                }
                else if (datapass === "Office"){
                    fullDescriptor += "Office"
                }
                else if (datapass === "On"){
                    fullDescriptor += "On"
                }
                else if (datapass === "One"){
                    fullDescriptor += "One"
                }
                else if (datapass === "One_hundred"){
                    fullDescriptor += "One_hundred"
                }
                else if (datapass === "Output"){
                    fullDescriptor += "Output"
                }
                else if (datapass === "Outside"){
                    fullDescriptor += "Outside"
                }
                else if (datapass === "Overhead"){
                    fullDescriptor += "Overhead"
                }
                else if (datapass === "Panel"){
                    fullDescriptor += "Panel"
                }
                else if (datapass === "Panic"){
                    fullDescriptor += "Panic"
                }
                else if (datapass === "Pantry"){
                    fullDescriptor += "Pantry"
                }
                else if (datapass === "Patio"){
                    fullDescriptor += "Patio"
                }
                else if (datapass === "Perimeter"){
                    fullDescriptor += "Perimeter"
                }
                else if (datapass === "Phone_line"){
                    fullDescriptor += "Phone_line"
                }
                else if (datapass === "Play"){
                    fullDescriptor += "Play"
                }
                else if (datapass === "Police"){
                    fullDescriptor += "Police"
                }
                else if (datapass === "Pool"){
                    fullDescriptor += "Pool"
                }
                else if (datapass === "Porch"){
                    fullDescriptor += "Porch"
                }
                else if (datapass === "Pound"){
                    fullDescriptor += "Pound"
                }
                else if (datapass === "Power"){
                    fullDescriptor += "Power"
                }
                else if (datapass === "Press"){
                    fullDescriptor += "Press"
                }
                else if (datapass === "Previous"){
                    fullDescriptor += "Previous"
                }
                else if (datapass === "Pump"){
                    fullDescriptor += "Pump"
                }
                else if (datapass === "Radio"){
                    fullDescriptor += "Radio"
                }
                else if (datapass === "Ready"){
                    fullDescriptor += "Ready"
                }
                else if (datapass === "Rear"){
                    fullDescriptor += "Rear"
                }
                else if (datapass === "Refrigerator"){
                    fullDescriptor += "Refrigerator"
                }
                else if (datapass === "Relay"){
                    fullDescriptor += "Relay"
                }
                else if (datapass === "Remote"){
                    fullDescriptor += "Remote"
                }
                else if (datapass === "Repeat"){
                    fullDescriptor += "Repeat"
                }
                else if (datapass === "Rf_jam"){
                    fullDescriptor += "Rf_jam"
                }
                else if (datapass === "Right"){
                    fullDescriptor += "Right"
                }
                else if (datapass === "Room"){
                    fullDescriptor += "Room"
                }
                else if (datapass === "Safe"){
                    fullDescriptor += "Safe"
                }
                else if (datapass === "Second"){
                    fullDescriptor += "Second"
                }
                else if (datapass === "Security"){
                    fullDescriptor += "Security"
                }
                else if (datapass === "Sensor"){
                    fullDescriptor += "Sensor"
                }
                else if (datapass === "Sensors"){
                    fullDescriptor += "Sensors"
                }
                else if (datapass === "Service"){
                    fullDescriptor += "Service"
                }
                else if (datapass === "Session"){
                    fullDescriptor += "Session"
                }
                else if (datapass === "Set"){
                    fullDescriptor += "Set"
                }
                else if (datapass === "Seven"){
                    fullDescriptor += "Seven"
                }
                else if (datapass === "Seventeen"){
                    fullDescriptor += "Seventeen"
                }
                else if (datapass === "Seventy"){
                    fullDescriptor += "Seventy"
                }
                else if (datapass === "Shed"){
                    fullDescriptor += "Shed"
                }
                else if (datapass === "Shop"){
                    fullDescriptor += "Shop"
                }
                else if (datapass === "Side"){
                    fullDescriptor += "Side"
                }
                else if (datapass === "Silent"){
                    fullDescriptor += "Silent"
                }
                else if (datapass === "Siren"){
                    fullDescriptor += "Siren"
                }
                else if (datapass === "Six"){
                    fullDescriptor += "Six"
                }
                else if (datapass === "Sixteen"){
                    fullDescriptor += "Sixteen"
                }
                else if (datapass === "Sixty"){
                    fullDescriptor += "Sixty"
                }
                else if (datapass === "Skylight"){
                    fullDescriptor += "Skylight"
                }
                else if (datapass === "Sliding"){
                    fullDescriptor += "Sliding"
                }
                else if (datapass === "Smoke"){
                    fullDescriptor += "Smoke"
                }
                else if (datapass === "Sons"){
                    fullDescriptor += "Sons"
                }
                else if (datapass === "Sounder"){
                    fullDescriptor += "Sounder"
                }
                else if (datapass === "South"){
                    fullDescriptor += "South"
                }
                else if (datapass === "Space"){
                    fullDescriptor += "Space"
                }
                else if (datapass === "Spare"){
                    fullDescriptor += "Spare"
                }
                else if (datapass === "Stairs"){
                    fullDescriptor += "Stairs"
                }
                else if (datapass === "Star"){
                    fullDescriptor += "Star"
                }
                else if (datapass === "Status"){
                    fullDescriptor += "Status"
                }
                else if (datapass === "Stay"){
                    fullDescriptor += "Stay"
                }
                else if (datapass === "Stop"){
                    fullDescriptor += "Shop"
                }
                else if (datapass === "Storage"){
                    fullDescriptor += "Storage"
                }
                else if (datapass === "Study"){
                    fullDescriptor += "Study"
                }
                else if (datapass === "Sump"){
                    fullDescriptor += "Sump"
                }
                else if (datapass === "Sun"){
                    fullDescriptor += "Sun"
                }
                else if (datapass === "Sunroom"){
                    fullDescriptor += "Sunroom"
                }
                else if (datapass === "Supervision"){
                    fullDescriptor += "Supervision"
                }
                else if (datapass === "Switch"){
                    fullDescriptor += "Switch"
                }
                else if (datapass === "System"){
                    fullDescriptor += "System"
                }
                else if (datapass === "Tamper"){
                    fullDescriptor += "Tamper"
                }
                else if (datapass === "Temperature"){
                    fullDescriptor += "Temperature"
                }
                else if (datapass === "Ten"){
                    fullDescriptor += "Ten"
                }
                else if (datapass === "Terminated"){
                    fullDescriptor += "Terminated"
                }
                else if (datapass === "Theater"){
                    fullDescriptor += "Theater"
                }
                else if (datapass === "Thermostat"){
                    fullDescriptor += "Thermostat"
                }
                else if (datapass === "Third"){
                    fullDescriptor += "Third"
                }
                else if (datapass === "Thirteen"){
                    fullDescriptor += "Thirteen"
                }
                else if (datapass === "Thirty"){
                    fullDescriptor += "Thirty"
                }
                else if (datapass === "Three"){
                    fullDescriptor += "Three"
                }
                else if (datapass === "To"){
                    fullDescriptor += "To"
                }
                else if (datapass === "Tool"){
                    fullDescriptor += "Tool"
                }
                else if (datapass === "Transmitted"){
                    fullDescriptor += "Transmitted"
                }
                else if (datapass === "Transmitter"){
                    fullDescriptor += "Transmitter"
                }
                else if (datapass === "Trouble"){
                    fullDescriptor += "Trouble"
                }
                else if (datapass === "Turn"){
                    fullDescriptor += "Turn"
                }
                else if (datapass === "Tv"){
                    fullDescriptor += "Tv"
                }
                else if (datapass === "Twelve"){
                    fullDescriptor += "Twelve"
                }
                else if (datapass === "Twenty"){
                    fullDescriptor += "Twenty"
                }
                else if (datapass === "Two"){
                    fullDescriptor += "Two"
                }
                else if (datapass === "Unlock"){
                    fullDescriptor += "Unlock"
                }
                else if (datapass === "Upper"){
                    fullDescriptor += "Upper"
                }
                else if (datapass === "Upstairs"){
                    fullDescriptor += "Upstairs"
                }
                else if (datapass === "User"){
                    fullDescriptor += "User"
                }
                else if (datapass === "Utility"){
                    fullDescriptor += "Utility"
                }
                else if (datapass === "Valve"){
                    fullDescriptor += "Valve"
                }
                else if (datapass === "Video"){
                    fullDescriptor += "Video"
                }
                else if (datapass === "Voice"){
                    fullDescriptor += "Voice"
                }
                else if (datapass === "Wall"){
                    fullDescriptor += "Wall"
                }
                else if (datapass === "Warehouse"){
                    fullDescriptor += "Warehouse"
                }
                else if (datapass === "Water"){
                    fullDescriptor += "Water"
                }
                else if (datapass === "West"){
                    fullDescriptor += "West"
                }
                else if (datapass === "Window"){
                    fullDescriptor += "Window"
                }
                else if (datapass === "Wing"){
                    fullDescriptor += "Wing"
                }
                else if (datapass === "Wireless"){
                    fullDescriptor += "Wireless"
                }
                else if (datapass === "Yard"){
                    fullDescriptor += "Yard"
                }
                else if (datapass === "Zero"){
                    fullDescriptor += "Zero"
                }
                else if (datapass === "Zone"){
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
                    if (datapass === "Abort"){
                        fullDescriptor += " Abort"
                    }
                    else if (datapass === "Ac"){
                        fullDescriptor += " Ac"
                    }
                    else if (datapass === "Access"){
                        fullDescriptor += " Access"
                    }
                    else if (datapass === "Alarm"){
                        fullDescriptor += " Alarm"
                    }
                    else if (datapass === "And"){
                        fullDescriptor += " And"
                    }
                    else if (datapass === "Anouncement"){
                        fullDescriptor += " Announcement"
                    }
                    else if (datapass === "Apartment"){
                        fullDescriptor += " Apartment"
                    }
                    else if (datapass === "Area"){
                        fullDescriptor += " Area"
                    }
                    else if (datapass === "Arm"){
                        fullDescriptor += " Arm"
                    }
                    else if (datapass === "Armed"){
                        fullDescriptor += " Armed"
                    }
                    else if (datapass === "At"){
                        fullDescriptor += " At"
                    }
                    else if (datapass === "Attic"){
                        fullDescriptor += " Attic"
                    }
                    else if (datapass === "Audio"){
                        fullDescriptor += " Audio"
                    }
                    else if (datapass === "Auto"){
                        fullDescriptor += " Auto"
                    }
                    else if (datapass === "Automation"){
                        fullDescriptor += " Automation"
                    }
                    else if (datapass === "Auxiliary"){
                        fullDescriptor += " Auxiliary"
                    }
                    else if (datapass === "Away"){
                        fullDescriptor += " Away"
                    }
                    else if (datapass === "Babys"){
                        fullDescriptor += " Babys"
                    }
                    else if (datapass === "Back"){
                        fullDescriptor += " Back"
                    }
                    else if (datapass === "Balcony"){
                        fullDescriptor += " Balcony"
                    }
                    else if (datapass === "Basement"){
                        fullDescriptor += " Basement"
                    }
                    else if (datapass === "Bathroom"){
                        fullDescriptor += " Bathroom"
                    }
                    else if (datapass === "Battery"){
                        fullDescriptor += " Battery"
                    }
                    else if (datapass === "Bedroom"){
                        fullDescriptor += " Bedroom"
                    }
                    else if (datapass === "Bell"){
                        fullDescriptor += " Bell"
                    }
                    else if (datapass === "Bonus"){
                        fullDescriptor += " Bonus"
                    }
                    else if (datapass === "Boys"){
                        fullDescriptor += " Boys"
                    }
                    else if (datapass === "Break"){
                        fullDescriptor += " Break"
                    }
                    else if (datapass === "Button"){
                        fullDescriptor += " Button"
                    }
                    else if (datapass === "Bypass"){
                        fullDescriptor += " Bypass"
                    }
                    else if (datapass === "Bypassed"){
                        fullDescriptor += " Bypassed"
                    }
                    else if (datapass === "Camera"){
                        fullDescriptor += " Camera"
                    }
                    else if (datapass === "Cabinet"){
                        fullDescriptor += " Cabinet"
                    }
                    else if (datapass === "Cancel"){
                        fullDescriptor += " Cancel"
                    }
                    else if (datapass === "Carbon_monoxide"){
                        fullDescriptor += " Carbon_monoxide"
                    }
                    else if (datapass === "Cave"){
                        fullDescriptor += " Cave"
                    }
                    else if (datapass === "Cell_radio"){
                        fullDescriptor += " Cell_radio"
                    }
                    else if (datapass === "Cellular"){
                        fullDescriptor += " Cellular"
                    }
                    else if (datapass === "Center"){
                        fullDescriptor += " Center"
                    }
                    else if (datapass === "Check"){
                        fullDescriptor += " Check"
                    }
                    else if (datapass === "Chest"){
                        fullDescriptor += " Chest"
                    }
                    else if (datapass === "Childrens"){
                        fullDescriptor += " Childrens"
                    }
                    else if (datapass === "Chime"){
                        fullDescriptor += " Chime"
                    }
                    else if (datapass === "Closet"){
                        fullDescriptor += " Closet"
                    }
                    else if (datapass === "Code"){
                        fullDescriptor += " Code"
                    }
                    else if (datapass === "Communications"){
                        fullDescriptor += " Communications"
                    }
                    else if (datapass === "Computer"){
                        fullDescriptor += " Computer"
                    }
                    else if (datapass === "Control"){
                        fullDescriptor += " Control"
                    }
                    else if (datapass === "Cool"){
                        fullDescriptor += " Cool"
                    }
                    else if (datapass === "Corner"){
                        fullDescriptor += " Corner"
                    }
                    else if (datapass === "Courtyard"){
                        fullDescriptor += " Courtyard"
                    }
                    else if (datapass === "Crawl"){
                        fullDescriptor += " Crawl"
                    }
                    else if (datapass === "Current"){
                        fullDescriptor += " Current"
                    }
                    else if (datapass === "Daughters"){
                        fullDescriptor += " Daughters"
                    }
                    else if (datapass === "Day"){
                        fullDescriptor += " Day"
                    }
                    else if (datapass === "Deck"){
                        fullDescriptor += " Deck"
                    }
                    else if (datapass === "Degrees"){
                        fullDescriptor += " Degrees"
                    }
                    else if (datapass === "Den"){
                        fullDescriptor += " Den"
                    }
                    else if (datapass === "Detached"){
                        fullDescriptor += " Detached"
                    }
                    else if (datapass === "Detector"){
                        fullDescriptor += " Detector"
                    }
                    else if (datapass === "Dim"){
                        fullDescriptor += " Dim"
                    }
                    else if (datapass === "Dining"){
                        fullDescriptor += " Dining"
                    }
                    else if (datapass === "Disarm"){
                        fullDescriptor += " Disarm"
                    }
                    else if (datapass === "Disarmed"){
                        fullDescriptor += " Disarmed"
                    }
                    else if (datapass === "Dock"){
                        fullDescriptor += " Dock"
                    }
                    else if (datapass === "Door"){
                        fullDescriptor += " Door"
                    }
                    else if (datapass === "Doorbell"){
                        fullDescriptor += " Doorbell"
                    }
                    else if (datapass === "Downstairs"){
                        fullDescriptor += " Downstairs"
                    }
                    else if (datapass === "Driveway"){
                        fullDescriptor += " Driveway"
                    }
                    else if (datapass === "East"){
                        fullDescriptor += " East"
                    }
                    else if (datapass === "Eight"){
                        fullDescriptor += " Eight"
                    }
                    else if (datapass === "Eighteen"){
                        fullDescriptor += " Eighteen"
                    }
                    else if (datapass === "Eighty"){
                        fullDescriptor += " Eighty"
                    }
                    else if (datapass === "Electric"){
                        fullDescriptor += " Electric"
                    }
                    else if (datapass === "Eleven"){
                        fullDescriptor += " Eleven"
                    }
                    else if (datapass === "Emergency"){
                        fullDescriptor += " Emergency"
                    }
                    else if (datapass === "Enter"){
                        fullDescriptor += " Enter"
                    }
                    else if (datapass === "Entrance"){
                        fullDescriptor += " Entrance"
                    }
                    else if (datapass === "Entry"){
                        fullDescriptor += " Entry"
                    }
                    else if (datapass === "Error"){
                        fullDescriptor += " Error"
                    }
                    else if (datapass === "Exercise"){
                        fullDescriptor += " Exercise"
                    }
                    else if (datapass === "Exit"){
                        fullDescriptor += " Exit"
                    }
                    else if (datapass === "Exit_now"){
                        fullDescriptor += " Exit_now"
                    }
                    else if (datapass === "Exterior"){
                        fullDescriptor += " Exterior"
                    }
                    else if (datapass === "External"){
                        fullDescriptor += " External"
                    }
                    else if (datapass === "Failure"){
                        fullDescriptor += " Failure"
                    }
                    else if (datapass === "Family"){
                        fullDescriptor += " Family"
                    }
                    else if (datapass === "Fan"){
                        fullDescriptor += " Fan"
                    }
                    else if (datapass === "Fifteen"){
                        fullDescriptor += " Fifteen"
                    }
                    else if (datapass === "Fifty"){
                        fullDescriptor += " Fifty"
                    }
                    else if (datapass === "Fire"){
                        fullDescriptor += " Fire"
                    }
                    else if (datapass === "Fire_alert"){
                        fullDescriptor += " Fire_alert"
                    }
                    else if (datapass === "Fire_detector"){
                        fullDescriptor += " Fire_detector"
                    }
                    else if (datapass === "First"){
                        fullDescriptor += " First"
                    }
                    else if (datapass === "Five"){
                        fullDescriptor += " Five"
                    }
                    else if (datapass === "Flood"){
                        fullDescriptor += " Flood"
                    }
                    else if (datapass === "Floor"){
                        fullDescriptor += " Floor"
                    }
                    else if (datapass === "Fluid"){
                        fullDescriptor += " Fluid"
                    }
                    else if (datapass === "Foil"){
                        fullDescriptor += " Foil"
                    }
                    else if (datapass === "For"){
                        fullDescriptor += " For"
                    }
                    else if (datapass === "Fourty"){
                        fullDescriptor += " Fourty"
                    }
                    else if (datapass === "Four"){
                        fullDescriptor += " Four"
                    }
                    else if (datapass === "Fourteen"){
                        fullDescriptor += " Fourteen"
                    }
                    else if (datapass === "Forth"){
                        fullDescriptor += " Forth"
                    }
                    else if (datapass === "Foyer"){
                        fullDescriptor += " Foyer"
                    }
                    else if (datapass === "Freeze"){
                        fullDescriptor += " Freeze"
                    }
                    else if (datapass === "Freezer"){
                        fullDescriptor += " Freezer"
                    }
                    else if (datapass === "Front"){
                        fullDescriptor += " Front"
                    }
                    else if (datapass === "Furnace"){
                        fullDescriptor += " Furnace"
                    }
                    else if (datapass === "Game"){
                        fullDescriptor += " Game"
                    }
                    else if (datapass === "Garage"){
                        fullDescriptor += " Garage"
                    }
                    else if (datapass === "Gas"){
                        fullDescriptor += " Gas"
                    }
                    else if (datapass === "Gate"){
                        fullDescriptor += " Gate"
                    }
                    else if (datapass === "Girls"){
                        fullDescriptor += " Girls"
                    }
                    else if (datapass === "Glass"){
                        fullDescriptor += " Glass"
                    }
                    else if (datapass === "Glass_break"){
                        fullDescriptor += " Glass_break"
                    }
                    else if (datapass === "Guest"){
                        fullDescriptor += " Guest"
                    }
                    else if (datapass === "Gun"){
                        fullDescriptor += " Gun"
                    }
                    else if (datapass === "Hall"){
                        fullDescriptor += " Hall"
                    }
                    else if (datapass === "Hallway"){
                        fullDescriptor += " Hallway"
                    }
                    else if (datapass === "Hang_up"){
                        fullDescriptor += " Hang_up"
                    }
                    else if (datapass === "Hanging"){
                        fullDescriptor += " Hanging"
                    }
                    else if (datapass === "Heat"){
                        fullDescriptor += " Heat"
                    }
                    else if (datapass === "High"){
                        fullDescriptor += " High"
                    }
                    else if (datapass === "Home"){
                        fullDescriptor += " Home"
                    }
                    else if (datapass === "House"){
                        fullDescriptor += " House"
                    }
                    else if (datapass === "Ice"){
                        fullDescriptor += " Ice"
                    }
                    else if (datapass === "Image"){
                        fullDescriptor += " Image"
                    }
                    else if (datapass === "Image_sensor"){
                        fullDescriptor += " Image_sensor"
                    }
                    else if (datapass === "Inside"){
                        fullDescriptor += " Inside"
                    }
                    else if (datapass === "Instant"){
                        fullDescriptor += " Instant"
                    }
                    else if (datapass === "Interior"){
                        fullDescriptor += " Interior"
                    }
                    else if (datapass === "Intrusion"){
                        fullDescriptor += " Intrusion"
                    }
                    else if (datapass === "Is"){
                        fullDescriptor += " Is"
                    }
                    else if (datapass === "Key"){
                        fullDescriptor += " Key"
                    }
                    else if (datapass === "Keyfob"){
                        fullDescriptor += " Keyfob"
                    }
                    else if (datapass === "Keypads"){
                        fullDescriptor += " Keypads"
                    }
                    else if (datapass === "Kids"){
                        fullDescriptor += " Kids"
                    }
                    else if (datapass === "Kitchen"){
                        fullDescriptor += " Kitchen"
                    }
                    else if (datapass === "Laundry"){
                        fullDescriptor += " Laundry"
                    }
                    else if (datapass === "Left"){
                        fullDescriptor += " Left"
                    }
                    else if (datapass === "Level"){
                        fullDescriptor += " Level"
                    }
                    else if (datapass === "Library"){
                        fullDescriptor += " Library"
                    }
                    else if (datapass === "Light"){
                        fullDescriptor += " Light"
                    }
                    else if (datapass === "Lights"){
                        fullDescriptor += " Lights"
                    }
                    else if (datapass === "Liquor"){
                        fullDescriptor += " Liquor"
                    }
                    else if (datapass === "Living"){
                        fullDescriptor += " Living"
                    }
                    else if (datapass === "Loading"){
                        fullDescriptor += " Loading"
                    }
                    else if (datapass === "Lock"){
                        fullDescriptor += " Lock"
                    }
                    else if (datapass === "Loft"){
                        fullDescriptor += " Loft"
                    }
                    else if (datapass === "Low"){
                        fullDescriptor += " Low"
                    }
                    else if (datapass === "Main"){
                        fullDescriptor += " Main"
                    }
                    else if (datapass === "Maintenance"){
                        fullDescriptor += " Maintenance"
                    }
                    else if (datapass === "Man"){
                        fullDescriptor += " Man"
                    }
                    else if (datapass === "Master"){
                        fullDescriptor += " Master"
                    }
                    else if (datapass === "Medical"){
                        fullDescriptor += " Medical"
                    }
                    else if (datapass === "Medicine"){
                        fullDescriptor += " Medicine"
                    }
                    else if (datapass === "Menu"){
                        fullDescriptor += " Menu"
                    }
                    else if (datapass === "Middle"){
                        fullDescriptor += " Middle"
                    }
                    else if (datapass === "Monitor"){
                        fullDescriptor += " Monitor"
                    }
                    else if (datapass === "Motion"){
                        fullDescriptor += " Motion"
                    }
                    else if (datapass === "Motion_detector"){
                        fullDescriptor += " Motion_detector"
                    }
                    else if (datapass === "Mud"){
                        fullDescriptor += " Mud"
                    }
                    else if (datapass === "Nine"){
                        fullDescriptor += " Nine"
                    }
                    else if (datapass === "Nineteen"){
                        fullDescriptor += " Nineteen"
                    }
                    else if (datapass === "Ninety"){
                        fullDescriptor += " Ninety"
                    }
                    else if (datapass === "No_delay"){
                        fullDescriptor += " No_delay"
                    }
                    else if (datapass === "No_entry_delay"){
                        fullDescriptor += " No_entry_delay"
                    }
                    else if (datapass === "North"){
                        fullDescriptor += " North"
                    }
                    else if (datapass === "Not"){
                        fullDescriptor += " Not"
                    }
                    else if (datapass === "Not_ready"){
                        fullDescriptor += " Not_ready"
                    }
                    else if (datapass === "Nursery"){
                        fullDescriptor += " Nursery"
                    }
                    else if (datapass === "Off"){
                        fullDescriptor += " Off"
                    }
                    else if (datapass === "Office"){
                        fullDescriptor += " Office"
                    }
                    else if (datapass === "On"){
                        fullDescriptor += " On"
                    }
                    else if (datapass === "One"){
                        fullDescriptor += " One"
                    }
                    else if (datapass === "One_hundred"){
                        fullDescriptor += " One_hundred"
                    }
                    else if (datapass === "Output"){
                        fullDescriptor += " Output"
                    }
                    else if (datapass === "Outside"){
                        fullDescriptor += " Outside"
                    }
                    else if (datapass === "Overhead"){
                        fullDescriptor += " Overhead"
                    }
                    else if (datapass === "Panel"){
                        fullDescriptor += " Panel"
                    }
                    else if (datapass === "Panic"){
                        fullDescriptor += " Panic"
                    }
                    else if (datapass === "Pantry"){
                        fullDescriptor += " Pantry"
                    }
                    else if (datapass === "Patio"){
                        fullDescriptor += " Patio"
                    }
                    else if (datapass === "Perimeter"){
                        fullDescriptor += " Perimeter"
                    }
                    else if (datapass === "Phone_line"){
                        fullDescriptor += " Phone_line"
                    }
                    else if (datapass === "Play"){
                        fullDescriptor += " Play"
                    }
                    else if (datapass === "Police"){
                        fullDescriptor += " Police"
                    }
                    else if (datapass === "Pool"){
                        fullDescriptor += " Pool"
                    }
                    else if (datapass === "Porch"){
                        fullDescriptor += " Porch"
                    }
                    else if (datapass === "Pound"){
                        fullDescriptor += " Pound"
                    }
                    else if (datapass === "Power"){
                        fullDescriptor += " Power"
                    }
                    else if (datapass === "Press"){
                        fullDescriptor += " Press"
                    }
                    else if (datapass === "Previous"){
                        fullDescriptor += " Previous"
                    }
                    else if (datapass === "Pump"){
                        fullDescriptor += " Pump"
                    }
                    else if (datapass === "Radio"){
                        fullDescriptor += " Radio"
                    }
                    else if (datapass === "Ready"){
                        fullDescriptor += " Ready"
                    }
                    else if (datapass === "Rear"){
                        fullDescriptor += " Rear"
                    }
                    else if (datapass === "Refrigerator"){
                        fullDescriptor += " Refrigerator"
                    }
                    else if (datapass === "Relay"){
                        fullDescriptor += " Relay"
                    }
                    else if (datapass === "Remote"){
                        fullDescriptor += " Remote"
                    }
                    else if (datapass === "Repeat"){
                        fullDescriptor += " Repeat"
                    }
                    else if (datapass === "Rf_jam"){
                        fullDescriptor += " Rf_jam"
                    }
                    else if (datapass === "Right"){
                        fullDescriptor += " Right"
                    }
                    else if (datapass === "Room"){
                        fullDescriptor += " Room"
                    }
                    else if (datapass === "Safe"){
                        fullDescriptor += " Safe"
                    }
                    else if (datapass === "Second"){
                        fullDescriptor += " Second"
                    }
                    else if (datapass === "Security"){
                        fullDescriptor += " Security"
                    }
                    else if (datapass === "Sensor"){
                        fullDescriptor += " Sensor"
                    }
                    else if (datapass === "Sensors"){
                        fullDescriptor += " Sensors"
                    }
                    else if (datapass === "Service"){
                        fullDescriptor += " Service"
                    }
                    else if (datapass === "Session"){
                        fullDescriptor += " Session"
                    }
                    else if (datapass === "Set"){
                        fullDescriptor += " Set"
                    }
                    else if (datapass === "Seven"){
                        fullDescriptor += " Seven"
                    }
                    else if (datapass === "Seventeen"){
                        fullDescriptor += " Seventeen"
                    }
                    else if (datapass === "Seventy"){
                        fullDescriptor += " Seventy"
                    }
                    else if (datapass === "Shed"){
                        fullDescriptor += " Shed"
                    }
                    else if (datapass === "Shop"){
                        fullDescriptor += " Shop"
                    }
                    else if (datapass === "Side"){
                        fullDescriptor += " Side"
                    }
                    else if (datapass === "Silent"){
                        fullDescriptor += " Silent"
                    }
                    else if (datapass === "Siren"){
                        fullDescriptor += " Siren"
                    }
                    else if (datapass === "Six"){
                        fullDescriptor += " Six"
                    }
                    else if (datapass === "Sixteen"){
                        fullDescriptor += " Sixteen"
                    }
                    else if (datapass === "Sixty"){
                        fullDescriptor += " Sixty"
                    }
                    else if (datapass === "Skylight"){
                        fullDescriptor += " Skylight"
                    }
                    else if (datapass === "Sliding"){
                        fullDescriptor += " Sliding"
                    }
                    else if (datapass === "Smoke"){
                        fullDescriptor += " Smoke"
                    }
                    else if (datapass === "Sons"){
                        fullDescriptor += " Sons"
                    }
                    else if (datapass === "Sounder"){
                        fullDescriptor += " Sounder"
                    }
                    else if (datapass === "South"){
                        fullDescriptor += " South"
                    }
                    else if (datapass === "Space"){
                        fullDescriptor += " Space"
                    }
                    else if (datapass === "Spare"){
                        fullDescriptor += " Spare"
                    }
                    else if (datapass === "Stairs"){
                        fullDescriptor += " Stairs"
                    }
                    else if (datapass === "Star"){
                        fullDescriptor += " Star"
                    }
                    else if (datapass === "Status"){
                        fullDescriptor += " Status"
                    }
                    else if (datapass === "Stay"){
                        fullDescriptor += " Stay"
                    }
                    else if (datapass === "Stop"){
                        fullDescriptor += " Shop"
                    }
                    else if (datapass === "Storage"){
                        fullDescriptor += " Storage"
                    }
                    else if (datapass === "Study"){
                        fullDescriptor += " Study"
                    }
                    else if (datapass === "Sump"){
                        fullDescriptor += " Sump"
                    }
                    else if (datapass === "Sun"){
                        fullDescriptor += " Sun"
                    }
                    else if (datapass === "Sunroom"){
                        fullDescriptor += " Sunroom"
                    }
                    else if (datapass === "Supervision"){
                        fullDescriptor += " Supervision"
                    }
                    else if (datapass === "Switch"){
                        fullDescriptor += " Switch"
                    }
                    else if (datapass === "System"){
                        fullDescriptor += " System"
                    }
                    else if (datapass === "Tamper"){
                        fullDescriptor += " Tamper"
                    }
                    else if (datapass === "Temperature"){
                        fullDescriptor += " Temperature"
                    }
                    else if (datapass === "Ten"){
                        fullDescriptor += " Ten"
                    }
                    else if (datapass === "Terminated"){
                        fullDescriptor += " Terminated"
                    }
                    else if (datapass === "Theater"){
                        fullDescriptor += " Theater"
                    }
                    else if (datapass === "Thermostat"){
                        fullDescriptor += " Thermostat"
                    }
                    else if (datapass === "Third"){
                        fullDescriptor += " Third"
                    }
                    else if (datapass === "Thirteen"){
                        fullDescriptor += " Thirteen"
                    }
                    else if (datapass === "Thirty"){
                        fullDescriptor += " Thirty"
                    }
                    else if (datapass === "Three"){
                        fullDescriptor += " Three"
                    }
                    else if (datapass === "To"){
                        fullDescriptor += " To"
                    }
                    else if (datapass === "Tool"){
                        fullDescriptor += " Tool"
                    }
                    else if (datapass === "Transmitted"){
                        fullDescriptor += " Transmitted"
                    }
                    else if (datapass === "Transmitter"){
                        fullDescriptor += " Transmitter"
                    }
                    else if (datapass === "Trouble"){
                        fullDescriptor += " Trouble"
                    }
                    else if (datapass === "Turn"){
                        fullDescriptor += " Turn"
                    }
                    else if (datapass === "Tv"){
                        fullDescriptor += " Tv"
                    }
                    else if (datapass === "Twelve"){
                        fullDescriptor += " Twelve"
                    }
                    else if (datapass === "Twenty"){
                        fullDescriptor += " Twenty"
                    }
                    else if (datapass === "Two"){
                        fullDescriptor += " Two"
                    }
                    else if (datapass === "Unlock"){
                        fullDescriptor += " Unlock"
                    }
                    else if (datapass === "Upper"){
                        fullDescriptor += " Upper"
                    }
                    else if (datapass === "Upstairs"){
                        fullDescriptor += " Upstairs"
                    }
                    else if (datapass === "User"){
                        fullDescriptor += " User"
                    }
                    else if (datapass === "Utility"){
                        fullDescriptor += " Utility"
                    }
                    else if (datapass === "Valve"){
                        fullDescriptor += " Valve"
                    }
                    else if (datapass === "Video"){
                        fullDescriptor += " Video"
                    }
                    else if (datapass === "Voice"){
                        fullDescriptor += " Voice"
                    }
                    else if (datapass === "Wall"){
                        fullDescriptor += " Wall"
                    }
                    else if (datapass === "Warehouse"){
                        fullDescriptor += " Warehouse"
                    }
                    else if (datapass === "Water"){
                        fullDescriptor += " Water"
                    }
                    else if (datapass === "West"){
                        fullDescriptor += " West"
                    }
                    else if (datapass === "Window"){
                        fullDescriptor += " Window"
                    }
                    else if (datapass === "Wing"){
                        fullDescriptor += " Wing"
                    }
                    else if (datapass === "Wireless"){
                        fullDescriptor += " Wireless"
                    }
                    else if (datapass === "Yard"){
                        fullDescriptor += " Yard"
                    }
                    else if (datapass === "Zero"){
                        fullDescriptor += " Zero"
                    }
                    else if (datapass === "Zone"){
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
                    if (datapass === "Abort"){
                        fullDescriptor += " Abort"
                    }
                    else if (datapass === "Ac"){
                        fullDescriptor += " Ac"
                    }
                    else if (datapass === "Access"){
                        fullDescriptor += " Access"
                    }
                    else if (datapass === "Alarm"){
                        fullDescriptor += " Alarm"
                    }
                    else if (datapass === "And"){
                        fullDescriptor += " And"
                    }
                    else if (datapass === "Anouncement"){
                        fullDescriptor += " Announcement"
                    }
                    else if (datapass === "Apartment"){
                        fullDescriptor += " Apartment"
                    }
                    else if (datapass === "Area"){
                        fullDescriptor += " Area"
                    }
                    else if (datapass === "Arm"){
                        fullDescriptor += " Arm"
                    }
                    else if (datapass === "Armed"){
                        fullDescriptor += " Armed"
                    }
                    else if (datapass === "At"){
                        fullDescriptor += " At"
                    }
                    else if (datapass === "Attic"){
                        fullDescriptor += " Attic"
                    }
                    else if (datapass === "Audio"){
                        fullDescriptor += " Audio"
                    }
                    else if (datapass === "Auto"){
                        fullDescriptor += " Auto"
                    }
                    else if (datapass === "Automation"){
                        fullDescriptor += " Automation"
                    }
                    else if (datapass === "Auxiliary"){
                        fullDescriptor += " Auxiliary"
                    }
                    else if (datapass === "Away"){
                        fullDescriptor += " Away"
                    }
                    else if (datapass === "Babys"){
                        fullDescriptor += " Babys"
                    }
                    else if (datapass === "Back"){
                        fullDescriptor += " Back"
                    }
                    else if (datapass === "Balcony"){
                        fullDescriptor += " Balcony"
                    }
                    else if (datapass === "Basement"){
                        fullDescriptor += " Basement"
                    }
                    else if (datapass === "Bathroom"){
                        fullDescriptor += " Bathroom"
                    }
                    else if (datapass === "Battery"){
                        fullDescriptor += " Battery"
                    }
                    else if (datapass === "Bedroom"){
                        fullDescriptor += " Bedroom"
                    }
                    else if (datapass === "Bell"){
                        fullDescriptor += " Bell"
                    }
                    else if (datapass === "Bonus"){
                        fullDescriptor += " Bonus"
                    }
                    else if (datapass === "Boys"){
                        fullDescriptor += " Boys"
                    }
                    else if (datapass === "Break"){
                        fullDescriptor += " Break"
                    }
                    else if (datapass === "Button"){
                        fullDescriptor += " Button"
                    }
                    else if (datapass === "Bypass"){
                        fullDescriptor += " Bypass"
                    }
                    else if (datapass === "Bypassed"){
                        fullDescriptor += " Bypassed"
                    }
                    else if (datapass === "Camera"){
                        fullDescriptor += " Camera"
                    }
                    else if (datapass === "Cabinet"){
                        fullDescriptor += " Cabinet"
                    }
                    else if (datapass === "Cancel"){
                        fullDescriptor += " Cancel"
                    }
                    else if (datapass === "Carbon_monoxide"){
                        fullDescriptor += " Carbon_monoxide"
                    }
                    else if (datapass === "Cave"){
                        fullDescriptor += " Cave"
                    }
                    else if (datapass === "Cell_radio"){
                        fullDescriptor += " Cell_radio"
                    }
                    else if (datapass === "Cellular"){
                        fullDescriptor += " Cellular"
                    }
                    else if (datapass === "Center"){
                        fullDescriptor += " Center"
                    }
                    else if (datapass === "Check"){
                        fullDescriptor += " Check"
                    }
                    else if (datapass === "Chest"){
                        fullDescriptor += " Chest"
                    }
                    else if (datapass === "Childrens"){
                        fullDescriptor += " Childrens"
                    }
                    else if (datapass === "Chime"){
                        fullDescriptor += " Chime"
                    }
                    else if (datapass === "Closet"){
                        fullDescriptor += " Closet"
                    }
                    else if (datapass === "Code"){
                        fullDescriptor += " Code"
                    }
                    else if (datapass === "Communications"){
                        fullDescriptor += " Communications"
                    }
                    else if (datapass === "Computer"){
                        fullDescriptor += " Computer"
                    }
                    else if (datapass === "Control"){
                        fullDescriptor += " Control"
                    }
                    else if (datapass === "Cool"){
                        fullDescriptor += " Cool"
                    }
                    else if (datapass === "Corner"){
                        fullDescriptor += " Corner"
                    }
                    else if (datapass === "Courtyard"){
                        fullDescriptor += " Courtyard"
                    }
                    else if (datapass === "Crawl"){
                        fullDescriptor += " Crawl"
                    }
                    else if (datapass === "Current"){
                        fullDescriptor += " Current"
                    }
                    else if (datapass === "Daughters"){
                        fullDescriptor += " Daughters"
                    }
                    else if (datapass === "Day"){
                        fullDescriptor += " Day"
                    }
                    else if (datapass === "Deck"){
                        fullDescriptor += " Deck"
                    }
                    else if (datapass === "Degrees"){
                        fullDescriptor += " Degrees"
                    }
                    else if (datapass === "Den"){
                        fullDescriptor += " Den"
                    }
                    else if (datapass === "Detached"){
                        fullDescriptor += " Detached"
                    }
                    else if (datapass === "Detector"){
                        fullDescriptor += " Detector"
                    }
                    else if (datapass === "Dim"){
                        fullDescriptor += " Dim"
                    }
                    else if (datapass === "Dining"){
                        fullDescriptor += " Dining"
                    }
                    else if (datapass === "Disarm"){
                        fullDescriptor += " Disarm"
                    }
                    else if (datapass === "Disarmed"){
                        fullDescriptor += " Disarmed"
                    }
                    else if (datapass === "Dock"){
                        fullDescriptor += " Dock"
                    }
                    else if (datapass === "Door"){
                        fullDescriptor += " Door"
                    }
                    else if (datapass === "Doorbell"){
                        fullDescriptor += " Doorbell"
                    }
                    else if (datapass === "Downstairs"){
                        fullDescriptor += " Downstairs"
                    }
                    else if (datapass === "Driveway"){
                        fullDescriptor += " Driveway"
                    }
                    else if (datapass === "East"){
                        fullDescriptor += " East"
                    }
                    else if (datapass === "Eight"){
                        fullDescriptor += " Eight"
                    }
                    else if (datapass === "Eighteen"){
                        fullDescriptor += " Eighteen"
                    }
                    else if (datapass === "Eighty"){
                        fullDescriptor += " Eighty"
                    }
                    else if (datapass === "Electric"){
                        fullDescriptor += " Electric"
                    }
                    else if (datapass === "Eleven"){
                        fullDescriptor += " Eleven"
                    }
                    else if (datapass === "Emergency"){
                        fullDescriptor += " Emergency"
                    }
                    else if (datapass === "Enter"){
                        fullDescriptor += " Enter"
                    }
                    else if (datapass === "Entrance"){
                        fullDescriptor += " Entrance"
                    }
                    else if (datapass === "Entry"){
                        fullDescriptor += " Entry"
                    }
                    else if (datapass === "Error"){
                        fullDescriptor += " Error"
                    }
                    else if (datapass === "Exercise"){
                        fullDescriptor += " Exercise"
                    }
                    else if (datapass === "Exit"){
                        fullDescriptor += " Exit"
                    }
                    else if (datapass === "Exit_now"){
                        fullDescriptor += " Exit_now"
                    }
                    else if (datapass === "Exterior"){
                        fullDescriptor += " Exterior"
                    }
                    else if (datapass === "External"){
                        fullDescriptor += " External"
                    }
                    else if (datapass === "Failure"){
                        fullDescriptor += " Failure"
                    }
                    else if (datapass === "Family"){
                        fullDescriptor += " Family"
                    }
                    else if (datapass === "Fan"){
                        fullDescriptor += " Fan"
                    }
                    else if (datapass === "Fifteen"){
                        fullDescriptor += " Fifteen"
                    }
                    else if (datapass === "Fifty"){
                        fullDescriptor += " Fifty"
                    }
                    else if (datapass === "Fire"){
                        fullDescriptor += " Fire"
                    }
                    else if (datapass === "Fire_alert"){
                        fullDescriptor += " Fire_alert"
                    }
                    else if (datapass === "Fire_detector"){
                        fullDescriptor += " Fire_detector"
                    }
                    else if (datapass === "First"){
                        fullDescriptor += " First"
                    }
                    else if (datapass === "Five"){
                        fullDescriptor += " Five"
                    }
                    else if (datapass === "Flood"){
                        fullDescriptor += " Flood"
                    }
                    else if (datapass === "Floor"){
                        fullDescriptor += " Floor"
                    }
                    else if (datapass === "Fluid"){
                        fullDescriptor += " Fluid"
                    }
                    else if (datapass === "Foil"){
                        fullDescriptor += " Foil"
                    }
                    else if (datapass === "For"){
                        fullDescriptor += " For"
                    }
                    else if (datapass === "Fourty"){
                        fullDescriptor += " Fourty"
                    }
                    else if (datapass === "Four"){
                        fullDescriptor += " Four"
                    }
                    else if (datapass === "Fourteen"){
                        fullDescriptor += " Fourteen"
                    }
                    else if (datapass === "Forth"){
                        fullDescriptor += " Forth"
                    }
                    else if (datapass === "Foyer"){
                        fullDescriptor += " Foyer"
                    }
                    else if (datapass === "Freeze"){
                        fullDescriptor += " Freeze"
                    }
                    else if (datapass === "Freezer"){
                        fullDescriptor += " Freezer"
                    }
                    else if (datapass === "Front"){
                        fullDescriptor += " Front"
                    }
                    else if (datapass === "Furnace"){
                        fullDescriptor += " Furnace"
                    }
                    else if (datapass === "Game"){
                        fullDescriptor += " Game"
                    }
                    else if (datapass === "Garage"){
                        fullDescriptor += " Garage"
                    }
                    else if (datapass === "Gas"){
                        fullDescriptor += " Gas"
                    }
                    else if (datapass === "Gate"){
                        fullDescriptor += " Gate"
                    }
                    else if (datapass === "Girls"){
                        fullDescriptor += " Girls"
                    }
                    else if (datapass === "Glass"){
                        fullDescriptor += " Glass"
                    }
                    else if (datapass === "Glass_break"){
                        fullDescriptor += " Glass_break"
                    }
                    else if (datapass === "Guest"){
                        fullDescriptor += " Guest"
                    }
                    else if (datapass === "Gun"){
                        fullDescriptor += " Gun"
                    }
                    else if (datapass === "Hall"){
                        fullDescriptor += " Hall"
                    }
                    else if (datapass === "Hallway"){
                        fullDescriptor += " Hallway"
                    }
                    else if (datapass === "Hang_up"){
                        fullDescriptor += " Hang_up"
                    }
                    else if (datapass === "Hanging"){
                        fullDescriptor += " Hanging"
                    }
                    else if (datapass === "Heat"){
                        fullDescriptor += " Heat"
                    }
                    else if (datapass === "High"){
                        fullDescriptor += " High"
                    }
                    else if (datapass === "Home"){
                        fullDescriptor += " Home"
                    }
                    else if (datapass === "House"){
                        fullDescriptor += " House"
                    }
                    else if (datapass === "Ice"){
                        fullDescriptor += " Ice"
                    }
                    else if (datapass === "Image"){
                        fullDescriptor += " Image"
                    }
                    else if (datapass === "Image_sensor"){
                        fullDescriptor += " Image_sensor"
                    }
                    else if (datapass === "Inside"){
                        fullDescriptor += " Inside"
                    }
                    else if (datapass === "Instant"){
                        fullDescriptor += " Instant"
                    }
                    else if (datapass === "Interior"){
                        fullDescriptor += " Interior"
                    }
                    else if (datapass === "Intrusion"){
                        fullDescriptor += " Intrusion"
                    }
                    else if (datapass === "Is"){
                        fullDescriptor += " Is"
                    }
                    else if (datapass === "Key"){
                        fullDescriptor += " Key"
                    }
                    else if (datapass === "Keyfob"){
                        fullDescriptor += " Keyfob"
                    }
                    else if (datapass === "Keypads"){
                        fullDescriptor += " Keypads"
                    }
                    else if (datapass === "Kids"){
                        fullDescriptor += " Kids"
                    }
                    else if (datapass === "Kitchen"){
                        fullDescriptor += " Kitchen"
                    }
                    else if (datapass === "Laundry"){
                        fullDescriptor += " Laundry"
                    }
                    else if (datapass === "Left"){
                        fullDescriptor += " Left"
                    }
                    else if (datapass === "Level"){
                        fullDescriptor += " Level"
                    }
                    else if (datapass === "Library"){
                        fullDescriptor += " Library"
                    }
                    else if (datapass === "Light"){
                        fullDescriptor += " Light"
                    }
                    else if (datapass === "Lights"){
                        fullDescriptor += " Lights"
                    }
                    else if (datapass === "Liquor"){
                        fullDescriptor += " Liquor"
                    }
                    else if (datapass === "Living"){
                        fullDescriptor += " Living"
                    }
                    else if (datapass === "Loading"){
                        fullDescriptor += " Loading"
                    }
                    else if (datapass === "Lock"){
                        fullDescriptor += " Lock"
                    }
                    else if (datapass === "Loft"){
                        fullDescriptor += " Loft"
                    }
                    else if (datapass === "Low"){
                        fullDescriptor += " Low"
                    }
                    else if (datapass === "Main"){
                        fullDescriptor += " Main"
                    }
                    else if (datapass === "Maintenance"){
                        fullDescriptor += " Maintenance"
                    }
                    else if (datapass === "Man"){
                        fullDescriptor += " Man"
                    }
                    else if (datapass === "Master"){
                        fullDescriptor += " Master"
                    }
                    else if (datapass === "Medical"){
                        fullDescriptor += " Medical"
                    }
                    else if (datapass === "Medicine"){
                        fullDescriptor += " Medicine"
                    }
                    else if (datapass === "Menu"){
                        fullDescriptor += " Menu"
                    }
                    else if (datapass === "Middle"){
                        fullDescriptor += " Middle"
                    }
                    else if (datapass === "Monitor"){
                        fullDescriptor += " Monitor"
                    }
                    else if (datapass === "Motion"){
                        fullDescriptor += " Motion"
                    }
                    else if (datapass === "Motion_detector"){
                        fullDescriptor += " Motion_detector"
                    }
                    else if (datapass === "Mud"){
                        fullDescriptor += " Mud"
                    }
                    else if (datapass === "Nine"){
                        fullDescriptor += " Nine"
                    }
                    else if (datapass === "Nineteen"){
                        fullDescriptor += " Nineteen"
                    }
                    else if (datapass === "Ninety"){
                        fullDescriptor += " Ninety"
                    }
                    else if (datapass === "No_delay"){
                        fullDescriptor += " No_delay"
                    }
                    else if (datapass === "No_entry_delay"){
                        fullDescriptor += " No_entry_delay"
                    }
                    else if (datapass === "North"){
                        fullDescriptor += " North"
                    }
                    else if (datapass === "Not"){
                        fullDescriptor += " Not"
                    }
                    else if (datapass === "Not_ready"){
                        fullDescriptor += " Not_ready"
                    }
                    else if (datapass === "Nursery"){
                        fullDescriptor += " Nursery"
                    }
                    else if (datapass === "Off"){
                        fullDescriptor += " Off"
                    }
                    else if (datapass === "Office"){
                        fullDescriptor += " Office"
                    }
                    else if (datapass === "On"){
                        fullDescriptor += " On"
                    }
                    else if (datapass === "One"){
                        fullDescriptor += " One"
                    }
                    else if (datapass === "One_hundred"){
                        fullDescriptor += " One_hundred"
                    }
                    else if (datapass === "Output"){
                        fullDescriptor += " Output"
                    }
                    else if (datapass === "Outside"){
                        fullDescriptor += " Outside"
                    }
                    else if (datapass === "Overhead"){
                        fullDescriptor += " Overhead"
                    }
                    else if (datapass === "Panel"){
                        fullDescriptor += " Panel"
                    }
                    else if (datapass === "Panic"){
                        fullDescriptor += " Panic"
                    }
                    else if (datapass === "Pantry"){
                        fullDescriptor += " Pantry"
                    }
                    else if (datapass === "Patio"){
                        fullDescriptor += " Patio"
                    }
                    else if (datapass === "Perimeter"){
                        fullDescriptor += " Perimeter"
                    }
                    else if (datapass === "Phone_line"){
                        fullDescriptor += " Phone_line"
                    }
                    else if (datapass === "Play"){
                        fullDescriptor += " Play"
                    }
                    else if (datapass === "Police"){
                        fullDescriptor += " Police"
                    }
                    else if (datapass === "Pool"){
                        fullDescriptor += " Pool"
                    }
                    else if (datapass === "Porch"){
                        fullDescriptor += " Porch"
                    }
                    else if (datapass === "Pound"){
                        fullDescriptor += " Pound"
                    }
                    else if (datapass === "Power"){
                        fullDescriptor += " Power"
                    }
                    else if (datapass === "Press"){
                        fullDescriptor += " Press"
                    }
                    else if (datapass === "Previous"){
                        fullDescriptor += " Previous"
                    }
                    else if (datapass === "Pump"){
                        fullDescriptor += " Pump"
                    }
                    else if (datapass === "Radio"){
                        fullDescriptor += " Radio"
                    }
                    else if (datapass === "Ready"){
                        fullDescriptor += " Ready"
                    }
                    else if (datapass === "Rear"){
                        fullDescriptor += " Rear"
                    }
                    else if (datapass === "Refrigerator"){
                        fullDescriptor += " Refrigerator"
                    }
                    else if (datapass === "Relay"){
                        fullDescriptor += " Relay"
                    }
                    else if (datapass === "Remote"){
                        fullDescriptor += " Remote"
                    }
                    else if (datapass === "Repeat"){
                        fullDescriptor += " Repeat"
                    }
                    else if (datapass === "Rf_jam"){
                        fullDescriptor += " Rf_jam"
                    }
                    else if (datapass === "Right"){
                        fullDescriptor += " Right"
                    }
                    else if (datapass === "Room"){
                        fullDescriptor += " Room"
                    }
                    else if (datapass === "Safe"){
                        fullDescriptor += " Safe"
                    }
                    else if (datapass === "Second"){
                        fullDescriptor += " Second"
                    }
                    else if (datapass === "Security"){
                        fullDescriptor += " Security"
                    }
                    else if (datapass === "Sensor"){
                        fullDescriptor += " Sensor"
                    }
                    else if (datapass === "Sensors"){
                        fullDescriptor += " Sensors"
                    }
                    else if (datapass === "Service"){
                        fullDescriptor += " Service"
                    }
                    else if (datapass === "Session"){
                        fullDescriptor += " Session"
                    }
                    else if (datapass === "Set"){
                        fullDescriptor += " Set"
                    }
                    else if (datapass === "Seven"){
                        fullDescriptor += " Seven"
                    }
                    else if (datapass === "Seventeen"){
                        fullDescriptor += " Seventeen"
                    }
                    else if (datapass === "Seventy"){
                        fullDescriptor += " Seventy"
                    }
                    else if (datapass === "Shed"){
                        fullDescriptor += " Shed"
                    }
                    else if (datapass === "Shop"){
                        fullDescriptor += " Shop"
                    }
                    else if (datapass === "Side"){
                        fullDescriptor += " Side"
                    }
                    else if (datapass === "Silent"){
                        fullDescriptor += " Silent"
                    }
                    else if (datapass === "Siren"){
                        fullDescriptor += " Siren"
                    }
                    else if (datapass === "Six"){
                        fullDescriptor += " Six"
                    }
                    else if (datapass === "Sixteen"){
                        fullDescriptor += " Sixteen"
                    }
                    else if (datapass === "Sixty"){
                        fullDescriptor += " Sixty"
                    }
                    else if (datapass === "Skylight"){
                        fullDescriptor += " Skylight"
                    }
                    else if (datapass === "Sliding"){
                        fullDescriptor += " Sliding"
                    }
                    else if (datapass === "Smoke"){
                        fullDescriptor += " Smoke"
                    }
                    else if (datapass === "Sons"){
                        fullDescriptor += " Sons"
                    }
                    else if (datapass === "Sounder"){
                        fullDescriptor += " Sounder"
                    }
                    else if (datapass === "South"){
                        fullDescriptor += " South"
                    }
                    else if (datapass === "Space"){
                        fullDescriptor += " Space"
                    }
                    else if (datapass === "Spare"){
                        fullDescriptor += " Spare"
                    }
                    else if (datapass === "Stairs"){
                        fullDescriptor += " Stairs"
                    }
                    else if (datapass === "Star"){
                        fullDescriptor += " Star"
                    }
                    else if (datapass === "Status"){
                        fullDescriptor += " Status"
                    }
                    else if (datapass === "Stay"){
                        fullDescriptor += " Stay"
                    }
                    else if (datapass === "Stop"){
                        fullDescriptor += " Shop"
                    }
                    else if (datapass === "Storage"){
                        fullDescriptor += " Storage"
                    }
                    else if (datapass === "Study"){
                        fullDescriptor += " Study"
                    }
                    else if (datapass === "Sump"){
                        fullDescriptor += " Sump"
                    }
                    else if (datapass === "Sun"){
                        fullDescriptor += " Sun"
                    }
                    else if (datapass === "Sunroom"){
                        fullDescriptor += " Sunroom"
                    }
                    else if (datapass === "Supervision"){
                        fullDescriptor += " Supervision"
                    }
                    else if (datapass === "Switch"){
                        fullDescriptor += " Switch"
                    }
                    else if (datapass === "System"){
                        fullDescriptor += " System"
                    }
                    else if (datapass === "Tamper"){
                        fullDescriptor += " Tamper"
                    }
                    else if (datapass === "Temperature"){
                        fullDescriptor += " Temperature"
                    }
                    else if (datapass === "Ten"){
                        fullDescriptor += " Ten"
                    }
                    else if (datapass === "Terminated"){
                        fullDescriptor += " Terminated"
                    }
                    else if (datapass === "Theater"){
                        fullDescriptor += " Theater"
                    }
                    else if (datapass === "Thermostat"){
                        fullDescriptor += " Thermostat"
                    }
                    else if (datapass === "Third"){
                        fullDescriptor += " Third"
                    }
                    else if (datapass === "Thirteen"){
                        fullDescriptor += " Thirteen"
                    }
                    else if (datapass === "Thirty"){
                        fullDescriptor += " Thirty"
                    }
                    else if (datapass === "Three"){
                        fullDescriptor += " Three"
                    }
                    else if (datapass === "To"){
                        fullDescriptor += " To"
                    }
                    else if (datapass === "Tool"){
                        fullDescriptor += " Tool"
                    }
                    else if (datapass === "Transmitted"){
                        fullDescriptor += " Transmitted"
                    }
                    else if (datapass === "Transmitter"){
                        fullDescriptor += " Transmitter"
                    }
                    else if (datapass === "Trouble"){
                        fullDescriptor += " Trouble"
                    }
                    else if (datapass === "Turn"){
                        fullDescriptor += " Turn"
                    }
                    else if (datapass === "Tv"){
                        fullDescriptor += " Tv"
                    }
                    else if (datapass === "Twelve"){
                        fullDescriptor += " Twelve"
                    }
                    else if (datapass === "Twenty"){
                        fullDescriptor += " Twenty"
                    }
                    else if (datapass === "Two"){
                        fullDescriptor += " Two"
                    }
                    else if (datapass === "Unlock"){
                        fullDescriptor += " Unlock"
                    }
                    else if (datapass === "Upper"){
                        fullDescriptor += " Upper"
                    }
                    else if (datapass === "Upstairs"){
                        fullDescriptor += " Upstairs"
                    }
                    else if (datapass === "User"){
                        fullDescriptor += " User"
                    }
                    else if (datapass === "Utility"){
                        fullDescriptor += " Utility"
                    }
                    else if (datapass === "Valve"){
                        fullDescriptor += " Valve"
                    }
                    else if (datapass === "Video"){
                        fullDescriptor += " Video"
                    }
                    else if (datapass === "Voice"){
                        fullDescriptor += " Voice"
                    }
                    else if (datapass === "Wall"){
                        fullDescriptor += " Wall"
                    }
                    else if (datapass === "Warehouse"){
                        fullDescriptor += " Warehouse"
                    }
                    else if (datapass === "Water"){
                        fullDescriptor += " Water"
                    }
                    else if (datapass === "West"){
                        fullDescriptor += " West"
                    }
                    else if (datapass === "Window"){
                        fullDescriptor += " Window"
                    }
                    else if (datapass === "Wing"){
                        fullDescriptor += " Wing"
                    }
                    else if (datapass === "Wireless"){
                        fullDescriptor += " Wireless"
                    }
                    else if (datapass === "Yard"){
                        fullDescriptor += " Yard"
                    }
                    else if (datapass === "Zero"){
                        fullDescriptor += " Zero"
                    }
                    else if (datapass === "Zone"){
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
                    if (datapass === "Abort"){
                        fullDescriptor += " Abort"
                    }
                    else if (datapass === "Ac"){
                        fullDescriptor += " Ac"
                    }
                    else if (datapass === "Access"){
                        fullDescriptor += " Access"
                    }
                    else if (datapass === "Alarm"){
                        fullDescriptor += " Alarm"
                    }
                    else if (datapass === "And"){
                        fullDescriptor += " And"
                    }
                    else if (datapass === "Anouncement"){
                        fullDescriptor += " Announcement"
                    }
                    else if (datapass === "Apartment"){
                        fullDescriptor += " Apartment"
                    }
                    else if (datapass === "Area"){
                        fullDescriptor += " Area"
                    }
                    else if (datapass === "Arm"){
                        fullDescriptor += " Arm"
                    }
                    else if (datapass === "Armed"){
                        fullDescriptor += " Armed"
                    }
                    else if (datapass === "At"){
                        fullDescriptor += " At"
                    }
                    else if (datapass === "Attic"){
                        fullDescriptor += " Attic"
                    }
                    else if (datapass === "Audio"){
                        fullDescriptor += " Audio"
                    }
                    else if (datapass === "Auto"){
                        fullDescriptor += " Auto"
                    }
                    else if (datapass === "Automation"){
                        fullDescriptor += " Automation"
                    }
                    else if (datapass === "Auxiliary"){
                        fullDescriptor += " Auxiliary"
                    }
                    else if (datapass === "Away"){
                        fullDescriptor += " Away"
                    }
                    else if (datapass === "Babys"){
                        fullDescriptor += " Babys"
                    }
                    else if (datapass === "Back"){
                        fullDescriptor += " Back"
                    }
                    else if (datapass === "Balcony"){
                        fullDescriptor += " Balcony"
                    }
                    else if (datapass === "Basement"){
                        fullDescriptor += " Basement"
                    }
                    else if (datapass === "Bathroom"){
                        fullDescriptor += " Bathroom"
                    }
                    else if (datapass === "Battery"){
                        fullDescriptor += " Battery"
                    }
                    else if (datapass === "Bedroom"){
                        fullDescriptor += " Bedroom"
                    }
                    else if (datapass === "Bell"){
                        fullDescriptor += " Bell"
                    }
                    else if (datapass === "Bonus"){
                        fullDescriptor += " Bonus"
                    }
                    else if (datapass === "Boys"){
                        fullDescriptor += " Boys"
                    }
                    else if (datapass === "Break"){
                        fullDescriptor += " Break"
                    }
                    else if (datapass === "Button"){
                        fullDescriptor += " Button"
                    }
                    else if (datapass === "Bypass"){
                        fullDescriptor += " Bypass"
                    }
                    else if (datapass === "Bypassed"){
                        fullDescriptor += " Bypassed"
                    }
                    else if (datapass === "Camera"){
                        fullDescriptor += " Camera"
                    }
                    else if (datapass === "Cabinet"){
                        fullDescriptor += " Cabinet"
                    }
                    else if (datapass === "Cancel"){
                        fullDescriptor += " Cancel"
                    }
                    else if (datapass === "Carbon_monoxide"){
                        fullDescriptor += " Carbon_monoxide"
                    }
                    else if (datapass === "Cave"){
                        fullDescriptor += " Cave"
                    }
                    else if (datapass === "Cell_radio"){
                        fullDescriptor += " Cell_radio"
                    }
                    else if (datapass === "Cellular"){
                        fullDescriptor += " Cellular"
                    }
                    else if (datapass === "Center"){
                        fullDescriptor += " Center"
                    }
                    else if (datapass === "Check"){
                        fullDescriptor += " Check"
                    }
                    else if (datapass === "Chest"){
                        fullDescriptor += " Chest"
                    }
                    else if (datapass === "Childrens"){
                        fullDescriptor += " Childrens"
                    }
                    else if (datapass === "Chime"){
                        fullDescriptor += " Chime"
                    }
                    else if (datapass === "Closet"){
                        fullDescriptor += " Closet"
                    }
                    else if (datapass === "Code"){
                        fullDescriptor += " Code"
                    }
                    else if (datapass === "Communications"){
                        fullDescriptor += " Communications"
                    }
                    else if (datapass === "Computer"){
                        fullDescriptor += " Computer"
                    }
                    else if (datapass === "Control"){
                        fullDescriptor += " Control"
                    }
                    else if (datapass === "Cool"){
                        fullDescriptor += " Cool"
                    }
                    else if (datapass === "Corner"){
                        fullDescriptor += " Corner"
                    }
                    else if (datapass === "Courtyard"){
                        fullDescriptor += " Courtyard"
                    }
                    else if (datapass === "Crawl"){
                        fullDescriptor += " Crawl"
                    }
                    else if (datapass === "Current"){
                        fullDescriptor += " Current"
                    }
                    else if (datapass === "Daughters"){
                        fullDescriptor += " Daughters"
                    }
                    else if (datapass === "Day"){
                        fullDescriptor += " Day"
                    }
                    else if (datapass === "Deck"){
                        fullDescriptor += " Deck"
                    }
                    else if (datapass === "Degrees"){
                        fullDescriptor += " Degrees"
                    }
                    else if (datapass === "Den"){
                        fullDescriptor += " Den"
                    }
                    else if (datapass === "Detached"){
                        fullDescriptor += " Detached"
                    }
                    else if (datapass === "Detector"){
                        fullDescriptor += " Detector"
                    }
                    else if (datapass === "Dim"){
                        fullDescriptor += " Dim"
                    }
                    else if (datapass === "Dining"){
                        fullDescriptor += " Dining"
                    }
                    else if (datapass === "Disarm"){
                        fullDescriptor += " Disarm"
                    }
                    else if (datapass === "Disarmed"){
                        fullDescriptor += " Disarmed"
                    }
                    else if (datapass === "Dock"){
                        fullDescriptor += " Dock"
                    }
                    else if (datapass === "Door"){
                        fullDescriptor += " Door"
                    }
                    else if (datapass === "Doorbell"){
                        fullDescriptor += " Doorbell"
                    }
                    else if (datapass === "Downstairs"){
                        fullDescriptor += " Downstairs"
                    }
                    else if (datapass === "Driveway"){
                        fullDescriptor += " Driveway"
                    }
                    else if (datapass === "East"){
                        fullDescriptor += " East"
                    }
                    else if (datapass === "Eight"){
                        fullDescriptor += " Eight"
                    }
                    else if (datapass === "Eighteen"){
                        fullDescriptor += " Eighteen"
                    }
                    else if (datapass === "Eighty"){
                        fullDescriptor += " Eighty"
                    }
                    else if (datapass === "Electric"){
                        fullDescriptor += " Electric"
                    }
                    else if (datapass === "Eleven"){
                        fullDescriptor += " Eleven"
                    }
                    else if (datapass === "Emergency"){
                        fullDescriptor += " Emergency"
                    }
                    else if (datapass === "Enter"){
                        fullDescriptor += " Enter"
                    }
                    else if (datapass === "Entrance"){
                        fullDescriptor += " Entrance"
                    }
                    else if (datapass === "Entry"){
                        fullDescriptor += " Entry"
                    }
                    else if (datapass === "Error"){
                        fullDescriptor += " Error"
                    }
                    else if (datapass === "Exercise"){
                        fullDescriptor += " Exercise"
                    }
                    else if (datapass === "Exit"){
                        fullDescriptor += " Exit"
                    }
                    else if (datapass === "Exit_now"){
                        fullDescriptor += " Exit_now"
                    }
                    else if (datapass === "Exterior"){
                        fullDescriptor += " Exterior"
                    }
                    else if (datapass === "External"){
                        fullDescriptor += " External"
                    }
                    else if (datapass === "Failure"){
                        fullDescriptor += " Failure"
                    }
                    else if (datapass === "Family"){
                        fullDescriptor += " Family"
                    }
                    else if (datapass === "Fan"){
                        fullDescriptor += " Fan"
                    }
                    else if (datapass === "Fifteen"){
                        fullDescriptor += " Fifteen"
                    }
                    else if (datapass === "Fifty"){
                        fullDescriptor += " Fifty"
                    }
                    else if (datapass === "Fire"){
                        fullDescriptor += " Fire"
                    }
                    else if (datapass === "Fire_alert"){
                        fullDescriptor += " Fire_alert"
                    }
                    else if (datapass === "Fire_detector"){
                        fullDescriptor += " Fire_detector"
                    }
                    else if (datapass === "First"){
                        fullDescriptor += " First"
                    }
                    else if (datapass === "Five"){
                        fullDescriptor += " Five"
                    }
                    else if (datapass === "Flood"){
                        fullDescriptor += " Flood"
                    }
                    else if (datapass === "Floor"){
                        fullDescriptor += " Floor"
                    }
                    else if (datapass === "Fluid"){
                        fullDescriptor += " Fluid"
                    }
                    else if (datapass === "Foil"){
                        fullDescriptor += " Foil"
                    }
                    else if (datapass === "For"){
                        fullDescriptor += " For"
                    }
                    else if (datapass === "Fourty"){
                        fullDescriptor += " Fourty"
                    }
                    else if (datapass === "Four"){
                        fullDescriptor += " Four"
                    }
                    else if (datapass === "Fourteen"){
                        fullDescriptor += " Fourteen"
                    }
                    else if (datapass === "Forth"){
                        fullDescriptor += " Forth"
                    }
                    else if (datapass === "Foyer"){
                        fullDescriptor += " Foyer"
                    }
                    else if (datapass === "Freeze"){
                        fullDescriptor += " Freeze"
                    }
                    else if (datapass === "Freezer"){
                        fullDescriptor += " Freezer"
                    }
                    else if (datapass === "Front"){
                        fullDescriptor += " Front"
                    }
                    else if (datapass === "Furnace"){
                        fullDescriptor += " Furnace"
                    }
                    else if (datapass === "Game"){
                        fullDescriptor += " Game"
                    }
                    else if (datapass === "Garage"){
                        fullDescriptor += " Garage"
                    }
                    else if (datapass === "Gas"){
                        fullDescriptor += " Gas"
                    }
                    else if (datapass === "Gate"){
                        fullDescriptor += " Gate"
                    }
                    else if (datapass === "Girls"){
                        fullDescriptor += " Girls"
                    }
                    else if (datapass === "Glass"){
                        fullDescriptor += " Glass"
                    }
                    else if (datapass === "Glass_break"){
                        fullDescriptor += " Glass_break"
                    }
                    else if (datapass === "Guest"){
                        fullDescriptor += " Guest"
                    }
                    else if (datapass === "Gun"){
                        fullDescriptor += " Gun"
                    }
                    else if (datapass === "Hall"){
                        fullDescriptor += " Hall"
                    }
                    else if (datapass === "Hallway"){
                        fullDescriptor += " Hallway"
                    }
                    else if (datapass === "Hang_up"){
                        fullDescriptor += " Hang_up"
                    }
                    else if (datapass === "Hanging"){
                        fullDescriptor += " Hanging"
                    }
                    else if (datapass === "Heat"){
                        fullDescriptor += " Heat"
                    }
                    else if (datapass === "High"){
                        fullDescriptor += " High"
                    }
                    else if (datapass === "Home"){
                        fullDescriptor += " Home"
                    }
                    else if (datapass === "House"){
                        fullDescriptor += " House"
                    }
                    else if (datapass === "Ice"){
                        fullDescriptor += " Ice"
                    }
                    else if (datapass === "Image"){
                        fullDescriptor += " Image"
                    }
                    else if (datapass === "Image_sensor"){
                        fullDescriptor += " Image_sensor"
                    }
                    else if (datapass === "Inside"){
                        fullDescriptor += " Inside"
                    }
                    else if (datapass === "Instant"){
                        fullDescriptor += " Instant"
                    }
                    else if (datapass === "Interior"){
                        fullDescriptor += " Interior"
                    }
                    else if (datapass === "Intrusion"){
                        fullDescriptor += " Intrusion"
                    }
                    else if (datapass === "Is"){
                        fullDescriptor += " Is"
                    }
                    else if (datapass === "Key"){
                        fullDescriptor += " Key"
                    }
                    else if (datapass === "Keyfob"){
                        fullDescriptor += " Keyfob"
                    }
                    else if (datapass === "Keypads"){
                        fullDescriptor += " Keypads"
                    }
                    else if (datapass === "Kids"){
                        fullDescriptor += " Kids"
                    }
                    else if (datapass === "Kitchen"){
                        fullDescriptor += " Kitchen"
                    }
                    else if (datapass === "Laundry"){
                        fullDescriptor += " Laundry"
                    }
                    else if (datapass === "Left"){
                        fullDescriptor += " Left"
                    }
                    else if (datapass === "Level"){
                        fullDescriptor += " Level"
                    }
                    else if (datapass === "Library"){
                        fullDescriptor += " Library"
                    }
                    else if (datapass === "Light"){
                        fullDescriptor += " Light"
                    }
                    else if (datapass === "Lights"){
                        fullDescriptor += " Lights"
                    }
                    else if (datapass === "Liquor"){
                        fullDescriptor += " Liquor"
                    }
                    else if (datapass === "Living"){
                        fullDescriptor += " Living"
                    }
                    else if (datapass === "Loading"){
                        fullDescriptor += " Loading"
                    }
                    else if (datapass === "Lock"){
                        fullDescriptor += " Lock"
                    }
                    else if (datapass === "Loft"){
                        fullDescriptor += " Loft"
                    }
                    else if (datapass === "Low"){
                        fullDescriptor += " Low"
                    }
                    else if (datapass === "Main"){
                        fullDescriptor += " Main"
                    }
                    else if (datapass === "Maintenance"){
                        fullDescriptor += " Maintenance"
                    }
                    else if (datapass === "Man"){
                        fullDescriptor += " Man"
                    }
                    else if (datapass === "Master"){
                        fullDescriptor += " Master"
                    }
                    else if (datapass === "Medical"){
                        fullDescriptor += " Medical"
                    }
                    else if (datapass === "Medicine"){
                        fullDescriptor += " Medicine"
                    }
                    else if (datapass === "Menu"){
                        fullDescriptor += " Menu"
                    }
                    else if (datapass === "Middle"){
                        fullDescriptor += " Middle"
                    }
                    else if (datapass === "Monitor"){
                        fullDescriptor += " Monitor"
                    }
                    else if (datapass === "Motion"){
                        fullDescriptor += " Motion"
                    }
                    else if (datapass === "Motion_detector"){
                        fullDescriptor += " Motion_detector"
                    }
                    else if (datapass === "Mud"){
                        fullDescriptor += " Mud"
                    }
                    else if (datapass === "Nine"){
                        fullDescriptor += " Nine"
                    }
                    else if (datapass === "Nineteen"){
                        fullDescriptor += " Nineteen"
                    }
                    else if (datapass === "Ninety"){
                        fullDescriptor += " Ninety"
                    }
                    else if (datapass === "No_delay"){
                        fullDescriptor += " No_delay"
                    }
                    else if (datapass === "No_entry_delay"){
                        fullDescriptor += " No_entry_delay"
                    }
                    else if (datapass === "North"){
                        fullDescriptor += " North"
                    }
                    else if (datapass === "Not"){
                        fullDescriptor += " Not"
                    }
                    else if (datapass === "Not_ready"){
                        fullDescriptor += " Not_ready"
                    }
                    else if (datapass === "Nursery"){
                        fullDescriptor += " Nursery"
                    }
                    else if (datapass === "Off"){
                        fullDescriptor += " Off"
                    }
                    else if (datapass === "Office"){
                        fullDescriptor += " Office"
                    }
                    else if (datapass === "On"){
                        fullDescriptor += " On"
                    }
                    else if (datapass === "One"){
                        fullDescriptor += " One"
                    }
                    else if (datapass === "One_hundred"){
                        fullDescriptor += " One_hundred"
                    }
                    else if (datapass === "Output"){
                        fullDescriptor += " Output"
                    }
                    else if (datapass === "Outside"){
                        fullDescriptor += " Outside"
                    }
                    else if (datapass === "Overhead"){
                        fullDescriptor += " Overhead"
                    }
                    else if (datapass === "Panel"){
                        fullDescriptor += " Panel"
                    }
                    else if (datapass === "Panic"){
                        fullDescriptor += " Panic"
                    }
                    else if (datapass === "Pantry"){
                        fullDescriptor += " Pantry"
                    }
                    else if (datapass === "Patio"){
                        fullDescriptor += " Patio"
                    }
                    else if (datapass === "Perimeter"){
                        fullDescriptor += " Perimeter"
                    }
                    else if (datapass === "Phone_line"){
                        fullDescriptor += " Phone_line"
                    }
                    else if (datapass === "Play"){
                        fullDescriptor += " Play"
                    }
                    else if (datapass === "Police"){
                        fullDescriptor += " Police"
                    }
                    else if (datapass === "Pool"){
                        fullDescriptor += " Pool"
                    }
                    else if (datapass === "Porch"){
                        fullDescriptor += " Porch"
                    }
                    else if (datapass === "Pound"){
                        fullDescriptor += " Pound"
                    }
                    else if (datapass === "Power"){
                        fullDescriptor += " Power"
                    }
                    else if (datapass === "Press"){
                        fullDescriptor += " Press"
                    }
                    else if (datapass === "Previous"){
                        fullDescriptor += " Previous"
                    }
                    else if (datapass === "Pump"){
                        fullDescriptor += " Pump"
                    }
                    else if (datapass === "Radio"){
                        fullDescriptor += " Radio"
                    }
                    else if (datapass === "Ready"){
                        fullDescriptor += " Ready"
                    }
                    else if (datapass === "Rear"){
                        fullDescriptor += " Rear"
                    }
                    else if (datapass === "Refrigerator"){
                        fullDescriptor += " Refrigerator"
                    }
                    else if (datapass === "Relay"){
                        fullDescriptor += " Relay"
                    }
                    else if (datapass === "Remote"){
                        fullDescriptor += " Remote"
                    }
                    else if (datapass === "Repeat"){
                        fullDescriptor += " Repeat"
                    }
                    else if (datapass === "Rf_jam"){
                        fullDescriptor += " Rf_jam"
                    }
                    else if (datapass === "Right"){
                        fullDescriptor += " Right"
                    }
                    else if (datapass === "Room"){
                        fullDescriptor += " Room"
                    }
                    else if (datapass === "Safe"){
                        fullDescriptor += " Safe"
                    }
                    else if (datapass === "Second"){
                        fullDescriptor += " Second"
                    }
                    else if (datapass === "Security"){
                        fullDescriptor += " Security"
                    }
                    else if (datapass === "Sensor"){
                        fullDescriptor += " Sensor"
                    }
                    else if (datapass === "Sensors"){
                        fullDescriptor += " Sensors"
                    }
                    else if (datapass === "Service"){
                        fullDescriptor += " Service"
                    }
                    else if (datapass === "Session"){
                        fullDescriptor += " Session"
                    }
                    else if (datapass === "Set"){
                        fullDescriptor += " Set"
                    }
                    else if (datapass === "Seven"){
                        fullDescriptor += " Seven"
                    }
                    else if (datapass === "Seventeen"){
                        fullDescriptor += " Seventeen"
                    }
                    else if (datapass === "Seventy"){
                        fullDescriptor += " Seventy"
                    }
                    else if (datapass === "Shed"){
                        fullDescriptor += " Shed"
                    }
                    else if (datapass === "Shop"){
                        fullDescriptor += " Shop"
                    }
                    else if (datapass === "Side"){
                        fullDescriptor += " Side"
                    }
                    else if (datapass === "Silent"){
                        fullDescriptor += " Silent"
                    }
                    else if (datapass === "Siren"){
                        fullDescriptor += " Siren"
                    }
                    else if (datapass === "Six"){
                        fullDescriptor += " Six"
                    }
                    else if (datapass === "Sixteen"){
                        fullDescriptor += " Sixteen"
                    }
                    else if (datapass === "Sixty"){
                        fullDescriptor += " Sixty"
                    }
                    else if (datapass === "Skylight"){
                        fullDescriptor += " Skylight"
                    }
                    else if (datapass === "Sliding"){
                        fullDescriptor += " Sliding"
                    }
                    else if (datapass === "Smoke"){
                        fullDescriptor += " Smoke"
                    }
                    else if (datapass === "Sons"){
                        fullDescriptor += " Sons"
                    }
                    else if (datapass === "Sounder"){
                        fullDescriptor += " Sounder"
                    }
                    else if (datapass === "South"){
                        fullDescriptor += " South"
                    }
                    else if (datapass === "Space"){
                        fullDescriptor += " Space"
                    }
                    else if (datapass === "Spare"){
                        fullDescriptor += " Spare"
                    }
                    else if (datapass === "Stairs"){
                        fullDescriptor += " Stairs"
                    }
                    else if (datapass === "Star"){
                        fullDescriptor += " Star"
                    }
                    else if (datapass === "Status"){
                        fullDescriptor += " Status"
                    }
                    else if (datapass === "Stay"){
                        fullDescriptor += " Stay"
                    }
                    else if (datapass === "Stop"){
                        fullDescriptor += " Shop"
                    }
                    else if (datapass === "Storage"){
                        fullDescriptor += " Storage"
                    }
                    else if (datapass === "Study"){
                        fullDescriptor += " Study"
                    }
                    else if (datapass === "Sump"){
                        fullDescriptor += " Sump"
                    }
                    else if (datapass === "Sun"){
                        fullDescriptor += " Sun"
                    }
                    else if (datapass === "Sunroom"){
                        fullDescriptor += " Sunroom"
                    }
                    else if (datapass === "Supervision"){
                        fullDescriptor += " Supervision"
                    }
                    else if (datapass === "Switch"){
                        fullDescriptor += " Switch"
                    }
                    else if (datapass === "System"){
                        fullDescriptor += " System"
                    }
                    else if (datapass === "Tamper"){
                        fullDescriptor += " Tamper"
                    }
                    else if (datapass === "Temperature"){
                        fullDescriptor += " Temperature"
                    }
                    else if (datapass === "Ten"){
                        fullDescriptor += " Ten"
                    }
                    else if (datapass === "Terminated"){
                        fullDescriptor += " Terminated"
                    }
                    else if (datapass === "Theater"){
                        fullDescriptor += " Theater"
                    }
                    else if (datapass === "Thermostat"){
                        fullDescriptor += " Thermostat"
                    }
                    else if (datapass === "Third"){
                        fullDescriptor += " Third"
                    }
                    else if (datapass === "Thirteen"){
                        fullDescriptor += " Thirteen"
                    }
                    else if (datapass === "Thirty"){
                        fullDescriptor += " Thirty"
                    }
                    else if (datapass === "Three"){
                        fullDescriptor += " Three"
                    }
                    else if (datapass === "To"){
                        fullDescriptor += " To"
                    }
                    else if (datapass === "Tool"){
                        fullDescriptor += " Tool"
                    }
                    else if (datapass === "Transmitted"){
                        fullDescriptor += " Transmitted"
                    }
                    else if (datapass === "Transmitter"){
                        fullDescriptor += " Transmitter"
                    }
                    else if (datapass === "Trouble"){
                        fullDescriptor += " Trouble"
                    }
                    else if (datapass === "Turn"){
                        fullDescriptor += " Turn"
                    }
                    else if (datapass === "Tv"){
                        fullDescriptor += " Tv"
                    }
                    else if (datapass === "Twelve"){
                        fullDescriptor += " Twelve"
                    }
                    else if (datapass === "Twenty"){
                        fullDescriptor += " Twenty"
                    }
                    else if (datapass === "Two"){
                        fullDescriptor += " Two"
                    }
                    else if (datapass === "Unlock"){
                        fullDescriptor += " Unlock"
                    }
                    else if (datapass === "Upper"){
                        fullDescriptor += " Upper"
                    }
                    else if (datapass === "Upstairs"){
                        fullDescriptor += " Upstairs"
                    }
                    else if (datapass === "User"){
                        fullDescriptor += " User"
                    }
                    else if (datapass === "Utility"){
                        fullDescriptor += " Utility"
                    }
                    else if (datapass === "Valve"){
                        fullDescriptor += " Valve"
                    }
                    else if (datapass === "Video"){
                        fullDescriptor += " Video"
                    }
                    else if (datapass === "Voice"){
                        fullDescriptor += " Voice"
                    }
                    else if (datapass === "Wall"){
                        fullDescriptor += " Wall"
                    }
                    else if (datapass === "Warehouse"){
                        fullDescriptor += " Warehouse"
                    }
                    else if (datapass === "Water"){
                        fullDescriptor += " Water"
                    }
                    else if (datapass === "West"){
                        fullDescriptor += " West"
                    }
                    else if (datapass === "Window"){
                        fullDescriptor += " Window"
                    }
                    else if (datapass === "Wing"){
                        fullDescriptor += " Wing"
                    }
                    else if (datapass === "Wireless"){
                        fullDescriptor += " Wireless"
                    }
                    else if (datapass === "Yard"){
                        fullDescriptor += " Yard"
                    }
                    else if (datapass === "Zero"){
                        fullDescriptor += " Zero"
                    }
                    else if (datapass === "Zone"){
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
                    if (datapass === "Abort"){
                        fullDescriptor += " Abort"
                    }
                    else if (datapass === "Ac"){
                        fullDescriptor += " Ac"
                    }
                    else if (datapass === "Access"){
                        fullDescriptor += " Access"
                    }
                    else if (datapass === "Alarm"){
                        fullDescriptor += " Alarm"
                    }
                    else if (datapass === "And"){
                        fullDescriptor += " And"
                    }
                    else if (datapass === "Anouncement"){
                        fullDescriptor += " Announcement"
                    }
                    else if (datapass === "Apartment"){
                        fullDescriptor += " Apartment"
                    }
                    else if (datapass === "Area"){
                        fullDescriptor += " Area"
                    }
                    else if (datapass === "Arm"){
                        fullDescriptor += " Arm"
                    }
                    else if (datapass === "Armed"){
                        fullDescriptor += " Armed"
                    }
                    else if (datapass === "At"){
                        fullDescriptor += " At"
                    }
                    else if (datapass === "Attic"){
                        fullDescriptor += " Attic"
                    }
                    else if (datapass === "Audio"){
                        fullDescriptor += " Audio"
                    }
                    else if (datapass === "Auto"){
                        fullDescriptor += " Auto"
                    }
                    else if (datapass === "Automation"){
                        fullDescriptor += " Automation"
                    }
                    else if (datapass === "Auxiliary"){
                        fullDescriptor += " Auxiliary"
                    }
                    else if (datapass === "Away"){
                        fullDescriptor += " Away"
                    }
                    else if (datapass === "Babys"){
                        fullDescriptor += " Babys"
                    }
                    else if (datapass === "Back"){
                        fullDescriptor += " Back"
                    }
                    else if (datapass === "Balcony"){
                        fullDescriptor += " Balcony"
                    }
                    else if (datapass === "Basement"){
                        fullDescriptor += " Basement"
                    }
                    else if (datapass === "Bathroom"){
                        fullDescriptor += " Bathroom"
                    }
                    else if (datapass === "Battery"){
                        fullDescriptor += " Battery"
                    }
                    else if (datapass === "Bedroom"){
                        fullDescriptor += " Bedroom"
                    }
                    else if (datapass === "Bell"){
                        fullDescriptor += " Bell"
                    }
                    else if (datapass === "Bonus"){
                        fullDescriptor += " Bonus"
                    }
                    else if (datapass === "Boys"){
                        fullDescriptor += " Boys"
                    }
                    else if (datapass === "Break"){
                        fullDescriptor += " Break"
                    }
                    else if (datapass === "Button"){
                        fullDescriptor += " Button"
                    }
                    else if (datapass === "Bypass"){
                        fullDescriptor += " Bypass"
                    }
                    else if (datapass === "Bypassed"){
                        fullDescriptor += " Bypassed"
                    }
                    else if (datapass === "Camera"){
                        fullDescriptor += " Camera"
                    }
                    else if (datapass === "Cabinet"){
                        fullDescriptor += " Cabinet"
                    }
                    else if (datapass === "Cancel"){
                        fullDescriptor += " Cancel"
                    }
                    else if (datapass === "Carbon_monoxide"){
                        fullDescriptor += " Carbon_monoxide"
                    }
                    else if (datapass === "Cave"){
                        fullDescriptor += " Cave"
                    }
                    else if (datapass === "Cell_radio"){
                        fullDescriptor += " Cell_radio"
                    }
                    else if (datapass === "Cellular"){
                        fullDescriptor += " Cellular"
                    }
                    else if (datapass === "Center"){
                        fullDescriptor += " Center"
                    }
                    else if (datapass === "Check"){
                        fullDescriptor += " Check"
                    }
                    else if (datapass === "Chest"){
                        fullDescriptor += " Chest"
                    }
                    else if (datapass === "Childrens"){
                        fullDescriptor += " Childrens"
                    }
                    else if (datapass === "Chime"){
                        fullDescriptor += " Chime"
                    }
                    else if (datapass === "Closet"){
                        fullDescriptor += " Closet"
                    }
                    else if (datapass === "Code"){
                        fullDescriptor += " Code"
                    }
                    else if (datapass === "Communications"){
                        fullDescriptor += " Communications"
                    }
                    else if (datapass === "Computer"){
                        fullDescriptor += " Computer"
                    }
                    else if (datapass === "Control"){
                        fullDescriptor += " Control"
                    }
                    else if (datapass === "Cool"){
                        fullDescriptor += " Cool"
                    }
                    else if (datapass === "Corner"){
                        fullDescriptor += " Corner"
                    }
                    else if (datapass === "Courtyard"){
                        fullDescriptor += " Courtyard"
                    }
                    else if (datapass === "Crawl"){
                        fullDescriptor += " Crawl"
                    }
                    else if (datapass === "Current"){
                        fullDescriptor += " Current"
                    }
                    else if (datapass === "Daughters"){
                        fullDescriptor += " Daughters"
                    }
                    else if (datapass === "Day"){
                        fullDescriptor += " Day"
                    }
                    else if (datapass === "Deck"){
                        fullDescriptor += " Deck"
                    }
                    else if (datapass === "Degrees"){
                        fullDescriptor += " Degrees"
                    }
                    else if (datapass === "Den"){
                        fullDescriptor += " Den"
                    }
                    else if (datapass === "Detached"){
                        fullDescriptor += " Detached"
                    }
                    else if (datapass === "Detector"){
                        fullDescriptor += " Detector"
                    }
                    else if (datapass === "Dim"){
                        fullDescriptor += " Dim"
                    }
                    else if (datapass === "Dining"){
                        fullDescriptor += " Dining"
                    }
                    else if (datapass === "Disarm"){
                        fullDescriptor += " Disarm"
                    }
                    else if (datapass === "Disarmed"){
                        fullDescriptor += " Disarmed"
                    }
                    else if (datapass === "Dock"){
                        fullDescriptor += " Dock"
                    }
                    else if (datapass === "Door"){
                        fullDescriptor += " Door"
                    }
                    else if (datapass === "Doorbell"){
                        fullDescriptor += " Doorbell"
                    }
                    else if (datapass === "Downstairs"){
                        fullDescriptor += " Downstairs"
                    }
                    else if (datapass === "Driveway"){
                        fullDescriptor += " Driveway"
                    }
                    else if (datapass === "East"){
                        fullDescriptor += " East"
                    }
                    else if (datapass === "Eight"){
                        fullDescriptor += " Eight"
                    }
                    else if (datapass === "Eighteen"){
                        fullDescriptor += " Eighteen"
                    }
                    else if (datapass === "Eighty"){
                        fullDescriptor += " Eighty"
                    }
                    else if (datapass === "Electric"){
                        fullDescriptor += " Electric"
                    }
                    else if (datapass === "Eleven"){
                        fullDescriptor += " Eleven"
                    }
                    else if (datapass === "Emergency"){
                        fullDescriptor += " Emergency"
                    }
                    else if (datapass === "Enter"){
                        fullDescriptor += " Enter"
                    }
                    else if (datapass === "Entrance"){
                        fullDescriptor += " Entrance"
                    }
                    else if (datapass === "Entry"){
                        fullDescriptor += " Entry"
                    }
                    else if (datapass === "Error"){
                        fullDescriptor += " Error"
                    }
                    else if (datapass === "Exercise"){
                        fullDescriptor += " Exercise"
                    }
                    else if (datapass === "Exit"){
                        fullDescriptor += " Exit"
                    }
                    else if (datapass === "Exit_now"){
                        fullDescriptor += " Exit_now"
                    }
                    else if (datapass === "Exterior"){
                        fullDescriptor += " Exterior"
                    }
                    else if (datapass === "External"){
                        fullDescriptor += " External"
                    }
                    else if (datapass === "Failure"){
                        fullDescriptor += " Failure"
                    }
                    else if (datapass === "Family"){
                        fullDescriptor += " Family"
                    }
                    else if (datapass === "Fan"){
                        fullDescriptor += " Fan"
                    }
                    else if (datapass === "Fifteen"){
                        fullDescriptor += " Fifteen"
                    }
                    else if (datapass === "Fifty"){
                        fullDescriptor += " Fifty"
                    }
                    else if (datapass === "Fire"){
                        fullDescriptor += " Fire"
                    }
                    else if (datapass === "Fire_alert"){
                        fullDescriptor += " Fire_alert"
                    }
                    else if (datapass === "Fire_detector"){
                        fullDescriptor += " Fire_detector"
                    }
                    else if (datapass === "First"){
                        fullDescriptor += " First"
                    }
                    else if (datapass === "Five"){
                        fullDescriptor += " Five"
                    }
                    else if (datapass === "Flood"){
                        fullDescriptor += " Flood"
                    }
                    else if (datapass === "Floor"){
                        fullDescriptor += " Floor"
                    }
                    else if (datapass === "Fluid"){
                        fullDescriptor += " Fluid"
                    }
                    else if (datapass === "Foil"){
                        fullDescriptor += " Foil"
                    }
                    else if (datapass === "For"){
                        fullDescriptor += " For"
                    }
                    else if (datapass === "Fourty"){
                        fullDescriptor += " Fourty"
                    }
                    else if (datapass === "Four"){
                        fullDescriptor += " Four"
                    }
                    else if (datapass === "Fourteen"){
                        fullDescriptor += " Fourteen"
                    }
                    else if (datapass === "Forth"){
                        fullDescriptor += " Forth"
                    }
                    else if (datapass === "Foyer"){
                        fullDescriptor += " Foyer"
                    }
                    else if (datapass === "Freeze"){
                        fullDescriptor += " Freeze"
                    }
                    else if (datapass === "Freezer"){
                        fullDescriptor += " Freezer"
                    }
                    else if (datapass === "Front"){
                        fullDescriptor += " Front"
                    }
                    else if (datapass === "Furnace"){
                        fullDescriptor += " Furnace"
                    }
                    else if (datapass === "Game"){
                        fullDescriptor += " Game"
                    }
                    else if (datapass === "Garage"){
                        fullDescriptor += " Garage"
                    }
                    else if (datapass === "Gas"){
                        fullDescriptor += " Gas"
                    }
                    else if (datapass === "Gate"){
                        fullDescriptor += " Gate"
                    }
                    else if (datapass === "Girls"){
                        fullDescriptor += " Girls"
                    }
                    else if (datapass === "Glass"){
                        fullDescriptor += " Glass"
                    }
                    else if (datapass === "Glass_break"){
                        fullDescriptor += " Glass_break"
                    }
                    else if (datapass === "Guest"){
                        fullDescriptor += " Guest"
                    }
                    else if (datapass === "Gun"){
                        fullDescriptor += " Gun"
                    }
                    else if (datapass === "Hall"){
                        fullDescriptor += " Hall"
                    }
                    else if (datapass === "Hallway"){
                        fullDescriptor += " Hallway"
                    }
                    else if (datapass === "Hang_up"){
                        fullDescriptor += " Hang_up"
                    }
                    else if (datapass === "Hanging"){
                        fullDescriptor += " Hanging"
                    }
                    else if (datapass === "Heat"){
                        fullDescriptor += " Heat"
                    }
                    else if (datapass === "High"){
                        fullDescriptor += " High"
                    }
                    else if (datapass === "Home"){
                        fullDescriptor += " Home"
                    }
                    else if (datapass === "House"){
                        fullDescriptor += " House"
                    }
                    else if (datapass === "Ice"){
                        fullDescriptor += " Ice"
                    }
                    else if (datapass === "Image"){
                        fullDescriptor += " Image"
                    }
                    else if (datapass === "Image_sensor"){
                        fullDescriptor += " Image_sensor"
                    }
                    else if (datapass === "Inside"){
                        fullDescriptor += " Inside"
                    }
                    else if (datapass === "Instant"){
                        fullDescriptor += " Instant"
                    }
                    else if (datapass === "Interior"){
                        fullDescriptor += " Interior"
                    }
                    else if (datapass === "Intrusion"){
                        fullDescriptor += " Intrusion"
                    }
                    else if (datapass === "Is"){
                        fullDescriptor += " Is"
                    }
                    else if (datapass === "Key"){
                        fullDescriptor += " Key"
                    }
                    else if (datapass === "Keyfob"){
                        fullDescriptor += " Keyfob"
                    }
                    else if (datapass === "Keypads"){
                        fullDescriptor += " Keypads"
                    }
                    else if (datapass === "Kids"){
                        fullDescriptor += " Kids"
                    }
                    else if (datapass === "Kitchen"){
                        fullDescriptor += " Kitchen"
                    }
                    else if (datapass === "Laundry"){
                        fullDescriptor += " Laundry"
                    }
                    else if (datapass === "Left"){
                        fullDescriptor += " Left"
                    }
                    else if (datapass === "Level"){
                        fullDescriptor += " Level"
                    }
                    else if (datapass === "Library"){
                        fullDescriptor += " Library"
                    }
                    else if (datapass === "Light"){
                        fullDescriptor += " Light"
                    }
                    else if (datapass === "Lights"){
                        fullDescriptor += " Lights"
                    }
                    else if (datapass === "Liquor"){
                        fullDescriptor += " Liquor"
                    }
                    else if (datapass === "Living"){
                        fullDescriptor += " Living"
                    }
                    else if (datapass === "Loading"){
                        fullDescriptor += " Loading"
                    }
                    else if (datapass === "Lock"){
                        fullDescriptor += " Lock"
                    }
                    else if (datapass === "Loft"){
                        fullDescriptor += " Loft"
                    }
                    else if (datapass === "Low"){
                        fullDescriptor += " Low"
                    }
                    else if (datapass === "Main"){
                        fullDescriptor += " Main"
                    }
                    else if (datapass === "Maintenance"){
                        fullDescriptor += " Maintenance"
                    }
                    else if (datapass === "Man"){
                        fullDescriptor += " Man"
                    }
                    else if (datapass === "Master"){
                        fullDescriptor += " Master"
                    }
                    else if (datapass === "Medical"){
                        fullDescriptor += " Medical"
                    }
                    else if (datapass === "Medicine"){
                        fullDescriptor += " Medicine"
                    }
                    else if (datapass === "Menu"){
                        fullDescriptor += " Menu"
                    }
                    else if (datapass === "Middle"){
                        fullDescriptor += " Middle"
                    }
                    else if (datapass === "Monitor"){
                        fullDescriptor += " Monitor"
                    }
                    else if (datapass === "Motion"){
                        fullDescriptor += " Motion"
                    }
                    else if (datapass === "Motion_detector"){
                        fullDescriptor += " Motion_detector"
                    }
                    else if (datapass === "Mud"){
                        fullDescriptor += " Mud"
                    }
                    else if (datapass === "Nine"){
                        fullDescriptor += " Nine"
                    }
                    else if (datapass === "Nineteen"){
                        fullDescriptor += " Nineteen"
                    }
                    else if (datapass === "Ninety"){
                        fullDescriptor += " Ninety"
                    }
                    else if (datapass === "No_delay"){
                        fullDescriptor += " No_delay"
                    }
                    else if (datapass === "No_entry_delay"){
                        fullDescriptor += " No_entry_delay"
                    }
                    else if (datapass === "North"){
                        fullDescriptor += " North"
                    }
                    else if (datapass === "Not"){
                        fullDescriptor += " Not"
                    }
                    else if (datapass === "Not_ready"){
                        fullDescriptor += " Not_ready"
                    }
                    else if (datapass === "Nursery"){
                        fullDescriptor += " Nursery"
                    }
                    else if (datapass === "Off"){
                        fullDescriptor += " Off"
                    }
                    else if (datapass === "Office"){
                        fullDescriptor += " Office"
                    }
                    else if (datapass === "On"){
                        fullDescriptor += " On"
                    }
                    else if (datapass === "One"){
                        fullDescriptor += " One"
                    }
                    else if (datapass === "One_hundred"){
                        fullDescriptor += " One_hundred"
                    }
                    else if (datapass === "Output"){
                        fullDescriptor += " Output"
                    }
                    else if (datapass === "Outside"){
                        fullDescriptor += " Outside"
                    }
                    else if (datapass === "Overhead"){
                        fullDescriptor += " Overhead"
                    }
                    else if (datapass === "Panel"){
                        fullDescriptor += " Panel"
                    }
                    else if (datapass === "Panic"){
                        fullDescriptor += " Panic"
                    }
                    else if (datapass === "Pantry"){
                        fullDescriptor += " Pantry"
                    }
                    else if (datapass === "Patio"){
                        fullDescriptor += " Patio"
                    }
                    else if (datapass === "Perimeter"){
                        fullDescriptor += " Perimeter"
                    }
                    else if (datapass === "Phone_line"){
                        fullDescriptor += " Phone_line"
                    }
                    else if (datapass === "Play"){
                        fullDescriptor += " Play"
                    }
                    else if (datapass === "Police"){
                        fullDescriptor += " Police"
                    }
                    else if (datapass === "Pool"){
                        fullDescriptor += " Pool"
                    }
                    else if (datapass === "Porch"){
                        fullDescriptor += " Porch"
                    }
                    else if (datapass === "Pound"){
                        fullDescriptor += " Pound"
                    }
                    else if (datapass === "Power"){
                        fullDescriptor += " Power"
                    }
                    else if (datapass === "Press"){
                        fullDescriptor += " Press"
                    }
                    else if (datapass === "Previous"){
                        fullDescriptor += " Previous"
                    }
                    else if (datapass === "Pump"){
                        fullDescriptor += " Pump"
                    }
                    else if (datapass === "Radio"){
                        fullDescriptor += " Radio"
                    }
                    else if (datapass === "Ready"){
                        fullDescriptor += " Ready"
                    }
                    else if (datapass === "Rear"){
                        fullDescriptor += " Rear"
                    }
                    else if (datapass === "Refrigerator"){
                        fullDescriptor += " Refrigerator"
                    }
                    else if (datapass === "Relay"){
                        fullDescriptor += " Relay"
                    }
                    else if (datapass === "Remote"){
                        fullDescriptor += " Remote"
                    }
                    else if (datapass === "Repeat"){
                        fullDescriptor += " Repeat"
                    }
                    else if (datapass === "Rf_jam"){
                        fullDescriptor += " Rf_jam"
                    }
                    else if (datapass === "Right"){
                        fullDescriptor += " Right"
                    }
                    else if (datapass === "Room"){
                        fullDescriptor += " Room"
                    }
                    else if (datapass === "Safe"){
                        fullDescriptor += " Safe"
                    }
                    else if (datapass === "Second"){
                        fullDescriptor += " Second"
                    }
                    else if (datapass === "Security"){
                        fullDescriptor += " Security"
                    }
                    else if (datapass === "Sensor"){
                        fullDescriptor += " Sensor"
                    }
                    else if (datapass === "Sensors"){
                        fullDescriptor += " Sensors"
                    }
                    else if (datapass === "Service"){
                        fullDescriptor += " Service"
                    }
                    else if (datapass === "Session"){
                        fullDescriptor += " Session"
                    }
                    else if (datapass === "Set"){
                        fullDescriptor += " Set"
                    }
                    else if (datapass === "Seven"){
                        fullDescriptor += " Seven"
                    }
                    else if (datapass === "Seventeen"){
                        fullDescriptor += " Seventeen"
                    }
                    else if (datapass === "Seventy"){
                        fullDescriptor += " Seventy"
                    }
                    else if (datapass === "Shed"){
                        fullDescriptor += " Shed"
                    }
                    else if (datapass === "Shop"){
                        fullDescriptor += " Shop"
                    }
                    else if (datapass === "Side"){
                        fullDescriptor += " Side"
                    }
                    else if (datapass === "Silent"){
                        fullDescriptor += " Silent"
                    }
                    else if (datapass === "Siren"){
                        fullDescriptor += " Siren"
                    }
                    else if (datapass === "Six"){
                        fullDescriptor += " Six"
                    }
                    else if (datapass === "Sixteen"){
                        fullDescriptor += " Sixteen"
                    }
                    else if (datapass === "Sixty"){
                        fullDescriptor += " Sixty"
                    }
                    else if (datapass === "Skylight"){
                        fullDescriptor += " Skylight"
                    }
                    else if (datapass === "Sliding"){
                        fullDescriptor += " Sliding"
                    }
                    else if (datapass === "Smoke"){
                        fullDescriptor += " Smoke"
                    }
                    else if (datapass === "Sons"){
                        fullDescriptor += " Sons"
                    }
                    else if (datapass === "Sounder"){
                        fullDescriptor += " Sounder"
                    }
                    else if (datapass === "South"){
                        fullDescriptor += " South"
                    }
                    else if (datapass === "Space"){
                        fullDescriptor += " Space"
                    }
                    else if (datapass === "Spare"){
                        fullDescriptor += " Spare"
                    }
                    else if (datapass === "Stairs"){
                        fullDescriptor += " Stairs"
                    }
                    else if (datapass === "Star"){
                        fullDescriptor += " Star"
                    }
                    else if (datapass === "Status"){
                        fullDescriptor += " Status"
                    }
                    else if (datapass === "Stay"){
                        fullDescriptor += " Stay"
                    }
                    else if (datapass === "Stop"){
                        fullDescriptor += " Shop"
                    }
                    else if (datapass === "Storage"){
                        fullDescriptor += " Storage"
                    }
                    else if (datapass === "Study"){
                        fullDescriptor += " Study"
                    }
                    else if (datapass === "Sump"){
                        fullDescriptor += " Sump"
                    }
                    else if (datapass === "Sun"){
                        fullDescriptor += " Sun"
                    }
                    else if (datapass === "Sunroom"){
                        fullDescriptor += " Sunroom"
                    }
                    else if (datapass === "Supervision"){
                        fullDescriptor += " Supervision"
                    }
                    else if (datapass === "Switch"){
                        fullDescriptor += " Switch"
                    }
                    else if (datapass === "System"){
                        fullDescriptor += " System"
                    }
                    else if (datapass === "Tamper"){
                        fullDescriptor += " Tamper"
                    }
                    else if (datapass === "Temperature"){
                        fullDescriptor += " Temperature"
                    }
                    else if (datapass === "Ten"){
                        fullDescriptor += " Ten"
                    }
                    else if (datapass === "Terminated"){
                        fullDescriptor += " Terminated"
                    }
                    else if (datapass === "Theater"){
                        fullDescriptor += " Theater"
                    }
                    else if (datapass === "Thermostat"){
                        fullDescriptor += " Thermostat"
                    }
                    else if (datapass === "Third"){
                        fullDescriptor += " Third"
                    }
                    else if (datapass === "Thirteen"){
                        fullDescriptor += " Thirteen"
                    }
                    else if (datapass === "Thirty"){
                        fullDescriptor += " Thirty"
                    }
                    else if (datapass === "Three"){
                        fullDescriptor += " Three"
                    }
                    else if (datapass === "To"){
                        fullDescriptor += " To"
                    }
                    else if (datapass === "Tool"){
                        fullDescriptor += " Tool"
                    }
                    else if (datapass === "Transmitted"){
                        fullDescriptor += " Transmitted"
                    }
                    else if (datapass === "Transmitter"){
                        fullDescriptor += " Transmitter"
                    }
                    else if (datapass === "Trouble"){
                        fullDescriptor += " Trouble"
                    }
                    else if (datapass === "Turn"){
                        fullDescriptor += " Turn"
                    }
                    else if (datapass === "Tv"){
                        fullDescriptor += " Tv"
                    }
                    else if (datapass === "Twelve"){
                        fullDescriptor += " Twelve"
                    }
                    else if (datapass === "Twenty"){
                        fullDescriptor += " Twenty"
                    }
                    else if (datapass === "Two"){
                        fullDescriptor += " Two"
                    }
                    else if (datapass === "Unlock"){
                        fullDescriptor += " Unlock"
                    }
                    else if (datapass === "Upper"){
                        fullDescriptor += " Upper"
                    }
                    else if (datapass === "Upstairs"){
                        fullDescriptor += " Upstairs"
                    }
                    else if (datapass === "User"){
                        fullDescriptor += " User"
                    }
                    else if (datapass === "Utility"){
                        fullDescriptor += " Utility"
                    }
                    else if (datapass === "Valve"){
                        fullDescriptor += " Valve"
                    }
                    else if (datapass === "Video"){
                        fullDescriptor += " Video"
                    }
                    else if (datapass === "Voice"){
                        fullDescriptor += " Voice"
                    }
                    else if (datapass === "Wall"){
                        fullDescriptor += " Wall"
                    }
                    else if (datapass === "Warehouse"){
                        fullDescriptor += " Warehouse"
                    }
                    else if (datapass === "Water"){
                        fullDescriptor += " Water"
                    }
                    else if (datapass === "West"){
                        fullDescriptor += " West"
                    }
                    else if (datapass === "Window"){
                        fullDescriptor += " Window"
                    }
                    else if (datapass === "Wing"){
                        fullDescriptor += " Wing"
                    }
                    else if (datapass === "Wireless"){
                        fullDescriptor += " Wireless"
                    }
                    else if (datapass === "Yard"){
                        fullDescriptor += " Yard"
                    }
                    else if (datapass === "Zero"){
                        fullDescriptor += " Zero"
                    }
                    else if (datapass === "Zone"){
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
                    if (datapass === "Abort"){
                        fullDescriptor += " Abort"
                    }
                    else if (datapass === "Ac"){
                        fullDescriptor += " Ac"
                    }
                    else if (datapass === "Access"){
                        fullDescriptor += " Access"
                    }
                    else if (datapass === "Alarm"){
                        fullDescriptor += " Alarm"
                    }
                    else if (datapass === "And"){
                        fullDescriptor += " And"
                    }
                    else if (datapass === "Anouncement"){
                        fullDescriptor += " Announcement"
                    }
                    else if (datapass === "Apartment"){
                        fullDescriptor += " Apartment"
                    }
                    else if (datapass === "Area"){
                        fullDescriptor += " Area"
                    }
                    else if (datapass === "Arm"){
                        fullDescriptor += " Arm"
                    }
                    else if (datapass === "Armed"){
                        fullDescriptor += " Armed"
                    }
                    else if (datapass === "At"){
                        fullDescriptor += " At"
                    }
                    else if (datapass === "Attic"){
                        fullDescriptor += " Attic"
                    }
                    else if (datapass === "Audio"){
                        fullDescriptor += " Audio"
                    }
                    else if (datapass === "Auto"){
                        fullDescriptor += " Auto"
                    }
                    else if (datapass === "Automation"){
                        fullDescriptor += " Automation"
                    }
                    else if (datapass === "Auxiliary"){
                        fullDescriptor += " Auxiliary"
                    }
                    else if (datapass === "Away"){
                        fullDescriptor += " Away"
                    }
                    else if (datapass === "Babys"){
                        fullDescriptor += " Babys"
                    }
                    else if (datapass === "Back"){
                        fullDescriptor += " Back"
                    }
                    else if (datapass === "Balcony"){
                        fullDescriptor += " Balcony"
                    }
                    else if (datapass === "Basement"){
                        fullDescriptor += " Basement"
                    }
                    else if (datapass === "Bathroom"){
                        fullDescriptor += " Bathroom"
                    }
                    else if (datapass === "Battery"){
                        fullDescriptor += " Battery"
                    }
                    else if (datapass === "Bedroom"){
                        fullDescriptor += " Bedroom"
                    }
                    else if (datapass === "Bell"){
                        fullDescriptor += " Bell"
                    }
                    else if (datapass === "Bonus"){
                        fullDescriptor += " Bonus"
                    }
                    else if (datapass === "Boys"){
                        fullDescriptor += " Boys"
                    }
                    else if (datapass === "Break"){
                        fullDescriptor += " Break"
                    }
                    else if (datapass === "Button"){
                        fullDescriptor += " Button"
                    }
                    else if (datapass === "Bypass"){
                        fullDescriptor += " Bypass"
                    }
                    else if (datapass === "Bypassed"){
                        fullDescriptor += " Bypassed"
                    }
                    else if (datapass === "Camera"){
                        fullDescriptor += " Camera"
                    }
                    else if (datapass === "Cabinet"){
                        fullDescriptor += " Cabinet"
                    }
                    else if (datapass === "Cancel"){
                        fullDescriptor += " Cancel"
                    }
                    else if (datapass === "Carbon_monoxide"){
                        fullDescriptor += " Carbon_monoxide"
                    }
                    else if (datapass === "Cave"){
                        fullDescriptor += " Cave"
                    }
                    else if (datapass === "Cell_radio"){
                        fullDescriptor += " Cell_radio"
                    }
                    else if (datapass === "Cellular"){
                        fullDescriptor += " Cellular"
                    }
                    else if (datapass === "Center"){
                        fullDescriptor += " Center"
                    }
                    else if (datapass === "Check"){
                        fullDescriptor += " Check"
                    }
                    else if (datapass === "Chest"){
                        fullDescriptor += " Chest"
                    }
                    else if (datapass === "Childrens"){
                        fullDescriptor += " Childrens"
                    }
                    else if (datapass === "Chime"){
                        fullDescriptor += " Chime"
                    }
                    else if (datapass === "Closet"){
                        fullDescriptor += " Closet"
                    }
                    else if (datapass === "Code"){
                        fullDescriptor += " Code"
                    }
                    else if (datapass === "Communications"){
                        fullDescriptor += " Communications"
                    }
                    else if (datapass === "Computer"){
                        fullDescriptor += " Computer"
                    }
                    else if (datapass === "Control"){
                        fullDescriptor += " Control"
                    }
                    else if (datapass === "Cool"){
                        fullDescriptor += " Cool"
                    }
                    else if (datapass === "Corner"){
                        fullDescriptor += " Corner"
                    }
                    else if (datapass === "Courtyard"){
                        fullDescriptor += " Courtyard"
                    }
                    else if (datapass === "Crawl"){
                        fullDescriptor += " Crawl"
                    }
                    else if (datapass === "Current"){
                        fullDescriptor += " Current"
                    }
                    else if (datapass === "Daughters"){
                        fullDescriptor += " Daughters"
                    }
                    else if (datapass === "Day"){
                        fullDescriptor += " Day"
                    }
                    else if (datapass === "Deck"){
                        fullDescriptor += " Deck"
                    }
                    else if (datapass === "Degrees"){
                        fullDescriptor += " Degrees"
                    }
                    else if (datapass === "Den"){
                        fullDescriptor += " Den"
                    }
                    else if (datapass === "Detached"){
                        fullDescriptor += " Detached"
                    }
                    else if (datapass === "Detector"){
                        fullDescriptor += " Detector"
                    }
                    else if (datapass === "Dim"){
                        fullDescriptor += " Dim"
                    }
                    else if (datapass === "Dining"){
                        fullDescriptor += " Dining"
                    }
                    else if (datapass === "Disarm"){
                        fullDescriptor += " Disarm"
                    }
                    else if (datapass === "Disarmed"){
                        fullDescriptor += " Disarmed"
                    }
                    else if (datapass === "Dock"){
                        fullDescriptor += " Dock"
                    }
                    else if (datapass === "Door"){
                        fullDescriptor += " Door"
                    }
                    else if (datapass === "Doorbell"){
                        fullDescriptor += " Doorbell"
                    }
                    else if (datapass === "Downstairs"){
                        fullDescriptor += " Downstairs"
                    }
                    else if (datapass === "Driveway"){
                        fullDescriptor += " Driveway"
                    }
                    else if (datapass === "East"){
                        fullDescriptor += " East"
                    }
                    else if (datapass === "Eight"){
                        fullDescriptor += " Eight"
                    }
                    else if (datapass === "Eighteen"){
                        fullDescriptor += " Eighteen"
                    }
                    else if (datapass === "Eighty"){
                        fullDescriptor += " Eighty"
                    }
                    else if (datapass === "Electric"){
                        fullDescriptor += " Electric"
                    }
                    else if (datapass === "Eleven"){
                        fullDescriptor += " Eleven"
                    }
                    else if (datapass === "Emergency"){
                        fullDescriptor += " Emergency"
                    }
                    else if (datapass === "Enter"){
                        fullDescriptor += " Enter"
                    }
                    else if (datapass === "Entrance"){
                        fullDescriptor += " Entrance"
                    }
                    else if (datapass === "Entry"){
                        fullDescriptor += " Entry"
                    }
                    else if (datapass === "Error"){
                        fullDescriptor += " Error"
                    }
                    else if (datapass === "Exercise"){
                        fullDescriptor += " Exercise"
                    }
                    else if (datapass === "Exit"){
                        fullDescriptor += " Exit"
                    }
                    else if (datapass === "Exit_now"){
                        fullDescriptor += " Exit_now"
                    }
                    else if (datapass === "Exterior"){
                        fullDescriptor += " Exterior"
                    }
                    else if (datapass === "External"){
                        fullDescriptor += " External"
                    }
                    else if (datapass === "Failure"){
                        fullDescriptor += " Failure"
                    }
                    else if (datapass === "Family"){
                        fullDescriptor += " Family"
                    }
                    else if (datapass === "Fan"){
                        fullDescriptor += " Fan"
                    }
                    else if (datapass === "Fifteen"){
                        fullDescriptor += " Fifteen"
                    }
                    else if (datapass === "Fifty"){
                        fullDescriptor += " Fifty"
                    }
                    else if (datapass === "Fire"){
                        fullDescriptor += " Fire"
                    }
                    else if (datapass === "Fire_alert"){
                        fullDescriptor += " Fire_alert"
                    }
                    else if (datapass === "Fire_detector"){
                        fullDescriptor += " Fire_detector"
                    }
                    else if (datapass === "First"){
                        fullDescriptor += " First"
                    }
                    else if (datapass === "Five"){
                        fullDescriptor += " Five"
                    }
                    else if (datapass === "Flood"){
                        fullDescriptor += " Flood"
                    }
                    else if (datapass === "Floor"){
                        fullDescriptor += " Floor"
                    }
                    else if (datapass === "Fluid"){
                        fullDescriptor += " Fluid"
                    }
                    else if (datapass === "Foil"){
                        fullDescriptor += " Foil"
                    }
                    else if (datapass === "For"){
                        fullDescriptor += " For"
                    }
                    else if (datapass === "Fourty"){
                        fullDescriptor += " Fourty"
                    }
                    else if (datapass === "Four"){
                        fullDescriptor += " Four"
                    }
                    else if (datapass === "Fourteen"){
                        fullDescriptor += " Fourteen"
                    }
                    else if (datapass === "Forth"){
                        fullDescriptor += " Forth"
                    }
                    else if (datapass === "Foyer"){
                        fullDescriptor += " Foyer"
                    }
                    else if (datapass === "Freeze"){
                        fullDescriptor += " Freeze"
                    }
                    else if (datapass === "Freezer"){
                        fullDescriptor += " Freezer"
                    }
                    else if (datapass === "Front"){
                        fullDescriptor += " Front"
                    }
                    else if (datapass === "Furnace"){
                        fullDescriptor += " Furnace"
                    }
                    else if (datapass === "Game"){
                        fullDescriptor += " Game"
                    }
                    else if (datapass === "Garage"){
                        fullDescriptor += " Garage"
                    }
                    else if (datapass === "Gas"){
                        fullDescriptor += " Gas"
                    }
                    else if (datapass === "Gate"){
                        fullDescriptor += " Gate"
                    }
                    else if (datapass === "Girls"){
                        fullDescriptor += " Girls"
                    }
                    else if (datapass === "Glass"){
                        fullDescriptor += " Glass"
                    }
                    else if (datapass === "Glass_break"){
                        fullDescriptor += " Glass_break"
                    }
                    else if (datapass === "Guest"){
                        fullDescriptor += " Guest"
                    }
                    else if (datapass === "Gun"){
                        fullDescriptor += " Gun"
                    }
                    else if (datapass === "Hall"){
                        fullDescriptor += " Hall"
                    }
                    else if (datapass === "Hallway"){
                        fullDescriptor += " Hallway"
                    }
                    else if (datapass === "Hang_up"){
                        fullDescriptor += " Hang_up"
                    }
                    else if (datapass === "Hanging"){
                        fullDescriptor += " Hanging"
                    }
                    else if (datapass === "Heat"){
                        fullDescriptor += " Heat"
                    }
                    else if (datapass === "High"){
                        fullDescriptor += " High"
                    }
                    else if (datapass === "Home"){
                        fullDescriptor += " Home"
                    }
                    else if (datapass === "House"){
                        fullDescriptor += " House"
                    }
                    else if (datapass === "Ice"){
                        fullDescriptor += " Ice"
                    }
                    else if (datapass === "Image"){
                        fullDescriptor += " Image"
                    }
                    else if (datapass === "Image_sensor"){
                        fullDescriptor += " Image_sensor"
                    }
                    else if (datapass === "Inside"){
                        fullDescriptor += " Inside"
                    }
                    else if (datapass === "Instant"){
                        fullDescriptor += " Instant"
                    }
                    else if (datapass === "Interior"){
                        fullDescriptor += " Interior"
                    }
                    else if (datapass === "Intrusion"){
                        fullDescriptor += " Intrusion"
                    }
                    else if (datapass === "Is"){
                        fullDescriptor += " Is"
                    }
                    else if (datapass === "Key"){
                        fullDescriptor += " Key"
                    }
                    else if (datapass === "Keyfob"){
                        fullDescriptor += " Keyfob"
                    }
                    else if (datapass === "Keypads"){
                        fullDescriptor += " Keypads"
                    }
                    else if (datapass === "Kids"){
                        fullDescriptor += " Kids"
                    }
                    else if (datapass === "Kitchen"){
                        fullDescriptor += " Kitchen"
                    }
                    else if (datapass === "Laundry"){
                        fullDescriptor += " Laundry"
                    }
                    else if (datapass === "Left"){
                        fullDescriptor += " Left"
                    }
                    else if (datapass === "Level"){
                        fullDescriptor += " Level"
                    }
                    else if (datapass === "Library"){
                        fullDescriptor += " Library"
                    }
                    else if (datapass === "Light"){
                        fullDescriptor += " Light"
                    }
                    else if (datapass === "Lights"){
                        fullDescriptor += " Lights"
                    }
                    else if (datapass === "Liquor"){
                        fullDescriptor += " Liquor"
                    }
                    else if (datapass === "Living"){
                        fullDescriptor += " Living"
                    }
                    else if (datapass === "Loading"){
                        fullDescriptor += " Loading"
                    }
                    else if (datapass === "Lock"){
                        fullDescriptor += " Lock"
                    }
                    else if (datapass === "Loft"){
                        fullDescriptor += " Loft"
                    }
                    else if (datapass === "Low"){
                        fullDescriptor += " Low"
                    }
                    else if (datapass === "Main"){
                        fullDescriptor += " Main"
                    }
                    else if (datapass === "Maintenance"){
                        fullDescriptor += " Maintenance"
                    }
                    else if (datapass === "Man"){
                        fullDescriptor += " Man"
                    }
                    else if (datapass === "Master"){
                        fullDescriptor += " Master"
                    }
                    else if (datapass === "Medical"){
                        fullDescriptor += " Medical"
                    }
                    else if (datapass === "Medicine"){
                        fullDescriptor += " Medicine"
                    }
                    else if (datapass === "Menu"){
                        fullDescriptor += " Menu"
                    }
                    else if (datapass === "Middle"){
                        fullDescriptor += " Middle"
                    }
                    else if (datapass === "Monitor"){
                        fullDescriptor += " Monitor"
                    }
                    else if (datapass === "Motion"){
                        fullDescriptor += " Motion"
                    }
                    else if (datapass === "Motion_detector"){
                        fullDescriptor += " Motion_detector"
                    }
                    else if (datapass === "Mud"){
                        fullDescriptor += " Mud"
                    }
                    else if (datapass === "Nine"){
                        fullDescriptor += " Nine"
                    }
                    else if (datapass === "Nineteen"){
                        fullDescriptor += " Nineteen"
                    }
                    else if (datapass === "Ninety"){
                        fullDescriptor += " Ninety"
                    }
                    else if (datapass === "No_delay"){
                        fullDescriptor += " No_delay"
                    }
                    else if (datapass === "No_entry_delay"){
                        fullDescriptor += " No_entry_delay"
                    }
                    else if (datapass === "North"){
                        fullDescriptor += " North"
                    }
                    else if (datapass === "Not"){
                        fullDescriptor += " Not"
                    }
                    else if (datapass === "Not_ready"){
                        fullDescriptor += " Not_ready"
                    }
                    else if (datapass === "Nursery"){
                        fullDescriptor += " Nursery"
                    }
                    else if (datapass === "Off"){
                        fullDescriptor += " Off"
                    }
                    else if (datapass === "Office"){
                        fullDescriptor += " Office"
                    }
                    else if (datapass === "On"){
                        fullDescriptor += " On"
                    }
                    else if (datapass === "One"){
                        fullDescriptor += " One"
                    }
                    else if (datapass === "One_hundred"){
                        fullDescriptor += " One_hundred"
                    }
                    else if (datapass === "Output"){
                        fullDescriptor += " Output"
                    }
                    else if (datapass === "Outside"){
                        fullDescriptor += " Outside"
                    }
                    else if (datapass === "Overhead"){
                        fullDescriptor += " Overhead"
                    }
                    else if (datapass === "Panel"){
                        fullDescriptor += " Panel"
                    }
                    else if (datapass === "Panic"){
                        fullDescriptor += " Panic"
                    }
                    else if (datapass === "Pantry"){
                        fullDescriptor += " Pantry"
                    }
                    else if (datapass === "Patio"){
                        fullDescriptor += " Patio"
                    }
                    else if (datapass === "Perimeter"){
                        fullDescriptor += " Perimeter"
                    }
                    else if (datapass === "Phone_line"){
                        fullDescriptor += " Phone_line"
                    }
                    else if (datapass === "Play"){
                        fullDescriptor += " Play"
                    }
                    else if (datapass === "Police"){
                        fullDescriptor += " Police"
                    }
                    else if (datapass === "Pool"){
                        fullDescriptor += " Pool"
                    }
                    else if (datapass === "Porch"){
                        fullDescriptor += " Porch"
                    }
                    else if (datapass === "Pound"){
                        fullDescriptor += " Pound"
                    }
                    else if (datapass === "Power"){
                        fullDescriptor += " Power"
                    }
                    else if (datapass === "Press"){
                        fullDescriptor += " Press"
                    }
                    else if (datapass === "Previous"){
                        fullDescriptor += " Previous"
                    }
                    else if (datapass === "Pump"){
                        fullDescriptor += " Pump"
                    }
                    else if (datapass === "Radio"){
                        fullDescriptor += " Radio"
                    }
                    else if (datapass === "Ready"){
                        fullDescriptor += " Ready"
                    }
                    else if (datapass === "Rear"){
                        fullDescriptor += " Rear"
                    }
                    else if (datapass === "Refrigerator"){
                        fullDescriptor += " Refrigerator"
                    }
                    else if (datapass === "Relay"){
                        fullDescriptor += " Relay"
                    }
                    else if (datapass === "Remote"){
                        fullDescriptor += " Remote"
                    }
                    else if (datapass === "Repeat"){
                        fullDescriptor += " Repeat"
                    }
                    else if (datapass === "Rf_jam"){
                        fullDescriptor += " Rf_jam"
                    }
                    else if (datapass === "Right"){
                        fullDescriptor += " Right"
                    }
                    else if (datapass === "Room"){
                        fullDescriptor += " Room"
                    }
                    else if (datapass === "Safe"){
                        fullDescriptor += " Safe"
                    }
                    else if (datapass === "Second"){
                        fullDescriptor += " Second"
                    }
                    else if (datapass === "Security"){
                        fullDescriptor += " Security"
                    }
                    else if (datapass === "Sensor"){
                        fullDescriptor += " Sensor"
                    }
                    else if (datapass === "Sensors"){
                        fullDescriptor += " Sensors"
                    }
                    else if (datapass === "Service"){
                        fullDescriptor += " Service"
                    }
                    else if (datapass === "Session"){
                        fullDescriptor += " Session"
                    }
                    else if (datapass === "Set"){
                        fullDescriptor += " Set"
                    }
                    else if (datapass === "Seven"){
                        fullDescriptor += " Seven"
                    }
                    else if (datapass === "Seventeen"){
                        fullDescriptor += " Seventeen"
                    }
                    else if (datapass === "Seventy"){
                        fullDescriptor += " Seventy"
                    }
                    else if (datapass === "Shed"){
                        fullDescriptor += " Shed"
                    }
                    else if (datapass === "Shop"){
                        fullDescriptor += " Shop"
                    }
                    else if (datapass === "Side"){
                        fullDescriptor += " Side"
                    }
                    else if (datapass === "Silent"){
                        fullDescriptor += " Silent"
                    }
                    else if (datapass === "Siren"){
                        fullDescriptor += " Siren"
                    }
                    else if (datapass === "Six"){
                        fullDescriptor += " Six"
                    }
                    else if (datapass === "Sixteen"){
                        fullDescriptor += " Sixteen"
                    }
                    else if (datapass === "Sixty"){
                        fullDescriptor += " Sixty"
                    }
                    else if (datapass === "Skylight"){
                        fullDescriptor += " Skylight"
                    }
                    else if (datapass === "Sliding"){
                        fullDescriptor += " Sliding"
                    }
                    else if (datapass === "Smoke"){
                        fullDescriptor += " Smoke"
                    }
                    else if (datapass === "Sons"){
                        fullDescriptor += " Sons"
                    }
                    else if (datapass === "Sounder"){
                        fullDescriptor += " Sounder"
                    }
                    else if (datapass === "South"){
                        fullDescriptor += " South"
                    }
                    else if (datapass === "Space"){
                        fullDescriptor += " Space"
                    }
                    else if (datapass === "Spare"){
                        fullDescriptor += " Spare"
                    }
                    else if (datapass === "Stairs"){
                        fullDescriptor += " Stairs"
                    }
                    else if (datapass === "Star"){
                        fullDescriptor += " Star"
                    }
                    else if (datapass === "Status"){
                        fullDescriptor += " Status"
                    }
                    else if (datapass === "Stay"){
                        fullDescriptor += " Stay"
                    }
                    else if (datapass === "Stop"){
                        fullDescriptor += " Shop"
                    }
                    else if (datapass === "Storage"){
                        fullDescriptor += " Storage"
                    }
                    else if (datapass === "Study"){
                        fullDescriptor += " Study"
                    }
                    else if (datapass === "Sump"){
                        fullDescriptor += " Sump"
                    }
                    else if (datapass === "Sun"){
                        fullDescriptor += " Sun"
                    }
                    else if (datapass === "Sunroom"){
                        fullDescriptor += " Sunroom"
                    }
                    else if (datapass === "Supervision"){
                        fullDescriptor += " Supervision"
                    }
                    else if (datapass === "Switch"){
                        fullDescriptor += " Switch"
                    }
                    else if (datapass === "System"){
                        fullDescriptor += " System"
                    }
                    else if (datapass === "Tamper"){
                        fullDescriptor += " Tamper"
                    }
                    else if (datapass === "Temperature"){
                        fullDescriptor += " Temperature"
                    }
                    else if (datapass === "Ten"){
                        fullDescriptor += " Ten"
                    }
                    else if (datapass === "Terminated"){
                        fullDescriptor += " Terminated"
                    }
                    else if (datapass === "Theater"){
                        fullDescriptor += " Theater"
                    }
                    else if (datapass === "Thermostat"){
                        fullDescriptor += " Thermostat"
                    }
                    else if (datapass === "Third"){
                        fullDescriptor += " Third"
                    }
                    else if (datapass === "Thirteen"){
                        fullDescriptor += " Thirteen"
                    }
                    else if (datapass === "Thirty"){
                        fullDescriptor += " Thirty"
                    }
                    else if (datapass === "Three"){
                        fullDescriptor += " Three"
                    }
                    else if (datapass === "To"){
                        fullDescriptor += " To"
                    }
                    else if (datapass === "Tool"){
                        fullDescriptor += " Tool"
                    }
                    else if (datapass === "Transmitted"){
                        fullDescriptor += " Transmitted"
                    }
                    else if (datapass === "Transmitter"){
                        fullDescriptor += " Transmitter"
                    }
                    else if (datapass === "Trouble"){
                        fullDescriptor += " Trouble"
                    }
                    else if (datapass === "Turn"){
                        fullDescriptor += " Turn"
                    }
                    else if (datapass === "Tv"){
                        fullDescriptor += " Tv"
                    }
                    else if (datapass === "Twelve"){
                        fullDescriptor += " Twelve"
                    }
                    else if (datapass === "Twenty"){
                        fullDescriptor += " Twenty"
                    }
                    else if (datapass === "Two"){
                        fullDescriptor += " Two"
                    }
                    else if (datapass === "Unlock"){
                        fullDescriptor += " Unlock"
                    }
                    else if (datapass === "Upper"){
                        fullDescriptor += " Upper"
                    }
                    else if (datapass === "Upstairs"){
                        fullDescriptor += " Upstairs"
                    }
                    else if (datapass === "User"){
                        fullDescriptor += " User"
                    }
                    else if (datapass === "Utility"){
                        fullDescriptor += " Utility"
                    }
                    else if (datapass === "Valve"){
                        fullDescriptor += " Valve"
                    }
                    else if (datapass === "Video"){
                        fullDescriptor += " Video"
                    }
                    else if (datapass === "Voice"){
                        fullDescriptor += " Voice"
                    }
                    else if (datapass === "Wall"){
                        fullDescriptor += " Wall"
                    }
                    else if (datapass === "Warehouse"){
                        fullDescriptor += " Warehouse"
                    }
                    else if (datapass === "Water"){
                        fullDescriptor += " Water"
                    }
                    else if (datapass === "West"){
                        fullDescriptor += " West"
                    }
                    else if (datapass === "Window"){
                        fullDescriptor += " Window"
                    }
                    else if (datapass === "Wing"){
                        fullDescriptor += " Wing"
                    }
                    else if (datapass === "Wireless"){
                        fullDescriptor += " Wireless"
                    }
                    else if (datapass === "Yard"){
                        fullDescriptor += " Yard"
                    }
                    else if (datapass === "Zero"){
                        fullDescriptor += " Zero"
                    }
                    else if (datapass === "Zone"){
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

function SensorReports(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.sensorReports
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.sensorReports
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.sensorReports
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.sensorReports
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.sensorReports
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.sensorReports
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.sensorReports
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.sensorReports
    }
    console.log("sensorReports: ", datapass)

    if (datapass === "enabled"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Enabled</p>
        )
    }
    else if(datapass === "disabled"){
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

function SensorSupervised(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.sensorSupervised
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.sensorSupervised
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.sensorSupervised
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.sensorSupervised
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.sensorSupervised
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.sensorSupervised
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.sensorSupervised
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.sensorSupervised
    }
    console.log("sensorSupervised: ", datapass)

    if (datapass === "enabled"){
        console.log("Run enabled")
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Enabled</p>
        )
    }
    else if(datapass === "disabled"){
        console.log("Run disabled")
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Disabled</p>
        )
    }
    else{
        console.log("Run else")
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Enabled</p>
        )
    }
}

function SensorChime(){
    var zone = ""
    if (document.getElementById("zone-eight") !== null){
        if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "1"
        }
        else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "2"
        }
        else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "3"
        }
        else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "4"
        }
        else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "5"
        }
        else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "6"
        }
        else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "7"
        }
        else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
            zone = "8"
        }
    }
    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)
    var datapass = ""
    if (zone === "1"){
        datapass = retrievedSensors.sensor1.sensorChime
    }
    else if (zone === "2"){
        datapass = retrievedSensors.sensor2.sensorChime
    }
    else if (zone === "3"){
        datapass = retrievedSensors.sensor3.sensorChime
    }
    else if (zone === "4"){
        datapass = retrievedSensors.sensor4.sensorChime
    }
    else if (zone === "5"){
        datapass = retrievedSensors.sensor5.sensorChime
    }
    else if (zone === "6"){
        datapass = retrievedSensors.sensor6.sensorChime
    }
    else if (zone === "7"){
        datapass = retrievedSensors.sensor7.sensorChime
    }
    else if (zone === "8"){
        datapass = retrievedSensors.sensor8.sensorChime
    }
    console.log("sensorChime: ", datapass)

    if (datapass === "disbabled"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Disable</p>
        )
    }
    else if(datapass === "voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Voice Only</p>
        )
    }
    else if(datapass === "ding1voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #1 with Voice</p>
        )
    }
    else if(datapass === "ding2"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #2</p>
        )
    }
    else if(datapass === "ding2voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #2 with Voice</p>
        )
    }
    else if(datapass === "ding1"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #1</p>
        )
    }
    else if(datapass === "ding"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong</p>
        )
    }
    else if(datapass === "dingvoice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong with Voice</p>
        )
    }
    else if(datapass === "ding3"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #3</p>
        )
    }
    else if(datapass === "ding3voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Ding-Dong #3 with Voice</p>
        )
    }
    else if(datapass === "chime1"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Chime #1</p>
        )
    }
    else if(datapass === "chime1voice"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Chime #1 with Voice</p>
        )
    }
    else if(datapass === "chime2"){
        return(
            <p className="css-grid-align-right" style={{'color':"#404956"}}>Chime #2</p>
        )
    }
    else if(datapass === "chime2voice"){
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

function choseZone(id){
    console.log("-------------")
    console.log("NEW ZONE DATA")
    console.log("-------------")
    if (document.getElementById("zone-eight") !== null){
        var selector = id
        var el = document.querySelector('.config-container-scroll');
        console.log("scroll: ", el.scrollTop);
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
            document.getElementById("up-arrow").style.display = "none"
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = ""
        }
        else if (selector === "zone-two"){
            el.scrollTop = 29;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
        }
        else if (selector === "zone-three"){
            el.scrollTop = 58;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
        }
        else if (selector === "zone-four"){
            el.scrollTop = 87;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
        }
        else if (selector === "zone-five"){
            el.scrollTop = 116;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
        }
        else if (selector === "zone-six"){
            el.scrollTop = 145;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
        }
        else if (selector === "zone-seven"){
            el.scrollTop = 174;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
        }
        else if (selector === "zone-eight"){
            el.scrollTop = 232;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = "none"
            document.getElementById("filler").style.display = "none"
        }

        SensorType()
        EquipmentCode()
        SerialNumber()
        SmartAreasAssignment()
        EquipmentAge()
        SensorLoop()
        TransmissionDelay()
        VoiceDescriptor()
        SensorReports()
        SensorSupervised()
        SensorChime()
    }
}

function goUp(){
    if (document.getElementById('zone-two').style.backgroundColor !== 'white'){
        choseZone("zone-one")
    }
    else if (document.getElementById('zone-three').style.backgroundColor !== 'white'){
        choseZone("zone-two")
    }
    else if (document.getElementById('zone-four').style.backgroundColor !== 'white'){
        choseZone("zone-three")
    }
    else if (document.getElementById('zone-five').style.backgroundColor !== 'white'){
        choseZone("zone-four")
    }
    else if (document.getElementById('zone-six').style.backgroundColor !== 'white'){
        choseZone("zone-five")
    }
    else if (document.getElementById('zone-seven').style.backgroundColor !== 'white'){
        choseZone("zone-six")
    }
    else if (document.getElementById('zone-eight').style.backgroundColor !== 'white'){
        choseZone("zone-seven")
    }
}

function goDown(){
    if (document.getElementById('zone-one').style.backgroundColor !== 'white'){
        choseZone("zone-two")
    }
    else if (document.getElementById('zone-two').style.backgroundColor !== 'white'){
        choseZone("zone-three")
    }
    else if (document.getElementById('zone-three').style.backgroundColor !== 'white'){
        choseZone("zone-four")
    }
    else if (document.getElementById('zone-four').style.backgroundColor !== 'white'){
        choseZone("zone-five")
    }
    else if (document.getElementById('zone-five').style.backgroundColor !== 'white'){
        choseZone("zone-six")
    }
    else if (document.getElementById('zone-six').style.backgroundColor !== 'white'){
        choseZone("zone-seven")
    }
    else if (document.getElementById('zone-seven').style.backgroundColor !== 'white'){
        choseZone("zone-eight")
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
                </Link> {/* This is broken fix later, need to figure out how to get information without passing datapass due to calling functions below*/}
            </div>

            <div style={{'bottom':"0",'width':"645px", 'height':"55px", 'position':"absolute", 'marginBottom':"108px", 'display': "inline-grid", 'gridTemplateColumns':"336px 103px 103px 103px", 'marginLeft':"-310px"}}>
                <div className="blue-button configuration-buttons" style={{'width':"296px", 'marginLeft':"8px"}}>
                    <p style={{'marginTop':"10px"}}>
                        Go To Zone
                    </p>
                </div>

                <div id="up-arrow" className="blue-button configuration-buttons" style={{'gridColumnStart':"2"}} onClick={() => goUp()}>
                    <img src={up_arrow_icon} style={{'height':"15px", 'marginTop':"10px"}} alt="" />
                </div>

                <div id="filler" style={{'display':"none"}}>

                </div>

                <Link to="/installer-toolbox/system-configuration/wireless-zones/edit">
                    <div className="blue-button configuration-buttons" style={{'gridArea':"1 / 3 / 1 / 3"}}>
                        <p style={{'marginTop':"10px"}}>
                            Edit Zone
                        </p>
                    </div>
                </Link>

                <div id="down-arrow" className="blue-button configuration-buttons"  onClick={() => goDown()} onLoad={() => choseZone("zone-one")} style={{'gridColumnStart':"4"}}>
                    <img src={down_arrow_icon} style={{'height':"15px", 'marginTop':"10px"}} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SystemConfigurationWireless