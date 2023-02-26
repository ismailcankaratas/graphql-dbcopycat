import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import database from "./data/db.json" assert {type: "json"};
import dbcopycat from "dbcopycat";

const typeDefs = `#graphql
    type Book {
        title: String
        author: String
    }
    input CreateBookInput {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
    type Mutation {
    # Book
        createBook(data: CreateBookInput!): Book!
    }
`

const resolvers = {
    Mutation: {
        createBook: (parent, { data }) => {
            const book = dbcopycat.add("books", data);
            return book;
        }
    },
    Query: {
        books: () => database.books,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);