const { where } = require("sequelize");
const userModel = require("../models/user.model");

// var addUser = async (req, res) => {
//   //   const jane = userModel.build({ firstName: "Jane", lastName: "Ali" });
//   //   console.log(jane instanceof userModel); // true
//   //   console.log(jane.firstName); // "Jane"

//   //   await jane.save();

//   //   console.log("Jane was saved to the database!");
//   //   res.status(200).json(jane.toJSON());

//   //   we can use create method which combines both build and create method
//   const jane = await userModel.create({
//     firstName: "Mohsin",
//     lastName: "zaheer",
//   });

//   res.status(200).json(jane.toJSON());
// };

//fetch all the users
const getAllUsers = async (req, res) => {
  const users = await userModel.findAll();

  res.status(200).json({
    data: users,
  });
};

//find user by Id

const findUserById = async (req, res) => {
  const user = await userModel.findOne({
    where: { id: req.params.id },
  });

  res.status(200).json({
    data: user,
  });
};

//Insert Data to mySql

const insertUser = async (req, res) => {
  //we can add multiple objects at once using bulkCreate
  const data = req.body;
  if (data?.length > 1) {
    const addUsers = await userModel.bulkCreate(data);
    res.status(200).json({
      data: addUsers,
    });
  }
  const addUser = await userModel.create(data);
  res.status(200).json({
    data: addUser,
  });
};

const deleteUser = async (req, res) => {
    // console.log(req.params)
    // destroy query will return 1 on successfull deletion 
  const user = await userModel.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ data: user });
};

const updateUser= async(req,res)=>{
    const data=req.body;
    const user= await userModel.update(data,{
        where:{
            id:req.params.id
        }
    })
  res.status(200).json({ data: user });

}
module.exports = {
  // addUser,

  getAllUsers,
  findUserById,
  insertUser,
  deleteUser,
  updateUser
};
