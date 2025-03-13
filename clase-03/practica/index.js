import express from "express";
import compression from "express-compression";

const app = express();

app.use(compression({
  brotli: { enabled: true, zlib:{}}
}));

app.get("/string", (req, res) => {

  let string = "String ridiculamente largo fdasfads ffd as fadsfadfafdf fads fda fd af daf daf dfa adf ad faf da fa fa";

  for(let i = 0; i < 5e4; i++){
    string += "Otro texto largo y sin sentido fads ffasdfd fad fdfasafdasfaf a ffdas fd afads fadfafdafadsfadadfafadsdfa";
  }
  
  res.send(string);
})

app.listen(8080, () => {
  console.log("Servidor en el puerto 8080");
});
