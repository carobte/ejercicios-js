console.log("Estructuras de control pt-1")

// Ejercicios con Condicionales en Javascript

// 1. Verifica si un número es positivo.
// 2. Verifica si un número es negativo. 

let numero = 89 // Variable que usaré en varios ejercicios.

if(numero > 0) { //también podría hacerse con Math.sign(numero) === 1
    console.log(`1. El número (${numero}) es positivo.`)
} else if (numero < 0) {
    console.log(`2. El número (${numero}) es negativo.`)
} else {
    console.log(`(1-2). El número es: ${numero}.`)
}

// 3. Comprueba si un número es par.
// 4. Comprueba si un número es impar.

if (numero % 2 === 0){
    console.log(`3. El número ${numero} es par.`)
} else {
    console.log(`4. El número ${numero} es impar.`)
}

// 5. Determina si un número es múltiplo de 5.

if (numero % 5 === 0){
    console.log(`5. El número ${numero} es múltiplo de 5.`)
} else {
    console.log(`5. El número ${numero} no es múltiplo de 5.`)
}

// 6. Verifica si un número es divisible entre 3.

if (numero % 3 === 0){
    console.log(`6. El número ${numero} es divisible por 3.`)
} else {
    console.log(`6. El número ${numero} no es divisible por 3.`)
}

// 7. Determina si un número es mayor que 100.

if (numero > 100){
    console.log(`7. El número ${numero} es mayor que 100.`)
} else {
    console.log(`7. El número ${numero} no es mayor que 100`)
}

// 8. Verifica si un número es menor que -50.

if (numero < -50){
    console.log(`8. El número ${numero} es menor que -50.`)
} else {
    console.log(`8. El número ${numero} no es menor que -50`)
}

// 9. Comprueba si un número está en el rango de 20 a 50.

if (numero >= 20 && numero <= 50 ){
    console.log(`9. El número está en el rango de 20 a 50 (${numero}).`)
} else {
    console.log(`9. El número no está en el rango de 20 a 50 (${numero}).`)
}

// 10. Determina si un número es igual a 0.

if (numero === 0 ){
    console.log(`10. El número es igual a 0`)
} else {
    console.log(`10. El número no es igual a 0 (${numero}).`)
}

// 11. Verifica si un número es mayor que -10 y menor que 10.

if (numero > -10 && numero < 10 ){
    console.log(`11. El número está en el rango de -10 a 10 (${numero}).`)
} else {
    console.log(`11. El número no está en el rango de -10 a 10 (${numero}).`)
}

// 12. Determina si un número es un año bisiesto.

if (numero % 4 === 0){
    console.log(`12. El número ${numero} es un año bisiesto.`)
} else {
    console.log(`12. El número ${numero} no es es un año bisiesto.`)
}

// 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).

let edad = 18

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

if (Number.isInteger(Math.sqrt(numero))){
    console.log(`15. El ${numero} es un cuadrado perfecto.`)
} else {
    console.log(`15. El ${numero} no es un cuadrado perfecto.`)
}

// 16. Determina si un número es un número de Fibonacci. 
// Un número es un número de Fibonacci si alguno de 5n^2 + 4 o 5n^2 - 4 es un cuadrado perfecto

// Condiciones: Primero realiza las operaciones, luego saca la raíz cuadrada y verifica si son números enteros (cuadrado perfecto)
if (Number.isInteger(Math.sqrt(5 * (numero ** 2) + 4)) || Number.isInteger(Math.sqrt(5 * (numero ** 2) - 4))){
    console.log(`16. El número ${numero} es un número de Fibonacci`)
} else {
    console.log(`16. El número ${numero} no es un número de Fibonacci`)
}

// 17. Verifica si un número es una potencia de 2.
// 18. Determina si un número es un palíndromo. 
// 19. Verifica si una cadena de texto contiene la palabra "JavaScript".
// 20. Determina si una cadena tiene más de 10 caracteres.
// 21. Verifica si una cadena de texto está en minúsculas.
// 22. Determina si una cadena de texto contiene al menos un número.
// 23. Verifica si una cadena de texto termina con un punto (.).
// 24. Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto).
// 25. Verifica si un día de la semana es laborable (de lunes a viernes).
// 26. Determina si un día es fin de semana (sábado o domingo).
// 27. Verifica si un número representa un mes válido (del 1 al 12).
// 28. Determina si una hora está en el rango de 9 AM a 6 PM.
// 29. Verifica si una persona es mayor de 65 años o menor de 18 años.
// 30. Determina si un triángulo es equilátero (tres lados iguales).
// 31. Verifica si un triángulo es isósceles (dos lados iguales).
// 32. Determina si un triángulo es escaleno (todos los lados diferentes).
// 33. Verifica si un número es mayor que el doble de otro número.
// 34. Determina si la suma de dos números es mayor que 100.
// 35. Verifica si la resta de dos números es menor que 50.
// 36. Determina si un número es el doble del otro número.
// 37. Verifica si el doble de un número es igual al triple de otro número.
// 38. Determina si la suma de dos números es igual a 50.
// 39. Verifica si el producto de dos números es mayor que 500.
// 40. Determina si la división de dos números es menor que 10.