import ApoloClient from "apollo-boost";
import { ApolloClientOptions, CacheResolver, FetchResult } from 'apollo-boost'
import gql from 'graphql-tag';

interface GraphQueriesScheme {
    url: string;
    token: any;
    fetchStarRepositories: Function;
    query: Function;
    client: ApoloClient<any>;
    scheme: any
}

export default class graphQueries implements GraphQueriesScheme {

    url = "https://api.github.com/graphql";
    token = process.env.REACT_APP_TOKEN;
    scheme = gql;

    client = new ApoloClient({
        uri: this.url,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${this.token}`
        }
    })

    fetchStarRepositories = async(count:number) => {
        try {
            const result = await this.client.query({
                query: this.scheme`
                    query {
                        search(first: ${count}, query:"language:JavaScript stars:>5000 sort:forks", type: REPOSITORY){
                            nodes {
                              ... on Repository {
                                id
                                name
                                url
                                description
                                openGraphImageUrl
                              }
                            }
                          }
                    }
                `
            });
            return result;
        }catch(error) {
            console.log("fetchStarRepositoriesERROR = ", error)
        }

    }

    query = async(query:any):Promise<FetchResult> => {

        const result = await this.client.query(query)
        
        return result
    }

}