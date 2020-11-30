import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  
  nombre2:string="oMAr DanIEl";
  nombre:string="Capitan América";
  arreglo=[1,2,3,4,5,6,7,8];
  PI:number=Math.PI;
  porcentaje:number=0.234;
  salario:number=1234.5;

  idioma:string='es';
  videoUrl:string="https://www.youtube.com/embed/KMubGBUv_xM";

  heroe={
    nombre:'Logan',
    clave:'wolverine',
    edad:50,
    direccion:'MZ X'
  }
  valorPromesa=new Promise<string>((resolve)=>{
    setTimeout(() => {
      resolve('Llego la data')
    }, 3500);
  });
  fecha:Date=new Date();
  activar:boolean=true;
}
