function timer() {
    var nowDate = new Date();
    var achiveDate = new Date(2025, 0, 0, 0, 0, 0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate) + 1000;
    if (result < 0) {
        var a = document.getElementById('link');
        a.style.opacity = 1;
        let block = document.getElementById('block');
        block.style.zIndex = 0;


        return undefined;
    }
    var seconds = Math.floor((result / 1000) % 60);
    var minutes = Math.floor((result / 1000 / 60) % 60);
    var hours = Math.floor((result / 1000 / 60 / 60) % 24);
    var days = Math.floor(result / 1000 / 60 / 60 / 24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    let d = document.getElementById('days');
    let h = document.getElementById('hours');
    let m = document.getElementById('minutes');
    let s = document.getElementById('second');
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
    setTimeout(timer, 1000);
}
window.onload = function() {
    timer();
}