Template.editblogitem.events({
  'submit form': function (e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val()
    };

    Meteor.call('updateBlogPost', currentPostId, postProperties);
    Router.go('bloglist');
  },

  'click .btn-delete': function (e) {
    e.preventDefault();

    if (confirm("Are you sure you want to delete this blog post?")) {
      var currentPostId = this._id;
      // use a Meteor method to remove the post here
      //BlogPosts.remove(currentPostId);
      Meteor.call('deleteBlogPost', currentPostId);
      Router.go('bloglist');
    }
  }
});