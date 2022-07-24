import axios from "axios";


const baseURL = 'https://rndb.herokuapp.com/api'

const zenitApi = axios.create({ baseURL })


export default zenitApi