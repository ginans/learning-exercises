//funcion que calcule y retorne el area de un poligono
//recibe solo un solo poligono a la vez
//los poligonos son triangulo, cuadrado y rectangulo
//imprime el calculo del area del poligono de cada tipo


function area_poligono(poligono, n, m){
    const poligonos={
        triangulo: function triangulof(n,m){
        return (n*m)/2
    }, 
        cuadrado: function cuadradof(n,m){
        return(n*m)
    }, 
        rectangulo: function rectangulof(n,m){
        return (n*m)
    }};

    return poligonos[poligono](n, m);
}
console.log(area_poligono("triangulo", 3, 4)); 
console.log(area_poligono("cuadrado", 3, 3)); 
console.log(area_poligono("rectangulo", 3, 4));
