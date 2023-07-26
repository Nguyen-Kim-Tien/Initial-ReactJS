import axios from "axios";

export const get = async () => {
  return await axios.get(`...`, {
    headers: {
      Authorization: `Bearer ...`,
    },
  });
};

export const create = async (data) => {
  return await axios({
    method: "post",
    data: data,
    url: `...`,
  });
};

export const update = async (data) => {
  return await axios({
    method: "put",
    data: data,
    url: `...`,
    headers: {
      Authorization: `Bearer ...`,
    },
  });
};

export const deleted = async (data) => {
  return await axios({
    method: "delete",
    url: `...${data}`,
    headers: {
      Authorization: `Bearer ...`,
    },
  });
};
