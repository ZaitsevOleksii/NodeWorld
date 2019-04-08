fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function(res){
		if (res.status !==200) throw new Error(res.status);
		console.log(res);
		return res.json();
	})
	/*.then(posts => {
		console.log(posts);
		return posts;
		})
	*/
	.then(function(posts){
		let ArrPosts = new Array();
		for (let i=0;i<=posts.length-1;i++){
			
			if (posts[i].title.length < 30){
				console.log(posts[i].title.length);
				console.log(posts[i].title);
				ArrPosts[i] = posts[i];
			}
		}
		return ArrPosts;
	})
	.then(function(ArrPosts){
		for (let i=ArrPosts.length-1;i>=0;i--)
			console.log(ArrPosts[i]);
	})
	.catch(function(err){
		console.log(err);
	});