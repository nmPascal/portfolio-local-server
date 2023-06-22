"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillType = void 0;
const graphql_1 = require("graphql");
exports.SkillType = new graphql_1.GraphQLObjectType({
    name: "Skill",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        beginning_date: { type: graphql_1.GraphQLString },
        type: { type: graphql_1.GraphQLString },
    }),
});
