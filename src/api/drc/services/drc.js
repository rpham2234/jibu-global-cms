'use strict';

/**
 * drc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drc.drc');
