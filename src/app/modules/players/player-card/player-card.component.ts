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
  public playersList: Player[] = [];
  public playerId: string = '';

  constructor( private route: ActivatedRoute){
    this.playersList = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.playerId = params.get('id')!;
      if (this.playerId) {
        this.showPlayerbyId(this.playerId);
      }
    });

  }

  showPlayerbyId(playerId: any) {
    this.playersService.getPlayer(playerId)
      .then(player => {
        if (player) {
          this.playersList = [player];
          console.log(this.playersList);
        } else {
          console.error('Player not found');
        }
      })
      .catch(error => {
        console.error('Error fetching player:', error);
      });      
  }

}