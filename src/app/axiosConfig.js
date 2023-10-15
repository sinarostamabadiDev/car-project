import axios from "axios";
import Cookies from "js-cookie";


export let client=axios.create({
    baseURL:"https://carinto-backend.iran.liara.run"
})