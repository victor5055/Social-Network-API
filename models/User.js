const userSchema = new mongoose.Schema({

    //Add individual properties 
    username: { type: String, required: true },
    //Use built-in date method to get current date
    lastAccessed: { type: Date, default: Date.now },
  });
     
  //Create an individual document 
  User.create(
    {
      username: "victorpereira",
    },
    (err) => (err ? handleError(err) : console.log('New document Created'))
  );