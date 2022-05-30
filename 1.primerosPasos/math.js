const Math = {};

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 == 0){
        console.log('No se puede dividir por 0');
    } else {
        return num1 / num2;
    }
}
 /*permite exportar una propiedad de un objeto o una funciones a otros ficheros cuando se llame a este fichero
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;*/

//para agregar las funciones dentro de un objeto:
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//para exportar todo el objetos/funciones a otros ficheros cuando se llame a este fichero
module.exports = Math;

/*ejemplo funcion
function hello(name){
    console.log('Hola ', name);
}

module.exports = hello;*/