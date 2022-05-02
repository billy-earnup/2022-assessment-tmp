import { buildSchema } from "graphql";

export default buildSchema(`
  type Query {
    loans: [Loan]
  }

  type Loan {
      id: String!
      amount: Int!
      interestRate: Float! # 1.00 = 100%
      partnerId: String
  }
`);