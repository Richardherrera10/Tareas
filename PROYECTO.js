var cotizacionBase = 2000;
var subtotalAseguradoEdad
var subtotalConyuge
var subtotalHijos
var totalCotizacion
var edadConyuge
var subtotalPropiedades
var subtotalSalarios
var condicion = true
var totalRecargos
while (condicion == true) {
//Se pregunta el nombre y la edad del asegurado
var nombreAsegurado = prompt("Escriba su Nombre")
var edadAsegurado = prompt("Escriba su edad")
//Si es mayor de edad puede proseguir
if (edadAsegurado >= 18 ) {
//Subtotal a cargar si tiene entre 18 y 24 años
  if (edadAsegurado >= 18 && edadAsegurado <= 24) {
    subtotalAseguradoEdad = cotizacionBase * 0.1
    //subtotal a cargar si tiene entre 25 y 49
  } else if (edadAsegurado >= 25 && edadAsegurado <= 49) {
    subtotalAseguradoEdad = cotizacionBase * 0.2
    // subtotal a pagar si tiene más de 50
  } else if (edadAsegurado >= 50) {
    subtotalAseguradoEdad = cotizacionBase * 0.3
  }
  //Pregunta si está casado
var casado = prompt("¿Se encuentra casado? Escriba Si o No")
  if (casado == "Si") {
  //Pregunta la edad para aplicar los mismos cargos de edad
      edadConyuge = prompt("Escriba la edad de su cónyuge")
      if (edadConyuge >= 18 && edadConyuge <= 24) {
         subtotalConyuge= cotizacionBase * 0.1
      } else if  (edadConyuge >= 25 && edadConyuge <= 49) {
        subtotalConyuge = cotizacionBase * 0.2
      } else if (edadConyuge >= 49) {
        subtotalConyuge = cotizacionBase * 0.3
      }
      //si no está casado se cobra 0 al subtotal del conyuge
  } else if (casado == "No"){
    subtotalConyuge=0
  }
  //Se preguntan si tiene hijos o no
  var hijos = prompt("¿Tiene Hijos? Escriba Si o No"); 
if (hijos == "Si"){
  var cantidadHijos = prompt("¿Cuántos hijos tiene")
  subtotalHijos = cotizacionBase * cantidadHijos* 0.2
} else if (hijos == "No") { 
  subtotalHijos = 0
}
//se pregunta por la cantidad
var cantidadPropiedades = prompt("¿Cuál es el valor de sus propiedades? Responda en números")
subtotalPropiedades = cantidadPropiedades* 0.35 ;

//se pregunta por el salario
var cantidadSalario = prompt("¿Cuál es su salario? Responda en números")
subtotalSalarios = cantidadSalario* 0.05
 totalRecargos = subtotalAseguradoEdad + subtotalConyuge + subtotalHijos + subtotalPropiedades + subtotalSalarios
 totalCotizacion=cotizacionBase + subtotalAseguradoEdad+subtotalConyuge+subtotalHijos + subtotalPropiedades + subtotalSalarios
 
 //si no es mayor de 18 no es elegible y los totales se igualan a 0
  } else if (edadAsegurado < 18 ) {
alert("No es elegible")
totalCotizacion = 0
totalRecargos = 0


}
//cuando se haya ingresado la información muestra las cntidades
alert (nombreAsegurado + "\nLa cantidad extra por los recargos es de " + totalRecargos + "\nEl precio total de la cotización es de " + totalCotizacion)
//Pregunta si se desean hacer más cotizciones, si no se sale del ciclo while y termina el programa.
var pregunta = prompt("Si desea continuar escriba 'Continuar' \nSi desea salir esciba 'Salir' ")
if (pregunta == "Continuar") {
  condicion = true; 
} else if (pregunta == "Salir"){
  condicion = false
}
  }