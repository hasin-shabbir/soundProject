/*get the vietnam section and button to end the journey*/
var endJourney=document.getElementById('endJourney');
var vietnam=document.getElementById('vietnam');
/*get elements for the last scene*/
var lastScene=document.getElementById('lastScene');
var charsLastScene=document.getElementById('charactersLScene');
var endChar1=document.getElementById('char1LScene');
var endChar2=document.getElementById('char2LScene');
var lastDialogue=document.getElementById('lastDialogue');
var lastSceneTxt=document.getElementById('lastSceneTxt');
var lastFormWrapper=document.getElementById('locationForm');
var lastForm=document.getElementById('locationName');
var lastSceneBgMusic=document.getElementById('lastSceneBg');

/*when end journey button is clicked, hide vietnam section and display last section*/
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
/*move to the last scene*/
function toWorld(){
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
/*if user presses enter key in the form input, give the user a confirmation message through alert*/
lastForm.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();

    var loc=lastForm.value;
    var alertString='Your request to have a tour to '+loc+' has been received. Keep checking for updates!';
    alert(alertString);
  }
});
