const {
  Sequelize,
  Op,
} = require('sequelize');

const db = new Sequelize(process.env.POSTGRES_URI, {
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
});

db.authenticate()
  .then(() => console.log(`\nConnected to "${process.env.POSTGRES_URI}".`))
  .catch((error) => {
    console.log(`\nUnable to connect to database: ${error}`);
    process.exit(1);
  });

const User = db.import('./user.js');
const Chore = db.import('./chore.js');
const UserChore = db.import('./user_chore.js');

User.hasMany(UserChore);
Chore.hasMany(UserChore);
UserChore.belongsTo(User);
UserChore.belongsTo(Chore);

module.exports = {
  db,
  Op,
  User,
  Chore,
  UserChore,
};
