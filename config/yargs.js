const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10

    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de la base', opts)
    .command('crear', 'Crea un archivo con la tabla y el limite deseado(por defecto el limite es 10)', opts)
    .help()
    .argv;



module.exports = {

    argv

}