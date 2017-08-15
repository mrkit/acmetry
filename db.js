const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/acme_managers_db');
const User = require('./models/user');
const Award = require('./models/award');

conn.authenticate()
  .catch( err => console.log(err));

const sync = () => {
  return conn.sync({ force: true })//like nodemon for your database. It's checking for updates. Use for developer mode
}

Award.belongsTo(User);
User.hasMany(Award);


const seed = Promise.all([
  User.create({ firstName: 'John', lastName: 'Smith' }),
  User.create({ firstName: 'Bob', lastName: 'Loblaw' })
])
.then( results => {
  john = users[0],
  bob = users[1]
})
.catch(err => console.log(err));
  

  //SELECT User
module.exports = {
  sync,
  seed,
  models: {
    User,
    Award
  }
}