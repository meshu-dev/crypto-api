const cors = require('@fastify/cors');

const initCors = (app) => {
  app.register(cors, {
    origin: (origin, cb) => {
      if (origin) {
        const hostname = new URL(origin).hostname;
        const frontendUrl = process.env.FRONTEND_URL;
  
        if (
          hostname === "localhost" ||
          hostname === frontendUrl
        ) {
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
