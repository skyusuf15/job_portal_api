module.exports = {

  create(req,res){
    let params = req.allParams();
    if (!params.name) {
      return res.badRequest({err: 'name is a required field'});
    }

    Company.create({
      name: params.name,
      city: params.city,
      address: params.address,
      user: req.user
    }, (err, results) => {
        if(err) {
          return res.serverError(err);
        }
        return res.ok(results);
    });
  },
  async find(req,res){
    try {

      const companies = await Company.find().populate("jobs");
      return res.ok(companies);

    } catch (err) {
      return res.serverError(err)
    }
  },
  async findOne(req,res){
    try {
      const company = await Company.findOne({id:req.params.id});
      return res.ok(company);

    } catch (err) {
      return res.serverError(err)
    }
  },
  async update(req,res){
    try {
      let params = req.allParams();

      const updatedCompany = await Company.update({id:params.id}).set({
        name: params.name,
        city: params.city,
        address: params.address
      });
      return res.ok(updatedCompany);

    } catch (err) {
      return res.serverError(err)
    }
  },
 async delete(req,res){
    try {

      const deletedCompany = await Company.destroy({id:req.params.id});
      return res.ok(deletedCompany);

    } catch (err) {
      return res.serverError(err)
    }
  }

};
