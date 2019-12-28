import { createStore} from "redux";

// Note on setup of system codes array
//column 1 is the name of the user
//column 2 is the code of the user
//column 3 is the system access of the user
//column 4 is the smart areas 2 access of the user
//column 5 is the smart areas 3 access of the user
//column 6 is the smart areas 4 access of the user
//column 7 is the enabled status of the user
//column 8(if applicable) is the installer access identifier, if defined and code correct it will allow access to installer toolbox/installer system settings menu
//columns 3-7 are determined in binary 0 is off 1 is on

const initCodes = {
    master:{
        name:"Master",
        code:"1111",
        access:"1",
        area2:"1",
        area3:"1",
        area4:"1",
        enabled:"1"
    },
    installer:{
        name:"Installer", 
        code:"1561",
        access:"0",
        area2:"0",
        area3:"0",
        area4:"0",
        enabled:"1",
        installer:"1"
    },
    user3:{
        name:"",
        code:"",
        access:"0",
        area2:"0",
        area3:"0",
        area4:"0",
        enabled:"1"
    },
    user4:{
        name:"",
        code:"",
        access:"0",
        area2:"0",
        area3:"0",
        area4:"0",
        enabled:"1"
    },
    user5:{
        name:"",
        code:"",
        access:"0",
        area2:"0",
        area3:"0",
        area4:"0",
        enabled:"1"
    },
    user6:{
        name:"",
        code:"",
        access:"0",
        area2:"0",
        area3:"0",
        area4:"0",
        enabled:"1"
    },
    user7:{
        name:"",
        code:"",
        access:"0",
        area2:"0",
        area3:"0",
        area4:"0",
        enabled:"1"
    },
    duress:{
        name:"Duress",
        code:"",
        access:"0",
        area2:"0",
        area3:"0",
        area4:"0",
        enabled:"0"
    }
}

const initState = {
    mode: "0", // 0 = Disarmed, 1 = Armed Stay, 2 = Armed Away, 3 = Not ready
    panic: "0",
    fire: "0",
    medical: "0",
    duress: "0"
}

const initSensors = {
    sensor1:{
        sensorType: "00",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "New",
        sensorLoop: "1",
        transmissionDelay: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        sensorReports: "enabled",
        sensorSupervised: "enabled",
        sensorChime: "disabled"
    },
    sensor2:{
        sensorType: "00",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "New",
        sensorLoop: "1",
        transmissionDelay: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        sensorReports: "enabled",
        sensorSupervised: "enabled",
        sensorChime: "disabled"
    },
    sensor3:{
        sensorType: "00",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "New",
        sensorLoop: "1",
        transmissionDelay: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        sensorReports: "enabled",
        sensorSupervised: "enabled",
        sensorChime: "disabled"
    },
    sensor4:{
        sensorType: "00",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "New",
        sensorLoop: "1",
        transmissionDelay: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        sensorReports: "enabled",
        sensorSupervised: "enabled",
        sensorChime: "disabled"
    },
    sensor5:{
        sensorType: "00",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "New",
        sensorLoop: "1",
        transmissionDelay: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        sensorReports: "enabled",
        sensorSupervised: "enabled",
        sensorChime: "disabled"
    },
    sensor6:{
        sensorType: "00",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "New",
        sensorLoop: "1",
        transmissionDelay: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        sensorReports: "enabled",
        sensorSupervised: "enabled",
        sensorChime: "disabled"
    },
    sensor7:{
        sensorType: "00",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "New",
        sensorLoop: "1",
        transmissionDelay: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        sensorReports: "enabled",
        sensorSupervised: "enabled",
        sensorChime: "disabled"
    },
    sensor8:{
        sensorType: "00",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "New",
        sensorLoop: "1",
        transmissionDelay: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        sensorReports: "enabled",
        sensorSupervised: "enabled",
        sensorChime: "disabled"
    }
}

const initKeyfobs = {
    keyfob1:{
        fobUsed: "disabled",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "new",
        emergencyKey: "disabled",
        fobCanDisarm: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        armWithNoEntryDelay: "disabled",
        fobOutput: "disabled"
    },
    keyfob2:{
        fobUsed: "disabled",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "new",
        emergencyKey: "disabled",
        fobCanDisarm: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        armWithNoEntryDelay: "disabled",
        fobOutput: "disabled"
    },
    keyfob3:{
        fobUsed: "disabled",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "new",
        emergencyKey: "disabled",
        fobCanDisarm: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        armWithNoEntryDelay: "disabled",
        fobOutput: "disabled"
    },
    keyfob4:{
        fobUsed: "disabled",
        equipmentCode: "0000",
        serialNumber: "0000000",
        smartAreasAssignment: "s1",
        equipmentAge: "new",
        emergencyKey: "disabled",
        fobCanDisarm: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        },
        armWithNoEntryDelay: "disabled",
        fobOutput: "disabled"
    }
}

const initKeypads = {
    keypad1:{
        keypadUsed: "disabled",
        equipmentCode: "0000",
        serialNumber: "",
        smartAreasAssignment: "s1",
        equipmentAge: "new",
        emergencyKeys: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        }
    },
    keypad2:{
        keypadUsed: "disabled",
        equipmentCode: "0000",
        serialNumber: "",
        smartAreasAssignment: "s1",
        equipmentAge: "new",
        emergencyKeys: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        }
    },
    keypad3:{
        keypadUsed: "disabled",
        equipmentCode: "0000",
        serialNumber: "",
        smartAreasAssignment: "s1",
        equipmentAge: "new",
        emergencyKeys: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        }
    },
    keypad4:{
        keypadUsed: "disabled",
        equipmentCode: "0000",
        serialNumber: "",
        smartAreasAssignment: "s1",
        equipmentAge: "new",
        emergencyKeys: "enabled",
        voiceDescriptor: {
            descriptor1:"",
            descriptor2:"",
            descriptor3:"",
            descriptor4:"",
            descriptor5:"",
            descriptor6:"",
        }
    }
}

const initProgramming= {
    Q1: 1561,
    Q2: "disabled",
    Q3: "full",
    Q4: {
        S1: 60,
        S2: 60,
        S3: 60,
        S4: 60
    },
    Q5: {
        S1: 30,
        S2: 30,
        S3: 30,
        S4: 30
    },
    Q6: {
        S1: 45,
        S2: 45,
        S3: 45,
        S4: 45
    },
    Q7: "alarm.com",
    Q8: "stay",
    Q9: "disabled",
    Q10: "audible",
    Q11: "audible",
    Q12: "audible",
    Q13: {
        S1: "enabled",
        S2: "enabled",
        S3: "enabled",
        S4: "enabled"
    },
    Q14: {
        S1: "disabled",
        S2: "disabled",
        S3: "disabled",
        S4: "disabled"
    },
    Q15: {
        S1: "enabled",
        S2: "enabled",
        S3: "enabled",
        S4: "enabled"
    },
    Q16: "enabled",
    Q17: {
        S1: "disabled",
        S2: "disabled",
        S3: "disabled",
        S4: "disabled"
    },
    Q18: "disabled",
    Q19: {
        S1: "disabled",
        S2: "disabled",
        S3: "disabled",
        S4: "disabled"
    },
    Q20: "auto-restore",
    Q21: "enabled",
    Q22: "disabled",
    Q23: "disabled",
    Q24: "celsius",
    Q25: 2,
    Q26: "disabled",
    Q27: 10,
    Q28: "disabled",
    Q29: 7,
    Q30: 30,
    Q31: "disabled",
    Q32: "disabled",
    Q33: 30,
    Q34: "disabled",
    Q35: "disabled",
    Q36: 255,
    Q37: 255,
    Q38: "enabled",
    Q39: "30",
    Q40: "4",
    Q41: "4",
    Q42: "enabled",
    Q43: "burglary-fire",
    Q44: 11,
    Q45: 11,
    Q46: 30,
    Q47: "disabled",
    Q48: "disabled",
    Q49: "disabled",
    Q50: "disabled",
    Q51: "disabled",
    Q52: "disabled",
    Q53: "disabled",
    Q54: "disabled",
    Q55: "disabled",
    Q56: "disabled",
    Q57: "disabled",
    Q58: "disabled",
    Q59: "disabled",
    Q60: "disabled",
    Q61: "disabled",
    Q62: "disabled",
    Q63: "disabled",
    Q64: "disabled",
    Q65: "enabled",
    Q66: "disabled",
    Q67: "all",
    Q68: "enabled",
    Q69: "enabled",
    Q70: "all",
    Q71: "4"
}

const initAutomation = {
    device1:{
        name:"",
        type:0,
        state:0,
        percent:0
    },
    device2:{
        name:"",
        type:0,
        state:0,
        percent:0
    },
    device3:{
        name:"",
        type:0,
        state:0,
        percent:0
    },
    device4:{
        name:"",
        type:0,
        state:0,
        percent:0
    },
    device5:{
        name:"",
        type:0,
        state:0,
        percent:0
    },
    device6:{
        name:"",
        type:0,
        state:0,
        percent:0
    },
    device7:{
        name:"",
        type:0,
        state:0,
        percent:0
    },
    device8:{
        name:"",
        type:0,
        state:0,
        percent:0
    }
}

const init = {
    codes: initCodes,
    state: initState,
    sensors: initSensors,
    keyfobs: initKeyfobs,
    keypads: initKeypads,
    programming: initProgramming,
    automation: initAutomation
}

const codesReducer = (state = init, action) => {
    var panelCodes = state.codes
    var panelState = state.state
    var panelSensors = state.sensors
    var panelKeyfobs = state.keyfobs
    var panelKeypads = state.keypads
    var panelProgramming = state.programming
    var panelAutomation = state.automation
    
    var retrievedCodes = localStorage.getItem('panelUsers');
    retrievedCodes = JSON.parse(retrievedCodes)

    var retrievedState = localStorage.getItem("panelState");
    retrievedState = JSON.parse(retrievedState)

    var retrievedSensors = localStorage.getItem("panelSensors");
    retrievedSensors = JSON.parse(retrievedSensors)

    var retrievedKeyfobs = localStorage.getItem("panelKeyfobs");
    retrievedKeyfobs = JSON.parse(retrievedKeyfobs)

    var retrievedKeypads = localStorage.getItem("panelKeypads");
    retrievedKeypads = JSON.parse(retrievedKeypads)

    var retrievedProgramming = localStorage.getItem("panelProgramming");
    retrievedProgramming = JSON.parse(retrievedProgramming)
    
    var retrievedAutomation = localStorage.getItem("panelAutomation");
    retrievedAutomation = JSON.parse(retrievedAutomation)

    if (retrievedCodes == null){
        localStorage.setItem('panelUsers', JSON.stringify(panelCodes));
    }

    if (retrievedState == null){
        localStorage.setItem('panelState', JSON.stringify(panelState));
    }

    if (retrievedSensors == null){
        localStorage.setItem('panelSensors', JSON.stringify(panelSensors));
    }

    if (retrievedKeyfobs == null){
        localStorage.setItem('panelKeyfobs', JSON.stringify(panelKeyfobs));
    }

    if (retrievedKeypads == null){
        localStorage.setItem('panelKeypads', JSON.stringify(panelKeypads));
    }

    if (retrievedProgramming == null){
        localStorage.setItem('panelProgramming', JSON.stringify(panelProgramming));
    }

    if (retrievedAutomation == null){
        localStorage.setItem('panelAutomation', JSON.stringify(panelAutomation));
    }

    switch (action.type) {
        case "ADD_USER":
            if (retrievedCodes.user3.name === ""){
                retrievedCodes.user3.name = action.newUserName
                retrievedCodes.user3.code =action.newUserCode
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user.name === ""){
                retrievedCodes.user4.name = action.newUserName
                retrievedCodes.user4.code =action.newUserCode
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user5.name === ""){
                retrievedCodes.user5.name = action.newUserName
                retrievedCodes.user5.code =action.newUserCode
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user6.name === ""){
                retrievedCodes.user6.name = action.newUserName
                retrievedCodes.user6.code =action.newUserCode
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user7.name === ""){
                retrievedCodes.user7.name = action.newUserName
                retrievedCodes.user7.code =action.newUserCode
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
                
            return {
                retrievedCodes
            }

        case "EDIT_USER":
            if (retrievedCodes.master === action.identifier){
                retrievedCodes.master.name = action.userName
                retrievedCodes.master.code = action.userCode
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.installer === action.identifier){
                retrievedCodes.installer.code = action.userCode
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user3 === action.identifier){
                retrievedCodes.user3.name = action.userName
                retrievedCodes.user3.code = action.userCode
                retrievedCodes.user3.access = action.systemAccess
                retrievedCodes.user3.area2 = action.area2
                retrievedCodes.user3.area3 = action.area3
                retrievedCodes.user3.area4 = action.area4
                retrievedCodes.user3.access = action.access
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user4 === action.identifier){
                retrievedCodes.user4.name = action.userName
                retrievedCodes.user4.code = action.userCode
                retrievedCodes.user4.access = action.systemAccess
                retrievedCodes.user4.area2 = action.area2
                retrievedCodes.user4.area3 = action.area3
                retrievedCodes.user4.area4 = action.area4
                retrievedCodes.user4.access = action.access
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user5 === action.identifier){
                retrievedCodes.user5.name = action.userName
                retrievedCodes.user5.code = action.userCode
                retrievedCodes.user5.access = action.systemAccess
                retrievedCodes.user5.area2 = action.area2
                retrievedCodes.user5.area3 = action.area3
                retrievedCodes.user5.area4 = action.area4
                retrievedCodes.user5.access = action.access
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user6 === action.identifier){
                retrievedCodes.user6.name = action.userName
                retrievedCodes.user6.code = action.userCode
                retrievedCodes.user6.access = action.systemAccess
                retrievedCodes.user6.area2 = action.area2
                retrievedCodes.user6.area3 = action.area3
                retrievedCodes.user6.area4 = action.area4
                retrievedCodes.user6.access = action.access
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user7 === action.identifier){
                retrievedCodes.user7.name = action.userName
                retrievedCodes.user7.code = action.userCode
                retrievedCodes.user7.access = action.systemAccess
                retrievedCodes.user7.area2 = action.area2
                retrievedCodes.user7.area3 = action.area3
                retrievedCodes.user7.area4 = action.area4
                retrievedCodes.user7.access = action.access
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }    
            else if (retrievedCodes.duress === action.identifier){
                retrievedCodes.duress.code = action.userCode
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }    
        
            return {
                state
            }

        case "DELETE_USER":
            if (retrievedCodes.user3 === action.identifier){
                retrievedCodes.user3.name = ""
                retrievedCodes.user3.code = ""
                retrievedCodes.user3.access = "0"
                retrievedCodes.user3.area2 = "0"
                retrievedCodes.user3.area3 = "0"
                retrievedCodes.user3.area4 = "0"
                retrievedCodes.user3.access = "1"
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user4 === action.identifier){
                retrievedCodes.user4.name = ""
                retrievedCodes.user4.code = ""
                retrievedCodes.user4.access = "0"
                retrievedCodes.user4.area2 = "0"
                retrievedCodes.user4.area3 = "0"
                retrievedCodes.user4.area4 = "0"
                retrievedCodes.user4.access = "1"
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user5 === action.identifier){
                retrievedCodes.user5.name = ""
                retrievedCodes.user5.code = ""
                retrievedCodes.user5.access = "0"
                retrievedCodes.user5.area2 = "0"
                retrievedCodes.user5.area3 = "0"
                retrievedCodes.user5.area4 = "0"
                retrievedCodes.user5.access = "1"
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user6 === action.identifier){
                retrievedCodes.user6.name = ""
                retrievedCodes.user6.code = ""
                retrievedCodes.user6.access = "0"
                retrievedCodes.user6.area2 = "0"
                retrievedCodes.user6.area3 = "0"
                retrievedCodes.user6.area4 = "0"
                retrievedCodes.user6.access = "1"
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }
            else if (retrievedCodes.user7 === action.identifier){
                retrievedCodes.user7.name = ""
                retrievedCodes.user7.code = ""
                retrievedCodes.user7.access = "0"
                retrievedCodes.user7.area2 = "0"
                retrievedCodes.user7.area3 = "0"
                retrievedCodes.user7.area4 = "0"
                retrievedCodes.user7.access = "1"
                localStorage.setItem('panelUsers', JSON.stringify(retrievedCodes));
            }    

            return {
                retrievedCodes
            }

        default:
            return retrievedCodes;
    }
}

export const add_user = (name, code) => {
    return {
        type: "ADD_USER",
        newUserName: name,
        newUserCode: code
    }
}

export const edit_user = (name, code, system_access, area2, area3, area4, access, identifier) => {
    return {
        type: "EDIT_USER",
        userName: name,
        userCode: code,
        systemAccess: system_access,
        area2,
        area3,
        area4,
        access,
        identifier
    }
}

export const delete_user = (identifier) => {
    return{
        type: "DELETE_USER",
        identifier
    }
}

export const get_codes = () => {
    return{
        type:"GET_CODES"
    }
}

const store = createStore(codesReducer);
// store.subscribe(() => console.log("store", store.getState()));

export default store;