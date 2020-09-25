import axios from 'axios'

const api = axios.create({
  baseURL: 'https://placesell.herokuapp.com'
})

export default api