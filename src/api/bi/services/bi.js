'use strict';

/**
 * bi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bi.bi');
