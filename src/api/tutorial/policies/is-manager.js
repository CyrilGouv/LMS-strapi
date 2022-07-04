'use strict';

/**
 * `is-manager` policy.
 */

module.exports = async (policyContext, config, { strapi }) => {
    
  try {
    // Get the id from req
    const { id } = policyContext.params

    // Get the tutorial thanks to req id
    const tutorial = await strapi.service('api::tutorial.tutorial').findOne(id, { populate: ['classroom.manager'] })

    // Current logged in user
    const { user } = policyContext.state

    // Check if classroom manager is logged in user
    const { classroom: { manager } } = tutorial

    if (manager && manager.id === user.id) return true

    return false

  } catch (e) {
    strapi.log.error('Error in is-manager policy', e)
    return false
  }

};
