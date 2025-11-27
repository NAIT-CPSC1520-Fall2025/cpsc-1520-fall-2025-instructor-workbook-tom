/*
Timer Fundamentals
1. select all of the button elements and the lap elements
2. add an event listener for the start button
3. create variables for the currentTime, an isStopWatchRunning and the timerInterval
4. create a function named "startTimer" to start the interval
    - set the isStopWatchRunning to true
    - use setInterval to set the "timerInterval" variable
        - set the "time interval" or "delay" to 10ms
    - in the setInterval callback function, increment the time
5. create function named setTimerValue that will display the time on the page
    - call this function in the setInterval callback from the previous step
    - make it more readable (i.e. seconds:hundredths of seconds)
6. in the stop button listener, set the isStopWatchRunning to false and clear the interval
    - observe the page how the timer stops
    - if you click start, the timer continues
7. create a function to add new lap
    - get the lap time which is the current lap time minus the last lap time
    - display it on the page with the following html (in all laps section)
         <li class="list-group-item">Lap CURRENT LAP: CURRENT LAP TIME</li>
    - increase the currentLap
    - add the lastLapTime
8. in the add lap event listener, call the function above
*/

let stopButton = document.querySelector(".stop");
let startButton = document.querySelector(".start");
let lapButton = document.querySelector(".lap");
let lapsList = document.querySelector(".all-laps");
let timerValue = document.querySelector(".timer-value");

let currentTime = 0; // Tracks multiples of time delay
let timerInterval = null;
let isStopWatchRunning = false;

// Lapping variables
let currentLap = 1;
let lastLapTime = 0; // Tracks the end time of the last completed lap

startButton.addEventListener("click", () => {
  // if the stop watch is not running, start it
  if (!isStopWatchRunning) {
    startTimer();
  }
});

stopButton.addEventListener("click", () => {
  if (isStopWatchRunning) {
    stopTimer();
  }
});

lapButton.addEventListener("click", () => {
  addLap();
});

const startTimer = () => {
  isStopWatchRunning = true;

  const TIME_DELAY = 10; // Every multiple of this we add 1 to the current time (1000 -> 1 sec, 10 -> 1/100 sec)

  timerInterval = setInterval(() => {
    // Every time this is called update the current time
    currentTime += 1;

    // Then display the new time
    setTimerValue();
  }, TIME_DELAY);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  isStopWatchRunning = false;
};

const addLap = () => {
  // Calculate the lap time
  let lapTime = currentTime - lastLapTime;

  // Update the laps list
  // Replace the following using the DOM API
  // lapsList.innerHTML += `<li class="list-group-item">Lap ${currentLap} - ${getReadableTime(
  //   lapTime
  // )}</li>`;
  let lapItem = document.createElement("li");
  lapItem.classList.add("list-group-item");
  let lapText = document.createTextNode(
    `Lap ${currentLap} - ${getReadableTime(lapTime)}`
  );

  lapItem.appendChild(lapText);
  lapsList.appendChild(lapItem);

  // Update our tracking values
  currentLap += 1;
  lastLapTime = currentTime;
};

const setTimerValue = () => {
  // update the innerHTML of the timer element to match the current time
  timerValue.innerHTML = getReadableTime(currentTime);
};

const getReadableTime = (timeValue) => {
  // Take our current time and display it in a nice format
  // Assuming current time is measured in intervals of 10ms, 1 sec = 100 currentTimes
  // Number of seconds = Math.floor(timeValue / 100)
  return `${Math.floor(timeValue / 100)}:${timeValue % 100}`;
};
