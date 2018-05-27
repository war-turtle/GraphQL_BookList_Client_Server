const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

//mlab username, password and db-name
mongoose.connect("mongodb://username:password@ds235860.mlab.com:35860/db-name");

mongoose.connection.once("open", () => {
  console.log("connected to mlab");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listen for request on port 4000");
});
