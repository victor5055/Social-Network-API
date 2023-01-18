//import User model
const { User } = require('../models'); 

module.exports = {
  //get all users social-mediaDB collection
  async getUsers(req, res) {
    try {
      const userData = await User.find();
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //create users for social-mediaDB collection
  async createUser(req, res) {
    try{
      const userData = await User.create(req.body);
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};