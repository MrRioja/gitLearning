const express = require("express");

const app = express();
const routes = express.Router();

app.use(express.json());

routes.get("/start", (req, res) => {
  return res.json({ message: "Hello" });
});

app.use(routes);

app.listen(3333, console.log(`🔥 Server is running`));
