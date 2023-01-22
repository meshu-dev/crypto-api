const { index } = require("./../controllers/indexController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/', index);

  done();
};

module.exports = routes;
