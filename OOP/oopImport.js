const Person = require("./OOPexports.js");

let soccerPlayer = new Person("Boart", 23);
let singer = new Person("Bokang", 23);
let writer = new Person("Jones", 86);

const arr = [soccerPlayer, singer, writer];

 for(i = 0; i < 2; i++) {
     for(j = 0; j < arr.length; j++)
        arr[j].saySomething();
     }
        soccerPlayer.saySomething();
        singer.saySomething();
        writer.saySomething();