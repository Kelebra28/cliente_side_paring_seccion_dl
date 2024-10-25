import axios from 'axios';

const BASE_URL = 'http://localhost:3001';


export const testService = () => {
   return axios.get(`${BASE_URL}/`);
};














// export const testPostService = (data: any) => {
//    return axios.post(`${BASE_URL}/api/createUser/`, {
//         name: data.name,
//         age: data.age,
//         nacionality: data.nacionality,
//         position: data.position,
//         experience: data.experience,
//    });
// }

// export const testGetService = (id: number) => {
//     return axios.get(`${BASE_URL}/api/getUser/${id}`);
// };

// export const testGetAllService = () => {
//     return axios.get(`${BASE_URL}/api/getAllUser/`);
// }