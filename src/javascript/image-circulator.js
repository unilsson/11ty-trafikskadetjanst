// JavaScript Document
// JavaScript Documentwindow.onload = choosePic;
window.onload = choosePic;

var theAd = 0;
var adImages = new Array("circulator-images/blankgarport.jpg","circulator-images/dalarovagen.jpg","circulator-images/grind2.jpg");

function choosePic() {
     theAd = Math.floor(Math.random() * adImages.length);
     document.getElementById("adBanner").src = adImages[theAd];

     rotate();
}

function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("adBanner").src = adImages[theAd];

     setTimeout(rotate, 7 * 1000);
}