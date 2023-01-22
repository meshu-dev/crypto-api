const {
  fetchData,
  fetchPrices,
  getAll,
  get
} = require("../controllers/coinController.js");

const routes = (fastify, _, done) => {
  // fastify.addHook("onRequest", (request) => request.jwtVerify());

  fastify.get('/', getAll);
  fastify.get('/:id', get);
  fastify.post('/add', fetchData);
  fastify.patch('/update-prices', fetchPrices);

  done();
};

module.exports = routes;
