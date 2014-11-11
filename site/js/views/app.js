var app = app || {};

// View for controlling main logic on the website
app.AppView = Backbone.View.extend({
	
	el: '#main-area',

	// Includes all the events, from welcome page as well as from main page
	events: {
		'click #done' : 'save',
		'keypress #signup-box' : 'checkEnter'
	},

	initialize: function(){
		this.render();
		this.initForm();
		
		this.listenTo(app.Persons, 'add', this.addOne);
		this.listenTo(app.Persons, 'reset', this.addAll);
		app.Persons.fetch();
	},

	// Initializes bindings to elements for signup forms
	initForm: function(){
		this.$firstIn = this.$('#firstIn');
		this.$lastIn = this.$('#lastIn');
		this.$addIn = this.$('#addIn');
		this.$passIn = this.$('#passIn');
		this.$checkIn = this.$('#checkIn');
		this.$error = this.$('#error');
	},

	// Renders windows depending on state
	render: function(){
		$('#navbar-main').append(app.Templates.loginBar);
		$('#main-area').append(app.Templates.signupWin);
		$('#main-area').append(app.Templates.nameWin);
	},

	addOne: function(person){
		var view = new app.PersonView({model: person});
		$('#person-display').append(view.render().el);
	},

	addAll: function(){
		this.$('#person-display').html('');
		app.Persons.each(this.addOne, this);
	},

	// Save and validation function
	save: function(){
		this.$firstIn.removeClass('missing');
		this.$lastIn.removeClass('missing');
		this.$addIn.removeClass('missing');
		this.$passIn.removeClass('missing');
		this.$checkIn.removeClass('missing');
		this.$error.text('');
		var c = 0;
		if(!this.$firstIn.val().trim()){
			this.$firstIn.addClass('missing');
			this.$error.text('Missing First Name');
			this.setActive(this.$firstIn, c);
			c++;
		}
		if(!this.$lastIn.val().trim()){
			this.$lastIn.addClass('missing');
			this.$error.text('Missing Last Name');
			this.setActive(this.$lastIn, c);
			c++;
		}
		if(!this.$addIn.val().trim()){
			this.$addIn.addClass('missing');
			this.$error.text('Missing Email');
			this.setActive(this.$addIn, c);
			c++;
		}
		if(!this.$passIn.val().trim()){
			this.$passIn.addClass('missing');
			this.$error.text('Missing Password');
			this.setActive(this.$passIn, c);
			c++;
		}
		if(!this.$checkIn.val().trim()){
			this.$checkIn.addClass('missing');
			this.$error.text('Missing Password');
			this.setActive(this.$checkIn, c);
			c++;
		}
		if (c > 1) {
			this.$error.text('Missing Information')
			return; 
		}else if(c > 0){
			return;
		}else if(this.$passIn.val().trim()!= this.$checkIn.val().trim()){
			this.$passIn.addClass('missing');
			this.$checkIn.addClass('missing');
			this.$error.text("Passwords Not Matching");
			this.setActive(this.$passIn, c);
			return;
		}
		app.Persons.create(this.newAttributes());
		this.$firstIn.val('');
		this.$lastIn.val('');
		this.$addIn.val('');
		this.$passIn.val('');
		this.$checkIn.val('');
	},

	checkEnter: function(e){
		if(e.which === ENTER_KEY){
			this.save();
		}
	},

	setActive: function(component, num){
		if(num === 0)
			component.focus();
	},

	newAttributes: function(){
		return {
			firstName: this.$firstIn.val().trim(),
			lastName: this.$lastIn.val().trim(),
			email: this.$addIn.val().trim(),
			password: this.$passIn.val().trim(),
			confirmed: false
		}
	}

});