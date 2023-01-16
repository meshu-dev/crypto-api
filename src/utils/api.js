const getErrorResponse = (error) => {
  if (error.response) {
    const statusCode = error.response.status;
    const data = error.response.data;

    return {
      error: {
        code: statusCode,
        message: data['error']
      }
    };
  }
  return { error: true };
};

module.exports = {
  getErrorResponse
};