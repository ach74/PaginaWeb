

var url ="https://cdn.rawgit.com/ach74/PaginaWeb/a3047ad5/xml/xml.xml";
var xhttp = new XMLHttpRequest();





window.onload = function(){
	document.getElementById("Opc1").onclick=function(){
		Opc1();
	}
	document.getElementById("Opc2").onclick=function(){
		Opc2();
	}
	document.getElementById("Opc3").onclick=function(){
		Opc3();
	}

	 xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    // función personalizada que gestiona la respuesta a la petición de fichero
    gestionarXml(this); 
   }
  };
  xhttp.open("GET", url, true); //url del fichero
  xhttp.send();


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

function impSelect(s, i){
	var select = document.getElementsByTagName("select")[i-2];
	for( i = 0; i < s.length; i ++){
		var opc = document.createElement("option");
		opc.text = s[i];
		opc.value = i + 1;
		select.options.add(option);
	}
}

// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarXml(dadesXml){
  var xmlDoc = dadesXml.responseXML;


	for (i = 0 ; i <= 10; i++) {
			
			document.getElementsByTagName("span")[i].innerHTML = xmlDoc.getElementsByTagName("title")[i].innerHTML;
	}
	//Leer Selector multiple
	for(i = 2 ; i < 4; i ++){
		var s = [];
		var Max = xmlDoc.getElementsByTagName("question")[i].getElementsByTagName('option').length;
		for(j = 0; j < Max; j++){
			s[j] = xmlDoc.getElementsByTagName("question")[i].getElementsByTagName("option")[j].innerHTML;
		}
		impSelect(s, i);
	}
}

