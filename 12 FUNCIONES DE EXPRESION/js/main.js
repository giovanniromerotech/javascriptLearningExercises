// Expression functions (anónimas)

let cuadrado = function (a) {
    return a * a;
}

console.log(cuadrado(5));

// Funciones flecha (ECMAScript 6 2015)

//let cub = (a)=> {
//  return a*a;
//}

let cubo = a => a * a * a;

console.log(cubo(5));

let mensaje = () => console.log('Hola amigos');

mensaje();

