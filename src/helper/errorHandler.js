export const errorHandler = (error) => {
  const { status, data } = error.response;
  switch (status) {
    case 400:
      return {
        success: false,
        data: data,
        redirect: true,
        status: 400,
      };
    case 401:
      return {
        success: false,
        data: null,
        redirect: true,
        status: 401,
      };
    case 403:
      return {
        success: false,
        data: data,
        redirect: true,
        status: 403,
      };
    case 404:
      return {
        success: false,
        data: data,
        redirect: true,
        status: 404,
      };
    case 409:
      return {
        success: false,
        data: data,
        redirect: true,
        status: 409,
      };
    case 422:
      return {
        success: false,
        data: data,
        redirect: false,
        status: 422,
      };
    case 500:
      return {
        success: false,
        data: data,
        redirect: false,
        status: 500,
      };
    case 503:
      return {
        success: false,
        data: data,
        redirect: false,
        status: 503,
      };
    default:
      return {
        success: false,
        data: null,
        redirect: true,
      };
  }
};
