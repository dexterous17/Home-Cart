'use strict';

/**
 * store-item service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::store-item.store-item');
