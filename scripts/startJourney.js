var playBtn= document.getElementById('playButton');
var titleContainer=document.getElementById('titleContainer');

var characters=document.getElementById('characters');
var char1=document.getElementById('char1');
var char2=document.getElementById('char2');
var toPakBtn=document.getElementById('toPak');

var dialogue=document.getElementById('char1_start_sound');
/*start the story when user clicks play button and display and hide relevant elements*/
playBtn.addEventListener("click",function(){
  playBtn.style.display="none";
  titleContainer.style.display="none";

  toPakBtn.style.display="block";
  characters.style.display="flex";
  var delayInMilliseconds = 200; //1 second
  setTimeout(function() {
    char1.style.opacity='1';
    char2.style.opacity='1';
  }, delayInMilliseconds);

  startDialogue();

})

function startDialogue(){
  dialogue.play();
}

var landing=document.getElementById('landingSection');
var pakistan=document.getElementById('pakistan');
/*stop audio when user moves to next scene*/
toPakBtn.addEventListener("click",function(){
  dialogue.pause();
  dialogue.currentTime=0;
  toPak();
});
// move to next section when audio ends
dialogue.addEventListener("ended",function(){
  toPak();
});
function toPak(){
  landingSection.style.opacity=0;
  setTimeout(function(){
    landingSection.style.display='none';
    pakistan.style.display='block';
  },1500);
  pakistan.style.opacity=1;
}
