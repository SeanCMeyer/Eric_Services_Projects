const app = require("./server.js");
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Project view server running at: http://localhost:${port}`);
});
