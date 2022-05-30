const os = require('node:os');

//Metodo que te dice que plataforma se está utilizando (mac, windows, linux)
console.log(os.platform());

//Metodo que te dice en que version se encuentra tu sistema operativo
console.log(os.release());

//Metodo que te dice la memoria libre
console.log('Free memory: ', os.freemem(), ' bytes');

//Metodo que te dice la memoria libre
console.log('Total memory: ', os.totalmem(), ' bytes');
