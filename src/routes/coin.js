const { fetchData, getAll, get } = require("../controllers/coinController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/fetch-data', fetchData);
  fastify.get('/', getAll);
  fastify.get('/:id', get);

  done();
};

module.exports = routes;
