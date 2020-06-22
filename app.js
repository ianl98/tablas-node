const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];


switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite).then(archivo => {

                console.log(`Archivo creado: ${archivo}`);

            })
            .catch(err => {

                console.log(err);

            })

        break;

    default:
        console.log('Comando no reconocido');
}


//para que se introduzca un número por consola
//la variable argv agarra 3 cosas 1 es donde esta instalado node la segunda es donde esta el archivo ejecutado y 3 lo que le pasemos
//let argv2 = process.argv;
//agarramos el tercer elemento que es lo que pasamos por consola
//let parametro = argv[2];
/*hacemos con la funcion split creamos un array de 2 posiciones separadas por el igual (=) 
en la posición 0 encontramos (--base) y del otro encontramos el numero introducido y solamente indicamos al final que posicion queremos
en este caso es la posicion 1, la posicion del numero
*/
//let base = parametro.split("=")[1];