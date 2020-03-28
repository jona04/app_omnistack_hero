const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);


/**
 * Metodo HTTP
 * 
 * GET : buscar
 * POST: criar
 * PUT: alterar
 * DELETE: deletar
 */

 /**
  * Tipos de parametros
  * 
  * Query params: parametros enviando apos ?, para buscar e filtrar
  * anexamos parametros com & ex: ?nome=jonatas&idade=12
  * Route params: utilizado para identificar recurso Ex: users/:id
  * estou buscando apenas o id, sera sempre id
  * 
  */

  /**
   * SQL: Mysql, SQLite
   * NoSQL: MongoDB
   */

   /**
    * Driver: SELECT * from users
    * Query builder: table('user').select('*').where()
    */



app.listen(3333);