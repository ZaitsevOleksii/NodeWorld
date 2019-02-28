function a(text){
	alert(text);
}

function cube(x){
	return x*x*x;
}

function avg2(a,b){
	return (a+b)/2;
}

function sum3(a,b,c){
	return a+b+c;
}

function intRandom(a,b){
	if(b===undefined){
		b=a;
		a=0;
	}
	return Math.round(a-0.5+Math.random()*(b-a+1));
}

function greetAll(){
	var s="";
	for (var i = 0; i < arguments.length; i++) {
		s=s+arguments[i]+", " ;
  }
  alert( "Привет, " + s );
}