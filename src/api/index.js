import axios from 'axios'

const api =   axios.create('https://teste-postgresql.herokuapp.com/',{
        headers: headers
    })
export default api;

