import express from "express";
require('dotenv').config();
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

import { schema } from "./graphql";

import data from "./data/db.json";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_URL }));

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: data,
    graphiql: "development" === process.env.NODE_ENV,
}));

app.listen(PORT, () =>
    console.log(`Server running on port http://localhost:${PORT}`)
);
