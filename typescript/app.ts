'use strict'

// function saludar(nombre:string) {
//     console.log("Hola " + nombre);
// }

// const wolverine = {
//     nombre: 'Logan',
//     skill:'resistencia'
// }

// const hulk={
//     nombre:'Hulk',
//     smash(){
//         setTimeout(() => {
//             console.log(`${this.nombre} smash`)
//         }, 1000);    
//     }
// }

// hulk.smash();
// saludar(wolverine.nombre);

interface Xmen{
    nombre:string;
    edad:number
}

const wolverine:Xmen={
    nombre:'Logan',
    edad:60
}
// const mision=(xmen:{nombre:string})=>{
//     console.log(`Enviando a ${xmen.nombre} a la mision`)
// }

const mision=(xmen:Xmen)=>{
    console.log(`Enviando a ${xmen.nombre} a la mision`)
}


mision(wolverine)