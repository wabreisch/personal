Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/blog/', {
  name: 'bloglist',
  waitOn: function () {
    Meteor.subscribe('blogposts');
  }
});
Router.route('/aboutme/', {name: 'aboutme'});
Router.route('/resume/', {name: 'resume'});
Router.route('/admin/', {name: 'admin'});
Router.route('/newblogpost/', {name: 'newblogpost'});