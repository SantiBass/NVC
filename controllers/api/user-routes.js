const router = require('express').Router();
const { User } = require('../../models');
const sequelize = require('../../config/connection');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/new', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
      .then((newUser) => res.status(200).json(newUser))
      .catch((err) => res.status(400).json(err));
  });

module.exports = router;