'use strict';

/**
 * tz service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tz.tz');
