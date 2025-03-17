import { buildSchema } from "graphql";

const resultSchema = buildSchema(`
    type Result {
        _id: Id!
        userId: String!
        score: Number!
        isHighScore: Boolean!
        totalQUestion: Number!
    }

    type Query {
        getScoreByUserId(userId:String!): Result
    }
    
    type Mutation {
        addResult(userId: String!, score: Number!, isHighScore: Boolean!, totalQUestion: Number!): Result
    }
 `);
