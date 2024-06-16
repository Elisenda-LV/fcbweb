import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../../services/players.service';
import { Player } from '../../../models/players.interface';


@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})

export class PlayerCardComponent implements OnInit{

  public playersService = inject(PlayersService)
  public playerCard:Player | null = null;
  public playerId: string = '';

  constructor( private route: ActivatedRoute){
    this.playerCard = null;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.playerId = params.get('id')!;
      if (this.playerId) {
        this.showPlayerById(this.playerId);
      }
    });

  }
 //Función que obtenga el id de playerID y lo muestre en la vista
  showPlayerById(id: string): void {
    this.playersService.getPlayerById(id)
    .then(player => {
      this.playerCard = player;
      console.log('Player:', player);
      console.log('PlayerCard:', this.playerCard);
    })
    .catch(error => {
      console.error('Error fetching player:', error);
    });
  }

}