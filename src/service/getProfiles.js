import api from "./api"

export const getProfiles = async () => {
    const response =  await api.get("/?results=27")
    const data = response.data
    console.log(response)
    const result = data.results
    return result;
}