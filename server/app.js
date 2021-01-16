const express = require("express");
const cors = require("cors");
const socket = require("socket.io");
const uniqid = require("uniqid");
const app = express();

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(cors());
app.use(allowCrossDomain);

const server = app.listen("8000", () => {
  console.log("Server running on port 8000");
});

io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

let productsList = [];

io.on("connection", (client) => {
  io.emit("connected", productsList);

  client.on("add_product", (product) => {
    productsList.push({
      key: uniqid(),
      ...product,
    });

    io.emit("connected", productsList);
  });

  client.on("delete_product", (id) => {
    productsList = productsList.filter((product) => product.key !== id);

    io.emit("connected", productsList);
  });

  client.on("get_product", (id) => {
    const product = productsList.filter((product) => product.key === id);

    io.emit("post_product", ...product);
  });

  //Whenever someone disconnects this piece of code executed
  client.on("disconnect", function () {
    console.log("A user disconnected");
  });
});
