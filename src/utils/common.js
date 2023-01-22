const sendResponse = (reply, statusCode, response) => {
  reply.code(statusCode)
       .header('Content-Type', 'application/json; charset=utf-8')
       .send(response);
};

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
  sendResponse
};
