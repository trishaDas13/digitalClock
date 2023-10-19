let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let ampm = document.querySelector('.ampm');
let btn = document.querySelectorAll('.btns button');
let flag = true;

//todo --------- 12-hour-clock ---------
function clock12(){
        if (flag == true){
        let date = new Date();
        let gethour = date.getHours();
        let getminute = date.getMinutes();
        let getsecond = date.getSeconds();

        if(gethour == 0){
            gethour = 12;
        }
        if(gethour > 12){
            gethour -= 12;
            ampm.innerText = "PM";
        }
        else{
            ampm.innerText = "AM";
        }
        getsecond = String(getsecond).padStart('2','0');
        getminute = String(getminute).padStart('2','0');
        gethour = String(gethour).padStart('2','0');

        hour.innerText = gethour;
        minute.innerText = getminute;
        second.innerText = getsecond;
    }
}

//todo --------- 24-hour-clock ---------
function clock24(){
    if(flag == false){
        let date = new Date();
        let gethour = date.getHours();
        let getminute = date.getMinutes();
        let getsecond = date.getSeconds();

        getsecond = String(getsecond).padStart('2','0');
        getminute = String(getminute).padStart('2','0');
        gethour = String(gethour).padStart('2','0');

        hour.innerText = gethour;
        minute.innerText = getminute;
        second.innerText = getsecond;
    }
}

btn[0].addEventListener("click", function(){
    flag = true;
    setInterval(clock12, 1000);
});

btn[1].addEventListener("click", function(){
    flag = false;
    setInterval(clock24, 1000);
});
