/**
 * Strava_user.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    access_token: {
      type: 'string',
      required: true
    }, user_id: {
      type: 'int',
      primaryKey: true,
      required: true
    }, firstname: {
      type: 'string',
      required: true
    }, lastname: {
      type: 'string',
      required: true
    }, city: {
      type: 'string'
    }, state: {
      type: 'string'
    }, country: {
      type: 'string'
    }, sex: {
      type: 'string'
    }, premium: {
      type: 'boolean'
    }, email: {
      type: 'string',
      required: true
    }
  }
};
