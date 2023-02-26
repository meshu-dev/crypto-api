const { sendResponse } = require("../utils/common.js");

const index = async (request, reply) => {
  const statusCode = 200;
  const response = {
    message: 'Crypto API is running'
  };

  sendResponse(reply, statusCode, response);
};

module.exports = { index };