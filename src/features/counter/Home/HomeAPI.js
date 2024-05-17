import axios from "axios"

export const getAllDataApI = () => {
    return axios.get("https://dummyjson.com/products")
}