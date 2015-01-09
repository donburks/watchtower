Students = new Mongo.Collection('students');
Cohorts = new Mongo.Collection('cohorts');
Teachers = new Mongo.Collection('teachers');

Students.allow({
	insert: function(userId, doc) {
		return !! userId;
	},
	update: function(userId, doc) {
		return !! userId;
	}
});

Teachers.allow({
	insert: function(userId, doc) {
		return !! userId;
	},
	update: function(userId, doc) {
		return !! userId;
	}
});

Cohorts.allow({
	insert: function(userId, doc) {
		return !! userId;
	},
	update: function(userId, doc) {
		return !! userId;
	}
});

if (Meteor.isClient) {
	Meteor.subscribe('students');
  Meteor.subscribe('cohorts');

	Template.registerHelper('students', function() {
		return Students.find();
	});

	Template.registerHelper('cohorts', function() {
		return Cohorts.find();
	});

  Template.cohort.events({
    'click button': function () {
      // increment the counter when button is clicked
      
    }
  });

	Template.studentForm.events({
    'submit form': function(e) {
      e.preventDefault();
      var name = $(e.target).find('#name');
      var email = $(e.target).find('#email');
      Students.insert({
        'name': name.val(),
        'email': email.val()
      });
      name.val('');
			email.val('');
    }
  });
}

if (Meteor.isServer) {
	Meteor.publish('students', function() {
		return Students.find();
	});
	Meteor.publish('cohorts', function() {
		return Cohorts.find();
	});
}
