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

export class USUARIO {
  constructor(nombre) {
    this.Id = nombre;
    this.Nombre = nombre;
    this.Partidas = 0;
    this.Ganadas = 0;
    this.Empates = 0;
    this.Perdidas = 0;
  }
  addPartidas() { this.Partidas++ };

  addResult(result) {
    if (result === 'win') {
      this.Ganadas++;
    }
    else if (result === 'loss') {
      this.Partidas++;
    }
    else if (result === 'empate') {
      this.Empates++;
    }
    else console.log('no hay ganador')
  }
}
