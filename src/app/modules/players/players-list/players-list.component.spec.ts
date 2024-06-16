import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { PlayersListComponent } from './players-list.component';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { PlayersService } from '../../../services/players.service';
import { TranslateModule } from '@ngx-translate/core';

describe('PlayersListComponent', () => {
  let component: PlayersListComponent;
  let fixture: ComponentFixture<PlayersListComponent>;
  let mockPlayersService: jasmine.SpyObj<PlayersService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockViewportScroller: jasmine.SpyObj<ViewportScroller>;
  let mockActivatedRoute;

  beforeEach(async () => {
    mockPlayersService = jasmine.createSpyObj(['getPlayers']);
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockViewportScroller = jasmine.createSpyObj(['scrollToAnchor']);
    mockActivatedRoute = {
      fragment: of('testFragment'),
    };

    TestBed.configureTestingModule({
      declarations: [PlayersListComponent],
      providers: [
        { provide: PlayersService, useValue: mockPlayersService },
        { provide: Router, useValue: mockRouter },
        { provide: ViewportScroller, useValue: mockViewportScroller },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
      imports: [TranslateModule.forRoot()],
    });

    fixture = TestBed.createComponent(PlayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call allPlayers on ngOnInit', () => {
    spyOn(component, 'allPlayers');
    component.ngOnInit();
    expect(component.allPlayers).toHaveBeenCalled();
  });

  it('should call scrollToAnchor if fragment exists', () => {
    component.ngOnInit();
    expect(mockViewportScroller.scrollToAnchor).toHaveBeenCalledWith(
      'testFragment',
    );
  });

  it('should fetch all players on allPlayers call', fakeAsync(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const players: any[] = [
      {
        id: 1,
        name: 'Player 1',
        dorsal: 10,
        nombre: 'Player 1',
        lugarNacimiento: 'Place 1',
        fechaNacimiento: new Date(),
        // ... rest of the properties
      },
      {
        id: 2,
        name: 'Player 2',
        dorsal: 20,
        nombre: 'Player 2',
        lugarNacimiento: 'Place 2',
        fechaNacimiento: new Date(),
        // ... rest of the properties
      },
    ];
    mockPlayersService.getPlayers.and.returnValue(Promise.resolve(players));
    component.allPlayers();
    tick();
    expect(component.playersList).toBe(players);
  }));

  it('should handle error on allPlayers call', fakeAsync(() => {
    mockPlayersService.getPlayers.and.returnValue(Promise.reject('Error'));
    component.allPlayers();
    tick();
    expect(component.playersList).toBeUndefined();
  }));

  it('should navigate to player detail on viewPlayer call', () => {
    component.viewPlayer('1');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/players', '1']);
  });
});
