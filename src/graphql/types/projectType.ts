import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        technologie: { type: GraphQLString },
        source: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
    }),
});