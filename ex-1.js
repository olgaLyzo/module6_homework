//Задачи с модуля 6

//#1 поиск четных/нечетных элементов с пом функции

	function check(arr){
	 	let obj = {even:[],
	 							odd:[],
	          		zero:[]};
	          
	  for(let i=0; i < arr.length-1; i++){
	  		if(typeof arr[i]==="number"){
	    				if(arr[i]%2===0){
	        				obj.even+=arr[i];
	            		if(arr[i]===0){
	            				obj.zero+=arr[i];  
	        				}
	             }else{
	        				obj.odd+=arr[i];   
	        		 }
	     	 }	
	  }
	  let result = console.log(`${obj.even.length} четных, ${obj.odd.length} нечетных и ${obj.zero.length} нулевых значений`);
	  
	  return result;
	  
	}

	check([2,5,6,0,null]);


