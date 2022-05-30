const fs = require('node:fs');

//FUNCION CREAR ARCHIVO 

fs.writeFile('./pruebaCrearFichero.txt', 'linea uno', function(err) {
    if(err) {
        console.log(err);
    }
    console.log('Archivo creado');
});

/*esta funcion tambien se puede aplicar de la siguiente manera
fs.writeFile('./texto.txt', 'linea uno', (err) => {
    if(err) throw err;
    console.log('Archivo creado');
});*/

//esta linea se ejecutara antes de crear el fichero (writeFile) ya que node sigue leyendo su codigo mientras se va creando el fichero
console.log('ultima linea de codigo');

//FUNCION LEER ARCHIVO
fs.readFile('./pruebaCrearFichero.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

/*esta funcion tambien se puede aplicar de la siguiente manera
fs.readFile('./texto.txt', (err, data) =>{
    if(err) throw err;
    console.log(data.toString());
});*/