function inputPerson(){
	
	this.name=prompt("Name");
	this.surname=prompt("Surname");
	
	return {"name":this.name,"surname":this.surname};
}

var person = [
	inputPerson(),
	inputPerson(),
	inputPerson()
]

alert(person[0]["name"]);