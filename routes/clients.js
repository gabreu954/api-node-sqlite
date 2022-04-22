import controller from "../controllers/clients.js";

const routeName = "/clients";

const route = (app) => {
  try {
    app.route(routeName).get(controller.get);
    app.route(`${routeName}/:id`).get(controller.getId);
  }
  catch (err) {
    console.log(`Erro ao executar API: ${err.message}`);
  }
  
  console.log(`route [${routeName}] created`);
};

export default route;
