console.log("Ejercicios String: ")

/* 1 */

let num1 = 5
let num2 = 10

console.log(`1. Suma: ${num1 + num2}`)

/* 2 */

let simpleString1 = "Hola"
let simpleString2 = "Mundo"

console.log(`2. Longitud total: ${simpleString1.length + simpleString2.length}`)

/* 3 */

let stringUsingString1 = String("JavaScript")
let stringUsingString2 = String("Ejercicios")

/* 4 */

let stringUsingNewString1 = new String("Concatenar")
let stringUsingNewString2 = new String("Strings")

/* 5 */

console.log(`5. El index de "la" en simpleString1 es: ${simpleString1.indexOf("la")}`)
// console.log(`El index de "la" en simpleString1 es: ${simpleString1.search("la")}`)

/* 6 */

console.log(`6. El substring ndo se encuentra en simpleString2?: ${simpleString2.includes("ndo")}`)

/* 7 */

console.log(`7. La concatenación con concat sería: ${simpleString1.concat(" ", simpleString2)}`)

/* 8 */

console.log("8. La concatenación con + sería: " + simpleString1 + " " + simpleString2)

/* 9 */

console.log(`9. La concatenación con templates sería: ${simpleString1} ${simpleString2}`)

/* 10 */

let stringWithSpaces1 = " TrimStart" 
let stringWithSpaces2 = "TrimEnd "

console.log(`10. Trim start:${stringWithSpaces1.trimStart()}
Trim End: ${stringWithSpaces2.trimEnd()}`)

/* 11 */

console.log(`11. replace: ${simpleString1.replace("o", "i")}`)

/* 12 */

console.log(`12. Slice: ${simpleString2.slice(0,3)}`)

/* 13 */

console.log(`13. Substring: ${simpleString2.substring(2)}`)

/* 14 */

console.log(`14. Repeat: ${simpleString1.repeat(2)}`)

/* 15 */

console.log(`15. Fragmentación: `)
console.table("Esto es una oración de ejemplo".split(" "))

/* 16 */

console.log(`16. UpperCase: ${simpleString2.toUpperCase()}`)

/* 17 */

console.log(`16. UpperCase: ${simpleString1.toLowerCase()}`)

/* 18 */

let booleana = true
console.log(`17. Typeof variable booleana: ${typeof booleana}`)

/* 19 */

let array = [1,2,3]
console.log(`19. Longitud array: ${array.length}`)

/* 20 */

let objeto = {"nombre": "Caro", "edad": 26, "clan": "Dell"}
console.log(`20. Propiedad objeto: ${objeto.nombre}`)

/* 21 */

let nulo = null
console.log(`21. Typeof nulo: ${typeof nulo}`) 
// null por un error histórico tiene como typeof object. Pero no es que sea un object ni que herede de él. No se arregla el bug para evitar problemas de retrocompatibilidad. 

/* 22 */

let indefinido 
console.log(`22. Type of indefinido: ${typeof indefinido}`)

/* 23 */

let decimal = 1.5
console.log(`23. Type of decimal: ${typeof decimal}`)

/* 24 */

let negativo = -10
console.log(`24. Type of negativo: ${typeof negativo}`)

/* 25 */
console.log(`25. indexOf: ${"casa".indexOf("a")}`)

/* 26 */
console.log(`26. includes: ${"Javascript".includes("Script")}`)

/* 27 */

console.log(`27. La concatenación con concat sería: ${"Hola".concat(" ", "Mundo")}`)

/* 28 */

console.log("28. La concatenación con + sería: " + "Hola" + " " + "Mundo")

/* 29 */

console.log(`29. La concatenación con templates sería: ${"Hola"} ${"Mundo"}`)

/* 30 */

let cadenaConEspacios = " Ejemplo con espacios "

console.log(`30. Trim start:${cadenaConEspacios.trimStart()}
Trim End:${cadenaConEspacios.trimEnd()}
Trim:${cadenaConEspacios.trim()}`)

/* 31 */

console.log(`31. Replace: ${"El cielo es azul".replace("azul", "rojo")}`)

/* 32 */

console.log(`32. Slice:  ${"Programación".slice(-4)}`)

/* 33 */

console.log(`33. Substring: ${"JavaScript".substring(2)}`)

/* 34 */

console.log(`34. Repeat: ${"Hola - ".repeat(3)}`)

/* 35 */

console.log(`35. Otra fragmentación: `)
console.table("Esto es una oración de ejemplo".split(" "))

/* 36 */

console.log(`36. toUpperCase: ${"Javascript".toUpperCase()}`)

/* 37 */

console.log(`37. toLowerCase: ${"EJEMPLO".toLowerCase()}`)

/* 38 */

let numero = 50
console.log(`38. typeof número: ${typeof numero}`)

/* 39 */

let booleana2 = false
console.log(`39. typeof booleana2: ${typeof booleana2}`)

/* 40 */

let array2 = ["Caro", "Pablo", "Juan", "Santi"]
console.log(`40. Length array: ${array2.length}`)

/* 41 */

let objeto2 = {"nombre": "Pablo", "edad": 20, "clan": "Dell"}
console.log(`41. Propiedad objeto: ${objeto2.clan}`)

/* 42 */

let nulo2 = null
console.log(`42. Typeof nulo2: ${typeof nulo2}`) 

/* 43 */

let indefinido2 
console.log(`43. Type of indefinido: ${typeof indefinido2}`)

/* 44 */

let decimal2 = 67.98
console.log(`44. Type of decimal2: ${typeof decimal2}`)

