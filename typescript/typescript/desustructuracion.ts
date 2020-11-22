
const avenger={
    nombre:'Steve',
    clave:'Cap',
    poder:'Droga'
}

//Desustructurar objeto
// const {nombre,clave,poder}=avenger;

// console.log(nombre)
// console.log(clave)
// console.log(poder)

const extraer=({nombre,poder}:any)=>{
    console.log(nombre)
    console.log(poder)
}

// extraer(avenger);

const avengers:string[]=['Thor','Hulk','Ironman']

//Desutructurar arrays
const [thor,huk,ironman]=avengers;
console.log(thor)
console.log(huk)
console.log(ironman)