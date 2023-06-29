"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectType = void 0;
const graphql_1 = require("graphql");
exports.ProjectType = new graphql_1.GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        technologies: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        source_code: { type: graphql_1.GraphQLString || null },
        live_demo: { type: graphql_1.GraphQLString || null },
        description: { type: graphql_1.GraphQLString },
        image: { type: graphql_1.GraphQLString },
    }),
});
