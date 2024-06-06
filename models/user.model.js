const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

//Define new Model(Table) structure
const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue:'Zaheer'
    },
  },
  {
    //options
    tableName: "User",
    //if you dont want to add timestamps in table
    // timestamps:false
    createdAt: false,
    //to change the name of updatedAt field
    updatedAt: "updateddate",
  }
);

module.exports = User;



// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// class User extends Model {}

// User.init(
//   {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // Other model options go here
//     sequelize, // We need to pass the connection instance
//     modelName: 'User', // We need to choose the model name
//   },
// );

// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true

// Internally, sequelize.define calls Model.init, so both approaches are essentially equivalent.