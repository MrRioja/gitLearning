const express = require("express");

let users = [];

const app = express();
const routes = express.Router();

app.use(express.json());

routes.get("/users", (req, res) => {
  return res.json({ usuarios: users });
});

routes.post("/user", (req, res) => {
  const user = req.body;

  users.push(user);

  return res.json(user);
});

app.use(routes);

app.listen(3333, console.log(`🔥 Server is running`));
