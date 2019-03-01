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

function sum(){
	var s=0;
	for (var i = 0; i < arguments.length; i++) {
		s=s+arguments[i] ;
  }
  return s;
}

function avg(){
	var s=0, k=0;
	for (var i = 0; i < arguments.length; i++) {
		s=s+arguments[i] ;
		k=k+1;
  }
  return s/k;
}


function aSample(){
	a("Hello!");
}

function cubeSample(){
	cube(5);
}

function avg2Sample(){
	avg2(10,5);
}

function sum3Sample(){
	sum3(1,23,32);
}

function intRandomSample(){
	intRandom(10);
}

function greetAllSample(){
	greetAll("Superman","Spiderman");
}

function sumSample(){
	sum(10,20,40,100);
}

function avgSample(){
	avg(10,20,40,100);
}



var sample = prompt("Enter name function");
switch (sample){
	case "a": aSample();
		break;
	case "cube": cubeSample();
		break;
	case "avg2": avg2Sample();
		break;
	case "sum3": sum3Sample();
		break;
	case "intRandom": intRandomSample();
		break;
	case "greetAll": greetAllSample();
		break;
	case "sum": sumSample();
		break;
	case "avg": avgSample();
		break;
	default:
    alert( 'Я таких значений не знаю' );
}