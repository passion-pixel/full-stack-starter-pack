const express = require('express');
const router = express.Router();
const {
  User,
  Chore,
  UserChore,
} = require('./postgres/');

// http://docs.sequelizejs.com/manual/tutorial/querying.html
// many to many association
router.use('/users', async (req, res) => {
  const data = await UserChore.findAll({
    include: [
      { model: User },
      { model: Chore },
    ],
    order: [
      ['duration', 'DESC'],
    ],
  });
  res.json({ success: true, data, });
});

module.exports = router;
