import { buildSchema } from "graphql";

export const resultSchema = buildSchema(`
    type Result {
        _id: ID!
        userId: String!
        score: Int!
        isHighScore: Boolean!
        totalQuestion: Int!
        date: String!
    }

    type Query {
        getScoreByUserId(userId:String!): Result
    }
    
    type Mutation {
        addResult(userId: String!, score: Int!, isHighScore: Boolean!, totalQuestion: Int!): Result
        
    }
 `);
