import { Component, inject } from '@angular/core';
import { PlayersService } from '../../../services/players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss'
})
export class PlayersListComponent {

  public playersService = inject(PlayersService)

}
