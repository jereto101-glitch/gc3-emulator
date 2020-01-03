import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import wifi_icon from '../images/wifi.png'
import up_arrow_icon from '../images/up-arrow.png';
import down_arrow_icon from '../images/down-arrow.png';
import backspace_icon from "../images/backspace.png";
import rewind_icon from "../images/rewind.png";
import fast_forward_icon from "../images/fast-forward.png";
import info_gray_icon from "../images/info-gray.png";
import check_icon from '../images/check.png';

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
    const [Sensor_Equipment_Type,setSensor_Equipment_Type] = useState(`Motion`)
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
    const [Current_Zone,setCurrent_Zone] = useState(`Wireless Zone 001`)
    const [ZoneProgramming, setZoneProgramming] = useState("idk what to do here yet")
    
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
    //         setEquipment_Code(`1065 - 2GIG Flood Sensor`)
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

    function updateButtons(selector){
        var el = document.querySelector('.config-container-scroll');
        console.log("scroll: ", el.scrollTop);

        if (selector === "sensor-type"){
            el.scrollTop = 0;
            document.getElementById("up-arrow").style.display = "none"
            document.getElementById("down-arrow").style.display = ""
            console.log(Current_Zone)
            if(Current_Zone === "Wireless Zone 001"){
                document.getElementById("left-arrow").style.display = "none"
                document.getElementById("filler").style.display = ""
            }
            else{
                document.getElementById("left-arrow").style.display = ""
                document.getElementById("filler").style.display = "none"
            }
            document.getElementById("right-arrow").style.display = "none"
        }
        else if (selector === "equipment-code"){
            el.scrollTop = 30;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
            document.getElementById("left-arrow").style.display = "none"
            document.getElementById("right-arrow").style.display = "none"
        }
        else if (selector === "serial-number"){
            el.scrollTop = 64;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
            document.getElementById("left-arrow").style.display = "none"
            document.getElementById("right-arrow").style.display = "none"
        }
        else if (selector === "smart-areas-assignment"){
            el.scrollTop = 96;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
            document.getElementById("left-arrow").style.display = "none"
            document.getElementById("right-arrow").style.display = "none"
        }
        else if (selector === "equipment-age"){
            el.scrollTop = 128;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
            document.getElementById("left-arrow").style.display = "none"
            document.getElementById("right-arrow").style.display = "none"
        }
        else if (selector === "sensor-loop"){
            el.scrollTop = 160;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
            document.getElementById("left-arrow").style.display = "none"
            document.getElementById("right-arrow").style.display = "none"
        }
        else if (selector === "transmission-delay"){
            el.scrollTop = 192;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
            document.getElementById("left-arrow").style.display = "none"
            document.getElementById("right-arrow").style.display = "none"
        }
        else if (selector === "voice-descriptor"){
            el.scrollTop = 224;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
            document.getElementById("left-arrow").style.display = "none"
            document.getElementById("right-arrow").style.display = "none"
        }
        else if (selector === "sensor-reports"){
            el.scrollTop = 256;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
            document.getElementById("left-arrow").style.display = "none"
            document.getElementById("right-arrow").style.display = "none"
        }
        else if (selector === "sensor-supervised"){
            el.scrollTop = 288;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = ""
            document.getElementById("filler").style.display = "none"
            document.getElementById("left-arrow").style.display = "none"
            document.getElementById("right-arrow").style.display = "none"
        }
        else if (selector === "sensor-chime"){
            el.scrollTop = 320;
            document.getElementById("up-arrow").style.display = ""
            document.getElementById("down-arrow").style.display = "none"
            document.getElementById("filler").style.display = "none"
            document.getElementById("left-arrow").style.display = "none"
            if(Current_Zone !== "Wireless Zone 008"){
                document.getElementById("right-arrow").style.display = ""
            }
            else{
                document.getElementById("right-arrow").style.display = ""
            }
        }
    }

    function goUp(){
        if (document.getElementById('equipment-code').style.backgroundColor !== 'white'){
            choseAttribute("sensor-type")
        }
        else if (document.getElementById('serial-number').style.backgroundColor !== 'white'){
            choseAttribute("equipment-code")
        }
        else if (document.getElementById('smart-areas-assignment').style.backgroundColor !== 'white'){
            choseAttribute("serial-number")
        }
        else if (document.getElementById('equipment-age').style.backgroundColor !== 'white'){
            choseAttribute("smart-areas-assignment")
        }
        else if (document.getElementById('sensor-loop').style.backgroundColor !== 'white'){
            choseAttribute("equipment-age")
        }
        else if (document.getElementById('transmission-delay').style.backgroundColor !== 'white'){
            choseAttribute("sensor-loop")
        }
        else if (document.getElementById('voice-descriptor').style.backgroundColor !== 'white'){
            choseAttribute("transmission-delay")
        }
        else if (document.getElementById('sensor-reports').style.backgroundColor !== 'white'){
            choseAttribute("voice-descriptor")
        }
        else if (document.getElementById('sensor-supervised').style.backgroundColor !== 'white'){
            choseAttribute("sensor-reports")
        }
        else if (document.getElementById('sensor-chime').style.backgroundColor !== 'white'){
            choseAttribute("sensor-supervised")
        }
    }
    
    function goDown(){
        if (document.getElementById('sensor-type').style.backgroundColor !== 'white'){
            choseAttribute("equipment-code")
        }
        else if (document.getElementById('equipment-code').style.backgroundColor !== 'white'){
            choseAttribute("serial-number")
        }
        else if (document.getElementById('serial-number').style.backgroundColor !== 'white'){
            choseAttribute("smart-areas-assignment")
        }
        else if (document.getElementById('smart-areas-assignment').style.backgroundColor !== 'white'){
            choseAttribute("equipment-age")
        }
        else if (document.getElementById('equipment-age').style.backgroundColor !== 'white'){
            choseAttribute("sensor-loop")
        }
        else if (document.getElementById('sensor-loop').style.backgroundColor !== 'white'){
            choseAttribute("transmission-delay")
        }
        else if (document.getElementById('transmission-delay').style.backgroundColor !== 'white'){
            choseAttribute("voice-descriptor")
        }
        else if (document.getElementById('voice-descriptor').style.backgroundColor !== 'white'){
            choseAttribute("sensor-reports")
        }
        else if (document.getElementById('sensor-reports').style.backgroundColor !== 'white'){
            choseAttribute("sensor-supervised")
        }
        else if (document.getElementById('sensor-supervised').style.backgroundColor !== 'white'){
            choseAttribute("sensor-chime")
        }
    }

    function showOptions(selector){
        if(selector === "sensor-type"){
            if(document.getElementById("sensor-type-keypad").style.display === ""){
                document.getElementById("sensor-type-keypad").style.display = "none"
                document.getElementById("sensor-type-options").style.display = ""
            }
            else{
                document.getElementById("sensor-type-keypad").style.display = ""
                document.getElementById("sensor-type-options").style.display = "none"
            }
        }
        else if(selector === "equipment-code"){
            if(document.getElementById("equipment-code-keypad").style.display === ""){
                document.getElementById("equipment-code-keypad").style.display = "none"
                document.getElementById("equipment-code-options").style.display = ""
            }
            else{
                document.getElementById("equipment-code-keypad").style.display = ""
                document.getElementById("equipment-code-options").style.display = "none"
            }
        }
    }

    function nextZone(){
        if(Current_Zone === "Wireless Zone 001"){
            setCurrent_Zone('Wireless Zone 002')
            choseAttribute("sensor-type")
            updateButtons("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 002"){
            setCurrent_Zone('Wireless Zone 003')
            choseAttribute("sensor-type")
            updateButtons("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 003"){
            setCurrent_Zone('Wireless Zone 004')
            choseAttribute("sensor-type")
            updateButtons("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 004"){
            setCurrent_Zone('Wireless Zone 005')
            choseAttribute("sensor-type")
            updateButtons("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 005"){
            setCurrent_Zone('Wireless Zone 006')
            choseAttribute("sensor-type")
            updateButtons("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 006"){
            setCurrent_Zone('Wireless Zone 007')
            choseAttribute("sensor-type")
            updateButtons("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 007"){
            setCurrent_Zone('Wireless Zone 008')
            choseAttribute("sensor-type")
            updateButtons("sensor-type")
        }
    }

    function previousZone(){
        if(Current_Zone === "Wireless Zone 002"){
            setCurrent_Zone('Wireless Zone 001')
            choseAttribute("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 003"){
            setCurrent_Zone('Wireless Zone 002')
            choseAttribute("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 004"){
            setCurrent_Zone('Wireless Zone 003')
            choseAttribute("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 005"){
            setCurrent_Zone('Wireless Zone 004')
            choseAttribute("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 006"){
            setCurrent_Zone('Wireless Zone 005')
            choseAttribute("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 007"){
            setCurrent_Zone('Wireless Zone 006')
            choseAttribute("sensor-type")
        }
        else if(Current_Zone === "Wireless Zone 008"){
            setCurrent_Zone('Wireless Zone 007')
            choseAttribute("sensor-type")
        }
    }

    function updateSensorType(value){
        if(value === "00 - Unused"){
            setSensor_Type("00 - Unused")  //Hide Sensor Equipment Type
        }
        else if(value === "01 - Exit/Entry 1"){
            setSensor_Type("01 - Exit/Entry 1") //Hide Sensor Equipment Type
        }
        else if(value === "02 - Exit/Entry 2"){
            setSensor_Type("02 - Exit/Entry 2") //Hide Sensor Equipment Type
        }
        else if(value === "03 - Perimeter"){
            setSensor_Type("03 - Perimeter") //Hide Sensor Equipment Type
        }
        else if(value === "04 - Interior Follower"){
            setSensor_Type("04 - Interior Follower") //Show Sensor Equipment Type Motion and Contact
        }
        else if(value === "05 - Day Zone"){
            setSensor_Type("05 - Day Zone") //Hide Sensor Equipment Type
        }
        else if(value === "06 - 24-Hour Silent Alarm"){
            setSensor_Type("06 - 24-Hour Silent Alarm") //Show Sensor Equipment Type Contact and Emergency
        }
        else if(value === "07 - 24-Hour Audible Alarm"){
            setSensor_Type("07 - 24-Hour Audible Alarm") //Show Sensor Equipment Type Contact and Emergency
        }
        else if(value === "08 - 24-Hour Auxiliary Alarm"){
            setSensor_Type("08 - 24-Hour Auxiliary Alarm") //Show Sensor Equipment Type Contact and Emergency
        }
        else if(value === "09 - 24-Hour Fire"){
            setSensor_Type("09 - 24-Hour Fire") //Hide Sensor Equipment Type
        }
        else if(value === "10 - Interior with Delay"){
            setSensor_Type("10 - Interior with Delay") //Show Sensor Equipment Type Motion and Contact
        }
        else if(value === "14 - 24-Hour Carbon Monoxide"){
            setSensor_Type("14 - 24-Hour Carbon Monoxide") //Hide Sensor Equipment Type
        }
        else if(value === "16 - 24-Hour Fire Verification"){
            setSensor_Type("16 - 24-Hour Fire Verification") //Hide Sensor Equipment Type
        }
        else if(value === "23 - No Response Type"){
            setSensor_Type("23 - No Response Type") //Show Sensor Equipment Type Motion and Contact
        }
        else if(value === "24 - Silent Burglary"){
            setSensor_Type("24 - Silent Burglary") //Hide Sensor Equipment Type
        }
        else if(value === "32 - Remote Device"){
            setSensor_Type("32 - Remote Device") //Hide Sensor Equipment Type
        }
    }

    function addCodeSensorType(key){
        var val = document.getElementById("sensor-type-store").value;

        if(document.getElementById("sensor-type-tag").style.display !== "none"){
            document.getElementById("sensor-type-tag").style.display = "none"
            document.getElementById("sensor-type-store").style.display = ""
            document.getElementById("sensor-type-store").value = key
        }
    
        if(val.length < 2){
            val = val + "" + key;
            document.getElementById("sensor-type-store").value = val
        }
        if(val.length === 2){
            if(val === "00"){
                updateSensorType("00 - Unused")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "01"){
                updateSensorType("01 - Exit/Entry 1")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "02"){
                updateSensorType("02 - Exit/Entry 2")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "03"){
                updateSensorType("03 - Perimeter")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "04"){
                updateSensorType("04 - Interior Follower")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "05"){
                updateSensorType("05 - Day Zone")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "06"){
                updateSensorType("06 - 24-Hour Silent Alarm")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "07"){
                updateSensorType("07 - 24-Hour Audible Alarm")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "08"){
                updateSensorType("08 - 24-Hour Auxiliary Alarm")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "09"){
                updateSensorType("09 - 24-Hour Fire")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "10"){
                updateSensorType("10 - Interior with Delay")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "14"){
                updateSensorType("14 - 24-Hour Carbon Monoxide")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "16"){
                updateSensorType("16 - 24-Hour Fire Verification")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "23"){
                updateSensorType("23 - No Response Type")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "24"){
                updateSensorType("24 - Silent Burglary")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else if(val === "32"){
                updateSensorType("32 - Remote Device")
                document.getElementById("sensor-type-tag").style.display = ""
                document.getElementById("sensor-type-store").style.display = "none"
                document.getElementById("sensor-type-store").value = ""
            }
            else{
                invalidSensorTypeOn()
                document.getElementById("sensor-type-store").value = ""
            }
        }
    }
    
    function backspaceCodeSensorType(){
        var val = document.getElementById("sensor-type-store").value;
        val = val.slice(0, -1);
        document.getElementById("sensor-type-store").value = val;
    }


    function invalidSensorTypeOn(){
        document.getElementById("invalid-sensor-type").style.display = ""
    }

    function invalidSensorTypeOff(){
        document.getElementById("invalid-sensor-type").style.display = "none"
        document.getElementById("sensor-type-tag").style.display = ""
        document.getElementById("sensor-type-store").style.display = "none"
    }

    function invalidEquipmentCodeOn(){
        document.getElementById("invalid-equipment-code").style.display = ""
    }

    function invalidEquipmentCodeOff(){
        document.getElementById("invalid-equipment-code").style.display = "none"
        document.getElementById("equipment-code-tag").style.display = ""
        document.getElementById("equipment-code-store").style.display = "none"
    }

    function updateEquipmentCode(value){
        if (value === "0000 - Other"){
            setEquipment_Code('0000 - Other')
        }
        else if (value === "0862 - 2GIG Thin Door/Window Contact"){
            setEquipment_Code('0862 - 2GIG Thin Door/Window Contact')
        }
        else if (value === "0863 - 2GIG Recessed Door Contact"){
            setEquipment_Code(`0863 - 2GIG Recessed Door Contact`)
        }
        else if (value === "0865 - 2GIG Outdoor Door/Window Sensor"){
            setEquipment_Code(`0865 - 2GIG Outdoor Door/Window Sensor`)
        }
        else if (value === "0869 - 2GIG POR with Pet Immunity"){
            setEquipment_Code(`0869 - 2GIG POR with Pet Immunity`)
        }
        else if (value === "0864 - 2GIG Glass Break Detector"){
            setEquipment_Code(`0864 - 2GIG Glass Break Detector`)
        }
        else if (value === "0895 - SMKT2-345 GE Smoke/Heat Detector"){
            setEquipment_Code(`0895 - SMKT2-345 GE Smoke/Heat Detector`)
        }
        else if (value === "1058 - 2GIG Smoke Detector"){
            setEquipment_Code(`1085 - 2GIG Smoke Detector`)
        }
        else if (value === "0872 - SMKE1-345 Smoke Detector(USA)"){
            setEquipment_Code(`0872 - SMKE1-345 Smoke Detector(USA)`)
        }
        else if (value === "0871 - SMKE1-345 Smoke Detector(Canada)"){
            setEquipment_Code(`0871 - SMKE1-345 Smoke Detector(Canada)`)
        }
        else if (value === "0868 - 2GIG Panic Button Remote"){
            setEquipment_Code(`0868 - 2GIG Panic Button Remote`)
        }
        else if (value === "0860 - CO1-345 CO Detector(USA)"){
            setEquipment_Code(`0860 - CO1-345 CO Detector(USA)`)
        }
        else if (value === "0859 - CO1-345 CO Detector(Canada)"){
            setEquipment_Code(`0859 - CO1-345 CO Detector(Canada)`)
        }
        else if (value === "1026 - 2GIG CO Detector"){
            setEquipment_Code(`1026 - 2GIG CO Detector`)
        }
        else if (value === "1069 - 2GIG FireFighter SMKT/CO Listener"){
            setEquipment_Code(`1069 - 2GIG FireFighter SMKT/CO Listener`)
        }
        else if (value === "0873 - 2GIG Takeover Module"){
            setEquipment_Code(`0873 - 2GIG Takeover Module`)
        }
        else if (value === `0637 - HW D/W "5816"`){
            setEquipment_Code(`0637 - HW D/W "5816"`)
        }
        else if (value === `0470 - HW R-D/W "5818MNL"`){
            setEquipment_Code(`0470 - HW R-D/W "5818MNL"`)
        }
        else if (value === `0533 - HW PIR "5890"`){
            setEquipment_Code(`0533 - HW PIR "5890"`)
        }
        else if (value === `0530 - HW PIR "5894PI"`){
            setEquipment_Code(`0530 - HW PIR "5894PI"`)
        }
        else if (value === `0519 - HW Glass Break "5853"`){
            setEquipment_Code(`0519 - HW Glass Break "5853"`)
        }
        else if (value === `0589 - HW Smoke "5808W3"`){
            setEquipment_Code(`0589 - HW Smoke "5808W3"`)
        }
        else if (value === `0557 - HW Heat Sensor "5809"`){
            setEquipment_Code(`0557 - HW Heat Sensor "5809"`)
        }
        else if (value === `0624 - HW Flood Sensor "5821"`){
            setEquipment_Code(`0624 - HW Flood Sensor "5821"`)
        }
        else if (value === `0491 - HW Panic Pendant "5802MN2"`){
            setEquipment_Code(`0491 - HW Panic Pendant "5802MN2"`)
        }
        else if (value === "1063 - 2GIG 2GIG Doorbell"){
            setEquipment_Code(`1063 - 2GIG 2GIG Doorbell`)
        }
        else if (value === "1061 - Tilt Sensor"){
            setEquipment_Code(`1061 - Tilt Sensor`)
        }
        else if (value === "1062 - 2GIG Tilt Sensor"){
            setEquipment_Code(`1062 - 2GIG Tilt Sensor`)
        }
        else if (value === "1064 - 2GIG Bypass Sensor"){
            setEquipment_Code(`1064 - 2GIG Bypass Sensor`)
        }
        else if (value === "1065 - 2GIG Flood Sensor"){
            setEquipment_Code(`1065 - 2GIG Flood Sensor`)
        }
        else if (value === "1066 - 2GIG Shock Sensor"){
            setEquipment_Code(`1066 - 2GIG Shock Sensor`)
        }
        else if (value === "1067 - 2GIG Repeater"){
            setEquipment_Code(`1067 - 2GIG Repeater`)
        }
        else if (value === "1068 - 2GIG Translator"){
            setEquipment_Code(`1068 - 2GIG Translator`)
        }
        else if (value === "1070 - 2GIG F1-345"){
            setEquipment_Code(`1070 - 2GIG F1-345`)
        }
        else if (value === "1071 - 2GIG PHB-345"){
            setEquipment_Code(`1071 - 2GIG PHB-345`)
        }
        else if (value === "1072 - 2GIG Smoke Ring"){
            setEquipment_Code(`1072 - 2GIG Smoke Ring`)
        }
        else if (value === "0655 - Existing Door/Window Contact"){
            setEquipment_Code(`0655 - Existing Door/Window Contact`)
        }
        else if (value === "0609 - Existing Motion Detector"){
            setEquipment_Code(`0609 - Existing Motion Detector`)
        }
        else if (value === "0475 - Existing Glass Break Detector"){
            setEquipment_Code(`0475 - Existing Glass Break Detector`)
        }
        else if (value === "0616 - Existing Smoke Detector"){
            setEquipment_Code(`0616 - Existing Smoke Detector`)
        }
        else if (value === "0692 - Existing CO Detector"){
            setEquipment_Code(`0692 - Existing CO Detector`)
        }
        else if (value === "0708 - Existing Heat Sensor"){
            setEquipment_Code(`0708 - Existing Heat Sensor`)
        }
        else if (value === "0556 - Existing Flood/Temp Sensor"){
            setEquipment_Code(`0556 - Existing Flood/Temp Sensor`)
        }
        else if (value === "9999 - Alarm.com Image Sensor"){
            setEquipment_Code(`9999 - Alarm.com Image Sensor`)
        }
        else if (value === "2058 - eSeries Smoke Detector (USA)"){
            setEquipment_Code(`2058 - eSeries Smoke Detector (USA)`)
        }
        else if (value === "2061 - eSeries Tilt Sensor"){
            setEquipment_Code(`2061 - eSeries Tilt Sensor`)
        }
        else if (value === "2065 - eSeries Flood Sensor"){
            setEquipment_Code(`2065 - eSeries Flood Sensor`)
        }
        else if (value === "2066 - eSeries Shock Sensor"){
            setEquipment_Code(`2066 - eSeries Shock Sensor`)
        }
        else if (value === "2067 - eSeries Repeater"){
            setEquipment_Code(`2067 - eSeries Repeater`)
        }
        else if (value === "2069 - eSeries FireFighter SMKT/CO Listener"){
            setEquipment_Code(`2069 - eSeries FireFighter SMKT/CO Listener`)
        }
        else if (value === "2068 - eSeries Translator"){
            setEquipment_Code(`2068 - eSeries Translator`)
        }
        else if (value === "2070 - eSeries Water Sensor"){
            setEquipment_Code(`2070 - eSeries Water Sensor`)
        }
        else if (value === "2860 - eSeries CO Detector (USA)"){
            setEquipment_Code(`2860 - eSeries CO Detector (USA)`)
        }
        else if (value === "2862 - eSeries Thin Door/Window Contact"){
            setEquipment_Code(`2862 - eSeries Thin Door/Window Contact`)
        }
        else if (value === "2863 - eSeries Recessed Door Contact"){
            setEquipment_Code(`2863 - eSeries Recessed Door Contact`)
        }
        else if (value === "2865 - eSeries Outdoor Door/Window Sensor"){
            setEquipment_Code(`2865 - eSeries Outdoor Door/Window Sensor`)
        }
        else if (value === "2864 - eSeries Glass Break Detector"){
            setEquipment_Code(`2864 - eSeries Glass Break Detector`)
        }
        else if (value === "2868 - eSeries Panic"){
            setEquipment_Code(`2868 - eSeries Panic`)
        }
        else if (value === "2869 - eSeries PIR with Pet Immunity"){
            setEquipment_Code(`2869 - eSeries PIR with Pet Immunity`)
        }
        else if (value === "2873 - eSeries Takeover Module"){
            setEquipment_Code(`2873 - eSeries Takeover Module`)
        }
    }

    function addCodeEquipmentCode(key){
        var val = document.getElementById("equipment-code-store").value;

        if(document.getElementById("equipment-code-tag").style.display !== "none"){
            document.getElementById("equipment-code-tag").style.display = "none"
            document.getElementById("equipment-code-store").style.display = ""
            document.getElementById("equipment-code-store").value = key
        }
    
        if(val.length < 2){
            val = val + "" + key;
            document.getElementById("equipment-code-store").value = val
        }
        if(val.length === 2){
            if (val === "0000"){
                updateEquipmentCode('0000 - Other')
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0862"){
                updateEquipmentCode('0862 - 2GIG Thin Door/Window Contact')
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0863"){
                updateEquipmentCode(`0863 - 2GIG Recessed Door Contact`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0865"){
                updateEquipmentCode(`0865 - 2GIG Outdoor Door/Window Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0869"){
                updateEquipmentCode(`0869 - 2GIG POR with Pet Immunity`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0864"){
                updateEquipmentCode(`0864 - 2GIG Glass Break Detector`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0895"){
                updateEquipmentCode(`0895 - SMKT2-345 GE Smoke/Heat Detector`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1058"){
                updateEquipmentCode(`1085 - 2GIG Smoke Detector`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0872"){
                updateEquipmentCode(`0872 - SMKE1-345 Smoke Detector(USA)`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0871"){
                updateEquipmentCode(`0871 - SMKE1-345 Smoke Detector(Canada)`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0868"){
                updateEquipmentCode(`0868 - 2GIG Panic Button Remote`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0860"){
                updateEquipmentCode(`0860 - CO1-345 CO Detector(USA)`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0859"){
                updateEquipmentCode(`0859 - CO1-345 CO Detector(Canada)`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1026"){
                updateEquipmentCode(`1026 - 2GIG CO Detector`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1069"){
                updateEquipmentCode(`1069 - 2GIG FireFighter SMKT/CO Listener`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0873"){
                updateEquipmentCode(`0873 - 2GIG Takeover Module`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0637"){
                updateEquipmentCode(`0637 - HW D/W "5816"`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0470"){
                updateEquipmentCode(`0470 - HW R-D/W "5818MNL"`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0533"){
                updateEquipmentCode(`0533 - HW PIR "5890"`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0530"){
                updateEquipmentCode(`0530 - HW PIR "5894PI"`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0519"){
                updateEquipmentCode(`0519 - HW Glass Break "5853"`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0589"){
                updateEquipmentCode(`0589 - HW Smoke "5808W3"`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0557"){
                updateEquipmentCode(`0557 - HW Heat Sensor "5809"`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0624"){
                setEquipment_Code(`0624 - HW Flood Sensor "5821"`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0491"){
                updateEquipmentCode(`0491 - HW Panic Pendant "5802MN2"`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1063"){
                updateEquipmentCode(`1063 - 2GIG 2GIG Doorbell`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1061"){
                updateEquipmentCode(`1061 - Tilt Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1062"){
                updateEquipmentCode(`1062 - 2GIG Tilt Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1064"){
                updateEquipmentCode(`1064 - 2GIG Bypass Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1065"){
                updateEquipmentCode(`1065 - 2GIG Flood Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1066"){
                updateEquipmentCode(`1066 - 2GIG Shock Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1067"){
                updateEquipmentCode(`1067 - 2GIG Repeater`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1068"){
                updateEquipmentCode(`1068 - 2GIG Translator`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1070"){
                updateEquipmentCode(`1070 - 2GIG F1-345`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1071"){
                updateEquipmentCode(`1071 - 2GIG PHB-345`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "1072"){
                 updateEquipmentCode(`1072 - 2GIG Smoke Ring`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0655"){
                 updateEquipmentCode(`0655 - Existing Door/Window Contact`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0609"){
                 updateEquipmentCode(`0609 - Existing Motion Detector`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0475"){
                 updateEquipmentCode(`0475 - Existing Glass Break Detector`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0616"){
                 updateEquipmentCode(`0616 - Existing Smoke Detector`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0692"){
                 updateEquipmentCode(`0692 - Existing CO Detector`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0708"){
                 updateEquipmentCode(`0708 - Existing Heat Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "0556"){
                 updateEquipmentCode(`0556 - Existing Flood/Temp Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "9999"){
                 updateEquipmentCode(`9999 - Alarm.com Image Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2058"){
                 updateEquipmentCode(`2058 - eSeries Smoke Detector (USA)`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2061"){
                 updateEquipmentCode(`2061 - eSeries Tilt Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2065"){
                 updateEquipmentCode(`2065 - eSeries Flood Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2066"){
                 updateEquipmentCode(`2066 - eSeries Shock Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2067"){
                 updateEquipmentCode(`2067 - eSeries Repeater`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2069"){
                 updateEquipmentCode(`2069 - eSeries FireFighter SMKT/CO Listener`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2068"){
                 updateEquipmentCode(`2068 - eSeries Translator`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2070"){
                 updateEquipmentCode(`2070 - eSeries Water Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2860"){
                 updateEquipmentCode(`2860 - eSeries CO Detector (USA)`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2862"){
                 updateEquipmentCode(`2862 - eSeries Thin Door/Window Contact`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2863"){
                 updateEquipmentCode(`2863 - eSeries Recessed Door Contact`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2865"){
                 updateEquipmentCode(`2865 - eSeries Outdoor Door/Window Sensor`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2864"){
                 updateEquipmentCode(`2864 - eSeries Glass Break Detector`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2868"){
                 updateEquipmentCode(`2868 - eSeries Panic`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2869"){
                 updateEquipmentCode(`2869 - eSeries PIR with Pet Immunity`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else if (val === "2873"){
                updateEquipmentCode(`2873 - eSeries Takeover Module`)
                document.getElementById("equipment-code-tag").style.display = ""
                document.getElementById("equipment-code-store").style.display = "none"
                document.getElementById("equipment-code-store").value = ""
            }
            else{
                invalidEquipmentCodeOn()
                document.getElementById("equipment-code-store").value = ""
            }
        }
    }
    
    function backspaceCodeEquipmentCode(){
        var val = document.getElementById("sensor-type-store").value;
        val = val.slice(0, -1);
        document.getElementById("sensor-type-store").value = val;
    }

    function invalidSerialNumberOn(){
        document.getElementById("invalid-serial-number").style.display = ""
    }

    function invalidSerialNumberOff(){
        document.getElementById("invalid-serial-number").style.display = "none"
    }

    function addCodeSerialNumber(key){
        var val = document.getElementById("serial-number-store").value;

        if(document.getElementById("serial-number-store").style.backgroundColor !== "white"){
            document.getElementById("serial-number-store").style.backgroundColor = "white"
            document.getElementById("serial-number-store").value = key
        }
    
        if(val.length < 7){
            val = val + "" + key;
            document.getElementById("serial-number-store").value = val
        }
        
        if(val.length === 7){
            
        }
    }
    
    function backspaceCodeSerialNumber(){
        var val = document.getElementById("serial-number-store").value;
        val = val.slice(0, -1);
        document.getElementById("serial-number-store").value = val;
    }

    function choseAttribute(id){
        var retrievedSensors = localStorage.getItem("panelSensors");
        retrievedSensors = JSON.parse(retrievedSensors)

        var thisSensor = {}

        if(Current_Zone === "Wireless Zone 001"){
            thisSensor = retrievedSensors.sensor1
        }
        else if(Current_Zone === "Wireless Zone 002"){
            thisSensor = retrievedSensors.sensor2
        }
        else if(Current_Zone === "Wireless Zone 003"){
            thisSensor = retrievedSensors.sensor3
        }
        else if(Current_Zone === "Wireless Zone 004"){
            thisSensor = retrievedSensors.sensor4
        }
        else if(Current_Zone === "Wireless Zone 005"){
            thisSensor = retrievedSensors.sensor5
        }
        else if(Current_Zone === "Wireless Zone 006"){
            thisSensor = retrievedSensors.sensor6
        }
        else if(Current_Zone === "Wireless Zone 007"){
            thisSensor = retrievedSensors.sensor7
        }
        else if(Current_Zone === "Wireless Zone 008"){
            thisSensor = retrievedSensors.sensor8
        }

        if (document.getElementById("sensor-chime") !== null){
            if(document.getElementById("serial-number").style.backgroundColor !== "white"){
                var fillSerial = true
                var valCheck = document.getElementById("serial-number-store").value
                if(valCheck.length === 7){
                    if(valCheck.slice(0) !== "0"){
                        invalidSerialNumberOn()
                        return
                    }
                }
            }
            var selector = id
            console.log("id: ", selector)
            if(thisSensor.sensorType !== Sensor_Type){
                document.getElementById("sensor-type").style.color = "#D6A215";
            }
            else{
                document.getElementById("sensor-type").style.color = "#404956";
            }
            document.getElementById("sensor-type").style.backgroundColor = "white";
            document.getElementById("sensor-type").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("sensor-type-span").style.color = "gray";
            document.getElementById("sensor-equipment-type").style.backgroundColor = "white";
            if(thisSensor.sensorEquipmentType !== Sensor_Equipment_Type){
                document.getElementById("sensor-equipment-type").style.color = "#D6A215";
            }
            else{
                document.getElementById("sensor-equipment-type").style.color = "#404956";
            }
            document.getElementById("sensor-equipment-type").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("sensor-equipment-type-span").style.color = "gray";
            document.getElementById("equipment-code").style.backgroundColor = "white";
            if(thisSensor.sensorType !== Sensor_Type){
                document.getElementById("equipment-code").style.color = "#D6A215";
            }
            else{
                document.getElementById("equipment-code").style.color = "#404956";
            }
            document.getElementById("equipment-code").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("equipment-code-span").style.color = "gray";
            document.getElementById("serial-number").style.backgroundColor = "white";
            document.getElementById("serial-number").style.color = "#404956";
            document.getElementById("serial-number").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("serial-number-span").style.color = "gray";
            document.getElementById("smart-areas-assignment").style.backgroundColor = "white";
            document.getElementById("smart-areas-assignment").style.color = "#404956";
            document.getElementById("smart-areas-assignment").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("smart-areas-assignment-span").style.color = "gray";
            document.getElementById("equipment-age").style.backgroundColor = "white";
            document.getElementById("equipment-age").style.color = "#404956";
            document.getElementById("equipment-age").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("equipment-age-span").style.color = "gray";
            document.getElementById("sensor-loop").style.backgroundColor = "white";
            document.getElementById("sensor-loop").style.color = "#404956";
            document.getElementById("sensor-loop").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("sensor-loop-span").style.color = "gray";
            document.getElementById("transmission-delay").style.backgroundColor = "white";
            document.getElementById("transmission-delay").style.color = "#404956";
            document.getElementById("transmission-delay").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("transmission-delay-span").style.color = "gray";
            document.getElementById("voice-descriptor").style.backgroundColor = "white";
            document.getElementById("voice-descriptor").style.color = "#404956";
            document.getElementById("voice-descriptor").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("voice-descriptor-span").style.color = "gray";
            document.getElementById("sensor-reports").style.backgroundColor = "white";
            document.getElementById("sensor-reports").style.color = "#404956";
            document.getElementById("sensor-reports").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("sensor-reports-span").style.color = "gray";
            document.getElementById("sensor-supervised").style.backgroundColor = "white";
            document.getElementById("sensor-supervised").style.color = "#404956";
            document.getElementById("sensor-supervised").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("sensor-supervised-span").style.color = "gray";
            document.getElementById("sensor-chime").style.backgroundColor = "white";
            document.getElementById("sensor-chime").style.color = "#404956";
            document.getElementById("sensor-chime").style.backgroundImage = "linear-gradient(to right, white, transparent)";
            document.getElementById("sensor-chime-span").style.color = "gray";
            document.getElementById("sensor-type-display").style.display = "none";
            document.getElementById("equipment-code-display").style.display = "none";
            document.getElementById("serial-number-display").style.display = "none";
            document.getElementById("equipment-age-display").style.display = "none";
            document.getElementById("transmission-delay-display").style.display = "none";
            document.getElementById("sensor-reports-display").style.display = "none";
            document.getElementById("smart-areas-assignment-display").style.display = "none";
            document.getElementById("sensor-loop-display").style.display = "none";
            document.getElementById("voice-descriptor-display").style.display = "none";
            document.getElementById("sensor-supervised-display").style.display = "none";
            document.getElementById("sensor-chime-display").style.display = "none";
            document.getElementById(selector).style.backgroundColor = "#448cc0";
            document.getElementById(selector).style.color = "white";
            document.getElementById(selector).style.backgroundImage = "linear-gradient(to right, #3f94d1, transparent)";
            var selectorDisplay = selector + "-display"
            var selectorSpan = selector + "-span"
            document.getElementById(selectorDisplay).style.display = "";
            document.getElementById(selectorSpan).style.color = "white";

            if(Sensor_Type === "00 - Unused"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Hide Sensor Equipment Type
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "01 - Exit/Entry 1"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Hide Sensor Equipment Type
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "02 - Exit/Entry 2"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Hide Sensor Equipment Type
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "03 - Perimeter"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Hide Sensor Equipment Type
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "04 - Interior Follower"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Show Sensor Equipment Type Motion and Contact
                document.getElementById("sensor-equipment-type-1-1").style.display = ""
                document.getElementById("sensor-equipment-type-1-2").style.display = ""
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "05 - Day Zone"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Hide Sensor Equipment Type
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "06 - 24-Hour Silent Alarm"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Show Sensor Equipment Type Contact and Emergency
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = ""
                document.getElementById("sensor-equipment-type-2-2").style.display = ""
            }
            else if(Sensor_Type === "07 - 24-Hour Audible Alarm"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Show Sensor Equipment Type Contact and Emergency
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = ""
                document.getElementById("sensor-equipment-type-2-2").style.display = ""
            }
            else if(Sensor_Type === "08 - 24-Hour Auxiliary Alarm"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Show Sensor Equipment Type Contact and Emergency
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = ""
                document.getElementById("sensor-equipment-type-2-2").style.display = ""
            }
            else if(Sensor_Type === "09 - 24-Hour Fire"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Hide Sensor Equipment Type
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "10 - Interior with Delay"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Show Sensor Equipment Type Motion and Contact
                document.getElementById("sensor-equipment-type-1-1").style.display = ""
                document.getElementById("sensor-equipment-type-1-2").style.display = ""
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "14 - 24-Hour Carbon Monoxide"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Hide Sensor Equipment Type
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "16 - 24-Hour Fire Verification"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Hide Sensor Equipment Type
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "23 - No Response Type"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Show Sensor Equipment Type Motion and Contact
                document.getElementById("sensor-equipment-type-1-1").style.display = ""
                document.getElementById("sensor-equipment-type-1-2").style.display = ""
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "24 - Silent Burglary"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Hide Sensor Equipment Type
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }
            else if(Sensor_Type === "32 - Remote Device"){
                document.getElementById("sensor-equipment-type").style.display = "none" //Hide Sensor Equipment Type
                document.getElementById("sensor-equipment-type-1-1").style.display = "none"
                document.getElementById("sensor-equipment-type-1-2").style.display = "none"
                document.getElementById("sensor-equipment-type-2-1").style.display = "none"
                document.getElementById("sensor-equipment-type-2-2").style.display = "none"
            }

            updateButtons(selector)

            if(selector === "serial-number"){
                document.getElementById("serial-number-store").value = Serial_Number
                document.getElementById("serial-number-store").style.backgroundColor = "#E2E2E2"
            }

            if(fillSerial === true){
                var val = document.getElementById("serial-number-store").value;
                var check = false

                while(check !== true){
                    if(val.length < 7){
                        val = "0" + val
                    }

                    if(val.length === 7){
                        check = true
                    }
                }

                document.getElementById("serial-number-store").value = val
                setSerial_Number(val)
            }
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
                    {Current_Zone}
                </p>

                <Link to="/installer-toolbox/system-configuration/menu">
                    <div className="blue-button configuration-buttons" style={{'width':"250px", 'marginLeft':"8px",'float':"right", 'marginTop':"-27px", 'marginRight':"17px", 'boxShadow':"2px 2px 6px #383e56"}}>
                        <p style={{'marginTop':"-5px", 'marginRight':"15px"}}>
                            Return to System Configuration
                        </p>
                    </div>
                </Link>
            </div>

            <div id="invalid-sensor-type" style={{'display':"none"}} className="invalid-entry-area">
                <img src={info_gray_icon} alt="" className="invalid-entry-info-icon"/>

                <p className="invalid-entry-p-1">
                    Invalid Entry:
                </p>

                <p className="invalid-entry-p-2">
                    Sensor Type
                </p>

                <div className="invalid-entry-blue-button blue-button" onClick={() => invalidSensorTypeOff()}>
                    <img src={check_icon} className="invert-color invalid-entry-blue-button-image" alt=""/>

                    <p className="invalid-entry-blue-button-text">
                        OK
                    </p>
                </div>
            </div>

            <div id="invalid-equipment-code" style={{'display':"none"}} className="invalid-entry-area">
                <img src={info_gray_icon} alt="" className="invalid-entry-info-icon"/>

                <p className="invalid-entry-p-1">
                    Invalid Entry:
                </p>

                <p className="invalid-entry-p-2">
                    Equipment Code
                </p>

                <div className="invalid-entry-blue-button blue-button" onClick={() => invalidEquipmentCodeOff()}>
                    <img src={check_icon} className="invalid-entry-blue-button-image invert-color" alt=""/>

                    <p className="invalid-entry-blue-button-text">
                        OK
                    </p>
                </div>
            </div>

            <div id="invalid-serial-number" style={{'display':"none"}} className="invalid-entry-area">
                <img src={info_gray_icon} alt="" className="invalid-entry-info-icon"/>

                <p className="invalid-entry-p-1">
                    Invalid Entry:
                </p>

                <p className="invalid-entry-p-2">
                    Serial Number
                </p>

                <div className="invalid-entry-blue-button blue-button" onClick={() => invalidSerialNumberOff()}>
                    <img src={check_icon} className="invalid-entry-blue-button-image invert-color" alt=""/>

                    <p className="invalid-entry-blue-button-text">
                        OK
                    </p>
                </div>
            </div>

            <div className="screen-left-settings">
                <div className="config-container">
                    <div className="config-container-scroll">
                        <div style={{'marginTop':"110px"}}/>

                        <ul className="programming-list" style={{'marginTop':"0", 'marginBottom':"0"}}>
                            <li className="programming-right-side-list-option" onClick={() => choseAttribute("sensor-type")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="sensor-type">
                                    Sensor Type

                                    <span className="list-span" id="sensor-type-span">
                                        {Sensor_Type}
                                    </span>
                                </p>
                            </li>

                            <li className="programming-right-side-list-option" onClick={() => choseAttribute("sensor-equipment-type")} style={{'display':"none"}}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="sensor-equipment-type">
                                    Sensor Equipment Type

                                    <span className="list-span" id="sensor-equipment-type-span">
                                        {Sensor_Equipment_Type}
                                    </span>
                                </p>
                            </li>

                            <li className="programming-right-side-list-option"  onClick={() => choseAttribute("equipment-code")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="equipment-code">
                                    Equiment Code

                                    <span className="list-span" id="equipment-code-span">
                                        {Equipment_Code}
                                    </span>
                                </p>
                            </li>
                            
                            <li className="programming-right-side-list-option" onClick={() => choseAttribute("serial-number")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="serial-number">
                                    Serial Number
                                
                                    <span className="list-span" id="serial-number-span">
                                        {Serial_Number}
                                    </span>
                                </p>
                            </li>

                            <li className="programming-right-side-list-option" onClick={() => choseAttribute("smart-areas-assignment")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="smart-areas-assignment">
                                    Smart Areas Assignment
                                
                                    <span className="list-span" id="smart-areas-assignment-span">
                                        {Smart_Areas_Assignment}
                                    </span>
                                </p>
                            </li>

                            <li className="programming-right-side-list-option" onClick={() => choseAttribute("equipment-age")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="equipment-age">
                                    Equipment Age
                                
                                    <span className="list-span" id="equipment-age-span">
                                        {Equipment_Age}
                                    </span>
                                </p>
                            </li>

                            <li className="programming-right-side-list-option" onClick={() => choseAttribute("sensor-loop")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="sensor-loop">
                                    Sensor Loop
                                
                                    <span className="list-span" id="sensor-loop-span">
                                        {Sensor_Loop}
                                    </span>
                                </p>
                            </li>

                            <li className="programming-right-side-list-option" onClick={() => choseAttribute("transmission-delay")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="transmission-delay">
                                    Transmission Delay
                                
                                    <span className="list-span" id="transmission-delay-span">
                                        {Transmission_Delay}
                                    </span>
                                </p>
                            </li>

                            <li className="programming-right-side-list-option" onClick={() => choseAttribute("voice-descriptor")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="voice-descriptor">
                                    Voice Descriptor
                                
                                    <span className="list-span" id="voice-descriptor-span">
                                        {Voice_Descriptor}
                                    </span>
                                </p>
                            </li>

                            <li className="programming-right-side-list-option" onClick={() => choseAttribute("sensor-reports")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="sensor-reports">
                                    Sensor Reports
                                
                                    <span className="list-span" id="sensor-reports-span">
                                        {Sensor_Reports}
                                    </span>
                                </p>
                            </li>

                            <li className="programming-right-side-list-option" onClick={() => choseAttribute("sensor-supervised")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="sensor-supervised">
                                Sensor Supervised
                                
                                    <span className="list-span" id="sensor-supervised-span">
                                        {Sensor_Supervised}
                                    </span>
                                </p>
                            </li>

                            <li className="programming-right-side-list-option" style={{'borderBottom':"1px lightgrey solid"}} onClick={() => choseAttribute("sensor-chime")}>
                                <p style={{'color':"#404956", 'width':"295px"}} tabIndex="0" id="sensor-chime">
                                    Sensor Chime
                                
                                    <span className="list-span" id="sensor-chime-span">
                                        {Sensor_Chime}
                                    </span>
                                </p>
                            </li>
                        </ul>

                        <div className="reset-button">
                            Reset Zone
                        </div>

                        <div style={{'marginTop':"45px"}}/>
                    </div>
                </div>
            </div>

            <div className="screen-right-edit" id="sensor-type-display">
                <div className="keypad-data-top">
                    <p className="display-programming" id="sensor-type-tag">
                        {Sensor_Type}
                    </p>

                    <input type="text" style={{'display':"none", 'backgroundColor':"white"}} className="programming-edit-input" name="sensor-type-input" value="" maxLength="2" id="sensor-type-store" disabled/>

                    <span className="expander-programming" onClick={() => showOptions("sensor-type")}>
                        &#9776;
                    </span>
                </div>

                <div id="sensor-type-keypad" className="keypad-data-bottom">
                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSensorType("1")}>
                        <p>
                            1
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSensorType("2")}>
                        <p>
                            2
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSensorType("3")}>
                        <p>
                            3
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSensorType("4")}>
                        <p>
                            4
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSensorType("5")}>
                        <p>
                            5
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSensorType("6")}>
                        <p>
                            6
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSensorType("7")}>
                        <p>
                            7
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSensorType("8")}>
                        <p>
                            8
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSensorType("9")}>
                        <p>
                            9
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => backspaceCodeSensorType()}>
                        <img src={backspace_icon} style={{'height':"26px", 'marginTop':"6px", 'marginLeft':"23px"}} alt=""/>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSensorType("0")}>
                        <p>
                            0
                        </p>
                    </div>
                </div>

                <div id="sensor-type-options" style={{'display':"none"}} className="options-sensor">
                    <div className="config-container-scroll">
                        <ul className="options-list-add programming-list">
                            <li onClick={() => updateSensorType("00 - Unused")} style={{'borderTop':"none"}}><p id="00 - Unused">00 - Unused</p></li>
                            <li onClick={() => updateSensorType("01 - Exit/Entry 1")}><p id="01 - Exit/Entry 1">01 - Exit/Entry 1</p></li>
                            <li onClick={() => updateSensorType("02 - Exit/Entry 2")}><p id="02 - Exit/Entry 2">02 - Exit/Entry 2</p></li>
                            <li onClick={() => updateSensorType("03 - Perimeter")}><p id="03 - Perimeter">03 - Perimeter</p></li>
                            <li onClick={() => updateSensorType("04 - Interior Follower")}><p id="04 - Interior Follower">04 - Interior Follower</p></li>
                            <li onClick={() => updateSensorType("05 - Day Zone")}><p id="05 - Day Zone">05 - Day Zone</p></li>
                            <li onClick={() => updateSensorType("06 - 24-Hour Silent Alarm")}><p id="06 - 24-Hour Silent Alarm">06 - 24-Hour Silent Alarm</p></li>
                            <li onClick={() => updateSensorType("07 - 24-Hour Audible Alarm")}><p id="07 - 24-Hour Audible Alarm">07 - 24-Hour Audible Alarm</p></li>
                            <li onClick={() => updateSensorType("08 - 24-Hour Auxiliary Alarm")}><p id="08 - 24-Hour Auxiliary Alarm">08 - 24-Hour Auxiliary Alarm</p></li>
                            <li onClick={() => updateSensorType("09 - 24-Hour Fire")}><p id="09 - 24-Hour Fire">09 - 24-Hour Fire</p></li>
                            <li onClick={() => updateSensorType("10 - Interior with Delay")}><p id="10 - Interior with Delay">10 - Interior with Delay</p></li>
                            <li onClick={() => updateSensorType("14 - 24-Hour Carbon Monoxide")}><p id="14 - 24-Hour Carbon Monoxide">14 - 24-Hour Carbon Monoxide</p></li>
                            <li onClick={() => updateSensorType("16 - 24-Hour Fire Verification")}><p id="16 - 24-Hour Fire Verification">16 - 24-Hour Fire Verification</p></li>
                            <li onClick={() => updateSensorType("23 - No Response Type")}><p id="23 - No Response Type">23 - No Response Type</p></li>
                            <li onClick={() => updateSensorType("24 - Silent Burglary")}><p id="24 - Silent Burglary">24 - Silent Burglary</p></li>
                            <li onClick={() => updateSensorType("32 - Remote Device")}><p id="32 - Remote Device">32 - Remote Device</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="screen-right-settings" style={{'display':"none"}} id="sensor-equipment-type-display">
                <div className="config-container-scroll" style={{'overflow':"hidden"}}>
                    {/* Smart Areas Assignment */}

                    <p className="options-title-header">
                        Sensor Equipment Type
                    </p>

                    <ul className="checkbox-list">
                        <li id="sensor-equipment-type-1-1" style={{'display':"none"}}>
                            <label className="container">Contact
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li id="sensor-equipment-type-1-2" style={{'display':"none"}}>
                            <label className="container">Motion
                                <input type="radio" defaultChecked name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li id="sensor-equipment-type-2-1" style={{'display':"none"}}>
                            <label className="container">Contact
                                <input type="radio" defaultChecked name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li id="sensor-equipment-type-2-2" style={{'display':"none"}}>
                            <label className="container">Emergency
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="screen-right-edit" style={{'display':"none"}} id="equipment-code-display">
                {/* Equipment Code */}
                <div className="keypad-data-top">
                <p className="display-programming" id="equipment-code-tag">
                        {Equipment_Code}
                    </p>

                    <input type="text" style={{'display':"none", 'backgroundColor':"white"}} className="programming-edit-input" name="equipment-code-input" value="" maxLength="2" id="equipment-code-store" disabled/>

                    <span className="expander-programming" onClick={() => showOptions("equipment-code")}>
                        &#9776;
                    </span>
                </div>

                <div id="equipment-code-keypad" className="keypad-data-bottom">
                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeEquipmentCode("1")}>
                        <p>
                            1
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeEquipmentCode("2")}>
                        <p>
                            2
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeEquipmentCode("3")}>
                        <p>
                            3
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeEquipmentCode("4")}>
                        <p>
                            4
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeEquipmentCode("5")}>
                        <p>
                            5
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeEquipmentCode("6")}>
                        <p>
                            6
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeEquipmentCode("7")}>
                        <p>
                            7
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeEquipmentCode("8")}>
                        <p>
                            8
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeEquipmentCode("9")}>
                        <p>
                            9
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => backspaceCodeEquipmentCode()}>
                        <img src={backspace_icon} style={{'height':"26px", 'marginTop':"6px", 'marginLeft':"23px"}} alt=""/>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeEquipmentCode("0")}>
                        <p>
                            0
                        </p>
                    </div>
                </div>

                <div id="equipment-code-options" style={{'display':"none"}} className="options-sensor">
                    <div className="config-container-scroll">
                        <ul className="options-list-add programming-list">
                            <li style={{'borderTop':"none"}}><p>0000 - Other</p></li>
                            <li><p>0862 - 2GIG Thin Door/Window Contact</p></li>
                            <li><p>0863 - 2GIG Recessed Door Contact</p></li>
                            <li><p>0865 - 2GIG Outdoor Door/Window Sensor</p></li>
                            <li><p>0869 - 2GIG POR with Pet Immunity</p></li>
                            <li><p>0864 - 2GIG Glass Break Detector</p></li>
                            <li><p>0895 - SMKT2-345 GE Smoke/Heat Detector</p></li>
                            <li><p>1085 - 2GIG Smoke Detector</p></li>
                            <li><p>0872 - SMKE1-345 Smoke Detector(USA)</p></li>
                            <li><p>0871 - SMKE1-345 Smoke Detector(Canada)</p></li>
                            <li><p>0868 - 2GIG Panic Button Remote</p></li>
                            <li><p>0860 - CO1-345 CO Detector(USA)</p></li>
                            <li><p>0859 - CO1-345 CO Detector(Canada)</p></li>
                            <li><p>1026 - 2GIG CO Detector</p></li>
                            <li><p>1069 - 2GIG FireFighter SMKT/CO Listener</p></li>
                            <li><p>0873 - 2GIG Takeover Module</p></li>
                            <li><p>0637 - HW D/W "5816"</p></li>
                            <li><p>0470 - HW R-D/W "5818MNL"</p></li>
                            <li><p>0533 - HW PIR "5890"</p></li>
                            <li><p>0530 - HW PIR "5894PI"</p></li>
                            <li><p>0519 - HW Glass Break "5853"</p></li>
                            <li><p>0589 - HW Smoke "5808W3"</p></li>
                            <li><p>0557 - HW Heat Sensor "5809"</p></li>
                            <li><p>0624 - HW Flood Sensor "5821"</p></li>
                            <li><p>0491 - HW Panic Pendant "5802MN2"</p></li>
                            <li><p>1063 - 2GIG 2GIG Doorbell</p></li>
                            <li><p>1061 - Tilt Sensor</p></li>
                            <li><p>1062 - 2GIG Tilt Sensor</p></li>
                            <li><p>1064 - 2GIG Bypass Sensor</p></li>
                            <li><p>1065 - 2GIG Flood Sensor</p></li>
                            <li><p>1066 - 2GIG Shock Sensor</p></li>
                            <li><p>1067 - 2GIG Repeater</p></li>
                            <li><p>1068 - 2GIG Translator</p></li>
                            <li><p>1070 - 2GIG F1-345</p></li>
                            <li><p>1071 - 2GIG PHB-345</p></li>
                            <li><p>1072 - 2GIG Smoke Ring</p></li>
                            <li><p>0655 - Existing Door/Window Contact</p></li>
                            <li><p>0609 - Existing Motion Detector</p></li>
                            <li><p>0475 - Existing Glass Break Detector</p></li>
                            <li><p>0616 - Existing Smoke Detector</p></li>
                            <li><p>0692 - Existing CO Detector</p></li>
                            <li><p>0708 - Existing Heat Sensor</p></li>
                            <li><p>0556 - Existing Flood/Temp Sensor</p></li>
                            <li><p>9999 - Alarm.com Image Sensor</p></li>
                            <li><p>2058 - eSeries Smoke Detector (USA)</p></li>
                            <li><p>2061 - eSeries Tilt Sensor</p></li>
                            <li><p>2065 - eSeries Flood Sensor</p></li>
                            <li><p>2066 - eSeries Shock Sensor</p></li>
                            <li><p>2067 - eSeries Repeater</p></li>
                            <li><p>2069 - eSeries FireFighter SMKT/CO Listener</p></li>
                            <li><p>2068 - eSeries Translator</p></li>
                            <li><p>2070 - eSeries Water Sensor</p></li>
                            <li><p>2860 - eSeries CO Detector (USA)</p></li>
                            <li><p>2862 - eSeries Thin Door/Window Contact</p></li>
                            <li><p>2863 - eSeries Recessed Door Contact</p></li>
                            <li><p>2865 - eSeries Outdoor Door/Window Sensor</p></li>
                            <li><p>2864 - eSeries Glass Break Detector</p></li>
                            <li><p>2868 - eSeries Panic</p></li>
                            <li><p>2869 - eSeries PIR with Pet Immunity</p></li>
                            <li><p>2873 - eSeries Takeover Module</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="screen-right-edit" style={{'display':"none"}} id="serial-number-display">
                {/* Serial Number */}
                <div className="keypad-data-top">
                    <input type="text" className="programming-edit-input" name="serial-number-input" value="" maxLength="7" id="serial-number-store" disabled/>

                    <span className="expander-programming" style={{'marginRight':"8px", 'marginTop':"-1px"}}>
                        <div className="paste-button key-button number">
                            &#x2199;
                        </div>
                    </span>
                </div>

                <div id="sensor-type-keypad" className="keypad-data-bottom">
                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSerialNumber("1")}>
                        <p>
                            1
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}onClick={() => addCodeSerialNumber("2")}>
                        <p>
                            2
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSerialNumber("3")}>
                        <p>
                            3
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSerialNumber("4")}>
                        <p>
                            4
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSerialNumber("5")}>
                        <p>
                            5
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSerialNumber("6")}>
                        <p>
                            6
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSerialNumber("7")}>
                        <p>
                            7
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSerialNumber("8")}>
                        <p>
                            8
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSerialNumber("9")}>
                        <p>
                            9
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => backspaceCodeSerialNumber()}>
                        <img src={backspace_icon} style={{'height':"26px", 'marginTop':"6px", 'marginLeft':"23px"}} alt=""/>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}} onClick={() => addCodeSerialNumber("0")}>
                        <p>
                            0
                        </p>
                    </div>

                    <div className="key-button number" style={{'width':"99px", 'marginLeft':"7px"}}>
                        <p>
                            Learn
                        </p>
                    </div>
                </div>

                <div style={{'display':"none"}}>
                    {/* <img/> */}

                    <p>
                        No serial number available to paste
                    </p>

                    <div>
                        {/* <img/> */}
                        Ok
                    </div>
                </div>
            </div>

            <div className="screen-right-settings" style={{'display':"none"}} id="smart-areas-assignment-display">
                <div className="config-container-scroll" style={{'overflow':"hidden"}}>
                    {/* Smart Areas Assignment */}

                    <p className="options-title-header">
                        Smart Areas Assignment
                    </p>

                    <ul className="checkbox-list">
                        <li>
                            <label className="container">S1
                                <input type="radio" defaultChecked name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">S2
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">S3
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container" style={{'marginBottom':"0"}}>S4
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="screen-right-settings" style={{'display':"none"}} id="equipment-age-display">
                <div className="config-container-scroll" style={{'overflow':"hidden"}}>
                    {/* Equipment Age */}

                    <p className="options-title-header">
                        Equipment Age
                    </p>

                    <ul className="checkbox-list">
                        <li>
                            <label className="container">New
                                <input type="radio" defaultChecked={true} name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container" style={{'marginBottom':"0"}}>Existing
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="screen-right-settings" style={{'display':"none"}} id="sensor-loop-display">
                <div className="config-container-scroll" style={{'overflow':"hidden"}}>
                    {/* Sensor Loop */}

                    <p className="options-title-header">
                        Sensor Loop
                    </p>

                    <ul className="checkbox-list">
                        <li>
                            <label className="container"> Loop 1
                                <input type="radio" defaultChecked={true} name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Loop 2
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container" style={{'marginBottom':"0"}}>Loop 3
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="screen-right-settings" style={{'display':"none"}} id="transmission-delay-display">
                <div className="config-container-scroll" style={{'overflow':"hidden"}}>
                    {/* Transmission Delay */}

                    <p className="options-title-header">
                        Transmission Delay
                    </p>

                    <ul className="checkbox-list">
                        <li>
                            <label className="container">Enabled
                                <input type="radio" defaultChecked={true} name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container" style={{'marginBottom':"0"}}>Disabled
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="screen-right-settings" style={{'display':"none"}} id="voice-descriptor-display">
                <div className="config-container-scroll" style={{'overflow':"hidden"}}>
                    {/* Voice Descriptor */}

                    <p className="voice-descriptor-text options-title-header">
                        {Voice_Descriptor}
                    </p>

                    <div className="voice-descriptor-button">
                        <p>
                            Edit Voice
                        </p>

                        <p style={{'marginTop':"-17px"}}>
                            Descriptor
                        </p>
                    </div>
                </div>
            </div>

            <div className="screen-right-settings" style={{'display':"none"}} id="sensor-reports-display">
                <div className="config-container-scroll" style={{'overflow':"hidden"}}>
                    {/* Sensor Reports */}

                    <p className="options-title-header">
                        Sensor Reports
                    </p>

                    <ul className="checkbox-list">
                        <li>
                            <label className="container">Enabled
                                <input type="radio" defaultChecked={true} name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container" style={{'marginBottom':"0"}}>Disabled
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="screen-right-settings" style={{'display':"none"}} id="sensor-supervised-display">
                <div className="config-container-scroll"  style={{'overflow':"hidden"}}>
                    {/* Sensor Supervised */}

                    <p className="options-title-header">
                        Sensor Supervised
                    </p>

                    <ul className="checkbox-list">
                        <li>
                            <label className="container">Enabled
                                <input type="radio" defaultChecked={true} name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container" style={{'marginBottom':"0"}}>Disabled
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="screen-right-settings" style={{'display':"none"}} id="sensor-chime-display">
                <div className="config-container-scroll">
                    {/* Sensor Chime */}

                    <p className="options-title-header">
                        Sensor Chime
                    </p>

                    <ul className="checkbox-list">
                        <li>
                            <label className="container">Disabled
                                <input type="radio" defaultChecked={true} name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Voice Only
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Ding-Dong #1 with Voice
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Ding-Dong #2
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Ding-Dong #2 with Voice
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Ding-Dong #1
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Ding-Dong
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Ding-Dong with Voice
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Ding-Dong #3
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Ding-Dong #3 with Voice
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Chime #1
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Chime #1 with Voice
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container">Chime #2
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>

                        <li>
                            <label className="container" style={{'marginBottom':"0"}}>Chime #2 with Voice
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{'bottom':"0",'width':"645px", 'height':"55px", 'position':"absolute", 'marginBottom':"108px", 'display': "inline-grid", 'gridTemplateColumns':"165px 165px 103px 103px 103px", 'marginLeft':"-310px"}}>
                <Link to="/installer-toolbox/system-configuration/wireless-zones/menu">
                    <div className="blue-button configuration-buttons" style={{'marginLeft':"8px", 'width':"135px"}}>
                        <p style={{'marginTop':"10px"}}>
                            Back To Zones
                        </p>
                    </div>
                </Link>

                <div className="blue-button configuration-buttons" style={{'marginLeft':"-3px", 'width':"135px"}} onClick={() => nextZone()}>
                    <p style={{'marginTop':"10px"}}>
                       Next Zone
                    </p>
                </div>

                <div id="left-arrow" className="blue-button configuration-buttons" style={{'display':"none"}} onClick={() => previousZone()} onLoad={() => choseAttribute("sensor-type")}>
                    <img src={rewind_icon} style={{'height':"15px", 'marginTop':"10px"}} className="invert-color" alt=""/>
                </div>

                <div id="up-arrow" className="blue-button configuration-buttons" onClick={() => goUp()}>
                    <img src={up_arrow_icon} style={{'height':"15px", 'marginTop':"10px"}} alt="" />
                </div>

                <div id="filler" style={{'display':"none"}}>

                </div>

                <div>

                </div>

                <div id="down-arrow" className="blue-button configuration-buttons" onClick={() => goDown()}>
                    <img src={down_arrow_icon} style={{'height':"15px", 'marginTop':"10px"}} alt=""/>
                </div>

                <div id="right-arrow" className="blue-button configuration-buttons" style={{'display':"none"}} onClick={() => nextZone()} onLoad={() => choseAttribute("sensor-type")}>
                    <img src={fast_forward_icon} style={{'height':"15px", 'marginTop':"10px"}} className="invert-color" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default SystemConfigurationWirelessEdit