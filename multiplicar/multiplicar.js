//al inicio se ponen todos los requires
const fs = require('fs');


let listarTabla = (base, limite) => {


    for (let i = 1; i <= limite; i++) {

        console.log(`${base} x ${i} = ${base*i}\n`);

    }

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número multiplicable`)
            return;
        }

        let resultado = '';

        for (let i = 1; i <= limite; i++) {

            resultado += `${base} x ${i} = ${base*i}\n`;

        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, resultado, (err) => {
            if (err) {

                reject(err)

            } else {

                resolve(`tabla-${base}-al-${limite}.txt`);

            }
        });

    })

}


module.exports = {
    crearArchivo,
    listarTabla
}