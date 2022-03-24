import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { iDetail } from '../model/detail.interface';
import { iPokemon } from '../model/poke.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  endPoint = environment.pokeApi

  constructor(private http: HttpClient) { 

  }

  getAllMonster(){
    return this.http.get<any>(this.endPoint+'?limit=2000')
  }

  searchMonster(text: string):Promise<iPokemon[]> {
    return new Promise((resolve, reject) =>{
      this.getAllMonster().subscribe(res=>{
        const monsters:iPokemon[] = res.results
        const m:iPokemon[] = monsters.filter(x=>x.name.toLowerCase().match(text))
        console.log(m);
        resolve(m)
      })
    })
  }

  getMonsterDetail(url:string){
    return this.http.get<iDetail>(url)
  }
}
