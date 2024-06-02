const app = require("express")();
const http = require("http").Server(app);
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vkskumarthakur:QMIgXB4bV6Dyg3QU@usermanagementdb.fagpg1s.mongodb.net/?retryWrites=true&w=majority&appName=UserManagementDB"
);
const user = require("./models/UserModel");
http.listen(3000, function () {
  console.log("server is running");
});
