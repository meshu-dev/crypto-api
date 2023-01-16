const { index } = require("./controllers/indexController.js");
const { getData } = require("./controllers/coinController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/', index);
  fastify.get('/prices', getData);

  done();
};

module.exports = { routes };