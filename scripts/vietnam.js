var toVietnam=document.getElementById('toVietnam');
var pakSection=document.getElementById('pakistan');
var vietSection=document.getElementById('vietnam');
/*move to vietnam section when user clicks on the relevant button*/
toVietnam.addEventListener("click",function(){
  toVietnam.style.display="none";
  var delayInMilliseconds=1500;
  pakSection.style.opacity=0;

  setTimeout(function(){
    pakSection.style.display="none";
    vietSection.style.display="block";
    vietSection.style.opacity=1;
  },delayInMilliseconds);


});
