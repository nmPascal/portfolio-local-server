import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const SkillType = new GraphQLObjectType({
    name: "Skill",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        beginning_date: { type: GraphQLString },
        type: { type: GraphQLString },
    }),
});
