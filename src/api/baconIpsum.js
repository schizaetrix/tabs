import axios from 'axios'

export default axios.create({
    baseURL: 'https://baconipsum.com/api'
})