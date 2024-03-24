var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; //&& ua.indexOf("mobile");
var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isAndroid) {
    document.body.style.backgroundColor = "red";
}
if (isiOS) {
    document.body.style.backgroundColor = "yellow";
}