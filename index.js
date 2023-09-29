let string='Hell0'

function shout(string) {
return string.toUpperCase()}

function whisper(string) {return string.toLowerCase()}

function logShout(string){console.log(string.toUpperCase());}


function logWhisper(string){console.log(string.toLowerCase());}



/*
function sayHiToHeadphonedRoommate(string){if (string.toUpperCase) return("YES INDEED!")}

const string
*/
/*
function sayHiToHeadphonedRoommate(string){console.log(string);console.log(string.toLowerCase())} if (string===string.toLowerCase()) return ("I cant here you!");else return ("YES INDEED!");
*/

function sayHiToHeadphonedRoommate(string){if (string===string.toLowerCase()) {return ("I can't hear you!");}

else if (string===string.toUpperCase()) {return ("YES INDEED!");}

else if (string!=="let's have dinner together!") {return ("I would love to!");}}