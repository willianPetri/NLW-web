import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dowhile2021.herokuapp.com'
});