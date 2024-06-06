const { Sequelize } = require("sequelize");



const sequelize = new Sequelize('exampleDB', 'root', '9685', {
    host: 'localhost',
    // if you dont want to show sql queries in terminal 
    logging:false,
    dialect: 'mysql'
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


  module.exports=sequelize;