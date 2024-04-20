console.log("Ejercicios números")

// 1. Sumar dos números.

console.log(4+6)

// 2. Restar dos números.

console.log(10-5)

// 3. Multiplicar dos números.

console.log(5*45)

// 4. Dividir dos números.

console.log(4589/3)

// 5. Calcular el módulo (resto) de una división.

console.log(5648 % 5)

// 6. Generar un número aleatorio entre 1 y 10.

console.log(Math.round(Math.random() * (10 - 1) + 1))

// 7. Elevar un número a la potencia de otro.

console.log(Math.pow(5, 4))

// 8. Calcular la raíz cuadrada de un número.

console.log(Math.sqrt(5548))

// 9. Convertir grados Celsius a Fahrenheit.
// Fórmula: (0 °C × 9/5) + 32 = 32 °F

console.log((10 * 9/5) + 32)

// 10.Calcular el área de un círculo.
// Área de un círculo = π r²

console.log((Math.PI * Math.pow(5,2))) // Math.PI -> genera el valor de π, y pow eleva 5 a la 2

// 11.Calcular el perímetro de un cuadrado.

console.log(4* 50)

// 12.Calcular el volumen de una esfera.
// V = 4/3 π r³

console.log(4/3 * Math.PI * Math.pow(10,3))

// 13.Calcular el área de un triángulo.
// Area = (b * a) / 2

console.log((10*5)/2)

// 14.Generar la tabla de multiplicar del número 5. 

function tablaMultiplicar(num) {
    let tabla = []
    
    for (let index = 1; index < 11; index++) {
        tabla.push( num * index)
    }
    console.log(`Tabla de multiplicar del ${num}`)
    console.table(tabla)
}

tablaMultiplicar(5)

// 15.Encontrar el número mayor entre 3, 7 y 2.

console.log(Math.max(3, 7, 2))

// 16.Encontrar el número menor entre 10, 20 y 5.

console.log(Math.min(10, 20, 5))

// 17.Calcular el promedio de 4, 6 y 8.

console.log((4+6+8)/3)

// 18.Calcular la factorial de 5.  

function calcularFactorial(num) {

    let factorial = num

    for (let i = 1; i < num; i++) {
        factorial = factorial * i
        // factorial *= i
    }
    console.log(`Factorial de ${num} es ${factorial}`)
}

calcularFactorial(5)

// 19.Redondear el número 3.6.

console.log(Math.round(3.6))

// 20.Calcular el doble de 9.

console.log(9*2)

// 21.Calcular el triple de 4.

console.log(4*3)

// 22.Calcular el cuadrado de 6.

console.log(6**2)

// 23.Calcular el cubo de 3.

console.log(Math.pow(3,3))

// 24.Calcular la suma de los primeros 10 números naturales  

function sumaNaturales(num) {

    let total = 0

    for (let i = 1; i <= num ; i++) { //+1 porque 0 no es natural
        total = total + i
        //total += i
    }

    console.log(`La suma de los primeros ${num} naturales es ${total}`)

}

sumaNaturales(10)

// 25.Calcular la resta entre 50 y 25.

console.log(50-25)

// 26.Multiplicar 7 por 9.

console.log(7*9)

// 27.Dividir 144 por 12.

console.log(144/12)

// 28.Obtener el módulo de 17 dividido por 4.

console.log(17%4)

// 29.Generar un número aleatorio entre 20 y 30.

console.log(Math.round(Math.random() * (30 - 20) + 20))

// 30.Elevar 2 a la potencia de 8.

console.log(Math.pow(2,8))

// 31.Calcular la raíz cuadrada de 144.

console.log(Math.sqrt(144))

// 32.Convertir 100 grados Celsius a Fahrenheit.
// Fórmula: (0 °C × 9/5) + 32 = 32 °F

console.log((100 * 9/5) + 32)

// 33.Calcular el área de un rectángulo de base 5 y altura 10.
// A = b*h

console.log(5*10)

// 34.Calcular el perímetro de un círculo con radio 6.
// P = 2πr

console.log(2 * Math.PI * 6)

// 35.Calcular el volumen de un cubo con lado 4.
// V = lado * lado * lado

console.log(4**3)

// 36.Calcular el área de un rombo con diagonales de 8 y 10.
// diag mayor * diag menor / 2

console.log(10*8/2)

// 37.Calcular el área de un trapecio con bases 6 y 10 y altura 4.
// A=(a+b)h/2.

console.log((6+10)*4/2)

// 38.Generar la tabla de multiplicar del número 8. 

tablaMultiplicar(8)

// 39.Encontrar el número mayor entre 15, 20 y 25.

console.log(Math.max(15, 20, 25))

// 40.Encontrar el número menor entre 50, 75 y 100.

console.log(Math.min(50, 75, 100))

// 41.Calcular el promedio de 7, 9 y 12.

console.log((7+9+12)/3)

// 42.Calcular la factorial de 7. 

calcularFactorial(7)

// 43.Redondear el número 7.9.

console.log(Math.round(7.9))

// 44.Calcular el doble de 15.

console.log(15*2)

// 45.Calcular el triple de 6.

console.log(6*3)

// 46.Calcular el cuadrado de 8.

console.log(Math.pow(8,2))

// 47.Calcular el cubo de 4.

console.log(Math.pow(4,3))

// 48.Calcular la suma de los primeros 15 números naturales. 

sumaNaturales(15)

// 49.Calcular la resta entre 100 y 55.

console.log(100-55)

// 50.Multiplicar 6 por 8.

console.log(6*8)

// 51.Dividir 225 por 15.

console.log(225/15)

// 52.Obtener el módulo de 20 dividido por 7.

console.log(20%7)

// 53.Generar un número aleatorio entre 40 y 50.

console.log(Math.round(Math.random() * (50 - 40) + 40 ))

// 54.Elevar 3 a la potencia de 4.

console.log(3**4)

// 55.Calcular la raíz cuadrada de 169.

console.log(Math.sqrt(169))

// 56.Convertir 80 grados Celsius a Fahrenheit.
// Fórmula: (0 °C × 9/5) + 32 = 32 °F

console.log((80 * 9/5) + 32)

// 57.Calcular el área de un rectángulo de base 8 y altura 12.
// A = b*h

console.log(8*12)

// 58.Calcular el perímetro de un círculo con radio 8.
// P = 2πr

console.log(2 * Math.PI * 8)

// 59.Calcular el volumen de un cubo con lado 5.
// lado * lado * lado

console.log(5**3)

// 60.Calcular el área de un rombo con diagonales de 12 y 16.
// diag mayor * diag menor / 2

console.log(16*12/2)

// 61.Calcular el área de un trapecio con bases 8 y 12 y altura 6.
// A=(a+b)h/2.

console.log((8+12)*6/2)

// 62.Generar la tabla de multiplicar del número 9. 

tablaMultiplicar(9)

// 63.Encontrar el número mayor entre 25, 30 y 35.

console.log(Math.max(25, 30, 35))

// 64.Encontrar el número menor entre 80, 95 y 110.

console.log(Math.min(80, 95, 110))

// 65.Calcular el promedio de 8, 10 y 14.

console.log((8+10+14)/3)

// 66.Calcular la factorial de 8. 

calcularFactorial(8)

// 67.Redondear el número 9.2.

console.log(Math.round(9.2))

// 68.Calcular el doble de 18.

console.log(18*2)

// 69.Calcular el triple de 7.

console.log(7*3)

// 70.Calcular el cuadrado de 10.

console.log(10**2)

// 71.Calcular el cubo de 5.

console.log(Math.pow(5,3))

// 72.Calcular la suma de los primeros 20 números naturales. 

sumaNaturales(20)

// 73.Calcular la resta entre 200 y 75.

console.log(200-75)

// 74.Multiplicar 9 por 11.

console.log(9*11)

// 75.Dividir 300 por 25.

console.log(300/25)

// 76.Obtener el módulo de 30 dividido por 9.

console.log(30%9)

// 77.Generar un número aleatorio entre 60 y 70.

console.log(Math.round(Math.random() * (70 - 60) + 60))

// 78.Elevar 4 a la potencia de 5.

console.log(4**5)

// 79.Calcular la raíz cuadrada de 196.

console.log(Math.sqrt(196))

// 80.Convertir 120 grados Celsius a Fahrenheit.
// Fórmula: (0 °C × 9/5) + 32 = 32 °F

console.log((120 * 9/5) + 32)

// 81.Calcular el área de un rectángulo de base 10 y altura 15.
// A = b*h

console.log(10*15)

// 82.Calcular el perímetro de un círculo con radio 10.
// P = 2πr

console.log(2 * Math.PI * 10)

// 83.Calcular el volumen de un cubo con lado 6.
// lado * lado * lado

console.log(Math.pow(6,3))

// 84.Calcular el área de un rombo con diagonales de 14 y 18.
// diag mayor * diag menor / 2

console.log(18*14/2)
// 85.Calcular el área de un trapecio con bases 10 y 15 y altura 8.
// A=(a+b)h/2.

console.log((10+15)*8/2)

// 86.Generar la tabla de multiplicar del número 10. 

tablaMultiplicar(10)

// 87.Encontrar el número mayor entre 35, 40 y 45.

console.log(Math.max(35, 40, 45))

// 88.Encontrar el número menor entre 90, 105 y 120.

console.log(Math.min(90, 105, 120))

// 89.Calcular el promedio de 9, 11 y 15.

console.log((9+11+15)/3)

// 90.Calcular la factorial de 9. 

calcularFactorial(9)

// 91.Redondear el número 10.8.

console.log(Math.round(10.8))

// 92.Calcular el doble de 21.

console.log(21*2)

// 93.Calcular el triple de 8.

console.log(8*3)

// 94.Calcular el cuadrado de 12.

console.log(Math.pow(12,2))

// 95.Calcular el cubo de 6.

console.log(6**3)

// 96. Calcular la suma de los primeros 25 números naturales. 

sumaNaturales(25)
