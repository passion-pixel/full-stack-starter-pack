module.exports = (db, Sequelize) => (
  db.define('user_chore', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    duration: {
      type: Sequelize.DOUBLE,
    },
  }, {
    underscored: true,
  })
);
