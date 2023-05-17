//Задачи с модуля 6

//#5 arrow function
	
	//вариан6т 1
	const arrowFunc=(x,n)=>{return Math.pow(x,n);};
	console.log(arrowFunc(4,5));
	
	//вариант2
	const arrowFunc=(x,n)=>{
		let result=x;
		for(let i=2; i<= n; i++){
	  		result *= x;
		}
		return result;
	};
	console.log(arrowFunc(4,5));