//=======================================================
//server side: users controller
//=======================================================
//=======================================================
//attach user.js model
//=======================================================
var mongoose = require('mongoose');
var User = mongoose.model('User');
//=======================================================
//users.js Controller
//=======================================================
module.exports = (function() 
{
	return {
		checkUserExists: function(req, res)
		{
			User.find({username: req.params.any}, function(err, results){
				if(err) {
					// console.log(err);
					// console.log('none found');
				} else {
					res.json(results);
					// console.log(results);
					// console.log('found 1');
				}
			}).limit(1)
		},
		addUser: function(req, res)
		{
			var user = new User(req.body);
  			user.save(function(err, record){
  				if(err)
  				{
  					res.json({status:'failed', err:err})
  				}else
  				{
  					res.json({status:'success'})
  				}
  			})
		}
	}
})();