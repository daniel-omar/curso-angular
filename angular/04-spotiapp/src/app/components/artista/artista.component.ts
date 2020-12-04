import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  idArtista:string;
  artista:any={};
  topTracks:any[]=[];
  loading:boolean;

  constructor(private activatedRoute:ActivatedRoute,private service:SpotifyService) { 
    this.loading=true;
    this.activatedRoute.params.subscribe((params)=>{
      this.idArtista=params['id'];
      this.getArtista(this.idArtista);
      this.getTopTracks(this.idArtista);
    })
  }

  ngOnInit(): void {
  }
  
  getArtista(id:string){
    this.service.getArtista(id)
        .subscribe(artista=>{
          this.artista=artista;
          this.loading=false;
        });
  }

  getTopTracks(id:string){
    this.service.getTopTracks(id)
        .subscribe((topTracks:any)=>{
          this.topTracks=topTracks;
          console.log(this.topTracks)
        });
  }
}
