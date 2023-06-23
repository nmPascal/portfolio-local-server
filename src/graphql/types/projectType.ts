import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

export const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        primary_language: { type: GraphQLString },
        technologies: { type: new GraphQLList(GraphQLString) },
        source_code: { type: GraphQLString || null },
        live_demo: { type: GraphQLString || null },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
    }),
});