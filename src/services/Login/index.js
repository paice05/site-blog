import Axios from 'axios';

export const login = async (username, passsword) => {
  const response = await Axios({
    url: '',
    method: 'post',
    data: {
      username,
      passsword
    }
  });

  console.log(response);
} 