import ApoloClient from 'apollo-boost';
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

    fetchStarRepositories = async():Promise<FetchResult> => {
        const result = await this.client.query({
            query: this.scheme`
                query {
                    search(first: 100, query:"language:JavaScript stars:>5000 sort:forks", type: REPOSITORY){
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
    }

    query = async(query:any):Promise<FetchResult> => {

        const result = await this.client.query(query)
        
        return result
    }

//     client.query({
//         query: gql`
//             query {
//                 search()
//             }
//         `,
//     })
// }

}
// Динамический вывод самых популярных репозиториев (работа с search)
    // 100 репозиториев
    // language=`javaScript`
    // star>=5000


    // search(first: 100, query:"language:JavaScript stars:>5000 sort:forks", type: REPOSITORY){
    //     nodes {
    //       ... on Repository {
    //         id
    //         name
    //         url
    //         description
    //         openGraphImageUrl
    //       }
    //     }
    //   }

// Достать все репозитории которые соответствуют поисковым меткам
// Из репозитория мне нужны следующие поля:
    // 

    // const client = new ApoloClient({
//     uri: 'https://api.github.com/graphql',
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": "bearer ad570f9114590a6f8178dd8ea9250cdca9559bfe"
//     }
// })