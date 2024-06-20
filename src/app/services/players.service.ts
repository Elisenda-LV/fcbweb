import { Injectable } from '@angular/core';
import { PlayersModule } from '../modules/players/players.module';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: PlayersModule,
})
export class PlayersService {
  getPlayers(): Promise<Player[]> {
    return fetch('assets/players.json')
      .then((response) => response.json())
      .then((data) => data.players);
  }

  getPlayerById(id: string): Promise<Player> {
    return this.getPlayers()
      .then((players) => {
        const player = players.find((player) => player.id === id);
        if (!player) {
          throw new Error('Player not found');
        }

        return player;
      })
      .catch((error) => {
        console.error('Error fetching player:', error);
        throw error;
      });
  }
}
