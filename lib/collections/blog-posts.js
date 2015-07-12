BlogPosts = new Mongo.Collection('blogPosts');

Meteor.methods({
  insertBlogPost: function (postAttributes) {
    if (Meteor.userId() === "PetzzszGt2QW4FiAz") {
      var blogPostId = BlogPosts.insert(postAttributes);
      return {
        _id: blogPostId
      };
    }
  },

  updateBlogPost: function (currentPostId, postAttributes) {
    if (Meteor.userId() === "PetzzszGt2QW4FiAz") {
      var blogPostId = BlogPosts.update(currentPostId, {$set: postAttributes}, function(error) {
        if (error) {
          alert(error.reason);
        }
    });
    }
  },

  deleteBlogPost: function (currentPostId) {
    if (Meteor.userId() === "PetzzszGt2QW4FiAz") {
      BlogPosts.remove(currentPostId);
    } else {
      alert("Acess denied");
    }
  }
});