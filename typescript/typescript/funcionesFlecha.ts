let miFunction=function(a:string){
    return a;
}

let miFuncionF=(a:string)=>a;

const hulk={
    nombre:'Hulk',
    smash(){
        setTimeout(() => {
            console.log(`${this.nombre} smash`)
        }, 1000);    
    }
}
