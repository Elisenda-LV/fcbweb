import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../../services/players.service';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent implements OnInit {
  public playersService = inject(PlayersService);
  public playerCard: Player | null = null;
  public playerId: string = '';

  constructor(private route: ActivatedRoute) {
    this.playerCard = null;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.playerId = params.get('id')!;
      if (this.playerId) {
        this.showPlayerById(this.playerId);
      }
    });
  }
  //TODO throw y mostrar errores pagina error .log
  showPlayerById(id: string): void {
    this.playersService
      .getPlayerById(id)
      .then((player) => {
        this.playerCard = player;
        console.log('Player:', player);
        console.log('PlayerCard:', this.playerCard);
      })
      .catch((error) => {
        console.error('Error fetching player:', error);
      });
  }
}
