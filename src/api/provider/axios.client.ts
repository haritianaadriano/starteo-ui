import axios from 'axios';

export const localClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const client = axios.create({
  baseURL: 'https://preprod-personal-blog-api.adaptable.app',
});
