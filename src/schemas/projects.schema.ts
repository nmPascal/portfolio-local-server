import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const ProjectsType = new GraphQLObjectType({
    name: "Projects",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    }),
});