import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { PlayerCardComponent } from './player-card.component';
import { PlayersService } from '../../../services/players.service';
import { Player } from '../../../models/players.interface';


describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;
  let playersService: jasmine.SpyObj<PlayersService>;

  const mockPlayer: Player = {
      "id": "15",
      "dorsal": 15,
      "nombre": "Andreas Christensen",
      "lugarNacimiento": "Lillerød, Dinamarca",
      "fechaNacimiento": "1996-04-10",
      "peso": 64,
      "altura": 177,
      "debut": "2020-09-27",
      "posicion": "Defensa",
      "historicoPartidos": 41,
      "historicoGoles": 2,
      "historicoAsistencias": 3,
      "historicoPorteriaCero": 0,
      "historicoParadas": 0,
      "partidosTemporadaActual": 30,
      "golesTemporadaActual":     1,
      "asistenciasTemporadaActual": 2,
      "porteriaCeroTemporadaActual": 0,
      "paradasTemporadaActual": 0,
      "titular": "Defensa con gran capacidad de recuperación y visión de juego, destaca por su capacidad para sacar el balón jugado",
      "comentario": "Destaca por su contundencia y capacidad para sacar el balón jugado.",
      "imgUrl":"https://www.fcbarcelona.com/photo-resources/2023/10/03/414458b8-82b7-4913-a1ea-839410f6e10f/15-ANDREAS_CHRISTENSEN.jpg?width=470&height=470"
  };

  beforeEach(async () => {
    const playersServiceSpy = jasmine.createSpyObj('PlayersService', ['getPlayerById']);

    await TestBed.configureTestingModule({
      declarations: [PlayerCardComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ id: '1' })) } },
        { provide: PlayersService, useValue: playersServiceSpy }
      ]
    })
    .compileComponents();

    playersService = TestBed.inject(PlayersService) as jasmine.SpyObj<PlayersService>;
    playersService.getPlayerById.and.returnValue(Promise.resolve(mockPlayer));
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get player id from route params and fetch player on init', () => {
    expect(component.playerId).toBe('1');
    expect(playersService.getPlayerById).toHaveBeenCalledWith('1');
    expect(component.playerCard).toEqual(mockPlayer);
  });

  it('should fetch player by id', async () => {
    await component.showPlayerById('2');
    expect(playersService.getPlayerById).toHaveBeenCalledWith('2');
    expect(component.playerCard).toEqual(mockPlayer);
  });
});
