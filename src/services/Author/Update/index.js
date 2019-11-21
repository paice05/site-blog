import Axios from "axios";

export const Update = async (email, name, username, password, age) => {
  try {
    const response = await Axios({
      url: `http://localhost:5959/authors/${4}`,
      method: "PUT",
      data: {
        email,
        name,
        username,
        password,
        age,
      }
    });
    
    return response;
  } catch (error) {
    return error.response;
  }
};
