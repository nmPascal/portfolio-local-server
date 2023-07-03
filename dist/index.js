"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const cors_1 = __importDefault(require("cors"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("./graphql");
const db_json_1 = __importDefault(require("./data/db.json"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)({ origin: process.env.CLIENT_URL }));
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: graphql_1.schema,
    rootValue: db_json_1.default,
    graphiql: "development" === process.env.NODE_ENV,
}));
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
