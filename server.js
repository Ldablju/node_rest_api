const app = require("./app");

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function () {
  console.log("Serwer działa na porcie: " + app.get("port"));
});
