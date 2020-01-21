const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const http = require("http");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);
setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://josenildo:maniaco10@cluster0-l2s9r.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use(cors());
app.use(express.json()); // tem que ficar antes da routes
app.use(routes);
//Métodos HTTP: GET, POST. PUT, DELETE
//GET -> quando um navegador faz qualquer tipo de requisição ao navegado
//POST -> quando o navegador envia para o servidor parametros anônimos/ Ex: login, senha
//PUT -> quando o navegar informa parâmetros para o servidor
//DELETE ->  quando o navegador informa o parâmetro de algum item para a remoção
// TIPOS DE PRÂMENTROS
// QUERY-> params: request.query() (filtro, paginação e ordenação)
//BODY -> params:request.body() (Escopo de arquivo que serão armazenados ou alterados)
//ROUTER ->params:request.params() (identificação de recursos para alteração ou remoção)

//Mongo DB

server.listen(3333);
