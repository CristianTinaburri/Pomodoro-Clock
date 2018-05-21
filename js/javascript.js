// VARIABLES
var pauseMinutes = document.getElementById('pause');
var workMinutes = document.getElementById('work');
var displayMinutes = document.getElementById('minutes-display');
var displaySeconds = document.getElementById('seconds-display');
var displayTitle = document.getElementById("display-title");
var second;

// FUNCTIONS
function setMinutesLess(objectToSet, displayMinutesSet){
  var data = parseInt(objectToSet.innerHTML);
  if(data>0){
    objectToSet.innerHTML = data-1;
    displayMinutesSet.innerHTML = data-1;
  }
}

function setMinutesPlus(objectToSet, displayMinutesSet){
  var data = parseInt(objectToSet.innerHTML);
  if(data<60){
    objectToSet.innerHTML = data+1;
    displayMinutesSet.innerHTML = data+1;
  }
}


// EVENTS
function setMinutesButtonClickPauseMinus(){
  setMinutesLess(pauseMinutes);
}

function setMinutesButtonClickPausePlus(){
  setMinutesPlus(pauseMinutes);
}

function setMinutesButtonClickWorkMinus(){
  setMinutesLess(workMinutes, displayMinutes);
}

function setMinutesButtonClickWorkPlus(){
  setMinutesPlus(workMinutes, displayMinutes);
}

function lessMinute(){
  var data = parseInt(displayMinutes.innerHTML);
  if(data>0){
    displayMinutes.innerHTML = data-1;
  }
}

function lessSecond(){
  var dataSeconds = parseInt(displaySeconds.innerHTML);
  var dataMinutes = parseInt(displayMinutes.innerHTML);
  var pauseMinute = parseInt(pauseMinutes.innerHTML);

  if(dataSeconds>0){
    displaySeconds.innerHTML = dataSeconds-1;
  }
  if(dataSeconds==0 && dataMinutes>0){
    displayMinutes.innerHTML = dataMinutes-1;
    displaySeconds.innerHTML = dataSeconds+59;
  }
  if(dataSeconds==0 && dataMinutes==0){
    if(displayTitle.innerHTML == "Work"){
      displayMinutes.innerHTML = pauseMinute;
      displaySeconds.innerHTML = "00";
      displayTitle.innerHTML = "Pause";
    }else{
      displayMinutes.innerHTML = dataMinutes;
      displaySeconds.innerHTML = "00";
      displayTitle.innerHTML = "Work";
    }
  }
}

function playButton(){
  window.clearInterval(second);
  second = setInterval(lessSecond,1000);
}

function pauseButton(){
  window.clearInterval(second);
}

function resetButton(){
  window.clearInterval(second);
  displayMinutes.innerHTML = workMinutes.textContent;
  displaySeconds.innerHTML = "00";
  displayTitle.innerHTML = "Work";
}
