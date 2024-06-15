import { Injectable } from '@angular/core';
import { Player } from '../models/players.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  //servicio para extrar los datos de los jugadores del archivo players.json
  getPlayers(): Promise<Player[]> {
    return fetch('assets/players.json')
      .then(response => response.json())
      .then(data => data.players);
      
  }

  //servicio para extraer los datos de un jugador en especifico
  getPlayer(id: number): Promise<Player | undefined>{
    return fetch('assets/players.json')
      .then(response => response.json())
      .then(data => data.find((player: { id: number; }) => player.id === id));
  }


}
