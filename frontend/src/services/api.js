import axios from 'axios';

const api = axios.create({
    baseURL: ''
})

const images = axios.create({
    baseURL: 'https://api.unsplash.com',
});

export { images, api }