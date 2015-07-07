Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/blog/', {name: 'blog'});
Router.route('/aboutme/', {name: 'aboutme'});