const axios = require("axios");

export const setupAxiosInterceptors = () => {
  const responseInterceptor = axios.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      console.error("Error response", error);
      return Promise.reject(error);
    }
  );

  return responseInterceptor;
};

export const ejectAxiosInterceptor = (interceptor: number) => {
  axios.interceptors.response.eject(interceptor);
};
