import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

let systemName: string = "SISTEMA ESTADISTICAS DE FUTBOL SUDAMERICANO ";
let version: number = 2.1;
let userName: string = "KEVIN"

console.log(systemName + "v" + version + " BIENVENIDO " + userName + 
            " ¿Listo para poder conocer mejor las estadisticas del futbol? ");

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();