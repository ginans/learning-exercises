//crea una funcion que calcule y retorne cuantos dias hay entre dos cadenas de texto que representen fechas
//una cadena de texto que representa una fecha tiene el formato "dd/mm/aaaa"
//una funcion recibira dos string y retornara un int.
//la diferencia en días será absoluta (no importa el orden de las fechas)
//si una de las dos cadenas de texto no representa una fecha correcta se lanzara una excepción 

function diferencia(fecha1, fecha2){
    const fecha_correcta1= fecha1.match(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/)
    const fecha_correcta2= fecha2.match(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/)
    return fecha_correcta1-fecha_correcta2
}
console.log(diferencia("11/07/2024", "13/07/2024" ))

