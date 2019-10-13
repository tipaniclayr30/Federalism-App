import Endpoint from "../Constant/Endpoint";

export function postSignup(username, password, name, email, contact) {
    console.log(username, password, name, email, contact)
    return fetch(Endpoint.SIGNUP_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            name: name,
            email: email,
            contact: contact,
        })
    })
        .then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            return responseJson;
        })
        .catch((error) => {
            console.log(error);
        })

}