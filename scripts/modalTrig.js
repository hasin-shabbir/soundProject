var modal;

// display the relevant modal and play the relevant sound track upon which button is clicked

var pakInstructions=document.getElementById('pakInstructions');
var vietnamInstructions=document.getElementById('vietnamInstructions');
// Get the modal
var balochistanModal = document.getElementById("balochistanModal");
// Get the button that opens the modal
var balochistanBtn = document.getElementById("balochistan");
// Get the <span> element that closes the modal
var balochistanClose = document.getElementById("balochistanClose");

var balochistanMusic=document.getElementById('balochistanMusic');
// When the user clicks on the button, open the modal
balochistanBtn.onclick = function() {
  pakInstructions.style.display="none";
  balochistanModal.style.display = "block";
  modal=balochistanModal;
  //play the relevant music file
  balochistanMusic.play();
  music=balochistanMusic;
}
// When the user clicks on <span> (x), close the modal and stop the music and stop the music
balochistanClose.onclick = function() {
  balochistanModal.style.display = "none";
  balochistanMusic.pause();
  balochistanMusic.currentTime=0;
}

// Get the modal
var kashmirModal = document.getElementById("kashmirModal");
// Get the button that opens the modal
var kashmirBtn = document.getElementById("kashmir");
// Get the <span> element that closes the modal
var kashmirClose = document.getElementById("kashmirClose");

var kashmirMusic=document.getElementById('kashmirMusic');
// When the user clicks on the button, open the modal
kashmirBtn.onclick = function() {
  pakInstructions.style.display="none";
  kashmirModal.style.display = "block";
  modal=kashmirModal;
  kashmirMusic.play();
  music=kashmirMusic;
}
// When the user clicks on <span> (x), close the modal and stop the music
kashmirClose.onclick = function() {
  kashmirModal.style.display = "none";
  kashmirMusic.pause();
  kashmirMusic.currentTime=0;
}


// Get the modal
var northModal = document.getElementById("northModal");
// Get the button that opens the modal
var northBtn = document.getElementById("north");
// Get the <span> element that closes the modal
var northClose = document.getElementById("northClose");

var northMusic=document.getElementById('northMusic');
// When the user clicks on the button, open the modal
northBtn.onclick = function() {
  pakInstructions.style.display="none";
  northModal.style.display = "block";
  modal=northModal;
  northMusic.play();
  music=northMusic;
}
// When the user clicks on <span> (x), close the modal and stop the music
northClose.onclick = function() {
  northModal.style.display = "none";
  northMusic.pause();
  northMusic.currentTime=0;
}

// Get the modal
var fataModal = document.getElementById("fataModal");
// Get the button that opens the modal
var fataBtn = document.getElementById("fata");
// Get the <span> element that closes the modal
var fataClose = document.getElementById("fataClose");

var fataMusic=document.getElementById('fataMusic');
// When the user clicks on the button, open the modal
fataBtn.onclick = function() {
  pakInstructions.style.display="none";
  fataModal.style.display = "block";
  modal=fataModal;
  fataMusic.play();
  music=fataMusic;
}
// When the user clicks on <span> (x), close the modal and stop the music
fataClose.onclick = function() {
  fataModal.style.display = "none";
  fataMusic.pause();
  fataMusic.currentTime=0;
}


// Get the modal
var punjabModal = document.getElementById("punjabModal");
// Get the button that opens the modal
var punjabBtn = document.getElementById("punjab");
// Get the <span> element that closes the modal
var punjabClose = document.getElementById("punjabClose");

var punjabMusic=document.getElementById('punjabMusic');
// When the user clicks on the button, open the modal
punjabBtn.onclick = function() {
  pakInstructions.style.display="none";
  punjabModal.style.display = "block";
  modal=punjabModal;
  punjabMusic.play();
  music=punjabMusic;
}
// When the user clicks on <span> (x), close the modal and stop the music
punjabClose.onclick = function() {
  punjabModal.style.display = "none";
  punjabMusic.pause();
  punjabMusic.currentTime=0;
}


// Get the modal
var sindhModal = document.getElementById("sindhModal");
// Get the button that opens the modal
var sindhBtn = document.getElementById("sindh");
// Get the <span> element that closes the modal
var sindhClose = document.getElementById("sindhClose");

var sindhMusic=document.getElementById('sindhMusic');
// When the user clicks on the button, open the modal
sindhBtn.onclick = function() {
  pakInstructions.style.display="none";
  sindhModal.style.display = "block";
  modal=sindhModal;
  sindhMusic.play();
  music=sindhMusic;
}
// When the user clicks on <span> (x), close the modal and stop the music
sindhClose.onclick = function() {
  sindhModal.style.display = "none";
  sindhMusic.pause();
  sindhMusic.currentTime=0;
}

// Get the modal
var kpkModal = document.getElementById("kpkModal");
// Get the button that opens the modal
var kpkBtn = document.getElementById("kpk");
// Get the <span> element that closes the modal
var kpkClose = document.getElementById("kpkClose");

var kpkMusic=document.getElementById('kpkMusic');
// When the user clicks on the button, open the modal
kpkBtn.onclick = function() {
  pakInstructions.style.display="none";
  kpkModal.style.display = "block";
  modal=kpkModal;
  kpkMusic.play();
  music=kpkMusic;
}
// When the user clicks on <span> (x), close the modal and stop the music
kpkClose.onclick = function() {
  kpkModal.style.display = "none";
  kpkMusic.pause();
  kpkMusic.currentTime=0;
}

// Get the modal
var northVietModal = document.getElementById("northVietModal");
// Get the button that opens the modal
var northVietBtn = document.getElementById("northViet");
// Get the <span> element that closes the modal
var northVietClose = document.getElementById("northVietClose");

var northVietMusic=document.getElementById('northVietMusic');
// When the user clicks on the button, open the modal
northVietBtn.onclick = function() {
  vietnamInstructions.style.display="none";
  northVietModal.style.display = "block";
  modal=northVietModal;
  northVietMusic.play();
  music=northVietMusic;
}
// When the user clicks on <span> (x), close the modal and stop the music
northVietClose.onclick = function() {
  northVietModal.style.display = "none";
  northVietMusic.pause();
  northVietMusic.currentTime=0;
}

// Get the modal
var centralModal = document.getElementById("centralModal");
// Get the button that opens the modal
var centralBtn = document.getElementById("central");
// Get the <span> element that closes the modal
var centralClose = document.getElementById("centralClose");

var centralMusic=document.getElementById('centralMusic');
// When the user clicks on the button, open the modal
centralBtn.onclick = function() {
  vietnamInstructions.style.display="none";
  centralModal.style.display = "block";
  modal=centralModal;
  centralMusic.play();
  music=centralMusic;
}
// When the user clicks on <span> (x), close the modal and stop the music
centralClose.onclick = function() {
  centralModal.style.display = "none";
  centralMusic.pause();
  centralMusic.currentTime=0;
}

// Get the modal
var southModal = document.getElementById("southModal");
// Get the button that opens the modal
var southBtn = document.getElementById("south");
// Get the <span> element that closes the modal
var southClose = document.getElementById("southClose");

var southMusic=document.getElementById('southMusic');
// When the user clicks on the button, open the modal
southBtn.onclick = function() {
  vietnamInstructions.style.display="none";
  southModal.style.display = "block";
  modal=southModal;
  southMusic.play();
  music=southMusic;
}
// When the user clicks on <span> (x), close the modal and stop the music
southClose.onclick = function() {
  southModal.style.display = "none";
  southMusic.pause();
  southMusic.currentTime=0;
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    music.pause();
    music.currentTime=0;
  }
}
