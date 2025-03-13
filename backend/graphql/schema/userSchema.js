import { buildSchema } from "graphql";

const userSchema = buildSchema(`
    type User {
        id: ID!
        name: String!
        highScore: Int!
        currentScore: Int!
    }

    type Query {
        getUserById(id:ID!): User
        getUsers:[User]
    }

    type Mutation {
        authUser(name: String!):User
        updateHighScore(id:ID!, score: Int!): User
        updateCurrentScore(id:ID!, score:Int!): User
    }  
`);

export { userSchema };
