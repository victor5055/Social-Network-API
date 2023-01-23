//import User model
const { User } = require('../models'); 

module.exports = {
  //get all users social-networkDB collection
  async getUsers(req, res) {
    try {
      const userData = await User.find();
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //get a single user in User document for social-networkDB collection
async getOneUser(req, res) {
    try {
      const userData = await User.findOne({ _id: req.params.userId });
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //create users for social-networkDB collection
  async createUser(req, res) {
    try{
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

//update a users in User document for social-networkDB collection
async updateUser(req, res) {
    try{
      const userData = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true });
      if (!userData) return res.status(404).json('User not found');
      res.status(200).json(`User with id ${req.params.userId} was updated.`);
    } catch (err) {
      res.status(500).json(err);
    }
  },
//delete a user in User document
    async deleteUser(req, res) {
    try{
       
        const userData = await User.findfindById(req.params.userId);
        if (!userData) return res.status(404).json('User not found');
        res.status(200).json(`User with id ${req.params,userId} was deleted.`);
    } catch (err) {
      res.status(500).json(err);
    }
  },

 //creates a friend in User document for social-networkDB collection
 async createFriend(req, res) {
  try{
    const userData = await User.findById(req.params.userId);
    if (!userData) return res.status(404).json(`User not found.`);
    userData.friends.push(req.params.friendId);

    await userData.save();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
},

 //deletes a friend in User document for social-networkDB collection
 async deleteFriend(req, res) {
  try{
    const userData = await User.findById(req.params.userId);
    if (!userData) return res.status(404).json(`User not found.`);
    userData.friends.pull(req.params.friendId);

    await userData.save();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
}
};
