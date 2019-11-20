import Axios from "axios";

export const showPostsComments = async (id) => {
  try {
    const response = await Axios({
      url: `http://localhost:5959/posts/${id}`,
      method: "GET"
    });
    return response;
  } catch (error) {
    return error.message;
  }
};
