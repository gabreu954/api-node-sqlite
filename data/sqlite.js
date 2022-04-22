import sqlite3 from "sqlite3";
import path from "path";

var dbPath = path.resolve("./data/database/clientsdb.db");

var db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.log("Could not connect to database", err);
  } else {
    console.log("Connected to database");
  }
});

export function selectAll(cb) {
  var lista = new Array();

  db.all("SELECT * FROM clients", (err, rows) => {
    let contador = 0;

    rows.forEach((row) => {
      lista.push({ id: row.id, nome: row.name });
    });

    return cb(lista);
  });
}

export function selectId(id, cb) {
  db.all("SELECT * FROM clients WHERE id = ?", id, (err, rows) => {
    if (rows.length == 0) {
      var retorno = { id: 0, nome: null };
      return cb(retorno);
    }

    var retorno = { id: rows[0].id, nome: rows[0].name };

    return cb(retorno);
  });
}

export function insertClient(nome) {
  db.all("INSERT INTO clients(name) VALUES(?)", nome, (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log("Linha adicionada!");
  });
}

export default { selectAll, selectId, insertClient };
