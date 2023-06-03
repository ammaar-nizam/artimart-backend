'use strict';

/**
 * craftsman service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::craftsman.craftsman');
