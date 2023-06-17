import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { SkillsType } from "./skillsType";
import data from "../data/db.json";
import { ProjectsType } from "./projectType";

const RootQuery = new GraphQLObjectType({
    name: "Query",
    fields: {
        skills: {
            type: SkillsType,
            resolve: () => ({
                languages: data.languages,
                databases: data.databases,
                others: data.others,
            }),
        },
        projects: {
            type: ProjectsType,
            resolve: () => ({
                javascript: data.projects.javascript,
                react: data.projects.react,
                fullstack: data.projects.fullstack,
            }),
        },
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
});