import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';



//providedIn:importa el servicio en el app.module automaticamente
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Spotify service")
  }
  
  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQCtQj2jgDXHawnfQuKCT8-lkJ0FILzeA_xpXpqlc2hTRhXadnRpU0OOREROsDio3VQdlj-kLGPKAzgITeU'
    })

    return this.http.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
           .pipe(map(data=>{
              return data['albums'].items
            }));
    
  }

  getArtistas(artista:string){
    return this.getQuery(`search?q=${artista}&type=artist&limit=20`)
          .pipe(map(data=>{
              return data['artists'].items
            }));
    
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);   
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
            .pipe(map(data=>{
              return data['tracks']
            })); 
  }
}
