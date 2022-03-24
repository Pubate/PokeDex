import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iPokemon } from 'src/app/model/poke.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemon: iPokemon[] = [];
  searchText: string = ''

  constructor(
    private pokemonService: PokemonService,
    private router: Router,) { }

  ngOnInit(): void {
    this.load()
  }

  load(){
    this.pokemonService.getAllMonster().subscribe(res=>{
      this.pokemon = res.results
    })
  }

  async searchMonster() {
    this.pokemon = await this.pokemonService.searchMonster(this.searchText)
  }

  gotoDetail(url: string) {
    this.router.navigate(['detail'], { queryParams: { url } });
  }

}
