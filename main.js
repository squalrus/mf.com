window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-10469485-5');

var flaps = ['flap.gif', 'flap-rain.gif'];
var pick = flaps[Math.floor(Math.random() * flaps.length)];
var img = new Image();
img.onload = function () {
    document.body.style.backgroundImage = 'url(' + pick + ')';
};
img.onerror = function () {
    document.body.style.backgroundImage = 'url(flap.gif)';
};
img.src = pick;
