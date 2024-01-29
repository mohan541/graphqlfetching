export const GRAPHQL_API = "https://countries.trevorblades.com/";
export const GET_COUNTRIES_QUERY = `
query{
    countries{
        name
        code
        capital
        emoji
        currencies
    }
}
`;
