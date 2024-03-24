document.addEventListener("DOMContentLoaded", function(){
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; //&& ua.indexOf("mobile");
    var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isAndroid) {
        // Fügen Sie Ihre Android-spezifischen CSS-Klassen hinzu
    }
    if (isiOS) {
        // Fügen Sie Ihre iOS-spezifischen CSS-Klassen hinzu
        document.body.style.backgroundColor = "yellow";
    }
});