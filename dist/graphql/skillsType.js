"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsType = void 0;
const graphql_1 = require("graphql");
const db_json_1 = __importDefault(require("../data/db.json"));
const SkillsItemType = new graphql_1.GraphQLObjectType({
    name: "Skill",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        beginning_date: { type: graphql_1.GraphQLString },
    }),
});
exports.SkillsType = new graphql_1.GraphQLObjectType({
    name: "Skills",
    fields: () => ({
        languages: {
            type: new graphql_1.GraphQLList(SkillsItemType),
            resolve: () => db_json_1.default.languages,
        },
        databases: {
            type: new graphql_1.GraphQLList(SkillsItemType),
            resolve: () => db_json_1.default.databases,
        },
        others: {
            type: new graphql_1.GraphQLList(SkillsItemType),
            resolve: () => db_json_1.default.others,
        }
    }),
});
