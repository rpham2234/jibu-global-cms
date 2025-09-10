'use strict';

/**
 * rw service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rw.rw');
