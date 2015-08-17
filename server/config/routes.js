//=======================================================
//Routes File - Black Belt Mean
//=======================================================
module.exports = function(app)
{
//=======================================================
//require any controllers you may need
//=======================================================
var users = require('./../controllers/users.js');
var appointments = require('./../controllers/appointments.js');
//=======================================================
	
	//root route
	app.get('/', function(req, res) 
	{
		res.render('index');
	})

	//login.html routes
	app.post('/checkUserExists/:any', function(req, res)
	{
		users.checkUserExists(req, res);
	})
	app.post('/addUser', function(req, res)
	{
		users.addUser(req, res);
	})

	//add
	app.post('/addNewAppt', function(req, res)
	{
		appointments.addNewAppt(req, res);
	})

	//get
	app.get('/getAppointments', function(req, res)
	{
		appointments.getAppointments(req, res);
	})

	//delete
	app.delete('/destroyAppointment/:id', function(req, res){
		appointments.destroyAppointments(req, res);
	})

};