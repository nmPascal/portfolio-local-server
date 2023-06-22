import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

import data from "../../data/db.json";

export const SocialNetworkType = new GraphQLObjectType({
    name: "SocialNetwork",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        icon: { type: GraphQLString },
        url: { type: GraphQLString },
    }),
});