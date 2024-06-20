import { IPerson } from './person.interface';

export class Person implements IPerson {
  id: string;
  dorsal: number;
  nombre: string;
  lugarNacimiento: string;
  fechaNacimiento: string;
  peso: number;
  altura: number;

  constructor(person: IPerson) {
    this.id = person.id;
    this.dorsal = person.dorsal;
    this.nombre = person.nombre;
    this.lugarNacimiento = person.lugarNacimiento;
    this.fechaNacimiento = person.fechaNacimiento;
    this.peso = person.peso;
    this.altura = person.altura;
  }
}
