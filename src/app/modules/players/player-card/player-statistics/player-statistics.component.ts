import { Component, Input } from '@angular/core';
import { Player } from '../../../../models/player.model';

@Component({
  selector: 'app-player-statistics',
  templateUrl: './player-statistics.component.html',
  styleUrl: './player-statistics.component.scss',
})
export class PlayerStatisticsComponent {
  @Input() playerCard: Player | null = null;
}
