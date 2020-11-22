
const retirarDinero=(monto:number)=>{
    let dineroActual=1000;

    return new Promise((resolve,reject)=>{
        if(monto>dineroActual){
            reject('No hay suficiente dinero')
        }else{
            dineroActual-=monto
            resolve(dineroActual)
        }
    })

}

retirarDinero(1000).then((r)=>{
    console.log(r)
}).catch((error)=>{
    console.warn(error)
})