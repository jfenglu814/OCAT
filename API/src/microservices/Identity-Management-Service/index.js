const User = require("../Database/user");

function registerUser(name, email, bcryptPassword) {
    return User.forge({
      name: name,
      email: email,
      password: bcryptPassword,
    }).save();
}

async function returnUser(email){
  try{
    const user = await User.where({'email': email}).fetch({require:false});
    return user.toJSON();
  } catch(err){
    console.log(err)
  }

  
}
  
module.exports = { registerUser, returnUser };