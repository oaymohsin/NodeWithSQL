const express = require("express");
const bodyParser = require("body-parser");
const UserModel = require("./models/user.model");
const app = express();

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

//Commang to sync model with the db
//also more different sync option. visit sequelize documentation
UserModel.sync({ force: false });

//import controllers

const {
  //   addUser,
  getAllUsers,
  findUserById,
  insertUser,
  deleteUser,
  updateUser,
} = require("./controllers/user.controller");

// app.use("/addUser", addUser);
app.use("/getAllUser", getAllUsers);
app.get("/getUserById/:id", findUserById);
app.post("/addUser", insertUser);
app.delete("/deleteUser/:id", deleteUser);
app.patch("/updateUser/:id", updateUser);

//to drop a table
// UserModel.drop()

app.listen(4577, () => {
  console.log(`App is running on port: 4577`);
});
