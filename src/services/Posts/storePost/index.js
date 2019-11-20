import Axios from "axios";

export const store = async (author_id, title, body) => {
  try {
    const response = await Axios({
      url: "http://localhost:5959/posts",
      method: "POST",
      data: {
        author_id: 4,
        title,
        body
      }
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
