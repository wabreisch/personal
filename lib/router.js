Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/blog/', {name: 'blog'});
Router.route('/aboutme/', {name: 'aboutme'});
Router.route('/resume/', {name: 'resume'});
Router.route('/admin/', {name: 'admin'});