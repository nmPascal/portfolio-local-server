"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const resolvers_1 = require("../resolvers");
exports.schema = new graphql_1.GraphQLSchema({
    query: resolvers_1.RootQuery,
});
