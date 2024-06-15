import { Component, inject, OnInit } from '@angular/core';
import { PlayersService } from '../../../services/players.service';
import { Player } from '../../../models/players.interface';
import { Router, ActivatedRoute } from '@angular/router'
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss'
})
export class PlayersListComponent implements OnInit{

  public playersService = inject(PlayersService)
  public playersList: Player[] = [];
  public errorMessage: string = '';

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private viewportScroller: ViewportScroller 
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });

    this.allPlayers();

  }

  allPlayers() {
    this.playersService.getPlayers().then((data) => {
      this.playersList = data;
      console.log('Players:', this.playersList);
  
    }).catch(error => {
      console.error('Error fetching players:', error);
    });
  }
  
  viewPlayer(id: number) {
    this.router.navigate(['/players', id]);
    
  }

}
