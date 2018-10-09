//alert("en el archivo externo")
var n=0;

function mostrar(){
	alert("hay "+n+"alumnos");
}
function leerDatos(){
	var x=parseInt(prompt("numero de alumnos"));
	if(isNaN(x))
		alert("numero invalido");
	else
		n=x;
}