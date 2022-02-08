const { crearArchivo } = require( './helpers/multiplicar' )
const argv= require('./Config/yargs')
console.clear()
//const num1 = 3

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log( nombreArchivo, `creado` ))
    .catch( err => console.log( err ) )