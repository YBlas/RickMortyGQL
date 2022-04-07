import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query characters($page: Int){
        characters(page: $page){
    		info{
              pages
            }
            results{
              name,
              id,
              status,
              species,
              type,
              gender,
              image,
              origin{
                id,
                type,
                dimension,
                name
              },
              location{
                id,
                type,
                dimension,
                name
              }
            }            
        }
    }
`

export const GET_PAGES = gql`
    query pages{
        characters{
    		info{
              pages
            }     
        }
    }
`