import Axios from "axios";

export const showRecentsPosts = async () => {
  try {
    const response = await Axios({
      url: "http://localhost:5959/posts/recents",
      method: "GET"
    });
    return response;
  } catch (error) {
    console.log(error.message)
  }
};
