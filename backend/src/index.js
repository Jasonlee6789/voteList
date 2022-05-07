const Express = require("express");
const setupMiddleware = require("./setup/middleware");
const app = Express();
setupMiddleware(app);

app.listen(4000, () => {
  console.log("LIJING Server started on port 4000");
});
