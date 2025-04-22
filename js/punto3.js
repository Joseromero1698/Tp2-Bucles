/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

 */

let cadenas = [];  

while (true) {
  let entrada = prompt("Introduce una cadena de texto (o pulsa Cancelar para salir):"); 
  if (entrada === null) {
    break;
  }
  cadenas.push(entrada);
}

let resultado = cadenas.join('-');
document.writeln("Las cadenas concatenadas son: " + resultado);