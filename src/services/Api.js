import axios from 'axios'

const api = axios.create({
    baseURL: 'https://rest-api-cafe-gama.herokuapp.com'
});

export default api;