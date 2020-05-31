const { users } = require('../../db/models');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(
  '139094529764-ktta2a2m7f3hnie2pptb3futk490pr3r.apps.googleusercontent.com',
);
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  post: (req, res) => {
    async function verify() {
      console.log(req.body.it);
      const ticket = await client.verifyIdToken({
        idToken: req.body.it,
      });
      const payload = ticket.getPayload();
      return payload;
    }
    verify()
      .then((payload) => {
        console.dir(payload);
        const userid = payload['email'];
        const password = payload['sub'];
        users
          .findOrCreate({
            where: {
              userid,
            },
            default: {
              password: password,
            },
          })
          .then(([data, created]) => {
            if (data) {
              const token = jwt.sign(
                {
                  id: data.id,
                  userid: data.userid,
                },
                process.env.JWT_PASSWORD,
                {
                  expiresIn: '1h',
                },
              );
              req.headers.authorization = token;
              return res.status(200).json({
                lcode: 200,
                message: 'jwt 발급',
                token: token,
              });
            } else {
              res.status(404).send('Invalid User');
            }
          })
          .catch((err) => {
            console.error(err);
            res.status(404).send(err);
          });
      })
      .catch(console.error);
  },
};
