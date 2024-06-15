import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerCardComponent } from './players-list/player-card/player-card.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PlayersListComponent,
    PlayerCardComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    RouterModule,
  ]
})
export class PlayersModule { }
