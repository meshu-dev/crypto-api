const { build } = require("./app.js");

const app = build({ logger: true });

const init = async () => {
  const params = {
    port: process.env.PORT || 3000
  };
  
  try {
    await app.listen(params);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

init();
