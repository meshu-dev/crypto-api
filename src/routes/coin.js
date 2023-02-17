const {
  getAll,
  get
} = require("../controllers/coinController.js");

const routes = (fastify, _, done) => {
  fastify.get('/', getAll);
  fastify.get('/:id', get);

  done();
};

module.exports = routes;
