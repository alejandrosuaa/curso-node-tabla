const { describe } = require('yargs');

const argv = require( 'yargs' )
        .option( 'b', {
            alias: 'num1',
            type: 'number',
            demandOption: true,
            describe: 'es la base de la tabla de multiplicar'
        })
        .option( 'l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'listar tabla en consola'
        })
        .option( 'h', {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'hasta donde llega la tabla'
        })
        .check( (argv, options) => {
            if( isNaN( argv.b ) ){
                throw `La base tiene que ser un numero`
            }
            return true
        })
        .argv;

        module.exports = argv