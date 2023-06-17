import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} from "graphql";

import data from "../data/db.json";

const SkillsItemType = new GraphQLObjectType({
    name: "Skill",
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
            type: new GraphQLList(SkillsItemType),
            resolve: () => data.languages,
        },
        databases: {
            type: new GraphQLList(SkillsItemType),
            resolve: () => data.databases,
        },
        others: {
            type: new GraphQLList(SkillsItemType),
            resolve: () => data.others,
        }
    }),
});
