let fullimageimg,fullimage,images=[],id=0;window.onkeydown=function (e){
    if (fullimage.style.visibility === "hidden") {return;}
    switch (e.key) {
        case "ArrowDown":
        case "ArrowLeft":
        id = (id + -1) % images.length;
        e.preventDefault();
        break;
        case "ArrowRight":
        case "ArrowUp":
        id = (id + +1) % images.length;
        e.preventDefault();
        break;
    }
    while (id < 0) { id += images.length; }
    fullimageimg.src = images[id];
}
window.onload = function () {
    fullimageimg = document.getElementById("fullimageimg");
    fullimage = document.getElementById("fullimage");
    let contentgabe = document.getElementById("contentgabe");
    for (var i = 0; i < contentgabe.childNodes.length; i++) {
        if (contentgabe.childNodes[i].childNodes.length > 0) {
            images.push(contentgabe.childNodes[i].childNodes[1].src);
        }
    }
}
function ToggleFullImage(tid) {
    id=tid;
    fullimageimg.src = images[id];
    if (fullimage.style.visibility === "hidden") {
        fullimage.style.visibility = "visible";
    } else {
        fullimage.style.visibility = "hidden";
    }
}