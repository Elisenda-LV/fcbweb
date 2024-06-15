export interface Player {
    id: number;
    dorsal: number;
    nombre: string;
    lugarNacimiento: string;
    fechaNacimiento: string; 
    peso: number;
    altura: number;
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
}
