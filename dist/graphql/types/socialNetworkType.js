"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialNetworkType = void 0;
const graphql_1 = require("graphql");
exports.SocialNetworkType = new graphql_1.GraphQLObjectType({
    name: "SocialNetwork",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        icon: { type: graphql_1.GraphQLString },
        url: { type: graphql_1.GraphQLString },
    }),
});
