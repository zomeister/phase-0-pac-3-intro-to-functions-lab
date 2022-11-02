function shout(string) {
    // recieves one argument and returns it in all caps
    return string.toUpperCase();
};

function whisper(string) {
    // recieves one argument and returns it in all lowercase
    return string.toLowerCase();
};

function logShout(string) {
    // takes a string argument and logs it in all caps using console.log()
    console.log(string.toUpperCase());
};

function logWhisper(string) {
    // takes a string argument and logs it in all lowercase using console.log()
    console.log(string.toLowerCase());
};


function sayHiToHeadphonedRoommate(string) {
    // returns "I can\'t hear you!" if `string` is lowercase
    // returns "YES INDEED!" if `string` is uppercase
    // returns "I would love !to" if `string` is "Let\'s have dinner together!"
    switch (string) {
        case whisper(string):
            return "I can\'t hear you!";
        case shout(string):
            return "YES INDEED!";
        case "Let\'s have dinner together!":
            return "I would love to!";
    }
    /* IF... ELSE IF... ELSE IF... ELSE...
        if ( string === whisper(string) ) {
            return "I can\'t hear you!";
        } else if ( string === shout(string) ) {
            return "YES INDEED!";
        } else if ( string === "Let\'s have dinner together!" ) {
            return "I would love to!";
        };
    */
};
