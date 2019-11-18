import Axios from "axios";

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

    //var data = response.data.data;
    if (response.status === 200) {
      history.push("/");
    }
  } catch (error) {
    console.log(error.response);
  }
};
