const app = require("./server.js");
const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Project view server running at: http://localhost:${port}`);
});
