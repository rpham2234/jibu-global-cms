'use strict';

/**
 * gh-contact service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gh-contact.gh-contact');
