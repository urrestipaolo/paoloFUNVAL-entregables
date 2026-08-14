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


// -------- ENTREGABLE VIERNES -----------

interface Tarea {
    contenido: string;
    mensaje: string;
}

let Tarea1: Tarea[] = [{
    contenido: "un mensaje al mundo",
    mensaje: "hola mundo"
}];

// funcion con setTimeout
function saveToDB(): Promise<Tarea[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("la tarea fue guardada");
    }, 2000);
  });
}


// funcion con async
try{
async function enviandoSaveToDB(){
    console.log("esperando la respuesta");
    const respuesta = await saveToDB();
    }

enviandoSaveToDB();
} catch{console.log("ha habido un error")}


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();


/*Las dos primeras lineas de arriba me salen con errores en rojo
 e intendado buscar varias soluciones en internet para corregir el error
 pero me dice al final que es porque mi version de node.js es diferente
 o creo que no es compatible. Pero ese es el unico error, lo resto aparece
 bien en la terminal
*/
