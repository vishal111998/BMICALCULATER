

function calculate(){
	var w = parseInt(document.getElementById('wait').value);
	var h = parseInt(document.getElementById('height').value);
	var n = document.getElementById('name').value;
	var a = parseInt(document.getElementById('age').value);
	if(n==""){
		alert("Name must be requred.. ");
		return false;
	}
	if(isNaN(w)){
		alert("Wait must be requred.. ");
		return false;
	}
	if(isNaN(h)){
		alert("Height must be requred.. ");
		return false;
	}
	if(isNaN(a)){
		alert("Age must be requred.. ");
		return false;
	}
/*	if(h!=0){
		alert("Height must be requred.. ");
		return false;
	}
	if(a!=0){
		alert("Age must be requred.. ");
		return false;
	}*/
	
	var meter = h/100;
	var metersqure = meter*meter;

	var result = w/metersqure;
	//document.getElementById('print').innerHTML=result;

	if(result<=18){
		document.getElementById('print').innerHTML="You are UnderWait..";
	}
	else if(result>=18 && result<=25){
		document.getElementById('print').innerHTML="You are Normal..";
	}
	else if(result>=25 && result<=30){
		document.getElementById('print').innerHTML="You are OverWait..";
	}
	else if(result>30){
		document.getElementById('print').innerHTML="Folw Dite & Start the Exersize Everyday...";
	}

	document.getElementById('name1').innerHTML="Hii.. "+n;
	document.getElementById('thanks').innerHTML="Thanks for to Visit this Website...";

	//document.write(w,h);
}
