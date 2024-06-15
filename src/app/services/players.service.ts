import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  //servicio para extrar los datos de los jugadores del archivo players.json
  getPlayers(){
    return fetch('assets/players.json')
      .then(response => response.json())
      .then(data => data);
  }

  //servicio para extraer los datos de un jugador en especifico
  getPlayer(id: number){
    return fetch('assets/players.json')
      .then(response => response.json())
      .then(data => data.find((player: { id: number; }) => player.id === id));
  }

  
}
