import { Person } from './person.model';
import { IPlayer } from './player.interface';

export class Player extends Person implements IPlayer {
  debut: string;
  posicion: string;
  historicoPartidos: number;
  historicoGoles: number;
  historicoAsistencias: number;
  historicoPorteriaCero: number;
  historicoParadas: number;
  partidosTemporadaActual: number;
  golesTemporadaActual: number;
  asistenciasTemporadaActual: number;
  porteriaCeroTemporadaActual: number;
  paradasTemporadaActual: number;
  titular: string;
  comentario: string;
  imgUrl: string;
  showStats: boolean;

  constructor(player: IPlayer) {
    super(player);
    this.debut = player.debut;
    this.posicion = player.posicion;
    this.historicoPartidos = player.historicoPartidos;
    this.historicoGoles = player.historicoGoles;
    this.historicoAsistencias = player.historicoAsistencias;
    this.historicoPorteriaCero = player.historicoPorteriaCero;
    this.historicoParadas = player.historicoParadas;
    this.partidosTemporadaActual = player.partidosTemporadaActual;
    this.golesTemporadaActual = player.golesTemporadaActual;
    this.asistenciasTemporadaActual = player.asistenciasTemporadaActual;
    this.porteriaCeroTemporadaActual = player.porteriaCeroTemporadaActual;
    this.paradasTemporadaActual = player.paradasTemporadaActual;
    this.titular = player.titular;
    this.comentario = player.comentario;
    this.imgUrl = player.imgUrl;
    this.showStats = player.showStats;
  }
}
