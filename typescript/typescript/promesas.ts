console.log('Inicio')
const prom=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('Se termino el timeout')
    }, 1000);
});

prom.then((result) => {
    console.log(result)
}).catch((err) => {
    console.warn(err)
});

console.log('Fin')