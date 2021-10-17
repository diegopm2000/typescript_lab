enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

interface MedicalDate {
    day: DayOfWeek
}

let c: MedicalDate = {
    day: DayOfWeek.Monday
}

// We can set the value explicit. by default, the first value will be 0

enum DayOfWeekAlt {
    Monday = 401,
    Tuesday, // 402 will be the value
    Wednesday, // 403 ...
    Thursday, // 404
    Friday, // 405
    Saturday, // 406
    Sunday, // 407 
}

interface MedicalDateAlt {
    day: DayOfWeekAlt
}

let c2: MedicalDateAlt = {
    day: DayOfWeekAlt.Monday
}

console.log(c) // will be log 0
console.log(c2) // will be log 401

// Alternative

enum DayOfWeekAlt2 {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday',
}

interface MedicalDateAlt2 {
    day: DayOfWeekAlt2
}

let c3: MedicalDateAlt2 = {
    day: DayOfWeekAlt2.Monday
}

console.log(c3) // will be log Monday

// Advanced enums

// For example, using bit masks --> enum with computed values

enum Grants {
    canWriteMessages = 1,
    canReact = 2,
    cantSendMessages = 4,
    candConnecttoVoiceChannels = 8,
}

// And then, we can write this:

enum GrantsAlt {
    canWriteMessages = 1,
    canReact = canWriteMessages * 2,
    cantSendMessages = canReact * 2,
    candConnecttoVoiceChannels = cantSendMessages * 2,
}

// Typescript computes this at the init of the execution

// Assign a function to the value

function random() {
    return 9
}

enum GrantsAltV2 {
    canWriteMessages = random(),
    canReact = canWriteMessages * 2,
    cantSendMessages = canReact * 2,
    candConnecttoVoiceChannels = cantSendMessages * 2,
}
