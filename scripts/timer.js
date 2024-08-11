var timer = setInterval(getTime,10);
function getTime() {
    var date = new Date();
    var t = date.toLocaleTimeString();
    var d = date.toLocaleDateString();
    document.getElementById("time").innerHTML = t;
    document.getElementById("date").innerHTML = d;
}