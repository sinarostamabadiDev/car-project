import axios from "axios";
import Cookies from "js-cookie";


export let client=axios.create({
    baseURL:"http://192.168.160.144:8000",
    headers:{
        Authorization:Cookies.get("jwt") && `Bearer ${Cookies.get("jwt")}`
    }
})