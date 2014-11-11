var app = app || {};

// Displays users' first and last names
// Allows for deletion of users
app.PersonView = Backbone.View.extend({

	tagName: 'li',

	className: 'list-group-item',

	events: {
		'click .delete' : 'deleteUser'
	},

	template: _.template(app.Templates.nameBar),

	// Listens to chenages in the model, and if changed, calls render()
	initialize: function(){
		this.listenTo(this.model, 'change', this.render);
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	// Deletes model from collection and removes the element from html
	deleteUser: function(){
		this.$el.remove();
		this.model.destroy();
	}

});