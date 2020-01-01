/**
 * JobController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  /**
   * `JobController.create()`
   */
  create: async function (req, res) {
    try {
      let {title, description, salary, position } = req.allParams();
      if (!title) return res.badRequest({err: "title field is required"});
      if (!salary) return res.badRequest({err: "salary field is required"});

      const jobdetail = await JobDetail.create({description, salary, position}).fetch();
      const job = await Job.create({ title, job_detail: jobdetail.id });
      return res.ok(job);

    } catch (error) {
      return res.serverError(error);
    }
  },

  /**
   * `JobController.find()`
   */
  find: async function (req, res) {
    try {
      const jobs = await Job.find().populate("job_detail");
      return res.ok(jobs);
    } catch (error) {
      return res.serverError(error);
    }
  }

};
