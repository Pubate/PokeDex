import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { iDetail } from 'src/app/model/detail.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: any; 
  
  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const url = params['url'];
      this.loadMonsterDetail(url);
    });
  }

  loadMonsterDetail(url:string){
    this.pokemonService.getMonsterDetail(url).subscribe(res=>{
      this.detail = res
      console.log(res);
    })
  }

}
