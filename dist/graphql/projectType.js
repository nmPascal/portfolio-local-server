"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsType = void 0;
const graphql_1 = require("graphql");
const db_json_1 = __importDefault(require("../data/db.json"));
const ProjectsItemType = new graphql_1.GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        languages: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        languages_icons: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        source: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        image: { type: graphql_1.GraphQLString },
    }),
});
exports.ProjectsType = new graphql_1.GraphQLObjectType({
    name: "Projects",
    fields: () => ({
        javascript: {
            type: new graphql_1.GraphQLList(ProjectsItemType),
            resolve: () => db_json_1.default.projects.javascript,
        },
        react: {
            type: new graphql_1.GraphQLList(ProjectsItemType),
            resolve: () => db_json_1.default.projects.react,
        },
        fullstack: {
            type: new graphql_1.GraphQLList(ProjectsItemType),
            resolve: () => db_json_1.default.projects.fullstack,
        },
    }),
});
