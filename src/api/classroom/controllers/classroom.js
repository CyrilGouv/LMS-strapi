'use strict';

/**
 *  classroom controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::classroom.classroom', ({ strapi }) => ({
    
    async findTutorials() {
        return 'To be implemted'
    }

}));
