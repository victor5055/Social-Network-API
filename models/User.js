
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({

    //Add individual properties 
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true,
         //Add validate property to check if email is valid
    validate: {
        validator: value => validator.isEmail(value),
        message: '{VALUE} is not a valid email.'
      }
    },
     //An arrary of 'ObjectId' values that reference a model for Thoughts and Friends
  thoughts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought'
  }],
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
    //Built-in date method to get the current date
    lastAccessed: { type: Date, default: Date.now },
  });
  
   //Use the 'pre' middleware to remove associated thoughts when a user is removed
 userSchema.pre('remove', async function(next) {
  try{
    await mongoose.model('Thought').deleteMany({ username: this._id });
    next();
  } catch (err) {
    next(err);
  }
});


// virtual retrieves the length of the user's friends on query
userSchema.virtual('friendCount').get(function() {
    return friends.length;
  });
 

  //Using mongoose.model() to compile a model 
  const User = mongoose.model('User', userSchema);

  //Export User
  module.exports = User;