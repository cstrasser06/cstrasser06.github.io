document.addEventListener("DOMContentLoaded", function(){
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1; //&& ua.indexOf("mobile");
    var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isAndroid) {
        window.alert("this is android");
    }
    if (isiOS) {
        // Fügen Sie Ihre iOS-spezifischen CSS-Klassen hinzu
        var container = document.getElementById('container');
        container.style.justifyContent = "left";
        container.style.alignContent = "center";
    }
});