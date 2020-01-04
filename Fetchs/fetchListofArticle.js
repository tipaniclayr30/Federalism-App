import Endpoint from "../Constant/Endpoint";

export function fetchListofArticle(){
  console.log(Endpoint.LIST_OF_ARTICLE_URL)
    return fetch( Endpoint.LIST_OF_ARTICLE_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json()).then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
          alert(error);
        })
    
    }