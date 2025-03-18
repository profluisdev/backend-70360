import express from "express";

const app = express();

app.get("/operacionsencilla", (req, res) => {

  let suma = 0;
  for (let index = 0; index < 100000; index++) {
    suma += index
    
  }

  res.send(suma)
})

app.get("/operacioncompleja", (req, res) => {

  let suma = 0;
  for (let index = 0; index < 5e8; index++) {
    suma += index
    
  }

  res.send(suma)
})




app.listen(8080, () => {
  console.log("Servidor en el puerto 8080");
})