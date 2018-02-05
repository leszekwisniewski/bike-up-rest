// const request = require('request')
// const moment = require('moment')

// const url = 'https://www.strava.com/api/v3/athlete/activities'
// module.exports.cron = {
  // getUserActivities: {
    // schedule: '* * * * * *',
    // onTick: function () {
      // Strava_users.find({ select: ['user_id', 'access_token']}, (user) => {
        // stravaUserIds.forEach((userId, accessToken) => {
          // let page = 1
          // User_activities.findOrCreate({ user_id: userId }, { user_id: userId, [], moment(0)}, (user) => {
            // getStravaActivities(userId, user.access_token, user.last_sync, {}, updateUserActivities)
          // })
        // })
      // })
    // }
  // }
// };

// function getStravaActivities(userId, accessToken, lastSync, maybeBody, callback) {
  // let lastSynced = moment(user.last_synced).unix()
  // request.get(url + '?after=' + lastSynced, {'auth': { 'bearer': accessToken }}, (err, response, body) => {
    // if(body) {
      // let activities = JSON.parse(body)
      // let concatenated = maybeBody.concat(activities)
      // getStravaActivities(userId, accessToken, lastSync, concatenated, callback)
    // } else {
      // callback(maybeBody)
    // }
  // })
// }

// function updateUserActivities(userId, activities) {
  // User_activities.create(activities, (err, res) => {
    // if(err) {
      // sails.log.error(err)
    // } else {
      // sails.log.info('Created strava activit entries in mongodb')
    // }
  // })
// }
