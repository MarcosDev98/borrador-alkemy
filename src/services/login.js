import axios from 'axios';

const login = async credentials => {
  const { data } = await axios.post('http://localhost:5005/api/login/', credentials);
  console.log(credentials);
  return data;
};

export default { login };