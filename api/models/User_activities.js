/**
 * Strava_activity.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    achievement_count: {
      type: 'int'
    }, user_id: {
      type: 'int'
    }, athlete_count: {
      type: 'int'
    }, average_speed: {
      type: 'int'
    }, average_watts: {
      type: 'int'
    }, comment_count: {
      type: 'int'
    }, commute: {
      type: 'boolean'
    }, device_watts: {
      type: 'boolean'
    }, distance: {
      type: 'int'
    }, elapsed_time: {
      type: 'int'
    }, elev_high: {
      type: 'float'
    }, elev_low: {
      type: 'float'
    }, end_latlng: {
      type: 'array'
    }, external_id: {
      type: 'string'
    }, flagged: {
      type: 'boolean'
    }, from_accepted_tag: {
      type: 'boolean'
    }, gear_id: {
      type: 'string'
    }, has_heartrate: {
      type: 'boolean'
    }, has_kudoed: {
      type: 'boolean'
    }, id: {
      type: 'int'
    }, kilojoules: {
      type: 'float'
    }, kudos_count: {
      type: 'int'
    }, location_city: {
      type: 'string'
    }, location_country: {
      type: 'string'
    }, location_state: {
      type: 'string'
    }, manual: {
      type: 'boolean'
    }, map: {
      type: 'json'
    }, max_speed: {
      type: 'int'
    }, moving_time: {
      type: 'int'
    }, name: { type: 'string' },
    photo_count: { type: 'int' },
    pr_count: { type: 'int' },
    private: { type: 'boolean' },
    resource_state: { type: 'int' },
    start_date: { type: 'datetime' },
    start_date_local: { type: 'datetime' },
    start_latitude: { type: 'float' },
    start_latlng: { type: 'array' },
    start_longitude: { type: 'float' },
    timezone: { type: 'string' },
    total_elevation_gain: { type: 'float' },
    total_photo_count: { type: 'int' },
    trainer: { type: 'boolean' },
    type: { type: 'string' },
    upload_id: { type: 'int' },
    utc_offset: { type: 'int' },
    workout_type: { type: 'string' }
  }
};
