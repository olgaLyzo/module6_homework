//Задачи с модуля 6

//#2 Простые числа

	function check (n) {
		
	    if (n === 1 || n === 0 || n > 1000) {
	    		console.log('неверные данные');
	        return false;
	    } else {
	        for(let i = 2; i < n; i++) {
	            if(n % i === 0) {
	            		console.log(`${n}-непростое число`);
	                return false;
	            }
	        }
	        console.log(`${n}-простое число`);
	        return true;  
	    }
	}
	 check(10);

