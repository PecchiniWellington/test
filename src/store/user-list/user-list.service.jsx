import axios from 'axios';

export const getUsers = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteUser = (userId) => {
  return axios
    .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};