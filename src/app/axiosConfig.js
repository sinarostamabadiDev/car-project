import axios from "axios";
import Cookies from "js-cookie";


export let client=axios.create({
    baseURL:"http://192.168.43.181:8000"
})