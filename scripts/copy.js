function copy(obj,event) {
    const delay = (n) => new Promise(r => setTimeout(r, n * 1000));
    var text = $(obj).attr("href");
    var message = document.getElementById("copy");
    navigator.clipboard.writeText(text);
    message.style.zIndex = "100000000";
    message.style.left = String(event.pageX) + "px";
    message.style.top = String(event.pageY - 30) + "px";
    message.style.opacity = "100%";
    delay(0.6).then(() => {
        message.style.opacity = "0";
        delay(0.6).then(() => {
            message.style.left = "0";
            message.style.top = "0";
            message.style.zIndex = "0";
        });
    });
}