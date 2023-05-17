//Задачи с модуля 6

//#3 Функции первого порядка

	function outerFunc (num){
	 		function innerFunc(num2){
        return num + num2;
	    }
    return innerFunc;  
}
	const result=outerFunc(10);
	console.log(result(6));
