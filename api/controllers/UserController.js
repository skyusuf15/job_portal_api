/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  /**
   * `UserController.signup()`
   */
  signup: async function (req, res) {
    try {
      let {email,password} = req.allParams();

      if (!email) return res.badRequest({err: "email field is required"});
      if (!password) return res.badRequest({err: "password field is required"});

      const encryptedPassword = await UtilService.hashPassword(password);

      const user = await User.create({email,password: encryptedPassword}).fetch();
      return res.ok(user);

    } catch (err) {
      return res.serverError({err: err})
    }
  },

  /**
   * `UserController.login()`
   */
  login: async function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!'
    });
  }

};

