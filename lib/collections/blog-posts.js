BlogPosts = new Mongo.Collection('blogPosts');

Meteor.methods({
  insertBlogPost: function (postAttributes) {

    var blogPostId = BlogPosts.insert(postAttributes);

    return {
      _id: blogPostId
    };
  }
});