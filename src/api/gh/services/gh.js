'use strict';

/**
 * gh service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gh.gh');
