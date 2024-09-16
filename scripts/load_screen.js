window.onload = load_screen;
function load_screen() {
    e = document.getElementById("load_screen");
    e.style.opacity = "0";
    e.style.display = "none";
}
setTimeout(function() {
    e = document.getElementById("load_screen");
    e.style.opacity = "0";
    setTimeout(function() {
        e.style.display = "none";},300);
    },1200);