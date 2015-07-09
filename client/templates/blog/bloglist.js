Template.bloglist.helpers({
  getBlogPosts: function () {
    return BlogPosts.find({}, {sort: {created: -1}});
  }
});