import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerCardComponent } from './players-list/player-card/player-card.component';

const routes: Routes = [
  { path: '', component: PlayersListComponent },
  { path: ':id', component: PlayerCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }