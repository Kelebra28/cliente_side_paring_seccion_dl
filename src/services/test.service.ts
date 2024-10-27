import axios from 'axios';

const BASE_URL = 'http://localhost:3001';


export const testService = () => {
   return axios.get(`${BASE_URL}/`);
};

export const getAllComments = () => {
    return axios.get(`${BASE_URL}/api/comments`);
};

export const createCommentService = (data: {email: string, content: string}) => {
    return axios.post(`${BASE_URL}/api/comments/`, {
          email: data.email,
          content: data.content,
    });
};

export const deleteCommentService = (id: number) => {
    return axios.delete(`${BASE_URL}/api/comments/${id}`);
};

export const editCommentService = (id: number, data: { content: string }) => {
    return axios.put(`${BASE_URL}/api/comments/${id}`, {
        content: data.content,
    });
};

export const  createNestedCommentService = (id: number, data: {content: string }) => {
    return axios.post(`${BASE_URL}/api/nested-comments`, {
        content: data.content,
        comment_id: id,
    });
}