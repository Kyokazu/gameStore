const express = require("express");
const cors = require("cors");
const { conectionDB } = require("./db/db");
require("dotenv").config();

const User = require('./routes/user');
const Product = require('./routes/product');
const Sales = require('./routes/sales');
const Stock = require('./routes/stock');


const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/user", User);
app.use("/api/Product", Product);
app.use("/api/sales", Sales);
app.use("/api/stock", Stock);

app.listen(process.env.PORT, () =>
    console.log("Backend server running OK, on port: ", process.env.PORT)
);

conectionDB();
