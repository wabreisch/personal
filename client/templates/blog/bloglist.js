Template.bloglist.helpers({
  getBlogPosts: function () {
    return BlogPosts.find({}, {sort: {created: -1}});
  },
  zeroBlogPosts: function () {
    return BlogPosts.find().count() === 0;
  }
});