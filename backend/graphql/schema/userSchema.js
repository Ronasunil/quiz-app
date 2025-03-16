import { buildSchema } from "graphql";

const userSchema = buildSchema(`
    type User {
        _id: ID!
        name: String!
        highScore: Int!
        currentScore: Int!
        profileImage: String!
    }

    type Query {
        getUserById(id:ID!): User
        getUsers:[User]
    }

    type Mutation {
        authUser(name: String!):User
        updateHighScore(id:ID!, score: Int!): User
        updateCurrentScore(id:ID!, score:Int!): User
        updateUserProfileImage(id:ID!, newImage:String!): User
    }  
`);

export { userSchema };
