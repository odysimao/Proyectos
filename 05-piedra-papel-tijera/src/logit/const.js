import papel from '../assets/imagen-papel.png'
import tijera from '../assets/imagen-tijera.png'
import piedra from '../assets/imagen-piedra.png'

export const imgSrc = {
  'papel': papel,
  'tijera': tijera,
  'piedra': piedra,
}

export const opciones = ['piedra', 'papel', 'tijera'];
export const min = 0, max = 2;

export const WINER = {
  null: 'no hay ganador',
  Victoria: 'Ganaste!',
  Perdiste: 'Perdiste',
  Empate: 'Empate',
}

export class SAVEDATE {
  constructor(nombre, partidas, ganadas, empates, perdidas) {
    this.id = nombre;
    this.Nombre = nombre;
    this.Partidas = partidas;
    this.Ganadas = ganadas;
    this.Empates = empates;
    this.Perdidas = perdidas;
  }
}
