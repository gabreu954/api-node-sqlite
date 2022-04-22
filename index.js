import express from "express";
import cors from "cors";
import routeClient from "./routes/clients.js"

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


routeClient(app);

app.listen("4000", () => {
    console.log("Servidor aberto");
});
