const middie = require('@fastify/middie');

/*
async function subsystem (fastify, opts) {
  fastify.addHook('onRequest', async (req, reply) => {
    console.log('first')
  })

  fastify.use((req, res, next) => {
    console.log('second')
    next()
  })

  fastify.addHook('onRequest', async (req, reply) => {
    console.log('third')
  })
} */

const initMiddleware = (app) => {
  app.register(middie, {
    hook: 'onRequest'
  });
  //app.register(subsystem);
};

module.exports = initMiddleware;
