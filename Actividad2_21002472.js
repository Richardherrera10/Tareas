// Crear una variable llamada mes y que tenga asignado por defecto el valor 10. 

var mes = 10; 


/* Crear un programa que verifique si el valor de mes está entre 12 y 2 
(12, 1 o 2), entonces que imprima en pantalla “es invierno”, si el valor
de mes está entre 3 y 5, que imprima en pantalla “es primavera”, si el valor
de mes se encuentra entre 6 y 8 que imprima en pantalla “es verano” y si se
encuentra entre 9 y 11 que imprima en pantalla “es otoño”. */ 


var estacion = prompt("Ingrese Número de Mes") ;



if (estacion == 1 || estacion == 2 || estacion  == 12)  {
alert("Es invierno")
 
   } else if (estacion == 3 || estacion == 4 || estacion == 5) {
     alert("Es Primavera")
      } else if (estacion == 6 || estacion == 7 || estacion == 8) {
     alert("Es Verano")
      } else if (estacion == 9 || estacion == 10 || estacion == 11) {
     alert("Es Otoño")
}

/* Al finalizar debe imprimir en pantalla un mensaje que 
indique su número de carné y su nombre completo. */ 

var nombre = "Ricardo Antonio Herrera Villatoro - 21002472"

alert(nombre)



