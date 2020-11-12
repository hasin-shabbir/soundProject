var endJourney=document.getElementById('endJourney');
var vietnam=document.getElementById('vietnam');


var lastScene=document.getElementById('lastScene');
var charsLastScene=document.getElementById('charactersLScene');
var endChar1=document.getElementById('char1LScene');
var endChar2=document.getElementById('char2LScene');
var lastDialogue=document.getElementById('lastDialogue');
var lastSceneTxt=document.getElementById('lastSceneTxt');
var lastFormWrapper=document.getElementById('locationForm');
var lastForm=document.getElementById('locationName');
var lastSceneBgMusic=document.getElementById('lastSceneBg');

endJourney.addEventListener("click",function(){
  vietnam.style.opacity=0;
  setTimeout(function(){
    vietnam.style.display='none';
    lastScene.style.display='block';
    lastDialogue.play();
  },1500);
  lastScene.style.opacity=1;
  endChar1.style.opacity=1;
  endChar2.style.opacity=1;
});

function toWorld(){
  //charsLastScene.style.display="none";
  endChar1.style.display="none";
  endChar2.style.display="none";
  lastSceneTxt.style.display="block";
  lastScene.style.backgroundImage = "url('images/worldMap.png')";
  lastFormWrapper.style.display="block";
  lastSceneBgMusic.play();
}

lastDialogue.addEventListener("ended",function(){
  toWorld();
});

lastForm.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    var loc=lastForm.value;
    var alertString='Your request to have a tour to '+loc+' has been received. Keep checking for updates!';
    alert(alertString);
  }
});
