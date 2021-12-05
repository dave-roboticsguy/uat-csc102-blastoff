// Functions for BlastOff Assignment
// By David Garcia
// 11/28/2021

function startTheCountDown() {
  // This function will start the countdown
  // It will also control the countdown

  // Declarations
  let currTime = 10;
  let timeout = 10000;
  // Display the start of the count
  // Used to keep track of the actual time
  // 1000 = 1 second because we are using milliseconds
  // This  method sets a timer which executes a function or specified piece of code once the timer expires.

  // for loop to make code easier to read and less copy & paste
  // set initial value, condition less than or equal to 11, and increment by 1 at the end of loop
  for (var i = 1; i <= 11; i++) {
    // strict equality, once i reaches 11 write Blast OFF
    if (i === 11) {
      // ES6 arrow function for setTimeout
      setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = "Blast OFF !!";
      }, 1000 * i);
    }
    // added else if that starts when counter less than halfway
    //Added new line to the DOM output
    else if (i < 5) {
      setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = "Warning Less than ½ way to launch,<br/> time left = " + currTime;
        // js subtraction assignment -=
        currTime -= 1;
      }, timeout);
      timeout -= 1000;
    }
    // Decrement currTime by -1 and substracts 1 sec from timeout and displays to html element CountdownDisplay
    else {
      setTimeout(() => {
        document.getElementById("CountdownDisplay").innerHTML = currTime;
        // js subtraction assignment -=
        currTime -= 1;
      }, timeout);
      timeout -= 1000;
    }
  }
}

// method that sets a timer, once it reaches 11sec execute initToBlastOFF()
function initializing() {
  setInterval(initToBlastOFF, 11000);
}

// method to write to html element BlastOffDisplay at end of timer of 11sec
function initToBlastOFF() {
  document.getElementById("BlastOffDisplay").innerHTML = "The Final Countdown !!!"
}

// This function is used to play a song from an mp3 file on the web.
function playMusic() {
  var music = new Audio('https://archive.org/download/1988-the-final-countdown/Europe%20-%20The%20Final%20Countdown%20%5BVDPS-1002%5D.mp3');
  music.play();
}