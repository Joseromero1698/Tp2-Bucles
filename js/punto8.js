/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */
let numero1 = parseInt(prompt("ingrese un numero del 1 al 50"))
let numero2 = parseInt(prompt("ingrese otro numero del 1 al 50"))
for (i =numero1; i<=numero2;i++){
    for(let repeticiones=0; repeticiones<i;repeticiones++)
    document.writeln(i)
    document.writeln("<br>")
}
