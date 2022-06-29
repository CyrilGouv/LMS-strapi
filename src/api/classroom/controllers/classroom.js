'use strict';

/**
 *  classroom controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitize } = require('@strapi/utils')

module.exports = createCoreController('api::classroom.classroom', ({ strapi }) => ({
    
    async findTutorials(ctx) {
        const { params } = ctx
        const results = await strapi.service('api::classroom.classroom').findTutorials(params.id)
        
        const model = strapi.getModel('api::tutorial.tutorial')
        const sanitizedResults = await sanitize.contentAPI.output(results, model)
        
        return this.transformResponse(sanitizedResults)
    }

}));
