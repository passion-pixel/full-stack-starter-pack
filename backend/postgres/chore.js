module.exports = (db, Sequelize) => (
  db.define('chore', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
  }, {
    underscored: true,
  })
);
