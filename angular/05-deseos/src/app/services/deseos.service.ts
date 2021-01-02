import { Injectable } from '@angular/core';
import { ListaItem } from '../models/lista-item.model';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
    
  private listas:Lista[]=[]

  constructor() { 
    this.cargarStorage();

    // const lista1=new Lista("Recoletar piedras");
    // const lista2=new Lista("Derrotar heroes");
    // this.listas.push(lista1,lista2);

  }

  getListas():Lista[]{
    return this.listas;
  }

  crearLista(titulo:string):number{
    const nuevaLista=new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }
  
  getLista(id:string|number){
    id=Number(id);

    return this.listas.find(lista=>{
      return lista.id==id;
    })
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.listas=JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas=[];
    }
  }
}


