var app = app || {};

app.PersonView = Backbone.View.extend({

	tagName: 'li',

	className: 'list-group-item',

	events: {
		'click .delete' : 'deleteUser'
	},

	template: _.template(app.Templates.nameBar),

	initialize: function(){
		this.listenTo(this.model, 'change', this.render);
	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	deleteUser: function(){
		this.$el.remove();
		this.model.destroy();
	}

});