import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service'
import {Heroe} from '../../services/heroes.service'
import {Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  constructor(private _heroesService:HeroesService,private router:Router) {

   }

  ngOnInit(): void {
    this.heroes=this._heroesService.getHeroes();
  }  

  verHeroe(id:number){
    this.router.navigate(["/heroe",id]);
  }
}
