/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'POST /company': 'CompanyController.create',
  'GET /companies': 'CompanyController.find',
  'GET /company/:id': 'CompanyController.findOne',
  'PATCH /company/:id': 'CompanyController.update',
  'DELETE /company/:id': 'CompanyController.delete',

  // Job Route

  'POST /jobs': 'JobController.create',
  'GET /jobs': 'JobController.find'
};
