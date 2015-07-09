Template.newblogpost.events({
  'submit form': function (e) {
    e.preventDefault();

    var blogPost = {
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val(),
      author: Meteor.userId(),
      created: new Date()
    };

    Meteor.call('insertBlogPost', blogPost, function (error, result) {
      if (error) {
        alert("ERROR");
      }
    });

    Router.go('bloglist');
  }
});