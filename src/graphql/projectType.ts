import { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

import data from "../data/db.json";

const ProjectsItemType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        languages: { type: new GraphQLList(GraphQLString) },
        languages_icons: { type: new GraphQLList(GraphQLString) },
        source: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
    }),
});

export const ProjectsType = new GraphQLObjectType({
    name: "Projects",
    fields: () => ({
        javascript: {
            type: new GraphQLList(ProjectsItemType),
            resolve: () => data.projects.javascript,
        },
        react: {
            type: new GraphQLList(ProjectsItemType),
            resolve: () => data.projects.react,
        },
        fullstack: {
            type: new GraphQLList(ProjectsItemType),
            resolve: () => data.projects.fullstack,
        },
    }),
});