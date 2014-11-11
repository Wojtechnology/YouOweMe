var app = app || {};

// User model containing all required information
app.Person = Backbone.Model.extend({
	defaults: {
		firstName: '',
		lastName: '',
		password: '',
		email: '',
		confirmed: false
	},

	toggle: function() {
		this.save({
			confirmed: !this.get(confirmed)
		});
	}
});