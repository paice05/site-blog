import Axios from "axios";

export const index = async () => {
  try {
    const response = await Axios({
      url: "http://localhost:5959/authors",
      method: "GET"
    });
    return response;
    
  } catch (error) {
    return false;
  }
};
