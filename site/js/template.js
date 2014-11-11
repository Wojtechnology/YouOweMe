var app = app || {};

// Object containing all necessary templates for the website
app.Templates = {

	// For the welcome page, for users that are not yet logged in
	// Contains two forms (email and password) as well as a 'login' button
	loginBar: "<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>\
  					<form style='border: 0;' class='navbar-form navbar-right' role='login'>\
  						<div class='form-group'>\
  							<input type='text' class='form-control' placeholder='Email'>\
  							<input type='password' class='form-control' placeholder='Password'>\
  						</div>\
  						<button type='submit' class='btn btn-primary'>Login</button>\
  					</form>\
  				</div>",

  	// Window to be displayed on welcome page which allows for creation of new users
 	// Contains Jumbotron and five forms
  	signupWin: "<div class='row'>\
					<div class='col-md-7'>\
						<div style='background-color: #FFFFFF;' class='jumbotron'>\
							<h1 style='color: #F89406;'>You Owe Me.</h1>\
							<p>Tired of chasing your friends to get your hard earned money back? This tool will help you keep track of the money you share with your friends.</p>\
						</div>\
					</div>\
					<div class='col-md-5'>\
						<div class='panel panel-default'>\
							<div class='panel-heading'>\
								<h3 style='color: #F89406;' class='panel-title'>Sign Up</h3>\
							</div>\
							<div class='panel-body' id='signup-box'>\
								<input type='text' class='form-control signup-input signup' id='firstIn' placeholder='First Name'>\
  								<input type='text' class='form-control signup-input signup' id='lastIn' placeholder='Last Name'>\
								<input type='text' class='form-control signup-input signup' id='addIn' placeholder='Email'>\
  								<input type='password' class='form-control signup-input signup' id='passIn' placeholder='Password'>\
								<input type='password' class='form-control signup-input signup' id='checkIn' placeholder='Retype Password'>\
								<button id='done' type='submit' class='btn btn-warning'>Submit</button>\
								<span style='float: right;' class='label label-danger' id='error'></span>\
							</div>\
						</div>\
					</div>\
				</div>",

	nameBar: "<%= firstName %> <%= lastName %><div style='float: right;' class='btn-group'>\
	<button type='button' class='btn btn-default delete'>Delete User</button></div>",

	nameWin: "<div class='row'>\
				<div class='col-md-12'>\
					<ul class='list-group' id='person-display'></ul>\
				</div>\
			</div>"
};
