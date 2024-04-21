console.log("Ejercicios String: ")

/* 1 Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos.*/

let num1 = 5
let num2 = 10

console.log(`1. Suma: ${num1 + num2}`)

/* 2 Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.*/

let simpleString1 = "Hola"
let simpleString2 = "Mundo"

console.log(`2. Longitud total: ${simpleString1.length + simpleString2.length}`)

/* 3 Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript" y stringUsingString2 con el valor "Ejercicios". */

let stringUsingString1 = String("JavaScript")
let stringUsingString2 = String("Ejercicios")

/* 4 Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 con el valor "Strings".*/

let stringUsingNewString1 = new String("Concatenar")
let stringUsingNewString2 = new String("Strings")

/* 5 Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.*/

console.log(`5. El index de "la" en simpleString1 es: ${simpleString1.indexOf("la")}`)
// console.log(`El index de "la" en simpleString1 es: ${simpleString1.search("la")}`)

/* 6 Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola.*/

console.log(`6. El substring ndo se encuentra en simpleString2?: ${simpleString2.includes("ndo")}`)

/* 7 Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola.*/

console.log(`7. La concatenación con concat sería: ${simpleString1.concat(" ", simpleString2)}`)

/* 8 Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola.*/

console.log("8. La concatenación con + sería: " + simpleString1 + " " + simpleString2)

/* 9 Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola.*/

console.log(`9. La concatenación con templates sería: ${simpleString1} ${simpleString2}`)

/* 10 Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola.*/

let stringWithSpaces1 = " TrimStart" 
let stringWithSpaces2 = "TrimEnd "

console.log(`10. Trim start:${stringWithSpaces1.trimStart()}
Trim End: ${stringWithSpaces2.trimEnd()}`)

/* 11 Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola.*/

console.log(`11. replace: ${simpleString1.replace("o", "i")}`)

/* 12 Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola.*/

console.log(`12. Slice: ${simpleString2.slice(0,3)}`)

/* 13 Utiliza el método substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2 e imprime el resultado en consola.*/

console.log(`13. Substring: ${simpleString2.substring(2)}`)

/* 14 Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola.*/

console.log(`14. Repeat: ${simpleString1.repeat(2)}`)

/* 15 Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.*/

console.log(`15. Fragmentación: `)
console.table("Esto es una oración de ejemplo".split(" "))

/* 16 Convierte la variable simpleString2 a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.*/

console.log(`16. UpperCase: ${simpleString2.toUpperCase()}`)

/* 17 Convierte la variable simpleString1 a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.*/

console.log(`16. UpperCase: ${simpleString1.toLowerCase()}`)

/* 18 Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().*/

let booleana = true
console.log(`17. Typeof variable booleana: ${typeof booleana}`)

/* 19 Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.*/

let array = [1,2,3]
console.log(`19. Longitud array: ${array.length}`)

/* 20 Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.*/

let objeto = {"nombre": "Caro", "edad": 26, "clan": "Dell"}
console.log(`20. Propiedad objeto: ${objeto.nombre}`)

/* 21 Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().*/

let nulo = null
console.log(`21. Typeof nulo: ${typeof nulo}`) 
// null por un error histórico tiene como typeof object. Pero no es que sea un object ni que herede de él. No se arregla el bug para evitar problemas de retrocompatibilidad. 

/* 22 Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().*/

let indefinido 
console.log(`22. Type of indefinido: ${typeof indefinido}`)

/* 23 Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().*/

let decimal = 1.5
console.log(`23. Type of decimal: ${typeof decimal}`)

/* 24 Declara una variable negativo y asígnale un número negativo. Muestra en consola su tipo de dato utilizando el operador typeof().*/

let negativo = -10
console.log(`24. Type of negativo: ${typeof negativo}`)

/* 25 Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola.*/

console.log(`25. indexOf: ${"casa".indexOf("a")}`)

/* 26 Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola.*/

console.log(`26. includes: ${"Javascript".includes("Script")}`)

/* 27 Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola.*/

console.log(`27. La concatenación con concat sería: ${"Hola".concat(" ", "Mundo")}`)

/* 28 Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.*/

console.log("28. La concatenación con + sería: " + "Hola" + " " + "Mundo")

/* 29 Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola.*/

console.log(`29. La concatenación con templates sería: ${"Hola"} ${"Mundo"}`)

/* 30 Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ". Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola.*/

let cadenaConEspacios = " Ejemplo con espacios "

console.log(`30. Trim start:${cadenaConEspacios.trimStart()}
Trim End:${cadenaConEspacios.trimEnd()}
Trim:${cadenaConEspacios.trim()}`)

/* 31 Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.*/

console.log(`31. Replace: ${"El cielo es azul".replace("azul", "rojo")}`)

/* 32 Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola.*/

console.log(`32. Slice:  ${"Programación".slice(-4)}`)

/* 33 Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript" que comience en el índice 2 e imprime el resultado en consola.*/

console.log(`33. Substring: ${"JavaScript".substring(2)}`)

/* 34 Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola.*/

console.log(`34. Repeat: ${"Hola - ".repeat(3)}`)

/* 35 Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.*/

console.log(`35. Otra fragmentación: `)
console.table("Esto es una oración de ejemplo".split(" "))

/* 36 Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.*/

console.log(`36. toUpperCase: ${"Javascript".toUpperCase()}`)

/* 37 Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.*/

console.log(`37. toLowerCase: ${"EJEMPLO".toLowerCase()}`)

/* 38 Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof().*/

let numero = 50
console.log(`38. typeof número: ${typeof numero}`)

/* 39 Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().*/

let booleana2 = false
console.log(`39. typeof booleana2: ${typeof booleana2}`)

/* 40 Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.*/

let array2 = ["Caro", "Pablo", "Juan", "Santi"]
console.log(`40. Length array: ${array2.length}`)

/* 41 Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.*/

let objeto2 = {"nombre": "Pablo", "edad": 20, "clan": "Dell"}
console.log(`41. Propiedad objeto: ${objeto2.clan}`)

/* 42 Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().*/

let nulo2 = null
console.log(`42. Typeof nulo2: ${typeof nulo2}`) 

/* 43 Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().*/

let indefinido2 
console.log(`43. Type of indefinido: ${typeof indefinido2}`)

/* 44 Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().*/

let decimal2 = 67.98
console.log(`44. Type of decimal2: ${typeof decimal2}`)

