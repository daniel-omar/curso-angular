import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  nuevasCanciones:void[]=[];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor(private spotify:SpotifyService) { 
    this.loading=true;
    this.error=false;
    this.spotify.getNewReleases()
      .subscribe((response:any)=>{
        this.nuevasCanciones=response
        this.loading=false;
      },(err)=>{
        this.loading=false;
        this.error=true;
        this.mensajeError=err.error.error.message;   
      });
  }

  ngOnInit(): void {
  }

}
