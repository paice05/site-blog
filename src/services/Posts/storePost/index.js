import Axios from "axios";
import toastr from "toastr";

export const store = async (history,author_id, title, body) => {
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
    toastr.success("Post", "Posted added with success!", {
      progressBar: true,
      closeOrOpen: true,
      timeOut: 1000,
      onHidden: () => {
    //    closeOrOpen();
        history.push("/");
      }
    });
    return response;
  } catch (error) {
    toastr.error("Post", "falha!", {
      progressBar: true,
      closeOrOpen: true,
      timeOut: 1000,
      onHidden: () => {
    //    closeOrOpen();
       // history.push("/");
      }
    });
    return error.response;
  }
};
