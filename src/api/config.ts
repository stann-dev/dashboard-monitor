import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.recruitment.4soft.tech'
});

export default instance;