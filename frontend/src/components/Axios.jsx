import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api'

const AxiosIstance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers:{
        'Content-Type':  'application/json',
        Accept: 'application/json'
    }
})

export default AxiosIstance