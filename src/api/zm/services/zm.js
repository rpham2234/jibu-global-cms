'use strict';

/**
 * zm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::zm.zm');
