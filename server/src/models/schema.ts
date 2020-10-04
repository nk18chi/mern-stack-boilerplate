import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } from "graphql";
import users from "../models/user";
import belongings from "../models/belonging";

const BelongingType: any = new GraphQLObjectType({
  name: "Belonging",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.findById(parent.userId);
      },
    },
  }),
});

const UserType: any = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    belongings: {
      type: new GraphQLList(BelongingType),
      resolve(parent, args) {
        return belongings.find({ userId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    belonging: {
      type: BelongingType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        belongings.findById(args.id);
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return users.findById(args.id);
      },
    },
    belongings: {
      type: new GraphQLList(BelongingType),
      resolve(parent, args) {
        return belongings.find({});
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        let user = new users({
          name: args.name,
        });
        return user.save();
      },
    },
    addBelonging: {
      type: BelongingType,
      args: {
        name: { type: GraphQLString },
        userId: { type: GraphQLString },
      },
      resolve(parent, args) {
        let beloging = new belongings({
          name: args.name,
          userId: args.userId,
        });
        return beloging.save();
      },
    },
  },
});

export default new GraphQLSchema({ query: RootQuery, mutation: Mutation });
