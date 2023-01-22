const { fetchData, getAll, get } = require("../controllers/coinController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/', getAll);
  fastify.get('/:id', get);
  fastify.post('/add', fetchData);
  fastify.post('/update-prices', fetchData);

  done();
};

module.exports = routes;
