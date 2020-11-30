import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {HeroesService} from "../../services/heroes.service"
import {Heroe} from "../../services/heroes.service"

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html',
  styleUrls: ['./heroes-filter.component.css']
})
export class HeroesFilterComponent implements OnInit {

  heroes:Heroe[];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,private _heroesService:HeroesService,
    private router:Router) { 
    
    this.activatedRoute.params.subscribe(params=>{
      this.termino=params['termino'];
      this.heroes=this._heroesService.buscarHeroes(this.termino);
    })
  }

  ngOnInit(): void {
  }
  
  verHeroe(id:number){
    this.router.navigate(["/heroe",id]);
  }
}
