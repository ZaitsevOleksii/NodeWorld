fetch('https://jsonplaceholder.typicode.com/todos')
	.then(function(res){
		if (res.status !==200) throw new Error(res.status);
		console.log(res);
		return res.json();
	})
	.then(todos => {console.log(todos);return todos})
	.then(function(todos){
		let ArrTodo = new Array();
		for (let i=0;i<=todos.length-1;i++){
			if (todos[i].completed == true){
				ArrTodo[i] = todos[i];
			}
		}
		return ArrTodo;
	})
	.then(function(ArrTodo){
		for (let i=0;i<=ArrTodo.length-1;i++)
			console.log(ArrTodo[i]);
	})
	.catch(function(err){
		console.log(err);
	});