const { getData } = require("../controllers/coinController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/', getData);
  
  done();
};

module.exports = routes;
