var greeting,wishes;
const today=new Date();
const day_list=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

/* get day*/
let day=today.getDay();
document.querySelector(".day").innerHTML=day_list[day];
/*console.log("Today is :"+day_list[day]);*/

/* get time*/
let hour=today.getHours();
let second=today.getSeconds();
let minute=today.getMinutes();

let prepand=(hour>12)?"PM":"AM";

if(hour<12 && prepand==="AM"){
    greeting="Good morning";
    wishes="One small positive thought in the morning can chamge your whole day.";

}
else if(hour<17 && prepand==="PM"){
    greeting="Good afternoon";
    wishes="";
}
else{
    greeting="Good evening";
    wishes="wishing you an evening filled with laughter and happiness";
}

if(minute<10){
    minute="0"+minute;
}
if(second<10){
    second="0"+second;
}

/* convert time zone */
if(hour>12){
    hour=hour-12;
}

/*console.log(`Time :${hour}:${minute}:${second}  ${prepand}`);
console.log(greeting);*/
document.querySelector(".welcome").innerHTML=greeting;
document.querySelector(".time").innerHTML=` ${hour}:${minute}:${second}  ${prepand}`;
document.querySelector(".wishes").innerHTML=wishes;

