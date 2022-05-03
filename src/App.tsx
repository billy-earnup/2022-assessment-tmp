// import { Typography } from "@material-ui/core";
// https://mui.com/api/typography/
import { useQuery, gql } from "@apollo/client";

export const query = gql`
  query myQuery {
    loans {
      id
      amount
      interestRate
      partnerId
    }
  }
`
// import useAPICall from "./useAPICall";
export default function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* 
        TODO: Loans here
      */}
    </div>
  );
}
