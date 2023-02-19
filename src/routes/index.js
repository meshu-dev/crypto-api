const { index } = require("./../controllers/indexController.js");

const routes = (fastify, _, done) => {
  fastify.get('/', index);
  
  done();
};

module.exports = routes;
