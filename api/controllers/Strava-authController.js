/**
 * Strava-authController
 *
 * @description :: Server-side logic for managing strava-auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const request = require('request')

module.exports = {

  /**
   * `Strava-authController.callback()`
   */
  callback: function (req, res) {
    let formData = {
      client_id: '20853', // bikeup app id
      client_secret: 'b8d7a8379eba9233054e02d1e61dbb734acc7fc4',
      code: req.query.code
    }
    request.post({ url:'https://www.strava.com/oauth/token', form: formData}, function(err, res, body) {
      if (err) {
        sails.error('Token exchange failed:', err)
        return res.serverError(err)
      }

      let responseBody = JSON.parse(body)
      Strava_users.create({
        access_token: responseBody.access_token,
        user_id: responseBody.athlete.id,
        firstname: responseBody.athlete.firstname,
        lastname: responseBody.athlete.lastname,
        city: responseBody.athlete.city,
        state: responseBody.athlete.state,
        country: responseBody.athlete.country,
        sex: responseBody.athlete.sex,
        premium: responseBody.athlete.premium,
        email: responseBody.athlete.email,
      }).exec(function (err, user) {
        if (err) {
          sails.error(err)
        }
        sails.log('Successfully added a Strava user:', user)
      });
    });
    return res.send('<script>alert(\'jeee boy! thx!\');</script>');
  },

};

