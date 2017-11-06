/**
 * Strava-authController
 *
 * @description :: Server-side logic for managing strava-auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const request = require('request')
const 

module.exports = {

  /**
   * `Strava-authController.callback()`
   */
  callback: function (req, res) {
    let form = {
      clientId: 20853
      clientSecret: 'b8d7a8379eba9233054e02d1e61dbb734acc7fc4'
      code: req.param('code')
    }
    request.post({ url:'https://www.strava.com/oauth/token', form}, function(err, httpResponse, body) {
      if (err) {
        return console.error('Token exchange failed:', err);
      }
      //TODO write the user-specific token to cassandra
    });
    // return res.json({

    // });
  }
};

