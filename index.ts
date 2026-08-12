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

/// ------------------ ENTREGA MARTES --------------
let resultado: string[] = []
let opciones: number = 0;

while (opciones = 0){
    console.log(`Bienvenido, usa alguna de las opciones:
    - Agregar tarea: 1
    - Eliminar ultima tarea: 2
    - Lista tareas: 3
    - Salir: 4`)
    let answer = await rl.question();

    switch(answer){
    case 1:
    const answer1 = await rl.question("¿Que desea agregar? ")
    console.log(resultado.push(answer1));
    break;

    case 2:
    const answer2 = await rl.question("¿Que desea eliminar? ")
    console.log(resultado.pop + (answer2));
    break;

    case 3:
    const answer3 = await rl.question("¿Que desea que se repita? ")
        for(let i=1; i<=10; i++)
    {
    console.log(answer3)
    }   
    break;

    case 4:
    console.log("HASTA LUEGO");
    break;
}
}

/// -------- ENTREGABLE MIERCOLES ------------


