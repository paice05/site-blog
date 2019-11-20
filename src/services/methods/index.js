import Axios from "axios";

import { baseUrl } from "../url";

export const postOrPut = (url, id, data) =>
  Axios({
    url: `${baseUrl}${url}`,
    method: id ? "put" : "post",
    headers: {
      userId: 'daniel 33'
    },
    data
  });

export const find = url =>
  Axios({
    url: `${baseUrl}${url}`,
    method: "get"
  });

export const remove = (url, id) =>
  Axios({
    url: `${baseUrl}${url}/${id}`,
    method: "delete"
  });
