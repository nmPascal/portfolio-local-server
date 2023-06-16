import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { SkillsType } from "./skills.schema";
import data from "../data/db.json";

const RootQuery = new GraphQLObjectType({
    name: "Query",
    fields: {
        skills: {
            type: SkillsType,
            resolve: () => data.languages,
        }
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
});