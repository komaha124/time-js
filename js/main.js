function timer() {
    var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return (`${hour}:${minute}:${second}`)
    }


function OpenTime(){
    let open = document.getElementById('times');
    cleantime()
    open.insertAdjacentHTML('beforeend', `${timer()}`);

}

function cleantime() {
    let compareClean = document.getElementById("times");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}

function TakeSec(secunda){
    let a = new Date();
    a.setSeconds(a.getSeconds()+secunda);
    return (`${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`)
}

function TakeMin(minute){
    let b = new Date();
    b.setMinutes(b.getMinutes()+minute);
    return (`${b.getHours()}:${b.getMinutes()}:${b.getSeconds()}`)
}

function TakeHours(hours){
    let c = new Date();
    c.setHours(c.getHours()+hours);
    return (`${c.getHours()}:${c.getMinutes()}:${c.getSeconds()}`)
}

function secunda(){
    let OpenSec = Number(document.getElementById("sec").value);
    let OutputSec = document.getElementById('times');
    cleantime()
    OutputSec.insertAdjacentHTML('beforeend', `Было время - ${timer()} <br>  Новое время - ${TakeSec(OpenSec)}`);
}

function minuta(){
    let OpenMin= Number(document.getElementById("min").value);
    OutputMin = document.getElementById('times');
    cleantime()
    OutputMin.insertAdjacentHTML('beforeend', `Было время - ${timer()} <br>  Новое время - ${TakeMin(OpenMin)}`);
}

function hourse(){
    let OpenHours= Number(document.getElementById("hours").value);
    OutputHours = document.getElementById('times');
    cleantime()
    OutputHours.insertAdjacentHTML('beforeend', `Было время - ${timer()} <br>  Новое время - ${TakeHours(OpenHours)}`);
}
