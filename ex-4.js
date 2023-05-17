//Задачи с модуля 6

//#4 setInterval
	
let a=5;
let b=15;
const interval=setInterval(function(){
    if(a<=b){
      console.log(a);
      a++;
    }
   else{
    clearInterval(interval);
   }
},1000);
 

	