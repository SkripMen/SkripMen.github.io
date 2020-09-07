window.onclick = function (e) {
    let popup = document.getElementsByClassName("popup");
    for (let id = 0; id < popup.length; ++id) {
        if (e.target == popup[id]) {
            popup[id].style.display = "none";
        }
    }
}

function ModalWindow(id) {
    let popup = document.getElementById(`modal${id}`);
    popup.style.display = "block";
}

let info = document.getElementById("map_info"),
    map = document.getElementById("map");

info.onmouseover = function () {
    if (window.innerWidth > 768) {
        map.style.gridTemplateColumns = "1fr 2fr";
    }
}
info.onmouseout = function () {
    if (window.innerWidth > 768) {
        map.style.gridTemplateColumns = "2fr 1fr";
    }
}