Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/blog/', {
  name: 'bloglist',
  waitOn: function () {
    return Meteor.subscribe('blogposts');
  },
  data: function () { return BlogPosts.find({}, {sort: {created: -1}}); }
});
Router.route('/aboutme/', {name: 'aboutme'});
Router.route('/resume/', {name: 'resume'});
Router.route('/admin/', {name: 'admin'});
Router.route('/newblogpost/', {name: 'newblogpost'});