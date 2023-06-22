import { GraphQLList, GraphQLObjectType } from "graphql";
import data from "../../data/db.json";
import { ProjectType, SkillType, SocialNetworkType } from "../types";

export const RootQuery = new GraphQLObjectType({
    name: "Query",
    fields: {
        social_networks: {
            type: new GraphQLList(SocialNetworkType),
            resolve: () => data.social_networks,
        },
        skills: {
            type: new GraphQLList(SkillType),
            resolve: () => data.skills,
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve: () => data.projects,
        },
    },
});