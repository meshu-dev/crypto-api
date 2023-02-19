const cors = require('@fastify/cors');

const initCors = (app) => {
  app.register(cors, {
    origin: (origin, cb) => {
      if (origin) {
        const hostname = new URL(origin).hostname;
  
        if (hostname === "localhost") {
          //  Request from localhost will pass
          cb(null, true);
          return;
        }
        cb(new Error("Not allowed"), false);
      } else {
        cb(null, true);
      }
    }
  });
};

module.exports = initCors;
