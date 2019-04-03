let promise = new Promise(function(resolve, reject){
	setTimeout(function(){
		const num = Math.random();
		if (num > 0.5) {
			resolve(Math.random());
			
		} else {
			reject('Упс, что-то пошло не так');
		}
	}, 1000);
});

promise
	.then(function(res){
		alert(Math.round(res*10));
	})
	.catch(function(err){
		alert(err);
	})
	.finally(function(){
		alert('Работает по-любому');
	})
	
