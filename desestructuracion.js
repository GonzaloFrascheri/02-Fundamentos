
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${ this.nombre } ${this.apellido} ${this.poder}`;
    }
}

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function imprimeHeroe({nombre, apellido, poder, edad = 0}){
    nombre = 'Gonzalo';
    console.log(nombre, apellido, poder, edad);
}


//imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];
const [ , , h3] = heroes;

console.log(h3);
