import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/repos/',
    // baseURL: 'http://babi.hefesto.io/signo/',
    // headers:{
    //     'Access-Controll-Allow-Origin': "*",
    // }, 



});


export default api;


