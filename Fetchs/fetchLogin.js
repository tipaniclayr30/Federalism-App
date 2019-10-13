import Endpoint from "../Constant/Endpoint";

export function fetchLogin(username,password){
    return fetch( Endpoint.LOGIN_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
        .then((response) => response.json()).then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
          alert(error);
        })
    
    }