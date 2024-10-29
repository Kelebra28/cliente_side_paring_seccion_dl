import axios from "axios";

export const setupAxiosInterceptors = () => {
  const responseInterceptor = axios.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("Error response", error);
      return Promise.reject(error);
    }
  );

  return responseInterceptor;
};

export const ejectAxiosInterceptor = (interceptor: number) => {
  axios.interceptors.response.eject(interceptor);
};
