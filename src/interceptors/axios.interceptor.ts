import axios from 'axios';

export const AxiosInterceptor = () => {

    axios.interceptors.request.use((request) => {
        return request;
    });

    axios.interceptors.response.use(
        (response) => {
          const jsonResponse = JSON.stringify(response.data);
          console.log(jsonResponse);
          return response;
        },
        (error) => {
          console.log(error.message);
          return Promise.reject(error);
        }
      )};