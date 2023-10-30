let calculation='';
let display=document.querySelector(".display");
function cal(x){
    if(x==="equal"){
        calculation=eval(calculation)
        console.log(calculation);
        document.querySelector(`.display`).innerHTML=calculation;
    }
    else if(x=="clear")
    {
        calculation=" ";
        document.querySelector(`.display`).innerHTML=calculation;  

    }
    
    else if(x=='1'|| '2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0'||'+'||'-'||'*'||'/'||'.' ||'%'){
        calculation+=x;
        document.querySelector(`.display`).innerHTML=calculation;  
    }
   

}