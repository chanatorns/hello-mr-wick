import axios from 'axios';

export const getCategories = async () => {
  return axios.get('https://api.publicapis.org/categories')
    .then(r => r.data);
}