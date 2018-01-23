



window.onload = function cargar(){
	document.getElementById("Opc1").onclick=function(){Opc1();};
	document.getElementByID("Opc2").onclick=function(){Opc2();}; 
	document.getElementByID("Opc3").onclick=function(){Opc3();}; 

}

function Opc1(){
	document.getElementById("Opc1").style.display="block";
	document.getElementByID("Opc2").style.display="none";
	document.getElementByID("Opc3").style.display="none";
}

function Opc2(){
	document.getElementByID("Opc2").style.display="block";
	document.getElementByID("Opc1").style.display="none";
	document.getElementByID("Opc3").style.display="none";
}

function Opc3(){
	document.getElementByID("Opc3").style.display="block";
	document.getElementByID("Opc1").style.display="none";
	document.getElementByID("Opc3").style.display="none";
}