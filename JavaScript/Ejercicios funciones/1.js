//suma, resta, division y multiplicacion de dos numeros
function suma(n, m) {
  //lo que le quiero entregar a mi funcion
  return n + m; //lo que quiero que haga mi funcion
}
//los valores que le entrego en el formato que designe al inicio
console.log(suma(2, 4));

function resta(n, m) {
  return n - m;
}
console.log(resta(10, 5));

function division(n, m) {
  return n / m;
}
console.log(division(10, 5));

function multiplicacion(n, m) {
  return n * m;
}
console.log(multiplicacion(2, 5));

//obtener el cuadrado de un numero
function potencia2(n) {
  return n ** 2;
}
console.log(potencia2(3));

//comprobar si un numero es par
function numero_par(n) {
  if (n % 2 === 0) {
    return `${n} es par`;
  } else {
    return `${n} no es par`;
  }
}
const par = numero_par(6);
console.log(par);
console.log(numero_par(9));

//obtener el factorial de un numero
function factorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i; //resultado = resultado*i
  }
  return resultado;
}
console.log(factorial(5));

function factorials(n) {
  if (n === 0) return 1;
  return n * factorials(n - 1);
}
console.log(factorials(4));

//Encontrar el mayor entre dos numeros
function num_mayor(n, m) {
  return Math.max(n, m);
}
console.log(num_mayor(10, 40));

//Generar un numero aleatorio entre 1 y 10
function numero_aleatorio() {
  return Math.floor(Math.random() * 11); //floor redondea al numero abajo y ceil arriba, random da un numero flotante aleatorio pero no considera el numero tope, por lo que pongo 11 si quiero que tome el 10 como aleatorio
}
console.log(numero_aleatorio());

//sumar todos los numeros de un array
function suma_numeros(num1, num2, num3, num4) {
  let numeros = [num1, num2, num3, num4];
  let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  return suma;
}
console.log(suma_numeros(1, 2, 3, 4));

function suma_numeros2(...numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
console.log(suma_numeros2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//concatenar dos cadenas
function concatena_cadena(str1, str2) {
  return str1 + " " + str2;
}
console.log(concatena_cadena("hola", "que tal"));

//Obtener la longitud de dos cadenas
function cuenta_letras(str1, str2) {
  return (str1 + str2).length;
}
console.log(cuenta_letras("hola", "que tal"));

//convertir una cadena en mayusculas
function mayusculas(str) {
  return str.toUpperCase();
}
console.log(mayusculas("Hola, que tal"));

//convertir una cadena en minusculas
function minusculas(str) {
  return str.toLowerCase();
}
console.log(minusculas("HOLA, QUE TAL"));

//Comprobar si una cadena tiene otra cadena

//reemplazar una parte de la cadena
function remplaza_cadena(str) {
  return;
}

let raro = "11" - 1;
console.log(raro);

//Obtener una subcadena
function sub_cadena(str) {
  return;
}

//dividir una cadena en un array de subcadenas

//Repetir una cadena varias veces y eliminar espacios de una cadena a los extremos de esta
function repetir(str) {
  return (str + " ").repeat(5).trim();
}
console.log(repetir("      hola "));
