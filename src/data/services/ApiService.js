const url = "http://localhost:3002/api/react-flux/";

export const ApiService = {
  get(endpoint) {
    return fetch(`${url}${endpoint}`).then((res) => res.json());
  },
  post(endpoint, data) {
    return fetch(`${url}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },
  put(endpoint, data) {
    return fetch(`${url}${endpoint}?id=${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },
  delete(endpoint, id) {
    return fetch(`${url}${endpoint}?id=${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  },
};
