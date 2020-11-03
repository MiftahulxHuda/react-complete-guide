import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a8478.firebaseio.com/'
});

export default instance;