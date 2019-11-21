import Axios from "axios";
import toastr from "toastr";
export const Store = async (history, name, username, email, password, age) => {
  try {
    const response = await Axios({
      url: "http://localhost:5959/authors/",
      method: "post",
      data: { name, username, email, password, age }
    });

    if (response.status === 200) {
      toastr.success("Author added with success!", "Author", {
        progressBar: true,
        timeOut: 1500,
        onHidden: () => history.push("/login")
      });
    }
    return response;
  } catch (error) {
    toastr.error("Data ivalid!", "Author", {
      progressBar: true,
      timeOut: 1500,
    });
    return error.response;
  }
};
