'use strict';

/**
 * jgo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jgo.jgo');
