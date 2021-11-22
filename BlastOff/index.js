// Functions for BlastOff Assignment
// By David Garcia
// 11/20/2021

//Global declarations
let countdown = 10;
let timeout = 10000;

function startTheCountDown() {
  // This function will start the countdown
  // It will also control the countdown

  // Declarations

  // Display the start of the count
  //var countdown = 10;
  // Used to keep track of the actual time
  // 1000 = 1 second because we are using milliseconds
  //var timeout = 12000;
  // This  method sets a timer which executes a function or specified piece of code once the timer expires.

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;

  setTimeout(() => {
    document.getElementById("CountdownDisplay").innerHTML = countdown;
    countdown -= 1;
  }, timeout)
  timeout -= 1000;
}

function initToBlastOFF () {
  setTimeout(document.getElementById("BlastOffDisplay").innerHTML = "BLAST OFF", 10000);
}

// This function is used to play a song from an mp3 file on the web.
function playMusic() {
  var music = new Audio('https://archive.org/download/1988-the-final-countdown/Europe%20-%20The%20Final%20Countdown%20%5BVDPS-1002%5D.mp3');
  music.play();
}