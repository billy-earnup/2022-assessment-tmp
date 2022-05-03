import { Typography } from "@material-ui/core"; // https://mui.com/api/typography/
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
  const {data, loading} = useQuery(query)
  const { loans } = data ?? {};
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
      {
        loans && loans?.map?.((loan: any) => {
          return <li key={loan.id}>{loan.id.slice(10,20)}: ${loan.amount} ({(loan.interestRate * 100).toFixed(1)}%)</li>
        })
      }
      </ul>
    </div>
  );
}
