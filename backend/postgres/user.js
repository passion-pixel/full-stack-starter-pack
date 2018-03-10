module.exports = (db, Sequelize) => (
  db.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  }, {
    underscored: true,
  })
);
