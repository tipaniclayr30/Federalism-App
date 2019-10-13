export function fetchLogin(username,password){
    return fetch('https://federalism-app.000webhostapp.com/fetchAccount.php', {
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