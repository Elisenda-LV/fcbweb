import { IPerson } from './person.interface';

export interface IPlayer extends IPerson {
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
}
