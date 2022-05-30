const API_BASE_URL = "https://api.tvmaze.com";

export async function getApi(searchURL){
    const resp = await fetch(`${API_BASE_URL}${searchURL}`).then(response=>response.json());
    return resp;
}