'use strict';
const wolverine = {
    nombre: 'Logan',
    edad: 60
};
// const mision=(xmen:{nombre:string})=>{
//     console.log(`Enviando a ${xmen.nombre} a la mision`)
// }
const mision = (xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la mision`);
};
mision(wolverine);
