const {
  db,
  User,
  Chore,
  UserChore,
} = require('./index.js');

const users = [
  { name: 'Andros Wong', },
  { name: 'Jeff Tang', },
  { name: 'Rob Durst', },
  { name: 'Jay Awan', },
];

const chores = [
  { title: 'dishes', },
  { title: 'trash', },
  { title: 'kitchen', },
  { title: 'bathroom', },
];

const populate = async () => {
  try {
    const userz = await Promise.all(users.map(x => User.create(x)));
    const chorez = await Promise.all(chores.map(x => Chore.create(x)));
    const ucs = await Promise.all(userz.map((u, i) => {
      return UserChore.create({
        user_id: u.id,
        chore_id: chorez[i].id,
        duration: Math.random() * 10
      });
    }));
    console.log(ucs.length + ' UserChores created!');
  } catch (err) { console.log('Error populating', err); }
};

(async () => {
  try {
    await db.sync({ force: true });
    await populate();
    console.log(`\nSuccessfully seeded ${process.env.POSTGRES_URI} tables!`);
    process.exit(0);
  } catch (err) {
    console.log('\nError seeding database tables:', err);
    process.exit(1);
  }
})();
