"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsType = void 0;
const graphql_1 = require("graphql");
exports.ProjectsType = new graphql_1.GraphQLObjectType({
    name: "Projects",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
    }),
});
