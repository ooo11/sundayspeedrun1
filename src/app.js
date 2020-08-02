const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");

const middlewares = require("./middleware");
const api = require("./api");
const app = express();

app.use(morgan("tiny"));
app.use(compression());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Speed Run Sunday 2 Aug 2020 🏃🏼‍🏃🏻‍💨 " });
});

app.use("/api/v1", api);

//last middleware register!!! for error
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
