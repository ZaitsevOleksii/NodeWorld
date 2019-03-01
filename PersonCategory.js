var person = {
	name: 'John',
	age: 120,
	getAgeCategory: function() {
		if (this.age > 50){
			return ">50";
		} 
		else {
			return "<50";
		}
	}
}

alert(person.getAgeCategory());