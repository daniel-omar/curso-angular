//sirven como reglas
interface Xmen{
    nombre:string;
    edad:number;
    poder?:string
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