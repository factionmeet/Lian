import axios from 'axios';

const request = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    // header:{"Access-Control-Allow-Origin": "*"}
});


// service.interceptors.request.use(
//     config => {
//         return config;
//     },
//     error => {
//         console.log(error);
//         return Promise.reject();
//     }
// );

// service.interceptors.response.use(
    // response => {
    //     if (response.status === 200) {
    //         return response.data;
    //     } else {
    //         Promise.reject();
    //     }
    // },
    // error => {
    //     console.log(error);
    //     return Promise.reject();
    // }
// );

export default request;
