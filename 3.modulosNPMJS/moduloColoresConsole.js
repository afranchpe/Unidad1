/*En la pagina https://www.npmjs.com/ podemos encontrar muchos modulos de distinta gente. Para usarlos tenemos que instalarlos. Pasos:
1. Desde cmd nos situamos en la carpeta de nuestro proyecto donde queremos usar ese modulo y escribimos npm install <<nombre del modulo>> - en este caso he instalado un modulo que se llama colors (foto en carpeta OPEN_FRONT/JAVASCRIPT + GIT + NODE/NODE)
2. Luego lo declaramos en una constante
3. Usamos sus funciones (en la pagina del modulo tiene que explicarlas)*/
const colors = require('colors');

console.log('Color verde'.green);
console.log('Color amarillo'.yellow);

/*para que todo el mundo que tenga que tocar o utilizar mi proyecto tenga todos los todos los modulos que no vienen integrados con nodejs, tenemos que crear un json donde añadira los modulos que requiere mi programa como dependencias y cuando alguien se baje el proyecto, y escriba (situandose en la carpeta del proyecto) el comando npm install, se instalaran todos los modulos que mi programa usa que no vienen integrados con npm. Pasos para crear el json: (una vez hagamos esto, no hará falta seguir los pasos de arriba)
1. Nos situamos en la carpeta del proyecto desde la cmd y escribimos: npm init.
2. Rellenamos los requerimientos que nos pida (package name, version, descripcion, archivoprincipal, gitRepostory, keywords(palabras clave para encontrar el proyecto)...)
3. Acceptar (YES = enter)
4. Nos fijamos que se crean dos archivos (package-lock.json, package.json) con la info que hemos asignado del proyecto y las dependencias de los modulos no integrados por node
5. Cuando subamos nuestro proyecto solo hará falta subir el codigo que hemos creado (las carpetas que se han descargado de los modulos -paso anterior- no hacen falta, se pueden eliminar)
6.Como hemos dicho al principio, para instalar todos los modulos de mi programa solo hace falta escribir en la cmd npm install y se nos generaran las carpetas de los modulos necesarios.
(ESTE ARCHIVO JSON ES COMO EL POM.XML)
*/
/*REVISAR FICHERO PACKAGE.JSON
antes: "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
}
ahora: "scripts": {
    "start": "node ./3.modulosNPMJS/moduloColoresConsole.js"
}--> esto sirve para escribir un comando de consola, p.ej. que ejecute el comando npm start (asi le he llamado a la variable)
En caso de que la variable se llame diferente de start (p.ej. desarrollo)
    "desarrollo": "node ./3.modulosNPMJS/moduloColoresConsole.js"
    por consola escribimos (todo en minuscula): npm RUN desarrollo 
    ESO SE DEBE A QUE NODE CONOCE START PERO SI INVENTAMOS EL NOMBRE DE LA VARIABLE TENEMOS QUE ESCRIBIR EL RUN PARA QUE SEPA QUE QUEREMOS EJECUTAR*/
