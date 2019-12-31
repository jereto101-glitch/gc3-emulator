import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import wifi_icon from '../images/wifi.png'
import up_arrow_icon from '../images/up-arrow.png';
import down_arrow_icon from '../images/down-arrow.png';
import backspace_icon from "../images/backspace.png";

// Update functions to change inner html and to be run on every click of a new zone and the onload of the last JSX element

function partDescription(source, indicator){
    var datapass = ""
    var partDescriptor = ""
    if(indicator === 1){
        datapass = source.descriptor1
        if(datapass === ""){
            return(` <None>`)
        }
    }
    else if(indicator === 2){
        datapass = source.descriptor2
        if(datapass === ""){
            return(` <None>`)
        }
    }
    else if(indicator === 3){
        datapass = source.descriptor3
        if(datapass === ""){
            return(` <None>`)
        }
    }
    else if(indicator === 4){
        datapass = source.descriptor4
        if(datapass === ""){
            return(` <None>`)
        }
    }
    else if(indicator === 5){
        datapass = source.descriptor5
        if(datapass === ""){
            return(` <None>`)
        }
    }
    else if(indicator === 6){
        datapass = source.descriptor6
        if(datapass === ""){
            return(` <None>`)
        }
    }

    if (datapass === "Abort"){
        partDescriptor += " Abort"
    }
    else if (datapass === "Ac"){
        partDescriptor += " Ac"
    }
    else if (datapass === "Access"){
        partDescriptor += " Access"
    }
    else if (datapass === "Alarm"){
        partDescriptor += " Alarm"
    }
    else if (datapass === "And"){
        partDescriptor += " And"
    }
    else if (datapass === "Anouncement"){
        partDescriptor += " Announcement"
    }
    else if (datapass === "Apartment"){
        partDescriptor += " Apartment"
    }
    else if (datapass === "Area"){
        partDescriptor += " Area"
    }
    else if (datapass === "Arm"){
        partDescriptor += " Arm"
    }
    else if (datapass === "Armed"){
        partDescriptor += " Armed"
    }
    else if (datapass === "At"){
        partDescriptor += " At"
    }
    else if (datapass === "Attic"){
        partDescriptor += " Attic"
    }
    else if (datapass === "Audio"){
        partDescriptor += " Audio"
    }
    else if (datapass === "Auto"){
        partDescriptor += " Auto"
    }
    else if (datapass === "Automation"){
        partDescriptor += " Automation"
    }
    else if (datapass === "Auxiliary"){
        partDescriptor += " Auxiliary"
    }
    else if (datapass === "Away"){
        partDescriptor += " Away"
    }
    else if (datapass === "Babys"){
        partDescriptor += " Babys"
    }
    else if (datapass === "Back"){
        partDescriptor += " Back"
    }
    else if (datapass === "Balcony"){
        partDescriptor += " Balcony"
    }
    else if (datapass === "Basement"){
        partDescriptor += " Basement"
    }
    else if (datapass === "Bathroom"){
        partDescriptor += " Bathroom"
    }
    else if (datapass === "Battery"){
        partDescriptor += " Battery"
    }
    else if (datapass === "Bedroom"){
        partDescriptor += " Bedroom"
    }
    else if (datapass === "Bell"){
        partDescriptor += " Bell"
    }
    else if (datapass === "Bonus"){
        partDescriptor += " Bonus"
    }
    else if (datapass === "Boys"){
        partDescriptor += " Boys"
    }
    else if (datapass === "Break"){
        partDescriptor += " Break"
    }
    else if (datapass === "Button"){
        partDescriptor += " Button"
    }
    else if (datapass === "Bypass"){
        partDescriptor += " Bypass"
    }
    else if (datapass === "Bypassed"){
        partDescriptor += " Bypassed"
    }
    else if (datapass === "Camera"){
        partDescriptor += " Camera"
    }
    else if (datapass === "Cabinet"){
        partDescriptor += " Cabinet"
    }
    else if (datapass === "Cancel"){
        partDescriptor += " Cancel"
    }
    else if (datapass === "Carbon_monoxide"){
        partDescriptor += " Carbon_monoxide"
    }
    else if (datapass === "Cave"){
        partDescriptor += " Cave"
    }
    else if (datapass === "Cell_radio"){
        partDescriptor += " Cell_radio"
    }
    else if (datapass === "Cellular"){
        partDescriptor += " Cellular"
    }
    else if (datapass === "Center"){
        partDescriptor += " Center"
    }
    else if (datapass === "Check"){
        partDescriptor += " Check"
    }
    else if (datapass === "Chest"){
        partDescriptor += " Chest"
    }
    else if (datapass === "Childrens"){
        partDescriptor += " Childrens"
    }
    else if (datapass === "Chime"){
        partDescriptor += " Chime"
    }
    else if (datapass === "Closet"){
        partDescriptor += " Closet"
    }
    else if (datapass === "Code"){
        partDescriptor += " Code"
    }
    else if (datapass === "Communications"){
        partDescriptor += " Communications"
    }
    else if (datapass === "Computer"){
        partDescriptor += " Computer"
    }
    else if (datapass === "Control"){
        partDescriptor += " Control"
    }
    else if (datapass === "Cool"){
        partDescriptor += " Cool"
    }
    else if (datapass === "Corner"){
        partDescriptor += " Corner"
    }
    else if (datapass === "Courtyard"){
        partDescriptor += " Courtyard"
    }
    else if (datapass === "Crawl"){
        partDescriptor += " Crawl"
    }
    else if (datapass === "Current"){
        partDescriptor += " Current"
    }
    else if (datapass === "Daughters"){
        partDescriptor += " Daughters"
    }
    else if (datapass === "Day"){
        partDescriptor += " Day"
    }
    else if (datapass === "Deck"){
        partDescriptor += " Deck"
    }
    else if (datapass === "Degrees"){
        partDescriptor += " Degrees"
    }
    else if (datapass === "Den"){
        partDescriptor += " Den"
    }
    else if (datapass === "Detached"){
        partDescriptor += " Detached"
    }
    else if (datapass === "Detector"){
        partDescriptor += " Detector"
    }
    else if (datapass === "Dim"){
        partDescriptor += " Dim"
    }
    else if (datapass === "Dining"){
        partDescriptor += " Dining"
    }
    else if (datapass === "Disarm"){
        partDescriptor += " Disarm"
    }
    else if (datapass === "Disarmed"){
        partDescriptor += " Disarmed"
    }
    else if (datapass === "Dock"){
        partDescriptor += " Dock"
    }
    else if (datapass === "Door"){
        partDescriptor += " Door"
    }
    else if (datapass === "Doorbell"){
        partDescriptor += " Doorbell"
    }
    else if (datapass === "Downstairs"){
        partDescriptor += " Downstairs"
    }
    else if (datapass === "Driveway"){
        partDescriptor += " Driveway"
    }
    else if (datapass === "East"){
        partDescriptor += " East"
    }
    else if (datapass === "Eight"){
        partDescriptor += " Eight"
    }
    else if (datapass === "Eighteen"){
        partDescriptor += " Eighteen"
    }
    else if (datapass === "Eighty"){
        partDescriptor += " Eighty"
    }
    else if (datapass === "Electric"){
        partDescriptor += " Electric"
    }
    else if (datapass === "Eleven"){
        partDescriptor += " Eleven"
    }
    else if (datapass === "Emergency"){
        partDescriptor += " Emergency"
    }
    else if (datapass === "Enter"){
        partDescriptor += " Enter"
    }
    else if (datapass === "Entrance"){
        partDescriptor += " Entrance"
    }
    else if (datapass === "Entry"){
        partDescriptor += " Entry"
    }
    else if (datapass === "Error"){
        partDescriptor += " Error"
    }
    else if (datapass === "Exercise"){
        partDescriptor += " Exercise"
    }
    else if (datapass === "Exit"){
        partDescriptor += " Exit"
    }
    else if (datapass === "Exit_now"){
        partDescriptor += " Exit_now"
    }
    else if (datapass === "Exterior"){
        partDescriptor += " Exterior"
    }
    else if (datapass === "External"){
        partDescriptor += " External"
    }
    else if (datapass === "Failure"){
        partDescriptor += " Failure"
    }
    else if (datapass === "Family"){
        partDescriptor += " Family"
    }
    else if (datapass === "Fan"){
        partDescriptor += " Fan"
    }
    else if (datapass === "Fifteen"){
        partDescriptor += " Fifteen"
    }
    else if (datapass === "Fifty"){
        partDescriptor += " Fifty"
    }
    else if (datapass === "Fire"){
        partDescriptor += " Fire"
    }
    else if (datapass === "Fire_alert"){
        partDescriptor += " Fire_alert"
    }
    else if (datapass === "Fire_detector"){
        partDescriptor += " Fire_detector"
    }
    else if (datapass === "First"){
        partDescriptor += " First"
    }
    else if (datapass === "Five"){
        partDescriptor += " Five"
    }
    else if (datapass === "Flood"){
        partDescriptor += " Flood"
    }
    else if (datapass === "Floor"){
        partDescriptor += " Floor"
    }
    else if (datapass === "Fluid"){
        partDescriptor += " Fluid"
    }
    else if (datapass === "Foil"){
        partDescriptor += " Foil"
    }
    else if (datapass === "For"){
        partDescriptor += " For"
    }
    else if (datapass === "Fourty"){
        partDescriptor += " Fourty"
    }
    else if (datapass === "Four"){
        partDescriptor += " Four"
    }
    else if (datapass === "Fourteen"){
        partDescriptor += " Fourteen"
    }
    else if (datapass === "Forth"){
        partDescriptor += " Forth"
    }
    else if (datapass === "Foyer"){
        partDescriptor += " Foyer"
    }
    else if (datapass === "Freeze"){
        partDescriptor += " Freeze"
    }
    else if (datapass === "Freezer"){
        partDescriptor += " Freezer"
    }
    else if (datapass === "Front"){
        partDescriptor += " Front"
    }
    else if (datapass === "Furnace"){
        partDescriptor += " Furnace"
    }
    else if (datapass === "Game"){
        partDescriptor += " Game"
    }
    else if (datapass === "Garage"){
        partDescriptor += " Garage"
    }
    else if (datapass === "Gas"){
        partDescriptor += " Gas"
    }
    else if (datapass === "Gate"){
        partDescriptor += " Gate"
    }
    else if (datapass === "Girls"){
        partDescriptor += " Girls"
    }
    else if (datapass === "Glass"){
        partDescriptor += " Glass"
    }
    else if (datapass === "Glass_break"){
        partDescriptor += " Glass_break"
    }
    else if (datapass === "Guest"){
        partDescriptor += " Guest"
    }
    else if (datapass === "Gun"){
        partDescriptor += " Gun"
    }
    else if (datapass === "Hall"){
        partDescriptor += " Hall"
    }
    else if (datapass === "Hallway"){
        partDescriptor += " Hallway"
    }
    else if (datapass === "Hang_up"){
        partDescriptor += " Hang_up"
    }
    else if (datapass === "Hanging"){
        partDescriptor += " Hanging"
    }
    else if (datapass === "Heat"){
        partDescriptor += " Heat"
    }
    else if (datapass === "High"){
        partDescriptor += " High"
    }
    else if (datapass === "Home"){
        partDescriptor += " Home"
    }
    else if (datapass === "House"){
        partDescriptor += " House"
    }
    else if (datapass === "Ice"){
        partDescriptor += " Ice"
    }
    else if (datapass === "Image"){
        partDescriptor += " Image"
    }
    else if (datapass === "Image_sensor"){
        partDescriptor += " Image_sensor"
    }
    else if (datapass === "Inside"){
        partDescriptor += " Inside"
    }
    else if (datapass === "Instant"){
        partDescriptor += " Instant"
    }
    else if (datapass === "Interior"){
        partDescriptor += " Interior"
    }
    else if (datapass === "Intrusion"){
        partDescriptor += " Intrusion"
    }
    else if (datapass === "Is"){
        partDescriptor += " Is"
    }
    else if (datapass === "Key"){
        partDescriptor += " Key"
    }
    else if (datapass === "Keyfob"){
        partDescriptor += " Keyfob"
    }
    else if (datapass === "Keypads"){
        partDescriptor += " Keypads"
    }
    else if (datapass === "Kids"){
        partDescriptor += " Kids"
    }
    else if (datapass === "Kitchen"){
        partDescriptor += " Kitchen"
    }
    else if (datapass === "Laundry"){
        partDescriptor += " Laundry"
    }
    else if (datapass === "Left"){
        partDescriptor += " Left"
    }
    else if (datapass === "Level"){
        partDescriptor += " Level"
    }
    else if (datapass === "Library"){
        partDescriptor += " Library"
    }
    else if (datapass === "Light"){
        partDescriptor += " Light"
    }
    else if (datapass === "Lights"){
        partDescriptor += " Lights"
    }
    else if (datapass === "Liquor"){
        partDescriptor += " Liquor"
    }
    else if (datapass === "Living"){
        partDescriptor += " Living"
    }
    else if (datapass === "Loading"){
        partDescriptor += " Loading"
    }
    else if (datapass === "Lock"){
        partDescriptor += " Lock"
    }
    else if (datapass === "Loft"){
        partDescriptor += " Loft"
    }
    else if (datapass === "Low"){
        partDescriptor += " Low"
    }
    else if (datapass === "Main"){
        partDescriptor += " Main"
    }
    else if (datapass === "Maintenance"){
        partDescriptor += " Maintenance"
    }
    else if (datapass === "Man"){
        partDescriptor += " Man"
    }
    else if (datapass === "Master"){
        partDescriptor += " Master"
    }
    else if (datapass === "Medical"){
        partDescriptor += " Medical"
    }
    else if (datapass === "Medicine"){
        partDescriptor += " Medicine"
    }
    else if (datapass === "Menu"){
        partDescriptor += " Menu"
    }
    else if (datapass === "Middle"){
        partDescriptor += " Middle"
    }
    else if (datapass === "Monitor"){
        partDescriptor += " Monitor"
    }
    else if (datapass === "Motion"){
        partDescriptor += " Motion"
    }
    else if (datapass === "Motion_detector"){
        partDescriptor += " Motion_detector"
    }
    else if (datapass === "Mud"){
        partDescriptor += " Mud"
    }
    else if (datapass === "Nine"){
        partDescriptor += " Nine"
    }
    else if (datapass === "Nineteen"){
        partDescriptor += " Nineteen"
    }
    else if (datapass === "Ninety"){
        partDescriptor += " Ninety"
    }
    else if (datapass === "No_delay"){
        partDescriptor += " No_delay"
    }
    else if (datapass === "No_entry_delay"){
        partDescriptor += " No_entry_delay"
    }
    else if (datapass === "North"){
        partDescriptor += " North"
    }
    else if (datapass === "Not"){
        partDescriptor += " Not"
    }
    else if (datapass === "Not_ready"){
        partDescriptor += " Not_ready"
    }
    else if (datapass === "Nursery"){
        partDescriptor += " Nursery"
    }
    else if (datapass === "Off"){
        partDescriptor += " Off"
    }
    else if (datapass === "Office"){
        partDescriptor += " Office"
    }
    else if (datapass === "On"){
        partDescriptor += " On"
    }
    else if (datapass === "One"){
        partDescriptor += " One"
    }
    else if (datapass === "One_hundred"){
        partDescriptor += " One_hundred"
    }
    else if (datapass === "Output"){
        partDescriptor += " Output"
    }
    else if (datapass === "Outside"){
        partDescriptor += " Outside"
    }
    else if (datapass === "Overhead"){
        partDescriptor += " Overhead"
    }
    else if (datapass === "Panel"){
        partDescriptor += " Panel"
    }
    else if (datapass === "Panic"){
        partDescriptor += " Panic"
    }
    else if (datapass === "Pantry"){
        partDescriptor += " Pantry"
    }
    else if (datapass === "Patio"){
        partDescriptor += " Patio"
    }
    else if (datapass === "Perimeter"){
        partDescriptor += " Perimeter"
    }
    else if (datapass === "Phone_line"){
        partDescriptor += " Phone_line"
    }
    else if (datapass === "Play"){
        partDescriptor += " Play"
    }
    else if (datapass === "Police"){
        partDescriptor += " Police"
    }
    else if (datapass === "Pool"){
        partDescriptor += " Pool"
    }
    else if (datapass === "Porch"){
        partDescriptor += " Porch"
    }
    else if (datapass === "Pound"){
        partDescriptor += " Pound"
    }
    else if (datapass === "Power"){
        partDescriptor += " Power"
    }
    else if (datapass === "Press"){
        partDescriptor += " Press"
    }
    else if (datapass === "Previous"){
        partDescriptor += " Previous"
    }
    else if (datapass === "Pump"){
        partDescriptor += " Pump"
    }
    else if (datapass === "Radio"){
        partDescriptor += " Radio"
    }
    else if (datapass === "Ready"){
        partDescriptor += " Ready"
    }
    else if (datapass === "Rear"){
        partDescriptor += " Rear"
    }
    else if (datapass === "Refrigerator"){
        partDescriptor += " Refrigerator"
    }
    else if (datapass === "Relay"){
        partDescriptor += " Relay"
    }
    else if (datapass === "Remote"){
        partDescriptor += " Remote"
    }
    else if (datapass === "Repeat"){
        partDescriptor += " Repeat"
    }
    else if (datapass === "Rf_jam"){
        partDescriptor += " Rf_jam"
    }
    else if (datapass === "Right"){
        partDescriptor += " Right"
    }
    else if (datapass === "Room"){
        partDescriptor += " Room"
    }
    else if (datapass === "Safe"){
        partDescriptor += " Safe"
    }
    else if (datapass === "Second"){
        partDescriptor += " Second"
    }
    else if (datapass === "Security"){
        partDescriptor += " Security"
    }
    else if (datapass === "Sensor"){
        partDescriptor += " Sensor"
    }
    else if (datapass === "Sensors"){
        partDescriptor += " Sensors"
    }
    else if (datapass === "Service"){
        partDescriptor += " Service"
    }
    else if (datapass === "Session"){
        partDescriptor += " Session"
    }
    else if (datapass === "Set"){
        partDescriptor += " Set"
    }
    else if (datapass === "Seven"){
        partDescriptor += " Seven"
    }
    else if (datapass === "Seventeen"){
        partDescriptor += " Seventeen"
    }
    else if (datapass === "Seventy"){
        partDescriptor += " Seventy"
    }
    else if (datapass === "Shed"){
        partDescriptor += " Shed"
    }
    else if (datapass === "Shop"){
        partDescriptor += " Shop"
    }
    else if (datapass === "Side"){
        partDescriptor += " Side"
    }
    else if (datapass === "Silent"){
        partDescriptor += " Silent"
    }
    else if (datapass === "Siren"){
        partDescriptor += " Siren"
    }
    else if (datapass === "Six"){
        partDescriptor += " Six"
    }
    else if (datapass === "Sixteen"){
        partDescriptor += " Sixteen"
    }
    else if (datapass === "Sixty"){
        partDescriptor += " Sixty"
    }
    else if (datapass === "Skylight"){
        partDescriptor += " Skylight"
    }
    else if (datapass === "Sliding"){
        partDescriptor += " Sliding"
    }
    else if (datapass === "Smoke"){
        partDescriptor += " Smoke"
    }
    else if (datapass === "Sons"){
        partDescriptor += " Sons"
    }
    else if (datapass === "Sounder"){
        partDescriptor += " Sounder"
    }
    else if (datapass === "South"){
        partDescriptor += " South"
    }
    else if (datapass === "Space"){
        partDescriptor += " Space"
    }
    else if (datapass === "Spare"){
        partDescriptor += " Spare"
    }
    else if (datapass === "Stairs"){
        partDescriptor += " Stairs"
    }
    else if (datapass === "Star"){
        partDescriptor += " Star"
    }
    else if (datapass === "Status"){
        partDescriptor += " Status"
    }
    else if (datapass === "Stay"){
        partDescriptor += " Stay"
    }
    else if (datapass === "Stop"){
        partDescriptor += " Shop"
    }
    else if (datapass === "Storage"){
        partDescriptor += " Storage"
    }
    else if (datapass === "Study"){
        partDescriptor += " Study"
    }
    else if (datapass === "Sump"){
        partDescriptor += " Sump"
    }
    else if (datapass === "Sun"){
        partDescriptor += " Sun"
    }
    else if (datapass === "Sunroom"){
        partDescriptor += " Sunroom"
    }
    else if (datapass === "Supervision"){
        partDescriptor += " Supervision"
    }
    else if (datapass === "Switch"){
        partDescriptor += " Switch"
    }
    else if (datapass === "System"){
        partDescriptor += " System"
    }
    else if (datapass === "Tamper"){
        partDescriptor += " Tamper"
    }
    else if (datapass === "Temperature"){
        partDescriptor += " Temperature"
    }
    else if (datapass === "Ten"){
        partDescriptor += " Ten"
    }
    else if (datapass === "Terminated"){
        partDescriptor += " Terminated"
    }
    else if (datapass === "Theater"){
        partDescriptor += " Theater"
    }
    else if (datapass === "Thermostat"){
        partDescriptor += " Thermostat"
    }
    else if (datapass === "Third"){
        partDescriptor += " Third"
    }
    else if (datapass === "Thirteen"){
        partDescriptor += " Thirteen"
    }
    else if (datapass === "Thirty"){
        partDescriptor += " Thirty"
    }
    else if (datapass === "Three"){
        partDescriptor += " Three"
    }
    else if (datapass === "To"){
        partDescriptor += " To"
    }
    else if (datapass === "Tool"){
        partDescriptor += " Tool"
    }
    else if (datapass === "Transmitted"){
        partDescriptor += " Transmitted"
    }
    else if (datapass === "Transmitter"){
        partDescriptor += " Transmitter"
    }
    else if (datapass === "Trouble"){
        partDescriptor += " Trouble"
    }
    else if (datapass === "Turn"){
        partDescriptor += " Turn"
    }
    else if (datapass === "Tv"){
        partDescriptor += " Tv"
    }
    else if (datapass === "Twelve"){
        partDescriptor += " Twelve"
    }
    else if (datapass === "Twenty"){
        partDescriptor += " Twenty"
    }
    else if (datapass === "Two"){
        partDescriptor += " Two"
    }
    else if (datapass === "Unlock"){
        partDescriptor += " Unlock"
    }
    else if (datapass === "Upper"){
        partDescriptor += " Upper"
    }
    else if (datapass === "Upstairs"){
        partDescriptor += " Upstairs"
    }
    else if (datapass === "User"){
        partDescriptor += " User"
    }
    else if (datapass === "Utility"){
        partDescriptor += " Utility"
    }
    else if (datapass === "Valve"){
        partDescriptor += " Valve"
    }
    else if (datapass === "Video"){
        partDescriptor += " Video"
    }
    else if (datapass === "Voice"){
        partDescriptor += " Voice"
    }
    else if (datapass === "Wall"){
        partDescriptor += " Wall"
    }
    else if (datapass === "Warehouse"){
        partDescriptor += " Warehouse"
    }
    else if (datapass === "Water"){
        partDescriptor += " Water"
    }
    else if (datapass === "West"){
        partDescriptor += " West"
    }
    else if (datapass === "Window"){
        partDescriptor += " Window"
    }
    else if (datapass === "Wing"){
        partDescriptor += " Wing"
    }
    else if (datapass === "Wireless"){
        partDescriptor += " Wireless"
    }
    else if (datapass === "Yard"){
        partDescriptor += " Yard"
    }
    else if (datapass === "Zero"){
        partDescriptor += " Zero"
    }
    else if (datapass === "Zone"){
        partDescriptor += " Zone"
    }

    return(partDescriptor)
}

function SystemConfigurationWirelessEdit(){
    const [Sensor_Type,setSensor_Type] = useState(`00 - Unused`)
    const [Equipment_Code,setEquipment_Code] = useState(`0000 - Other`)
    const [Serial_Number,setSerial_Number] = useState(`0000000`)
    const [Smart_Areas_Assignment,setSmart_Areas_Assignment] = useState(`S1`)
    const [Equipment_Age,setEquipment_Age] = useState(`New`)
    const [Sensor_Loop,setSensor_Loop] = useState(`Loop 1`)
    const [Transmission_Delay,setTransmission_Delay] = useState(`Enabled`)
    const [Voice_Descriptor,setVoice_Descriptor] = useState(`<None>`)
    const [Sensor_Reports,setSensor_Reports] = useState(`Enabled`)
    const [Sensor_Supervised,setSensor_Supervised] = useState(`Enabled`)
    const [Sensor_Chime,setSensor_Chime] = useState(`Disabled`)
    
    // function SensorType(){
    //     if(document.getElementById('sensor-type') !== undefined){
    //         var zone = ""
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //         console.log(zone)
    
    //         var retrievedSensors = localStorage.getItem("panelSensors");
    //         retrievedSensors = JSON.parse(retrievedSensors)
    //         var datapass = ""
    //         if (zone === "1"){
    //             datapass = retrievedSensors.sensor1.sensorType
    //         }
    //         else if (zone === "2"){
    //             datapass = retrievedSensors.sensor2.sensorType
    //         }
    //         else if (zone === "3"){
    //             datapass = retrievedSensors.sensor3.sensorType
    //         }
    //         else if (zone === "4"){
    //             datapass = retrievedSensors.sensor4.sensorType
    //         }
    //         else if (zone === "5"){
    //             datapass = retrievedSensors.sensor5.sensorType
    //         }
    //         else if (zone === "6"){
    //             datapass = retrievedSensors.sensor6.sensorType
    //         }
    //         else if (zone === "7"){
    //             datapass = retrievedSensors.sensor7.sensorType
    //         }
    //         else if (zone === "8"){
    //             datapass = retrievedSensors.sensor8.sensorType
    //         }
    //         console.log("sensorType: ", datapass)
            
    //         if (datapass === "00"){
    //             setSensor_Type("00 - Unused")
    //         }
    //         else if (datapass === "01"){
    //             console.log("correct being run")
    //             setSensor_Type("01 - Exit/Entry 1")
    //         }
    //         else if (datapass === "02"){
    //             setSensor_Type("02 - Exit/Entry 2")
    //         }
    //         else if (datapass === "03"){
    //             setSensor_Type("03 - Perimeter")
    //         }
    //         else if (datapass === "04"){
    //             setSensor_Type("04 - Interior Follower")
    //         }
    //         else if (datapass === "05"){
    //             setSensor_Type("05 - Day Zone")
    //         }
    //         else if (datapass === "06"){
    //             setSensor_Type("06 - 24-Hour Silent Alarm")
    //         }
    //         else if (datapass === "07"){
    //             setSensor_Type("07 - 24-Hour Audible Alarm")
    //         }
    //         else if (datapass === "08"){
    //             setSensor_Type("08 - 24-Hour Auxiliary Alarm")
    //         }
    //         else if (datapass === "09"){
    //             setSensor_Type("09 - 24-Hour Fire")
    //         }
    //         else if (datapass === "10"){
    //             setSensor_Type("10 - Interior with Delay")
    //         }
    //         else if (datapass === "14"){
    //             setSensor_Type("14 - 24-Hour Carbon Monoxide")
    //         }
    //         else if (datapass === "16"){
    //             setSensor_Type("16 - 24-Hour Fire Verification")
    //         }
    //         else if (datapass === "23"){
    //             setSensor_Type("23 - No Response Type")
    //         }
    //         else if (datapass === "24"){
    //             setSensor_Type("24 - Silent Burglary")
    //         }
    //         else if (datapass === "32"){
    //             setSensor_Type("32 - Remote Device")
    //         }
    //         else{
    //             setSensor_Type("00 - Unused")
    //             console.log("Sensor Type Else Run")
    //         }
    //     }
    // }

    // function EquipmentCode(){
    //     var zone = ""
    //     if (document.getElementById("zone-eight") !== null){
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //     }
    //     var retrievedSensors = localStorage.getItem("panelSensors");
    //     retrievedSensors = JSON.parse(retrievedSensors)
    //     var datapass = ""
    //     if (zone === "1"){
    //         datapass = retrievedSensors.sensor1.equipmentCode
    //     }
    //     else if (zone === "2"){
    //         datapass = retrievedSensors.sensor2.equipmentCode
    //     }
    //     else if (zone === "3"){
    //         datapass = retrievedSensors.sensor3.equipmentCode
    //     }
    //     else if (zone === "4"){
    //         datapass = retrievedSensors.sensor4.equipmentCode
    //     }
    //     else if (zone === "5"){
    //         datapass = retrievedSensors.sensor5.equipmentCode
    //     }
    //     else if (zone === "6"){
    //         datapass = retrievedSensors.sensor6.equipmentCode
    //     }
    //     else if (zone === "7"){
    //         datapass = retrievedSensors.sensor7.equipmentCode
    //     }
    //     else if (zone === "8"){
    //         datapass = retrievedSensors.sensor8.equipmentCode
    //     }
    //     console.log("equipmentCode: ", datapass)
    
    //     if (datapass === "0000"){
    //         setEquipment_Code('0000 - Other')
    //     }
    //     else if (datapass === "0862"){
    //         setEquipment_Code('0862 - 2GIG Thin Door/Window Contact')
    //     }
    //     else if (datapass === "0863"){
    //         setEquipment_Code(`0863 - 2GIG Recessed Door Contact`)
    //     }
    //     else if (datapass === "0865"){
    //         setEquipment_Code(`0865 - 2GIG Outdoor Door/Window Sensor`)
    //     }
    //     else if (datapass === "0869"){
    //         setEquipment_Code(`0869 - 2GIG POR with Pet Immunity`)
    //     }
    //     else if (datapass === "0864"){
    //         setEquipment_Code(`0864 - 2GIG Glass Break Detector`)
    //     }
    //     else if (datapass === "0895"){
    //         setEquipment_Code(`0895 - SMKT2-345 GE Smoke/Heat Detector`)
    //     }
    //     else if (datapass === "1058"){
    //         setEquipment_Code(`1085 - 2GIG Smoke Detector`)
    //     }
    //     else if (datapass === "0872"){
    //         setEquipment_Code(`0872 - SMKE1-345 Smoke Detector(USA)`)
    //     }
    //     else if (datapass === "0871"){
    //         setEquipment_Code(`0871 - SMKE1-345 Smoke Detector(Canada)`)
    //     }
    //     else if (datapass === "0868"){
    //         setEquipment_Code(`0868 - 2GIG Panic Button Remote`)
    //     }
    //     else if (datapass === "0860"){
    //         setEquipment_Code(`0860 - CO1-345 CO Detector(USA)`)
    //     }
    //     else if (datapass === "0859"){
    //         setEquipment_Code(`0859 - CO1-345 CO Detector(Canada)`)
    //     }
    //     else if (datapass === "1026"){
    //         setEquipment_Code(`1026 - 2GIG CO Detector`)
    //     }
    //     else if (datapass === "1069"){
    //         setEquipment_Code(`1069 - 2GIG FireFighter SMKT/CO Listener`)
    //     }
    //     else if (datapass === "0873"){
    //         setEquipment_Code(`0873 - 2GIG Takeover Module`)
    //     }
    //     else if (datapass === "0637"){
    //         setEquipment_Code(`0637 - HW D/W "5816"`)
    //     }
    //     else if (datapass === "0470"){
    //         setEquipment_Code(`0470 - HW R-D/W "5818MNL"`)
    //     }
    //     else if (datapass === "0533"){
    //         setEquipment_Code(`0533 - HW PIR "5890"`)
    //     }
    //     else if (datapass === "0530"){
    //         setEquipment_Code(`0530 - HW PIR "5894PI"`)
    //     }
    //     else if (datapass === "0519"){
    //         setEquipment_Code(`0519 - HW Glass Break "5853"`)
    //     }
    //     else if (datapass === "0589"){
    //         setEquipment_Code(`0589 - HW Smoke "5808W3"`)
    //     }
    //     else if (datapass === "0557"){
    //         setEquipment_Code(`0557 - HW Heat Sensor "5809"`)
    //     }
    //     else if (datapass === "0624"){
    //         setEquipment_Code(`0624 - HW Flood Sensor "5821"`)
    //     }
    //     else if (datapass === "0491"){
    //         setEquipment_Code(`0491 - HW Panic Pendant "5802MN2"`)
    //     }
    //     else if (datapass === "1063"){
    //         setEquipment_Code(`1063 - 2GIG 2GIG Doorbell`)
    //     }
    //     else if (datapass === "1061"){
    //         setEquipment_Code(`1061 - Tilt Sensor`)
    //     }
    //     else if (datapass === "1062"){
    //         setEquipment_Code(`1062 - 2GIG Tilt Sensor`)
    //     }
    //     else if (datapass === "1064"){
    //         setEquipment_Code(`1064 - 2GIG Bypass Sensor`)
    //     }
    //     else if (datapass === "1065"){
    //         setEquipment_Code(`0863 - 2GIG Flood Sensor`)
    //     }
    //     else if (datapass === "1066"){
    //         setEquipment_Code(`1066 - 2GIG Shock Sensor`)
    //     }
    //     else if (datapass === "1067"){
    //         setEquipment_Code(`1067 - 2GIG Repeater`)
    //     }
    //     else if (datapass === "1068"){
    //         setEquipment_Code(`1068 - 2GIG Translator`)
    //     }
    //     else if (datapass === "1070"){
    //         setEquipment_Code(`1070 - 2GIG F1-345`)
    //     }
    //     else if (datapass === "1071"){
    //         setEquipment_Code(`1071 - 2GIG PHB-345`)
    //     }
    //     else if (datapass === "1072"){
    //         setEquipment_Code(`1072 - 2GIG Smoke Ring`)
    //     }
    //     else if (datapass === "0655"){
    //         setEquipment_Code(`0655 - Existing Door/Window Contact`)
    //     }
    //     else if (datapass === "0609"){
    //         setEquipment_Code(`0609 - Existing Motion Detector`)
    //     }
    //     else if (datapass === "0475"){
    //         setEquipment_Code(`0475 - Existing Glass Break Detector`)
    //     }
    //     else if (datapass === "0616"){
    //         setEquipment_Code(`0616 - Existing Smoke Detector`)
    //     }
    //     else if (datapass === "0692"){
    //         setEquipment_Code(`0692 - Existing CO Detector`)
    //     }
    //     else if (datapass === "0708"){
    //         setEquipment_Code(`0708 - Existing Heat Sensor`)
    //     }
    //     else if (datapass === "0556"){
    //         setEquipment_Code(`0556 - Existing Flood/Temp Sensor`)
    //     }
    //     else if (datapass === "9999"){
    //         setEquipment_Code(`9999 - Alarm.com Image Sensor`)
    //     }
    //     else if (datapass === "2058"){
    //         setEquipment_Code(`2058 - eSeries Smoke Detector (USA)`)
    //     }
    //     else if (datapass === "2061"){
    //         setEquipment_Code(`2061 - eSeries Tilt Sensor`)
    //     }
    //     else if (datapass === "2065"){
    //         setEquipment_Code(`2065 - eSeries Flood Sensor`)
    //     }
    //     else if (datapass === "2066"){
    //         setEquipment_Code(`2066 - eSeries Shock Sensor`)
    //     }
    //     else if (datapass === "2067"){
    //         setEquipment_Code(`2067 - eSeries Repeater`)
    //     }
    //     else if (datapass === "2069"){
    //         setEquipment_Code(`2069 - eSeries FireFighter SMKT/CO Listener`)
    //     }
    //     else if (datapass === "2068"){
    //         setEquipment_Code(`2068 - eSeries Translator`)
    //     }
    //     else if (datapass === "2070"){
    //         setEquipment_Code(`2070 - eSeries Water Sensor`)
    //     }
    //     else if (datapass === "2860"){
    //         setEquipment_Code(`2860 - eSeries CO Detector (USA)`)
    //     }
    //     else if (datapass === "2862"){
    //         setEquipment_Code(`2862 - eSeries Thin Door/Window Contact`)
    //     }
    //     else if (datapass === "2863"){
    //         setEquipment_Code(`2863 - eSeries Recessed Door Contact`)
    //     }
    //     else if (datapass === "2865"){
    //         setEquipment_Code(`2865 - eSeries Outdoor Door/Window Sensor`)
    //     }
    //     else if (datapass === "2864"){
    //         setEquipment_Code(`2864 - eSeries Glass Break Detector`)
    //     }
    //     else if (datapass === "2868"){
    //         setEquipment_Code(`2868 - eSeries Panic`)
    //     }
    //     else if (datapass === "2869"){
    //         setEquipment_Code(`2869 - eSeries PIR with Pet Immunity`)
    //     }
    //     else if (datapass === "2873"){
    //         setEquipment_Code(`2873 - eSeries Takeover Module`)
    //     }
    //     else {
    //         setEquipment_Code(`0000 - Other`)
    //     }
    // }
    
    // function SerialNumber(){
    //     var zone = ""
    //     if (document.getElementById("zone-eight") !== null){
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //     }
    //     var retrievedSensors = localStorage.getItem("panelSensors");
    //     retrievedSensors = JSON.parse(retrievedSensors)
    //     var datapass = ""
    //     if (zone === "1"){
    //         datapass = retrievedSensors.sensor1.serialNumber
    //     }
    //     else if (zone === "2"){
    //         datapass = retrievedSensors.sensor2.serialNumber
    //     }
    //     else if (zone === "3"){
    //         datapass = retrievedSensors.sensor3.serialNumber
    //     }
    //     else if (zone === "4"){
    //         datapass = retrievedSensors.sensor4.serialNumber
    //     }
    //     else if (zone === "5"){
    //         datapass = retrievedSensors.sensor5.serialNumber
    //     }
    //     else if (zone === "6"){
    //         datapass = retrievedSensors.sensor6.serialNumber
    //     }
    //     else if (zone === "7"){
    //         datapass = retrievedSensors.sensor7.serialNumber
    //     }
    //     else if (zone === "8"){
    //         datapass = retrievedSensors.sensor8.serialNumber
    //     }
    //     console.log("serialNumber: ", datapass)
    
    //     if (datapass !== null){
    //         if(typeof datapass !== "object"){
    //             setSerial_Number(datapass)
    //         }
    //         else{
    //             setSerial_Number('0000000')
    //         }
    //     }
    //     else{
    //         setSerial_Number('0000000')
    //     }
    // }
    
    // function SmartAreasAssignment(){
    //     var zone = ""
    //     if (document.getElementById("zone-eight") !== null){
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //     }
    //     var retrievedSensors = localStorage.getItem("panelSensors");
    //     retrievedSensors = JSON.parse(retrievedSensors)
    //     var datapass = ""
    //     if (zone === "1"){
    //         datapass = retrievedSensors.sensor1.smartAreasAssignment
    //     }
    //     else if (zone === "2"){
    //         datapass = retrievedSensors.sensor2.smartAreasAssignment
    //     }
    //     else if (zone === "3"){
    //         datapass = retrievedSensors.sensor3.smartAreasAssignment
    //     }
    //     else if (zone === "4"){
    //         datapass = retrievedSensors.sensor4.smartAreasAssignment
    //     }
    //     else if (zone === "5"){
    //         datapass = retrievedSensors.sensor5.smartAreasAssignment
    //     }
    //     else if (zone === "6"){
    //         datapass = retrievedSensors.sensor6.smartAreasAssignment
    //     }
    //     else if (zone === "7"){
    //         datapass = retrievedSensors.sensor7.smartAreasAssignment
    //     }
    //     else if (zone === "8"){
    //         datapass = retrievedSensors.sensor8.smartAreasAssignment
    //     }
    //     console.log("smartAreasAssignment: ", datapass)
    
    //     if (datapass === "s1"){
    //         setSmart_Areas_Assignment(`S1`)
    //     }
    //     else if(datapass === "s2"){
    //         setSmart_Areas_Assignment(`S2`)
    //     }
    //     else if(datapass === "s3"){
    //         setSmart_Areas_Assignment(`S3`)
    //     }
    //     else if(datapass === "s4"){
    //         setSmart_Areas_Assignment(`S4`)
    //     }
    //     else{
    //         setSmart_Areas_Assignment(`S1`)
    //     }
    // }
    
    // function EquipmentAge(){
    //     var zone = ""
    //     if (document.getElementById("zone-eight") !== null){
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //     }
    //     var retrievedSensors = localStorage.getItem("panelSensors");
    //     retrievedSensors = JSON.parse(retrievedSensors)
    //     var datapass = ""
    //     if (zone === "1"){
    //         datapass = retrievedSensors.sensor1.equipmentAge
    //     }
    //     else if (zone === "2"){
    //         datapass = retrievedSensors.sensor2.equipmentAge
    //     }
    //     else if (zone === "3"){
    //         datapass = retrievedSensors.sensor3.equipmentAge
    //     }
    //     else if (zone === "4"){
    //         datapass = retrievedSensors.sensor4.equipmentAge
    //     }
    //     else if (zone === "5"){
    //         datapass = retrievedSensors.sensor5.equipmentAge
    //     }
    //     else if (zone === "6"){
    //         datapass = retrievedSensors.sensor6.equipmentAge
    //     }
    //     else if (zone === "7"){
    //         datapass = retrievedSensors.sensor7.equipmentAge
    //     }
    //     else if (zone === "8"){
    //         datapass = retrievedSensors.sensor8.equipmentAge
    //     }
    //     console.log("equipmentAge: ", datapass)
    
    //     if (datapass === "new"){
    //         setEquipment_Age(`New`)
    //     }
    //     else if (datapass === "existing"){
    //         setEquipment_Age(`Existing`)
    //     }
    //     else{
    //         setEquipment_Age(`New`)
    //     }
    // }
    
    // function SensorLoop(){
    //     var zone = ""
    //     if (document.getElementById("zone-eight") !== null){
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //     }
    //     var retrievedSensors = localStorage.getItem("panelSensors");
    //     retrievedSensors = JSON.parse(retrievedSensors)
    //     var datapass = ""
    //     if (zone === "1"){
    //         datapass = retrievedSensors.sensor1.sensorLoop
    //     }
    //     else if (zone === "2"){
    //         datapass = retrievedSensors.sensor2.sensorLoop
    //     }
    //     else if (zone === "3"){
    //         datapass = retrievedSensors.sensor3.sensorLoop
    //     }
    //     else if (zone === "4"){
    //         datapass = retrievedSensors.sensor4.sensorLoop
    //     }
    //     else if (zone === "5"){
    //         datapass = retrievedSensors.sensor5.sensorLoop
    //     }
    //     else if (zone === "6"){
    //         datapass = retrievedSensors.sensor6.sensorLoop
    //     }
    //     else if (zone === "7"){
    //         datapass = retrievedSensors.sensor7.sensorLoop
    //     }
    //     else if (zone === "8"){
    //         datapass = retrievedSensors.sensor8.sensorLoop
    //     }
    //     console.log("sensorLoop: ", datapass)
    
    //     if(datapass === "1"){
    //         setSensor_Loop(`Loop 1`)
    //     }
    //     else if(datapass === "2"){
    //         setSensor_Loop(`Loop 2`)
    //     }
    //     else if(datapass === "3"){
    //         setSensor_Loop(`Loop 3`)
    //     }
    //     else{
    //         setSensor_Loop(`Loop 1`)
    //     }
    // }
    
    // function TransmissionDelay(){
    //     var zone = ""
    //     if (document.getElementById("zone-eight") !== null){
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //     }
    //     var retrievedSensors = localStorage.getItem("panelSensors");
    //     retrievedSensors = JSON.parse(retrievedSensors)
    //     var datapass = ""
    //     if (zone === "1"){
    //         datapass = retrievedSensors.sensor1.transmissionDelay
    //     }
    //     else if (zone === "2"){
    //         datapass = retrievedSensors.sensor2.transmissionDelay
    //     }
    //     else if (zone === "3"){
    //         datapass = retrievedSensors.sensor3.transmissionDelay
    //     }
    //     else if (zone === "4"){
    //         datapass = retrievedSensors.sensor4.transmissionDelay
    //     }
    //     else if (zone === "5"){
    //         datapass = retrievedSensors.sensor5.transmissionDelay
    //     }
    //     else if (zone === "6"){
    //         datapass = retrievedSensors.sensor6.transmissionDelay
    //     }
    //     else if (zone === "7"){
    //         datapass = retrievedSensors.sensor7.transmissionDelay
    //     }
    //     else if (zone === "8"){
    //         datapass = retrievedSensors.sensor8.transmissionDelay
    //     }
    //     console.log("transmissionDelay: ", datapass)
    
    //     if(datapass === "enabled"){
    //        setTransmission_Delay(`Enabled`)
    //     }
    //     else if(datapass === "disabled"){
    //         setTransmission_Delay(`Disabled`)
    //     }
    //     else {
    //         setTransmission_Delay(`Enabled`)
    //     }
    // }
    
    // function VoiceDescriptor(){
    //     var zone = ""
    //     if (document.getElementById("zone-eight") !== null){
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //     }
    //     var retrievedSensors = localStorage.getItem("panelSensors");
    //     retrievedSensors = JSON.parse(retrievedSensors)
    //     var datapass = ""
    //     if (zone === "1"){
    //         datapass = retrievedSensors.sensor1.voiceDescriptor
    //     }
    //     else if (zone === "2"){
    //         datapass = retrievedSensors.sensor2.voiceDescriptor
    //     }
    //     else if (zone === "3"){
    //         datapass = retrievedSensors.sensor3.voiceDescriptor
    //     }
    //     else if (zone === "4"){
    //         datapass = retrievedSensors.sensor4.voiceDescriptor
    //     }
    //     else if (zone === "5"){
    //         datapass = retrievedSensors.sensor5.voiceDescriptor
    //     }
    //     else if (zone === "6"){
    //         datapass = retrievedSensors.sensor6.voiceDescriptor
    //     }
    //     else if (zone === "7"){
    //         datapass = retrievedSensors.sensor7.voiceDescriptor
    //     }
    //     else if (zone === "8"){
    //         datapass = retrievedSensors.sensor8.voiceDescriptor
    //     }
    //     console.log("voiceDescriptor: ", datapass)
    
    //     var fullDescriptor = ""
        
    //     for(var i=1; i<7; i++){
    //         var temp = partDescription(datapass, i)
    //         if (temp === " <None>"){
    //             if (i === 1){
    //                 fullDescriptor = ` <None>`
    //             }
    //             break
    //         }
    //         fullDescriptor += temp
    //     }
    //     fullDescriptor = fullDescriptor.slice(1)
    //     setVoice_Descriptor(fullDescriptor)
    // }
    
    // function SensorReports(){
    //     var zone = ""
    //     if (document.getElementById("zone-eight") !== null){
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //     }
    //     var retrievedSensors = localStorage.getItem("panelSensors");
    //     retrievedSensors = JSON.parse(retrievedSensors)
    //     var datapass = ""
    //     if (zone === "1"){
    //         datapass = retrievedSensors.sensor1.sensorReports
    //     }
    //     else if (zone === "2"){
    //         datapass = retrievedSensors.sensor2.sensorReports
    //     }
    //     else if (zone === "3"){
    //         datapass = retrievedSensors.sensor3.sensorReports
    //     }
    //     else if (zone === "4"){
    //         datapass = retrievedSensors.sensor4.sensorReports
    //     }
    //     else if (zone === "5"){
    //         datapass = retrievedSensors.sensor5.sensorReports
    //     }
    //     else if (zone === "6"){
    //         datapass = retrievedSensors.sensor6.sensorReports
    //     }
    //     else if (zone === "7"){
    //         datapass = retrievedSensors.sensor7.sensorReports
    //     }
    //     else if (zone === "8"){
    //         datapass = retrievedSensors.sensor8.sensorReports
    //     }
    //     console.log("sensorReports: ", datapass)
    
    //     if (datapass === "enabled"){
    //         setSensor_Reports(`Enabled`)
    //     }
    //     else if(datapass === "disabled"){
    //         setSensor_Reports(`Disabled`)
    //     }
    //     else{
    //         setSensor_Reports(`Enabled`)
    //     }
    // }
    
    // function SensorSupervised(){
    //     var zone = ""
    //     if (document.getElementById("zone-eight") !== null){
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //     }
    //     var retrievedSensors = localStorage.getItem("panelSensors");
    //     retrievedSensors = JSON.parse(retrievedSensors)
    //     var datapass = ""
    //     if (zone === "1"){
    //         datapass = retrievedSensors.sensor1.sensorSupervised
    //     }
    //     else if (zone === "2"){
    //         datapass = retrievedSensors.sensor2.sensorSupervised
    //     }
    //     else if (zone === "3"){
    //         datapass = retrievedSensors.sensor3.sensorSupervised
    //     }
    //     else if (zone === "4"){
    //         datapass = retrievedSensors.sensor4.sensorSupervised
    //     }
    //     else if (zone === "5"){
    //         datapass = retrievedSensors.sensor5.sensorSupervised
    //     }
    //     else if (zone === "6"){
    //         datapass = retrievedSensors.sensor6.sensorSupervised
    //     }
    //     else if (zone === "7"){
    //         datapass = retrievedSensors.sensor7.sensorSupervised
    //     }
    //     else if (zone === "8"){
    //         datapass = retrievedSensors.sensor8.sensorSupervised
    //     }
    //     console.log("sensorSupervised: ", datapass)
    
    //     if (datapass === "enabled"){
    //         setSensor_Supervised(`Enabled`)
    //     }
    //     else if(datapass === "disabled"){
    //         setSensor_Supervised(`Disabled`)
    //     }
    //     else{
    //         setSensor_Supervised(`Enabled`)
    //     }
    // }
    
    // function SensorChime(){
    //     var zone = ""
    //     if (document.getElementById("zone-eight") !== null){
    //         if (document.getElementById("zone-one").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "1"
    //         }
    //         else if (document.getElementById("zone-two").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "2"
    //         }
    //         else if (document.getElementById("zone-three").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "3"
    //         }
    //         else if (document.getElementById("zone-four").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "4"
    //         }
    //         else if (document.getElementById("zone-five").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "5"
    //         }
    //         else if (document.getElementById("zone-six").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "6"
    //         }
    //         else if (document.getElementById("zone-seven").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "7"
    //         }
    //         else if (document.getElementById("zone-eight").style.backgroundColor === "rgb(68, 140, 192)"){
    //             zone = "8"
    //         }
    //     }
    //     var retrievedSensors = localStorage.getItem("panelSensors");
    //     retrievedSensors = JSON.parse(retrievedSensors)
    //     var datapass = ""
    //     if (zone === "1"){
    //         datapass = retrievedSensors.sensor1.sensorChime
    //     }
    //     else if (zone === "2"){
    //         datapass = retrievedSensors.sensor2.sensorChime
    //     }
    //     else if (zone === "3"){
    //         datapass = retrievedSensors.sensor3.sensorChime
    //     }
    //     else if (zone === "4"){
    //         datapass = retrievedSensors.sensor4.sensorChime
    //     }
    //     else if (zone === "5"){
    //         datapass = retrievedSensors.sensor5.sensorChime
    //     }
    //     else if (zone === "6"){
    //         datapass = retrievedSensors.sensor6.sensorChime
    //     }
    //     else if (zone === "7"){
    //         datapass = retrievedSensors.sensor7.sensorChime
    //     }
    //     else if (zone === "8"){
    //         datapass = retrievedSensors.sensor8.sensorChime
    //     }
    //     console.log("sensorChime: ", datapass)
    
    //     if (datapass === "disbabled"){
    //         setSensor_Chime(`Disabled`)
    //     }
    //     else if(datapass === "voice"){
    //         setSensor_Chime(`Voice Only`)
    //     }
    //     else if(datapass === "ding1voice"){
    //         setSensor_Chime(`Ding-Dong #1 with Voice`)
    //     }
    //     else if(datapass === "ding2"){
    //         setSensor_Chime(`Ding-Dong #2`)
    //     }
    //     else if(datapass === "ding2voice"){
    //         setSensor_Chime(`Ding-Dong #2 with Voice`)
    //     }
    //     else if(datapass === "ding1"){
    //         setSensor_Chime(`Ding-Dong #1`)
    //     }
    //     else if(datapass === "ding"){
    //         setSensor_Chime(`Ding-Dong`)
    //     }
    //     else if(datapass === "dingvoice"){
    //         setSensor_Chime(`Ding-Dong with Voice`)
    //     }
    //     else if(datapass === "ding3"){
    //         setSensor_Chime(`Ding-Dong #3`)
    //     }
    //     else if(datapass === "ding3voice"){
    //         setSensor_Chime(`Ding-Dong #3 with Voice`)
    //     }
    //     else if(datapass === "chime1"){
    //         setSensor_Chime(`Chime #1`)
    //     }
    //     else if(datapass === "chime1voice"){
    //         setSensor_Chime(`Chime #1 with Voice`)
    //     }
    //     else if(datapass === "chime2"){
    //         setSensor_Chime(`Chime #2`)
    //     }
    //     else if(datapass === "chime2voice"){
    //         setSensor_Chime(`Chime #2 with Voice`)
    //     }
    //     else{
    //         setSensor_Chime(`Disabled`)
    //     }
    // }

    // function choseZone(id){
    //     console.log("-------------")
    //     console.log("NEW ZONE DATA")
    //     console.log("-------------")
    //     if (document.getElementById("zone-eight") !== null){
    //         var selector = id
    //         var el = document.querySelector('.config-container-scroll');
    //         console.log("scroll: ", el.scrollTop);
    //         document.getElementById("zone-one").style.backgroundColor = "white";
    //         document.getElementById("zone-one").style.color = "gray";
    //         document.getElementById("zone-one").style.backgroundImage = "linear-gradient(to right, white, transparent)";
    //         document.getElementById("zone-two").style.backgroundColor = "white";
    //         document.getElementById("zone-two").style.color = "gray";
    //         document.getElementById("zone-two").style.backgroundImage = "linear-gradient(to right, white, transparent)";
    //         document.getElementById("zone-three").style.backgroundColor = "white";
    //         document.getElementById("zone-three").style.color = "gray";
    //         document.getElementById("zone-three").style.backgroundImage = "linear-gradient(to right, white, transparent)";
    //         document.getElementById("zone-four").style.backgroundColor = "white";
    //         document.getElementById("zone-four").style.color = "gray";
    //         document.getElementById("zone-four").style.backgroundImage = "linear-gradient(to right, white, transparent)";
    //         document.getElementById("zone-five").style.backgroundColor = "white";
    //         document.getElementById("zone-five").style.color = "gray";
    //         document.getElementById("zone-five").style.backgroundImage = "linear-gradient(to right, white, transparent)";
    //         document.getElementById("zone-six").style.backgroundColor = "white";
    //         document.getElementById("zone-six").style.color = "gray";
    //         document.getElementById("zone-six").style.backgroundImage = "linear-gradient(to right, white, transparent)";
    //         document.getElementById("zone-seven").style.backgroundColor = "white";
    //         document.getElementById("zone-seven").style.color = "gray";
    //         document.getElementById("zone-seven").style.backgroundImage = "linear-gradient(to right, white, transparent)";
    //         document.getElementById("zone-eight").style.backgroundColor = "white";
    //         document.getElementById("zone-eight").style.color = "gray";
    //         document.getElementById("zone-eight").style.backgroundImage = "linear-gradient(to right, white, transparent)";
    //         document.getElementById(selector).style.backgroundColor = "#448cc0";
    //         document.getElementById(selector).style.color = "white";
    //         document.getElementById(selector).style.backgroundImage = "linear-gradient(to right, #3f94d1, transparent)";
    //         if (selector === "zone-one"){
    //             el.scrollTop = 0;
    //             document.getElementById("up-arrow").style.display = "none"
    //             document.getElementById("down-arrow").style.display = ""
    //             document.getElementById("filler").style.display = ""
    //         }
    //         else if (selector === "zone-two"){
    //             el.scrollTop = 29;
    //             document.getElementById("up-arrow").style.display = ""
    //             document.getElementById("down-arrow").style.display = ""
    //             document.getElementById("filler").style.display = "none"
    //         }
    //         else if (selector === "zone-three"){
    //             el.scrollTop = 58;
    //             document.getElementById("up-arrow").style.display = ""
    //             document.getElementById("down-arrow").style.display = ""
    //             document.getElementById("filler").style.display = "none"
    //         }
    //         else if (selector === "zone-four"){
    //             el.scrollTop = 87;
    //             document.getElementById("up-arrow").style.display = ""
    //             document.getElementById("down-arrow").style.display = ""
    //             document.getElementById("filler").style.display = "none"
    //         }
    //         else if (selector === "zone-five"){
    //             el.scrollTop = 116;
    //             document.getElementById("up-arrow").style.display = ""
    //             document.getElementById("down-arrow").style.display = ""
    //             document.getElementById("filler").style.display = "none"
    //         }
    //         else if (selector === "zone-six"){
    //             el.scrollTop = 145;
    //             document.getElementById("up-arrow").style.display = ""
    //             document.getElementById("down-arrow").style.display = ""
    //             document.getElementById("filler").style.display = "none"
    //         }
    //         else if (selector === "zone-seven"){
    //             el.scrollTop = 174;
    //             document.getElementById("up-arrow").style.display = ""
    //             document.getElementById("down-arrow").style.display = ""
    //             document.getElementById("filler").style.display = "none"
    //         }
    //         else if (selector === "zone-eight"){
    //             el.scrollTop = 232;
    //             document.getElementById("up-arrow").style.display = ""
    //             document.getElementById("down-arrow").style.display = "none"
    //             document.getElementById("filler").style.display = "none"
    //         }
    
    //         SensorType()
    //         EquipmentCode()
    //         SerialNumber()
    //         SmartAreasAssignment()
    //         EquipmentAge()
    //         SensorLoop()
    //         TransmissionDelay()
    //         VoiceDescriptor()
    //         SensorReports()
    //         SensorSupervised()
    //         SensorChime()
    //     }
    // }

    // function goUp(){
    //     if (document.getElementById('zone-two').style.backgroundColor !== 'white'){
    //         choseZone("zone-one")
    //     }
    //     else if (document.getElementById('zone-three').style.backgroundColor !== 'white'){
    //         choseZone("zone-two")
    //     }
    //     else if (document.getElementById('zone-four').style.backgroundColor !== 'white'){
    //         choseZone("zone-three")
    //     }
    //     else if (document.getElementById('zone-five').style.backgroundColor !== 'white'){
    //         choseZone("zone-four")
    //     }
    //     else if (document.getElementById('zone-six').style.backgroundColor !== 'white'){
    //         choseZone("zone-five")
    //     }
    //     else if (document.getElementById('zone-seven').style.backgroundColor !== 'white'){
    //         choseZone("zone-six")
    //     }
    //     else if (document.getElementById('zone-eight').style.backgroundColor !== 'white'){
    //         choseZone("zone-seven")
    //     }
    // }
    
    // function goDown(){
    //     if (document.getElementById('zone-one').style.backgroundColor !== 'white'){
    //         choseZone("zone-two")
    //     }
    //     else if (document.getElementById('zone-two').style.backgroundColor !== 'white'){
    //         choseZone("zone-three")
    //     }
    //     else if (document.getElementById('zone-three').style.backgroundColor !== 'white'){
    //         choseZone("zone-four")
    //     }
    //     else if (document.getElementById('zone-four').style.backgroundColor !== 'white'){
    //         choseZone("zone-five")
    //     }
    //     else if (document.getElementById('zone-five').style.backgroundColor !== 'white'){
    //         choseZone("zone-six")
    //     }
    //     else if (document.getElementById('zone-six').style.backgroundColor !== 'white'){
    //         choseZone("zone-seven")
    //     }
    //     else if (document.getElementById('zone-seven').style.backgroundColor !== 'white'){
    //         choseZone("zone-eight")
    //     }
    // }

    function showOptions(selector){
        if(document.getElementById("sensor-type-keypad").style.display === ""){
            document.getElementById("sensor-type-keypad").style.display = "none"
            document.getElementById("sensor-type-options").style.display = ""
        }
        else{
            document.getElementById("sensor-type-keypad").style.display = ""
            document.getElementById("sensor-type-options").style.display = "none"
        }
    }

    // useEffect(() => {
    //     SensorType()
    //     EquipmentCode()
    //     SerialNumber()
    //     SmartAreasAssignment()
    //     EquipmentAge()
    //     SensorLoop()
    //     TransmissionDelay()
    //     VoiceDescriptor()
    //     SensorReports()
    //     SensorSupervised()
    //     SensorChime()
    // });
    return(
        <div className="screen-style">
            <div className="screen-header">
                <img src={wifi_icon} className="resize-1 invert-color" alt="" />

                <p style={{'marginLeft':"30px"}} id="header-name-wireless">
                    Wireless Zone 001
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
                        <div style={{'marginTop':"110px"}}/>

                        <ul className="programming-list" style={{'marginTop':"0", 'marginBottom':"0"}}>
                            <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Sensor Type</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Sensor_Type}</p></li>
                            <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Equiment Code</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Equipment_Code}</p></li>
                            <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Serial Number</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Serial_Number}</p></li>
                            <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Smart Areas Assignment</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Smart_Areas_Assignment}</p></li>
                            <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Equipment Age</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Equipment_Age}</p></li>
                            <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Sensor Loop</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Sensor_Loop}</p></li>
                            <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Transmission Delay</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Transmission_Delay}</p></li>
                            <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Voice Descriptor</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Voice_Descriptor}</p></li>
                            <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Sensor Reports</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Sensor_Reports}</p></li>
                            <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Sensor Supervised</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Sensor_Supervised}</p></li>
                            <li className="programming-right-side-list-option" style={{'borderBottom':"1px lightgrey solid"}}><p style={{'color':"#404956"}}>Sensor Chime</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Sensor_Chime}</p></li>
                        </ul>

                        <div className="reset-button">
                            Reset Zone
                        </div>

                        <div style={{'marginTop':"45px"}}/>
                    </div>
                </div>
            </div>

            <div className="screen-right">
                {/* Sensor Type */}
                <div className="keypad-data-top">
                    <p className="display-programming">
                        {Sensor_Type}
                    </p>

                    <span className="expander-programming" onClick={() => showOptions("sensor-type")}>
                        &#9776;
                    </span>
                </div>

                <div id="sensor-type-keypad" className="keypad-data-bottom">
                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            1
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            2
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            3
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            4
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            5
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            6
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            7
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            8
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            9
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <img src={backspace_icon} style={{'height':"26px", 'marginTop':"6px", 'marginLeft':"23px"}} alt=""/>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            0
                        </p>
                    </div>
                </div>

                <div id="sensor-type-options" style={{'display':"none"}} className="options-sensor-type">
                    <div className="config-container-scroll">
                        <ul className="programming-list">
                            <li style={{'borderTop':"none"}}><p>00 - Unused</p></li>
                            <li><p>01 - Exit/Entry 1</p></li>
                            <li><p>02 - Exit/Entry 2</p></li>
                            <li><p>03 - Perimeter</p></li>
                            <li><p>04 - Interior Follower</p></li>
                            <li><p>05 - Day Zone</p></li>
                            <li><p>06 - 24-Hour Silent Alarm</p></li>
                            <li><p>07 - 24-Hour Audible Alarm</p></li>
                            <li><p>08 - 24-Hour Auxiliary Alarm</p></li>
                            <li><p>09 - 24-Hour Fire</p></li>
                            <li><p>10 - Interior with Delay</p></li>
                            <li><p>14 - 24-Hour Carbon Monoxide</p></li>
                            <li><p>16 - 24-Hour Fire Verification</p></li>
                            <li><p>23 - No Response Type</p></li>
                            <li><p>24 - Silent Burglary</p></li>
                            <li><p>32 - Remote Device</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="screen-right" style={{'display':"none"}}>
                {/* Equipment Code */}
            </div>

            <div className="screen-right" style={{'display':"none"}}>
                {/* Serial Number */}
            </div>

            <div className="screen-right-settings" style={{'display':"none"}}>
                {/* Smart Areas Assignment */}
            </div>

            <div className="screen-right-settings" style={{'display':"none"}}>
                {/* Equipment Age */}
            </div>

            <div className="screen-right-settings" style={{'display':"none"}}>
                {/* Sensor Loop */}
            </div>

            <div className="screen-right-settings" style={{'display':"none"}}>
                {/* Transmission Delay */}
            </div>

            <div className="screen-right-settings" style={{'display':"none"}}>
                {/* Voice Descriptor */}
            </div>

            <div className="screen-right-settings" style={{'display':"none"}}>
                {/* Sensor Reports */}
            </div>

            <div className="screen-right-settings" style={{'display':"none"}}>
                {/* Sensor Supervised */}
            </div>

            <div className="screen-right-settings" style={{'display':"none"}}>
                {/* Sensor Chime */}
            </div>

            <div style={{'bottom':"0",'width':"645px", 'height':"55px", 'position':"absolute", 'marginBottom':"108px", 'display': "inline-grid", 'gridTemplateColumns':"165px 165px 103px 103px 103px", 'marginLeft':"-310px"}}>
                <Link to="/installer-toolbox/system-configuration/wireless-zones/menu">
                    <div className="blue-button configuration-buttons" style={{'marginLeft':"8px", 'width':"135px"}}>
                        <p style={{'marginTop':"10px"}}>
                            Back To Zones
                        </p>
                    </div>
                </Link>

                <div className="blue-button configuration-buttons" style={{'marginLeft':"-3px", 'width':"135px"}}>
                    <p style={{'marginTop':"10px"}}>
                       Next Zone
                    </p>
                </div>

                <div id="up-arrow" className="blue-button configuration-buttons">
                    <img src={up_arrow_icon} style={{'height':"15px", 'marginTop':"10px"}} alt="" />
                </div>

                <div id="filler" style={{'display':"none"}}>

                </div>

                <div>

                </div>

                <div id="down-arrow" className="blue-button configuration-buttons">
                    <img src={down_arrow_icon} style={{'height':"15px", 'marginTop':"10px"}} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default SystemConfigurationWirelessEdit