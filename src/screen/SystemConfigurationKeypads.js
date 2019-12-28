import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import keypad_icon from '../images/keypad.png'
import up_arrow_icon from '../images/up-arrow.png';
import down_arrow_icon from '../images/down-arrow.png';

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

function SystemConfigurationKeypads(){
    const [Keypad_Used,setKeypad_Used] = useState(`Disabled`)
    const [Equipment_Code,setEquipment_Code] = useState(`0867 - PAD1-345 Wireless Keypad`)
    const [Serial_Number,setSerial_Number] = useState(`0000000`)
    const [Smart_Areas_Assignment,setSmart_Areas_Assignment] = useState(`S1`)
    const [Equipment_Age,setEquipment_Age] = useState(`New`)
    const [Emergency_Keys,setEmergency_Keys] = useState(`Disabled`)
    const [Voice_Descriptor,setVoice_Descriptor] = useState(`<None>`)
    
    function KeypadUsed(){
        if(document.getElementById('fob-used') !== undefined){
            var zone = ""
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
            console.log(zone)
    
            var retrievedSensors = localStorage.getItem("panelKeypads");
            retrievedSensors = JSON.parse(retrievedSensors)
            var datapass = ""
            if (zone === "1"){
                datapass = retrievedSensors.keypad1.keypadUsed
            }
            else if (zone === "2"){
                datapass = retrievedSensors.keypad2.keypadUsed
            }
            else if (zone === "3"){
                datapass = retrievedSensors.keypad3.keypadUsed
            }
            else if (zone === "4"){
                datapass = retrievedSensors.keypad4.keypadUsed
            }
            console.log("fobUsed: ", datapass)
            
            if(datapass === "enabled"){
                setKeypad_Used(`Enabled`)
            }
            else if(datapass === "disabled"){
                setKeypad_Used(`Disabled`)
            }
            else {
                setKeypad_Used(`Enabled`)
            }
        }
    }

    function EquipmentCode(){
        var zone = ""
        if (document.getElementById("zone-four") !== null){
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
        }
        var retrievedSensors = localStorage.getItem("panelKeypads");
        retrievedSensors = JSON.parse(retrievedSensors)
        var datapass = ""
        if (zone === "1"){
            datapass = retrievedSensors.keypad1.equipmentCode
        }
        else if (zone === "2"){
            datapass = retrievedSensors.keypad2.equipmentCode
        }
        else if (zone === "3"){
            datapass = retrievedSensors.keypad3.equipmentCode
        }
        else if (zone === "4"){
            datapass = retrievedSensors.keypad4.equipmentCode
        }
        console.log("equipmentCode: ", datapass)
    
        if (datapass === "0000"){
            setEquipment_Code('0000 - Other')
        }
        else if (datapass === "1060"){
            setEquipment_Code('1060 - 2GIG SP1 Touchscreen')
        }
        else if (datapass === "0867"){
            setEquipment_Code(`0867 - PAD1-345 Wireless Keypad`)
        }
        else if (datapass === "1074"){
            setEquipment_Code(`1074 - 2GIG SP2 Touchscreen`)
        }
        else {
            setEquipment_Code(`0000 - Other`)
        }
    }
    
    function SerialNumber(){
        var zone = ""
        if (document.getElementById("zone-four") !== null){
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
        }
        var retrievedSensors = localStorage.getItem("panelKeypads");
        retrievedSensors = JSON.parse(retrievedSensors)
        var datapass = ""
        if (zone === "1"){
            datapass = retrievedSensors.keypad1.serialNumber
        }
        else if (zone === "2"){
            datapass = retrievedSensors.keypad2.serialNumber
        }
        else if (zone === "3"){
            datapass = retrievedSensors.keypad3.serialNumber
        }
        else if (zone === "4"){
            datapass = retrievedSensors.keypad4.serialNumber
        }
        console.log("serialNumber: ", datapass)
    
        if (datapass !== null){
            if(typeof datapass !== "object"){
                setSerial_Number(datapass)
            }
            else{
                setSerial_Number('0000000')
            }
        }
        else{
            setSerial_Number('0000000')
        }
    }
    
    function SmartAreasAssignment(){
        var zone = ""
        if (document.getElementById("zone-four") !== null){
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
        }
        var retrievedSensors = localStorage.getItem("panelKeypads");
        retrievedSensors = JSON.parse(retrievedSensors)
        var datapass = ""
        if (zone === "1"){
            datapass = retrievedSensors.keypad1.smartAreasAssignment
        }
        else if (zone === "2"){
            datapass = retrievedSensors.keypad2.smartAreasAssignment
        }
        else if (zone === "3"){
            datapass = retrievedSensors.keypad3.smartAreasAssignment
        }
        else if (zone === "4"){
            datapass = retrievedSensors.keypad4.smartAreasAssignment
        }
        console.log("smartAreasAssignment: ", datapass)
    
        if (datapass === "s1"){
            setSmart_Areas_Assignment(`S1`)
        }
        else if(datapass === "s2"){
            setSmart_Areas_Assignment(`S2`)
        }
        else if(datapass === "s3"){
            setSmart_Areas_Assignment(`S3`)
        }
        else if(datapass === "s4"){
            setSmart_Areas_Assignment(`S4`)
        }
        else{
            setSmart_Areas_Assignment(`S1`)
        }
    }
    
    function EquipmentAge(){
        var zone = ""
        if (document.getElementById("zone-four") !== null){
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
        }
        var retrievedSensors = localStorage.getItem("panelKeypads");
        retrievedSensors = JSON.parse(retrievedSensors)
        var datapass = ""
        if (zone === "1"){
            datapass = retrievedSensors.keypad1.equipmentAge
        }
        else if (zone === "2"){
            datapass = retrievedSensors.keypad2.equipmentAge
        }
        else if (zone === "3"){
            datapass = retrievedSensors.keypad3.equipmentAge
        }
        else if (zone === "4"){
            datapass = retrievedSensors.keypad4.equipmentAge
        }
        console.log("equipmentAge: ", datapass)
    
        if (datapass === "new"){
            setEquipment_Age(`New`)
        }
        else if (datapass === "existing"){
            setEquipment_Age(`Existing`)
        }
        else{
            setEquipment_Age(`New`)
        }
    }
    
    function EmergencyKeys(){
        var zone = ""
        if (document.getElementById("zone-four") !== null){
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
        }
        var retrievedSensors = localStorage.getItem("panelKeypads");
        retrievedSensors = JSON.parse(retrievedSensors)
        var datapass = ""
        if (zone === "1"){
            datapass = retrievedSensors.keypad1.emergencyKeys
        }
        else if (zone === "2"){
            datapass = retrievedSensors.keypad2.emergencyKeys
        }
        else if (zone === "3"){
            datapass = retrievedSensors.keypad3.emergencyKeys
        }
        else if (zone === "4"){
            datapass = retrievedSensors.keypad4.emergencyKey
        }
        console.log("emergencyKeys: ", datapass)
    
        if (datapass === "enabled"){
            setEmergency_Keys(`Enabled`)
        }
        else if(datapass === "disabled"){
            setEmergency_Keys(`Disabled`)
        }
        else{
            setEmergency_Keys(`Enabled`)
        }
    }
    
    function VoiceDescriptor(){
        var zone = ""
        if (document.getElementById("zone-four") !== null){
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
        }
        var retrievedSensors = localStorage.getItem("panelKeypads");
        retrievedSensors = JSON.parse(retrievedSensors)
        var datapass = ""
        if (zone === "1"){
            datapass = retrievedSensors.keypad1.voiceDescriptor
        }
        else if (zone === "2"){
            datapass = retrievedSensors.keypad2.voiceDescriptor
        }
        else if (zone === "3"){
            datapass = retrievedSensors.keypad3.voiceDescriptor
        }
        else if (zone === "4"){
            datapass = retrievedSensors.keypad4.voiceDescriptor
        }
        console.log("voiceDescriptor: ", datapass)
    
        var fullDescriptor = ""
        
        for(var i=1; i<7; i++){
            var temp = partDescription(datapass, i)
            if (temp === " <None>"){
                if (i === 1){
                    fullDescriptor = ` <None>`
                }
                break
            }
            fullDescriptor += temp
        }
        fullDescriptor = fullDescriptor.slice(1)
        setVoice_Descriptor(fullDescriptor)
    }

    function choseZone(id){
        console.log("-------------")
        console.log("NEW ZONE DATA")
        console.log("-------------")
        if (document.getElementById("zone-four") !== null){
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
    
            KeypadUsed()
            EquipmentCode()
            SerialNumber()
            SmartAreasAssignment()
            EquipmentAge()
            EmergencyKeys()
            VoiceDescriptor()
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
    }

    useEffect(() => {
        KeypadUsed()
        EquipmentCode()
        SerialNumber()
        SmartAreasAssignment()
        EquipmentAge()
        EmergencyKeys()
        VoiceDescriptor()
    });
    return(
        <div className="screen-style">
            <div className="screen-header">
                <img src={keypad_icon} className="resize-1" alt="" />

                <p style={{'marginLeft':"30px"}}>
                    Keypads
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
                            <li><p id="zone-one" tabIndex="0" onClick={() => choseZone("zone-one")}>Keypad 1</p></li>
                            <li><p id="zone-two" tabIndex="0" onClick={() => choseZone("zone-two")}>Keypad 2</p></li>
                            <li><p id="zone-three" tabIndex="0" onClick={() => choseZone("zone-three")}>Keypad 3</p></li>
                            <li><p id="zone-four" tabIndex="0" onClick={() => choseZone("zone-four")}>Keypad 4</p></li>
                        </ul>

                        <div style={{'marginTop':"110px"}}/> {/* May be a good idea to add a slight white haze to the bottom of this. */}
                    </div>
                </div>
            </div>

            <div className="screen-right-settings">
                <Link to="/installer-toolbox/system-configuration/keypads/edit" style={{'textDecoration':"none"}}>
                    <div className="config-container">
                        <div className="config-container-scroll">
                            <ul className="programming-list" style={{'marginTop':"0", 'marginBottom':"0"}}>
                                <li className="programming-right-side-list-option" style={{'borderTop':"none"}}><p style={{'color':"#404956"}}>Keypad Used</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Keypad_Used}</p></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Equiment Code</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Equipment_Code}</p></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Serial Number</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Serial_Number}</p></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Smart Areas Assignment</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Smart_Areas_Assignment}</p></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Equipment Age</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Equipment_Age}</p></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Emergency Keys</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Emergency_Keys}</p></li>
                                <li className="programming-right-side-list-option"><p style={{'color':"#404956"}}>Voice Descriptor</p><p id="sensor-type" className="css-grid-align-right" style={{'color':"#404956"}}>{Voice_Descriptor}</p></li>
                            </ul>
                        </div>
                    </div>
                </Link>
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

                <Link to="/installer-toolbox/system-configuration/keypads/edit">
                    <div className="blue-button configuration-buttons" style={{'gridArea':"1 / 3 / 1 / 3"}}>
                        <p style={{'marginTop':"10px", 'fontSize':"14px"}}>
                            Edit Keypad
                        </p>
                    </div>
                </Link>

                <div id="down-arrow" className="blue-button configuration-buttons"  onClick={() => goDown()} style={{'gridColumnStart':"4"}}>
                    <img src={down_arrow_icon} style={{'height':"15px", 'marginTop':"10px"}} alt="" onLoad={() => choseZone("zone-one")}/>
                </div>
            </div>
        </div>
    )
}

export default SystemConfigurationKeypads