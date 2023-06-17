"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const skillsType_1 = require("./skillsType");
const db_json_1 = __importDefault(require("../data/db.json"));
const projectType_1 = require("./projectType");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        skills: {
            type: skillsType_1.SkillsType,
            resolve: () => ({
                languages: db_json_1.default.languages,
                databases: db_json_1.default.databases,
                others: db_json_1.default.others,
            }),
        },
        projects: {
            type: projectType_1.ProjectsType,
            resolve: () => ({
                javascript: db_json_1.default.projects.javascript,
                react: db_json_1.default.projects.react,
                fullstack: db_json_1.default.projects.fullstack,
            }),
        },
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
