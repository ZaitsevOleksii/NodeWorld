

var inputStructure = [
    {prompt: "Enter surname",
     default_: "",
     field: "surname"
    },
    {prompt: "Enter name",
     default_: "",
     field: "name"
    },
    {prompt: "Enter fatherName",
     default_: "",
     field: "fatherName"
    },
    {prompt: "Enter age",
     default_: "0",
     field: "age"
    },
]

var resulte={};

function inputAnything(inputStructure){
	
	for(var i=0;i<=inputStructure.length;i++){
		
		resulte[inputStructure[i].field]=prompt(inputStructure[i].prompt,inputStructure[i].default_);
	}
	alert(resulte);
}


inputAnything(inputStructure);