let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mod = document.querySelector(".clock").classList;

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);

function changeMode () {
    if(mod.contains("dark-mode")){
        mod.remove("dark-mode");
    }
    else {
        mod.add("dark-mode");
    }
}
