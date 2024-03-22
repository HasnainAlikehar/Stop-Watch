// // StopWatch Assignment
 
// Start form here My code 

let second =  0;
let minutes = 0;
let hour =    0;
let miliseconds = 0;

let clockStarted = false
const time1 = document.querySelector('.miliseconds')
const timer2 = document.querySelector('.second')
const timer3 = document.querySelector('.minutes')
const timer4 = document.querySelector('.hour')

function clockStart() {
    if (clockStarted) {
        miliseconds++
        time1.innerHTML = miliseconds
        console.log(miliseconds)
    }
    if (miliseconds === 99) {
        second++
        miliseconds = 0
        timer2.innerHTML = second
    }
    if (second === 60) {
        minutes++
        second = 0
        timer3.innerHTML = minutes
    }
    if (minutes === 60) {
        hour++
        minutes = 0
        second = 0
        timer4.innerHTML = hour
    }
    if (starTime === stop) {
        second++
        timer.innerHTML = second
    }

    let hourstring = hour
    let minutesstring = minutes
    let secondstring = second
    let milisecondsstring = miliseconds
    if (hour < 10) {
        hourstring = "0" + hourstring
    }

    if (minutes < 10) {
        minutesstring = "0" + minutesstring
    }
    if (second < 10) {
        secondstring = "0" + secondstring
    }
    if (miliseconds < 10) {
        milisecondsstring = "0" + milisecondsstring
    }
    let  timer4 = document.querySelector(".hour").innerHTML = hourstring
    let  timer3 = document.querySelector(".minutes").innerHTML = minutesstring
    let  timer2 = document.querySelector(".second").innerHTML = secondstring
    let  timer = document.querySelector(".miliseconds").innerHTML = milisecondsstring


}

let timeseconds;

function starTime() {
    if (clockStarted) return
    clockStarted = true
    timeseconds = setInterval(clockStart, 10)
}

function stop() {
    clearInterval(timeseconds)
    clockStarted = false

}
function reset() {
    clockStarted = false
    second = 0
    minutes = 0
    hour = 0
    miliseconds = 0
    document.querySelector('.miliseconds').innerHTML = "00"
    document.querySelector('.second').innerHTML = "00"
    document.querySelector('.minutes').innerHTML = "00"
    document.querySelector('.hour').innerHTML = "00"
}





