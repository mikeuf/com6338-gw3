/*
* background-change.js
* Changes the background as the window scrolls down or up
*/
window.onscroll = function() {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    if(top <= 1000) {
       document.body.style.backgroundImage = 'url(assets/images/wave.jpg)';
    }
    else {
       document.body.style.backgroundImage = 'url(assets/images/under-water.jpg)';
    } 
}  