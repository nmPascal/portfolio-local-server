import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} from "graphql";
import data from "../data/db.json";

const SkillItemType = new GraphQLObjectType({
    name: "SkillItem",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        beginning_date: { type: GraphQLString },
    }),
});

export const SkillsType = new GraphQLObjectType({
    name: "Skills",
    fields: () => ({
        languages: {
            type: new GraphQLList(SkillItemType),
            resolve: () => data.languages,
        },
        databases: {
            type: new GraphQLList(SkillItemType),
            resolve: () => data.databases,
        },
        others: {
            type: new GraphQLList(SkillItemType),
            resolve: () => data.others,
        }
    }),
});
