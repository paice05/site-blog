import Axios from "axios";

export const Show = async () => {
  try {
    const response = await Axios({
      url: "http://localhost:5959/",
      method: "GET"
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
