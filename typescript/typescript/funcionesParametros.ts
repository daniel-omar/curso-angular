//obligatorio,opcionales,por defecto
function activar(quien:string,momento?:string,objeto:string='batiseñan'){
    if(momento) console.log(`${quien} activo la ${objeto} en ${momento}`)
    else console.log(`${quien} activo la ${objeto}`)
    
}

activar('Gordon')