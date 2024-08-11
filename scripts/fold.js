var isFolded = false;
var forceShowFold = false;
function fold() {
    isFolded = !isFolded;
    forceShowFold = !forceShowFold;
    if (isFolded) {
        document.getElementById("menu").style.left = "-150px";
        document.getElementById("fold").style.rotate = "180deg";
        document.getElementById("flex-container").style.width = "calc(100% - 40px)";
        document.getElementById("flex-container").style.left = "30px";
        showFold();
    }
    else {
        document.getElementById("menu").style.left = "0";
        document.getElementById("fold").style.rotate = "0deg";
        document.getElementById("flex-container").style.width = "calc(100% - 180px)";
        document.getElementById("flex-container").style.left = "180px";
    }
}
function showFold() {
    document.getElementById("fold").style.opacity = "1.0";
    document.getElementById("hideFold").style.opacity = "1.0";
}
function hideFold() {
    if (!forceShowFold) {
        document.getElementById("fold").style.opacity = "0.0";
        document.getElementById("hideFold").style.opacity = "0.0";
    }
}
setTimeout(hideFold,3000);