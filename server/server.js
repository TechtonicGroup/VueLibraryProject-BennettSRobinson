require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./routes");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(logger("dev"));
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/dist"));
}

sequelize.sync({ force: process.env.DB_FORCE || false }).then(() => {
  app.listen(PORT, () => {
    console.log(`API server listening on http://localhost:${PORT}!`);
  });
});
