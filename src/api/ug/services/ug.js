'use strict';

/**
 * ug service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ug.ug');
