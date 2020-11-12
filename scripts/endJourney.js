var endJourney=document.getElementById('endJourney');
var vietnam=document.getElementById('vietnam');
var lastScene=document.getElementById('lastScene');
var endChar1=document.getElementById('char1LScene');
var endChar2=document.getElementById('char2LScene');
var lastDialogue=document.getElementById('lastDialogue');

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
  endChar1.style.display="none";
  endChar2.style.display="none";
  lastScene.style.backgroundImage = "url('images/worldMap.png')"
}

lastDialogue.addEventListener("ended",function(){
  toWorld();
});
