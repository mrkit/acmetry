const User = conn.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
  
}, {
  fullName: ()=> {
    return this.firstName + ' ' + this.lastName;
  } 
});

module.exports = User;