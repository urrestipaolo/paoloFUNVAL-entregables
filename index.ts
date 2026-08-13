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

const answer = await rl.question("¿Cuál es tu nombre? ");


/// ------------------ ENTREGA MARTES --------------
let resultado: string[] = []
let opciones: number = 0;

while (opciones = 0){
    console.log(`Bienvenido, usa alguna de las opciones:
    - Agregar tarea: 1
    - Eliminar ultima tarea: 2
    - Lista tareas: 3
    - Salir: 4`)
    const answer = await rl.question();

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

let contador = 1;


 interface interfaz {
    id: number;
    title: string;
    completed: boolean;
}

let contenido: interfaz[] =[ {
    id: 1,
    title: "modelo1",
    completed: true,
},

{
    id: 2,
    title: "modelo2",
    completed: false,
},

{
    id: 3,
    title: "modelo3",
    completed: false,
}

]


// Arrows function

const addTask = (answer1: string) => {
    let respuesta1 = answer1;
    return respuesta1;
}

const listTasks = (answer3: string) => {
    let respuesta2 = answer3;
    return respuesta2;
}

const removeTask = (answer2: string) => {
    let respuesta3 = answer2;
    return respuesta3;
 }
 //No entendí sobre convertir los strings a task.



 /// -------- ENTREGABLE JUEVES -----------
 const markCompleted = (id: number): number => {
    return contenido.find((i) => i.id === id)
}

const filterPending = (): interfaz[] => {
    return contenido.filter((i) => !i.completed);
}

const filterCompleted = (): interfaz[] => {
    return contenido.filter((i) => i.completed);
}

// .map
const identificaciones: number[] = contenido.map(function(prod:interfaz): number {
    return prod.id;
});

const titulos: string[] = contenido.map(function(prod:interfaz): string {
    return prod.title;
});

const completed: boolean[] = contenido.map(function(prod:interfaz): boolean {
    return prod.completed;
});

//.forEach
contenido.forEach(function(prod:interfaz): void {
    console.log("identificaciones:", prod.id)
});

contenido.forEach(function(prod:interfaz): void {
    console.log("titulos:", prod.title)
});

contenido.forEach(function(prod:interfaz): void {
    console.log("situaciones:", prod.completed)
});



// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
 