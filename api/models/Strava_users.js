/**
 * Strava_user.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    access_token: {
      // "83ebeabdec09f6670863766f792ead24d61fe3f9"
      type: 'string',
      required: true
    }, user_id: {
      type: 'int',
      primaryKey: true,
      required: true
    }
  }
    // athlete: {
      // type: 'json',
      // required: true,
      // id: {
        // type: 'int'
      // },
      // resource_state: {
        // 2
      // },
      // firstname: {
        // John
      // },
      // lastname: {
        // "Applestrava"
      // },
      // profile_medium: {
        // "http://pics.com/227615/medium.jpg"
      // },
      // profile: {
        // "http://pics.com/227615/large.jpg
      // },
      // city: {
        // "San Francisco"
      // },
      // state: {
        // "California"
      // },
      // country: {
        // "United States"
      // },
      // sex: {
        // "M"
      // },
      // premium: {
        // true
      // },
      // email: {
        // "john@applestrava.com"
      // },
      // created_at: {
        // "2008-01-01T17:44:00Z"
      // },
      // updated_at: {
        // "2013-09-04T20:00:50Z"
      // }
    // }
};
