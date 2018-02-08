// fichoro xml que está en el servidor rawgit
var url="https://rawgit.com/ach74/PaginaWeb/master/json/json.json";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  // función personalizada que gestiona la respuesta a la petición de fichero
  gestionarJson(this.responseText); 
 }
};
xhttp.open("GET", url, true); //url del fichero
xhttp.send();

// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarJson(dadesJson){
  var object = JSON.parse(dadesJson);
  document.getElementById("p1").innerHTML = object.title[0];
 // document.getElementById("t1").innerHTML = object.pregunta[0].tipus;
 // document.getElementsByTagName("span")[0].innerHTML = object.pregunta[0].title;
}
