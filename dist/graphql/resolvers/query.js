"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootQuery = void 0;
const graphql_1 = require("graphql");
const db_json_1 = __importDefault(require("../../data/db.json"));
const types_1 = require("../types");
exports.RootQuery = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        social_networks: {
            type: new graphql_1.GraphQLList(types_1.SocialNetworkType),
            resolve: () => db_json_1.default.social_networks,
        },
        skills: {
            type: new graphql_1.GraphQLList(types_1.SkillType),
            resolve: () => db_json_1.default.skills,
        },
        projects: {
            type: new graphql_1.GraphQLList(types_1.ProjectType),
            resolve: () => db_json_1.default.projects,
        },
    },
});
