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
	return a("Hello!");
}

function cubeSample(){
	return cube(5);
}

function avg2Sample(){
	return avg2(10,5);
}

function sum3Sample(){
	return sum3(1,23,32);
}

function intRandomSample(){
	return intRandom(10);
}

function greetAllSample(){
	return greetAll("Superman","Spiderman");
}

function sumSample(){
	return sum(10,20,40,100);
}

function avgSample(){
	return avg(10,20,40,100);
}



var key = prompt("Enter name function");

var sample={
	a: aSample(),
	cube: cubeSample(),
	avg2: avg2Sample(),
	sum3: sum3Sample(),
	intRandom: intRandomSample(),
	greetAll: greetAllSample(),
	sum: sumSample(),
	avg: avgSample()
};

/*var sample={};
	sample.a = aSample();
	sample.cube = cubeSample();
	sample.avg2 = avg2Sample();
	sample.sum3 = sum3Sample();
	sample.intRandom = intRandomSample();
	sample.greetAll = greetAllSample();
	sample.sum = sumSample();
	sample.avg = avgSample();
*/

alert(sample[key]);
