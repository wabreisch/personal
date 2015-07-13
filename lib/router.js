Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'home'});
Router.route('/blog/', {
  name: 'bloglist',
  waitOn: function () {
    Meteor.subscribe('blogposts');
  }
});

Router.route('/aboutme/', {name: 'aboutme'});
Router.route('/contactme/', {name: 'contactme'});
Router.route('/resume/', {name: 'resume'});
Router.route('/login/', {name: 'login'});
Router.route('/admin/', {
  name: 'admin',
  onBeforeAction: function () {
    if (Meteor.userId() === "PetzzszGt2QW4FiAz") {
      this.next();
    } else {
      this.render('login');
    }
  }
});

Router.route('/newblogpost/', {
  name: 'newblogpost',
  onBeforeAction: function () {
    if (Meteor.userId() === "PetzzszGt2QW4FiAz") {
      this.next();
    } else {
      this.render('login');
    }
  }
});

Router.route('/editblogitem/:_id', {
  name: 'editblogitem',
  waitOn: function () {
    Meteor.subscribe('blogposts');
  },
  data: function () { return BlogPosts.findOne(this.params._id); }
});