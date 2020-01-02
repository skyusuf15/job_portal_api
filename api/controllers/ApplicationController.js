/**
 * ApplicationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  /**
   * `ApplicationController.create()`
   */
  create: async function (req, res) {
    try {
      let {name, email, jobId} = req.allParams();
      if (!name) return res.badRequest({err: "candidate name is required"});
      if (!email) return res.badRequest({err: "email field is required"});
      if (!jobId) return res.badRequest({err: "jobId field is required"});

      const candidate = await Candidate.create({name, email}).fetch();
      const app = await Application.create({
        job: jobId,
        candidate: candidate.id
      });
      return res.ok(app);

    } catch (error) {
      return res.serverError(error);
    }
  },

  /**
   * `ApplicationController.find()`
   */
  find: async function (req, res) {
    try {
      const app = await Application.find().populate("job").populate("candidate");
      return res.ok(app);
    } catch (error) {
      return res.serverError(error);
    }
  },

  /**
   * `ApplicationController.findOne()`
   */
  findOne: async function (req, res) {
    return res.json({
      todo: 'findOne() is not implemented yet!'
    });
  },

  /**
   * `ApplicationController.delete()`
   */
  delete: async function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }

};

