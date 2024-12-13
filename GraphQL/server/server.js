import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone';
import { typeDefs, resolvers } from "./products/index.js";

const server = new ApolloServer({typeDefs,resolvers});

const {url} = await startStandaloneServer(server,{
    listen: {port: 3001}
});

console.log(`server started at port: ${url}`);

