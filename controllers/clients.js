import sqlite from "../data/sqlite.js";

const controller = {
  get(req, res) {
    console.log("Requisição GET");
    var response = new Array();
    var lista = sqlite.selectAll((cb) => {
      cb.forEach((row) => {
        response.push({
          id: row.id,
          nome: row.nome,
        });
      });
      res.status(200).json(response);
    });
  },
  getId(req, res) {
    console.log("Requisição GET - Parâmetro");

    sqlite.selectId(req.params.id, (cb) => {
      var response = { id: cb.id, nome: cb.nome };
      res.status(200).json(response);
    });
  },
};

export default controller;
