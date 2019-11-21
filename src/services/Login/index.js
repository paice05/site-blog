import Axios from "axios";

import toastr from 'toastr';

export const login = async (history, username, password) => {
  try {
    const response = await Axios({
      url: "http://localhost:5959/authors/login",
      method: "post",
      data: {
        username,
        password
      }
    });
    if (response.status === 200) {
      toastr.success("Success!", "Login",{
        progressBar: true,
        closeButton: true,
        timeOut: 1000,
        onHidden: () => history.push("/")
      });
    } 
    return response;
  } catch (error) {
    toastr.error("Usuario ou senha invalidos!", "Login",{
      progressBar: true,
      closeButton: true,
      timeOut: 1000,
    })
    return error.response;
  }
};
