import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  let resultado = '';
  let contador = 0;
  while (contador < cantidad) {
    resultado += letra;
    contador++;
  }
  return resultado;
}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

for (let i = 0; i < tamaño; i++) {
  console.log(repetirLetra(caracter, tamaño));
}