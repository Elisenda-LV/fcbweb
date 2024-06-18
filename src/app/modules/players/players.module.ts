import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { PlayersService } from '../../services/players.service';

@NgModule({
  declarations: [PlayersListComponent, PlayerCardComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    RouterModule,
    TranslateModule,
    RouterOutlet,
  ],
  providers: [PlayersService],
})
export class PlayersModule {}
