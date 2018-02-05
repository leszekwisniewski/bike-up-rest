/**
 * UserActivitiesController
 *
 * @description :: Server-side logic for managing Useractivities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const request = require('request')
const moment = require('moment')

module.exports = {



  /**
   * `UserActivitiesController.create()`
   */
  create: (req, res) => {
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },

  getUserActivities: () => {
    Strava_users.find({ select: ['user_id', 'access_token']}, (user) => {
      stravaUserIds.forEach((userId, accessToken) => {
        User_activities.find(where: { user_id: userId }, where: []).sort('start_date DESC').limit(1).exec((user) => {
          getStravaActivities(userId, user.access_token, user.last_sync, {}, updateUserActivities)
        })
      })
    })
  },

  getStravaActivities: (userId, accessToken, lastSync, maybeBody, callback) => {
    let lastSynced = moment(user.last_synced).unix()
    request.get(url + '?after=' + lastSynced, {'auth': { 'bearer': accessToken }}, (err, response, body) => {
      if(body) {
        let activities = JSON.parse(body)
        let concatenated = maybeBody.concat(activities)
        getStravaActivities(userId, accessToken, lastSync, concatenated, callback)
      } else {
        callback(maybeBody)
      }
    })
  },

  updateUserActivities: (userId, activities) => {
    User_activities.create(activities, (err, res) => {
      if(err) {
        sails.log.error(err)
      } else {
        sails.log.info('Created strava activit entries in mongodb')
      }
    })
  }
};
