import axios from "axios";

import { errorHandler } from "./errorHandler";
// import { ClientJS } from "clientjs";

// const client = new ClientJS(); // Create A New Client Object
// const ua = client.getBrowserData().ua;

// const fingerprint = client.getCustomFingerprint(ua);

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_DOMAIN,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // fingerprint: fingerprint,
  },
});

const getData = async (path) => {
  try {
    const response = await axiosInstance.get(path);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      return errorHandler(error);
    } else if (error.request) {
      return errorHandler({
        response: {
          status: 503,
        },
      });
    }
  }
};

export { getData as get };
