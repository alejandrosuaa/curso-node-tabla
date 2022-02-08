const fs = require('fs')
const colors = require('colors')

const crearArchivo = async ( num1 = 5, listar = false, hasta ) => {

    try {
        let salida = "";

        for ( let i = 1; i <= hasta  ; i++ ) {
            salida += `${colors.cyan(num1)} x ${i} = ${num1 * i}\n`;
             
        }

        if ( listar ) {
            console.log( salida );    
        }
        
        fs.writeFileSync( `./salida/tabla-${num1}.txt`, salida )
        
        return( `tabla-${num1}.txt` )
 
    }catch (err) {
        return err
    }       
}

module.exports = {
    crearArchivo
}