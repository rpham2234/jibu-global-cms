'use strict';

/**
 * gh controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::gh.gh');
