// ****************************** CUENTA REGRESIVA IPN ******************************
function cuentaIPN() {
    simplyCountdown('#cuenta', {
        year: 2020, // required
        month: 9, // required
        day: 15, // required
        hours: 12, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: 'Día',
            hours: 'Hora',
            minutes: 'Munito',
            seconds: 'Segundo',
            pluralLetter: 's'
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: true, //Use UTC as default
        onEnd: function() { 
            alertaIPN()
            return; }, //Callback on countdown end, put your own function here
        refresh: 500, // default refresh every 0.5s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false
    });
}


function borrarIPN() {
    document.getElementById('cuenta').innerHTML = '';
}




// ****************************** CUENTA REGRESIVA UNAM ******************************
function cuentaUNAM() {
    simplyCountdown('#cuenta', {
        year: 2020, // required
        month: 9, // required
        day: 21, // required
        hours: 12, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: 'Día',
            hours: 'Hora',
            minutes: 'Munito',
            seconds: 'Segundo',
            pluralLetter: 's'
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: true, //Use UTC as default
        onEnd: function() { 
            alertaUNAM();
            return; }, //Callback on countdown end, put your own function here
        refresh: 500, // default refresh every 0.5s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false
    });
}

function borrarUNAM() {
    document.getElementById('cuenta').innerHTML = '';
}