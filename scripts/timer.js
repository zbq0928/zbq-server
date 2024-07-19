var timer = setInterval(function(){getTime()},1000);
function getTime() {
    var date = new Date();
    var t = date.toLocaleTimeString();
    var d = date.toLocaleDateString();
    document.getElementById("time").innerHTML = t;
    document.getElementById("date").innerHTML = d;
}