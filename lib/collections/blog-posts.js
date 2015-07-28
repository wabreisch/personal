BlogPosts = new Mongo.Collection('blogPosts');

Meteor.methods({
  insertBlogPost: function (postAttributes) {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      var blogPostId = BlogPosts.insert(postAttributes);
      return {
        _id: blogPostId
      };
    } else {
      alert("Access denied");
    }
  },

  updateBlogPost: function (currentPostId, postAttributes) {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      var blogPostId = BlogPosts.update(currentPostId, {$set: postAttributes}, function(error) {
        if (error) {
          alert(error.reason);
        }
    });
    } else {
      alert("Access denied");
    }
  },

  deleteBlogPost: function (currentPostId) {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      BlogPosts.remove(currentPostId);
    } else {
      alert("Access denied");
    }
  }
});