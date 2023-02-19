const { getAll, getTopTen, get } = require("../controllers/coinController.js");

const routes = (fastify, _, done) => {
  fastify.get('/', getAll);
  fastify.get('/top-ten', getTopTen);
  fastify.get('/:id', get);
  
  done();
};

module.exports = routes;
