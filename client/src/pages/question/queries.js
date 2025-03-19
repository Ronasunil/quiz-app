import { gql } from "@apollo/client";

export const ADD_RESULT = gql`
  mutation AddResult(
    $userId: String!
    $score: Int!
    $isHighScore: Boolean!
    $totalQuestion: Int!
  ) {
    addResult(
      userId: $userId
      score: $score
      isHighScore: $isHighScore
      totalQuestion: $totalQuestion
    ) {
      _id
      userId
      score
      isHighScore
      totalQuestion
      date
    }
  }
`;

export const UPDATE_CURRENT_SCORE = gql`
  mutation UpdateCurrentScore($id: ID!, $score: Int!) {
    updateCurrentScore(id: $id, score: $score) {
      _id
      name
      highScore
      currentScore
      profileImage
    }
  }
`;

export const ADD_HIGH_SCORE = gql`
  mutation UpdateHighScore($id: ID!, $score: Int!) {
    updateHighScore(id: $id, score: $score) {
      _id
      name
      highScore
      currentScore
      profileImage
    }
  }
`;
