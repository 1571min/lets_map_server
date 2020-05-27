const { users } = require('../../db/models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  get: (req, res) => {
    console.log(req.decoded);
    if (req.decoded) {
      res.status(200).json({
        userid: req.decoded.userid,
        isLogin: true,
      });
    } else {
      res.status(404).send('Not Found');
    }
  },
};
