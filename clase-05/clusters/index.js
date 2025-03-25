import cluster from "cluster";
import { cpus } from "os";

// obtenemos la cantidad de núcleos del servidor
const numCPUs = cpus().length;
// console.log(numCPUs);

// Validamos si es el proceso principal
if(cluster.isPrimary) {
   console.log("Proceso primary, generando worker");
   
   // Creamos un worker por cada núcleo
   for(let i = 0; i < numCPUs; i++) {
     cluster.fork();
   }

   // Controlar los eventos de los workers
   cluster.on("exit", (worker, code, signal) => {
      console.log(`Worker ${worker.id} murió con código ${code} y señal ${signal}`);
      console.log("Creando un nuevo worker ...");
      cluster.fork(); // Reemplaza al worker muerto
   })

   // Recibimos el mensaje del worker con los resultados de la tarea
   cluster.on("message", (worker, message) => {
    console.log(`Worker ${worker.id} envió el siguiente mensaje ${message}`);
   })

} else {


  // Identificar el id del worker
  console.log(`ID Worker: ${cluster.worker.id}`); 

  // Asignamos una tarea a cada worker según su ID 
  switch (cluster.worker.id) {
    case 1:
        console.log("Worker 1 procesando tarea de suma ...");
        const suma = (a, b) => a + b;
        // Enviamos el resultado al proceso principal 
        process.send(`Resultado de la suma ${suma(10, 5)}`);
        process.exit()
      break;
    case 2:
        console.log("Worker 2 procesando tarea de resta ...");
        const resta = (a, b) => a - b;
        // Enviamos el resultado al proceso principal 
        process.send(`Resultado de la resta ${resta(10, 5)}`);
      break;
    case 3:
        console.log("Worker 3 procesando tarea de multiplicación ...");
        const multiplicacion = (a, b) => a * b;
        // Enviamos el resultado al proceso principal 
        process.send(`Resultado de la multiplicacion ${multiplicacion(10, 5)}`);
      break;
    case 4:
        console.log("Worker 4 procesando tarea de división ...");
        const division = (a, b) => a / b;
        // Enviamos el resultado al proceso principal 
        process.send(`Resultado de la division ${division(10, 5)}`);
      break;
    case 5:
        console.log("Worker 5 procesando tarea de potenciación ...");
        const potenciacion = (a, b) => Math.pow(a, b);
        // Enviamos el resultado al proceso principal 
        process.send(`Resultado de la potenciacion ${potenciacion(10, 5)}`);
      break;
    default:
      console.log(`Worker ${cluster.worker.id} procesando tareas generales`);
      break;
  }
}

