var app = app || {};

var PersonList = Backbone.Collection.extend({
	
	model: app.Person,

	localStorage: new Backbone.LocalStorage('persons-backbone'),

	confirmed: function(){
		return this.filter(function (todo){
			return todo.get('confirmed');
		});
	},

	waiting: function(){
		return this.without.apply(this, this.completed());
	}
});

app.Persons = new PersonList();