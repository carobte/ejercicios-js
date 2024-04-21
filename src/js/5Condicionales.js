console.log("Estructuras de control pt-1")

// Ejercicios con Condicionales en Javascript

let numero = Number(prompt("Ingresa un número:")) // Variable que usaré en varios ejercicios numéricos.

// 1. Verifica si un número es positivo.
if (numero > 0) { //también podría hacerse con Math.sign(numero) === 1
    console.log(`1. El número (${numero}) es positivo.`)
} else {
    console.log(`1. El número (${numero}) no es positivo.`)
}

// 2. Verifica si un número es negativo. 

if (numero < 0) {
    console.log(`2. El número ${numero} es negativo.`)
} else {
    console.log(`2. El número ${numero} no es negativo.`)
}

// 3. Comprueba si un número es par.

if (numero % 2 === 0) {
    console.log(`3. El número ${numero} es par.`)
} else {
    console.log(`3. El número ${numero} no es par.`)
}

// 4. Comprueba si un número es impar.

if (numero % 2 !== 0) {
    console.log(`4. El número ${numero} es impar.`)
} else {
    console.log(`4. El número ${numero} no es impar.`)
}

// 5. Determina si un número es múltiplo de 5.

if (numero % 5 === 0) {
    console.log(`5. El número ${numero} es múltiplo de 5.`)
} else {
    console.log(`5. El número ${numero} no es múltiplo de 5.`)
}

// 6. Verifica si un número es divisible entre 3.

if (numero % 3 === 0) {
    console.log(`6. El número ${numero} es divisible por 3.`)
} else {
    console.log(`6. El número ${numero} no es divisible por 3.`)
}

// 7. Determina si un número es mayor que 100.

if (numero > 100) {
    console.log(`7. El número ${numero} es mayor que 100.`)
} else {
    console.log(`7. El número ${numero} no es mayor que 100`)
}

// 8. Verifica si un número es menor que -50.

if (numero < -50) {
    console.log(`8. El número ${numero} es menor que -50.`)
} else {
    console.log(`8. El número ${numero} no es menor que -50`)
}

// 9. Comprueba si un número está en el rango de 20 a 50.

if (numero >= 20 && numero <= 50) {
    console.log(`9. El número está en el rango de 20 a 50 (${numero}).`)
} else {
    console.log(`9. El número no está en el rango de 20 a 50 (${numero}).`)
}

// 10. Determina si un número es igual a 0.

if (numero === 0) {
    console.log(`10. El número es igual a 0`)
} else {
    console.log(`10. El número no es igual a 0 (${numero}).`)
}

// 11. Verifica si un número es mayor que -10 y menor que 10.

if (numero > -10 && numero < 10) {
    console.log(`11. El número está en el rango de -10 a 10 (${numero}).`)
} else {
    console.log(`11. El número no está en el rango de -10 a 10 (${numero}).`)
}

// 12. Determina si un número es un año bisiesto.

if (numero % 4 === 0) {
    console.log(`12. El número ${numero} es un año bisiesto.`)
} else {
    console.log(`12. El número ${numero} no es es un año bisiesto.`)
}

// 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).

let edad = parseInt(prompt("Ingresa una edad"))

if (edad >= 18) {
    console.log(`13. Eres mayor de edad. Tienes ${edad} años.`)
} else {
    console.log(`13. Eres menor de edad. Tienes ${edad} años.`)
}

// 14. 

// 15. Verifica si un número es un cuadrado perfecto.

/* if (Math.sqrt(numero) === Math.trunc(Math.sqrt(numero))){
    console.log(`15. El ${numero} es un cuadrado perfecto.`)
} else {
    console.log(`15. El ${numero} no es un cuadrado perfecto.`)
} */

if (Number.isInteger(Math.sqrt(numero))) {
    console.log(`15. El ${numero} es un cuadrado perfecto.`)
} else {
    console.log(`15. El ${numero} no es un cuadrado perfecto.`)
}

// 16. Determina si un número es un número de Fibonacci. 
// Un número es un número de Fibonacci si alguno de 5n^2 + 4 o 5n^2 - 4 es un cuadrado perfecto

// Primero realiza las operaciones, luego saca la raíz cuadrada y verifica si son números enteros (cuadrado perfecto)
if (Number.isInteger(Math.sqrt(5 * (numero ** 2) + 4)) || Number.isInteger(Math.sqrt(5 * (numero ** 2) - 4))) {
    console.log(`16. El número ${numero} es un número de Fibonacci`)
} else {
    console.log(`16. El número ${numero} no es un número de Fibonacci`)
}

// 17. Verifica si un número es una potencia de 2.
// Un número es potencia de 2, si su representación binaria contiene únicamente un 1

// 1. Paso a binario
let binario = numero.toString(2)

// 2. Miro cuantos 1 encuentra, match devuelve un array con las coincidencias por lo que miro su longitud
let contador = binario.match(/1/g).length // la g en la expresión regular es para que devuelva todas las coincidencias.

if (contador === 1) {
    console.log(`17. El número ${numero} es potencia de 2`)
} else {
    console.log(`17. El número ${numero} no es potencia de 2`)
}

// 18. Determina si un número es un palíndromo.  

let numeroString = String(numero)

//  Pasamos a string, lo rompemos y queda en array, lo volteamos con reverse y volvemos a unir en un string con join.
if (numeroString === numeroString.split("").reverse().join("")){
    console.log(`18. El número es palíndromo`)
} else {
    console.log(`18. El número no es palíndromo`)
}

// 19. Verifica si una cadena de texto contiene la palabra "JavaScript".

let texto = prompt("Ingresa un texto")
if (texto.includes("JavaScript")) {
    console.log(`19. El texto que ingresaste contiene la palabra JavaScript`)
} else {
    console.log(`19. El texto que ingresaste no contiene la palabra JavaScript`)
}

// 20. Determina si una cadena tiene más de 10 caracteres.

if (texto.length > 10) {
    console.log(`20. El texto que ingresaste contiene más de 10 caracteres`)
} else {
    console.log(`20. El texto que ingresaste no contiene más de 10 caracteres`)
}

// 21. Verifica si una cadena de texto está en minúsculas.

if (texto === texto.toLowerCase()) {
    console.log(`21. El texto que ingresaste está en minúsculas`)
} else {
    console.log(`21. El texto que ingresaste no está en minúsculas`)
}

/* 
if (texto.match(/[a-z ]/g).length) { 
    console.log(`21. El texto que ingresaste está en minúsculas`)
} else {
    console.log(`21. El texto que ingresaste no está en minúsculas`)
} */

// 22. Determina si una cadena de texto contiene al menos un número.

if (texto.search(/\d/) != -1) {  // /\d/ -> buscará cualquier dígito del 0 al 9
    //search devuelve el i de la 1ra coincidencia, si no encuentra devuelve -1.
    console.log(`22. El texto proporcionado contiene números`)
} else {
    console.log(`22. El texto proporcionado no contiene números`)
}

// 23. Verifica si una cadena de texto termina con un punto (.).

if (texto.endsWith(".")) {
    console.log(`23. El texto proporcionado termina en .`)
} else {
    console.log(`23. El texto proporcionado no termina en .`)
}

// 24. Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto). 

// La expresión regular mira que tenga de la a-z, envía al match 1ra coincidencia de cada letra
// Frase pangrama de ejemplo: "The quick brown fox jumps over the lazy dog"

if (texto.toLowerCase().match(/([a-z])(?!.*\1)/g).length === 26){ 
    console.log(`24. El texto ingresado es pangrama`)
} else {
    console.log(`24. El texto ingresado no es pangrama`)
}

// 25. Verifica si un día de la semana es laborable (de lunes a viernes).

let dia = prompt("Ingresa un día de la semana").toLowerCase()

if (dia !== "sabado"  || dia !== "domingo") {
    console.log(`25. El día ingresado es un día laborable`)
} else{
    console.log(`25. El día ingresado no es un día laborable`)
}

// 26. Determina si un día es fin de semana (sábado o domingo).

if (dia === "sabado"  || dia === "domingo") {
    console.log(`26. Es fin de semana`)
} else{
    console.log(`26. No es fin de semana`)
}

// 27. Verifica si un número representa un mes válido (del 1 al 12).

let mes = Number(prompt("Ingresa un número de mes:"))

if (mes >= 1 && mes <= 12) {
    console.log(`27. El número representa un mes válido.`)
} else {
    console.log(`27. El número no representa un mes válido (Es ${mes} y debe ser entre 1-12).`)
}
// 28. Determina si una hora está en el rango de 9 AM a 6 PM.

let hora = Number(prompt("Ingresa una hora en horario militar (0-24)"))

if (hora >= 9 && hora <= 18) {
    console.log(`28. La hora ingresada está en el rango de 9AM a 6PM`)
} else {
    console.log(`28. La hora ingresada no está en el rango de 9AM a 6PM`)
}

// 29. Verifica si una persona es mayor de 65 años o menor de 18 años.

if (edad > 65 || edad < 18) {
    console.log(`29. La edad que ingresaste es mayor de 65 años o menor de 18 años.`)
} else {
    console.log(`29. La edad que ingresaste no es mayor de 65 años o menor de 18 años.`)
}

// 30. Determina si un triángulo es equilátero (tres lados iguales).

let lado1 = Number(prompt("Ingresa el primer lado del triángulo"))
let lado2 = Number(prompt("Ingresa el segundo lado del triángulo"))
let lado3 = Number(prompt("Ingresa el tercer lado del triángulo"))

if (lado1 === lado2 && lado1 === lado3) {
    console.log(`30. El triángulo es equilátero`)
} else {
    console.log(`30. El triángulo no es equilátero`)
}

// 31. Verifica si un triángulo es isósceles (dos lados iguales).

if ((lado1 === lado2 || lado1 === lado3 || lado2 === lado3) && (lado1 !== lado2 || lado1 !== lado3 || lado2 !== lado3)) {
    console.log(`31. El triángulo es isósceles`)
} else {
    console.log(`31. El triángulo no es isósceles`)
}

// 32. Determina si un triángulo es escaleno (todos los lados diferentes).

if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
    console.log(`32. El triángulo es escaleno`)
} else {
    console.log(`32. El triángulo no es escaleno`)
}

// 33. Verifica si un número es mayor que el doble de otro número.

let numero2 = Number(prompt("Ingresa un segundo número:"))

if (numero > numero2 * 2) {
    console.log(`33. El primer número ingresado (${numero}) es mayor que el doble de ${numero2}`)
} else {
    console.log(`33. El primer número ingresado (${numero}) no es mayor que el doble de ${numero2}`)
}

// 34. Determina si la suma de dos números es mayor que 100.

if (numero + numero2 > 100) {
    console.log(`34. La suma de los dos números que ingresaste (${numero} + ${numero2}) es mayor que 100`)
} else {
    console.log(`34. La suma de los dos números que ingresaste (${numero} + ${numero2}) no es mayor que 100`)
}

// 35. Verifica si la resta de dos números es menor que 50.

if (numero - numero2 < 50) {
    console.log(`35. La resta de los dos números que ingresaste (${numero} - ${numero2}) es menor que 50`)
} else {
    console.log(`35. La resta de los dos números que ingresaste (${numero} - ${numero2}) no es menor que 50`)
}

// 36. Determina si un número es el doble del otro número.

if (numero2 === numero * 2) {
    console.log(`36. El segundo número: ${numero2}, es el doble del primero: ${numero}`)
} else {
    console.log(`36. El segundo número: ${numero2}, no es el doble del primero: ${numero}`)
}

// 37. Verifica si el doble de un número es igual al triple de otro número.

if (numero2 === numero * 3) {
    console.log(`37. El segundo número: ${numero2}, es el triple del primero: ${numero}`)
} else {
    console.log(`37. El segundo número: ${numero2}, no es el triple del primero: ${numero}`)
}

// 38. Determina si la suma de dos números es igual a 50.

if (numero + numero2 === 50) {
    console.log(`38. La suma de los dos números que ingresaste (${numero} + ${numero2}) es 50`)
} else {
    console.log(`38. La suma de los dos números que ingresaste (${numero} + ${numero2}) no es 50`)
}

// 39. Verifica si el producto de dos números es mayor que 500.

if (numero * numero2 > 500) {
    console.log(`39. El producto de los números que ingresaste (${numero} * ${numero2}) es mayor que 500`)
} else {
    console.log(`39. El producto de los números que ingresaste (${numero} * ${numero2}) no es mayor que 500`)
}

// 40. Determina si la división de dos números es menor que 10.

if (numero / numero2 < 10) {
    console.log(`40. La división de los números que ingresaste (${numero} / ${numero2}) es menor que 10`)
} else {
    console.log(`40. La división de los números que ingresaste (${numero} / ${numero2}) no es menor que 10`)
}