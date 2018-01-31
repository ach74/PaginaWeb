

var url ="https://cdn.rawgit.com/ach74/PaginaWeb/a3047ad5/xml/xml.xml";
var xhttp = new XMLHttpRequest();




window.onload = function cargar(){
	document.getElementById("Opc1").onclick=function(){Opc1();};
	document.getElementById("Opc2").onclick=function(){Opc2();};
	document.getElementById("Opc3").onclick=function(){Opc3();};

}

function Opc1(){
	document.getElementById("Informacion").style.display="block";
	document.getElementById("Ubicacion").style.display="none";
	document.getElementById("myform").style.display="none";
}

function Opc2(){
	document.getElementById("Ubicacion").style.display="block";
	document.getElementById("Informacion").style.display="none";
	document.getElementById("myform").style.display="none";

}

function Opc3(){
	document.getElementById("myform").style.display="block";
	document.getElementById("Informacion").style.display="none";
	document.getElementById("Ubicacion").style.display="none";
}

xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  // función personalizada que gestiona la respuesta a la petición de fichero
  gestionarXml(this); 
 }
};
xhttp.open("GET", url, true); //url del fichero
xhttp.send();

// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarXml(dadesXml){
  var xmlDoc = dadesXml.responseXML;


	var p; 
for (var i = 0 ; i <= 10; i++) {
		p = "p" + (i + 1) ;
		document.getElementById(p).innerHTML = xmlDoc.getElementsByTagName("title")[i].innerHTML;
	}
}

