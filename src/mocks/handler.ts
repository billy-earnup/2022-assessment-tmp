import { graphql as graphqlRequest } from "graphql";
import { graphql } from "msw";
import rootResolver from "./resolver";
import schema from "./schema.graphql";

export default graphql.operation(async (req, res, ctx) => {
  const payload = await graphqlRequest({
    schema,
    source: req?.body?.query,
    rootValue: rootResolver,
    variableValues: req.variables,
  }
  );
  return res(ctx.data(payload?.data ?? {}), ctx.errors(payload.errors));
});
