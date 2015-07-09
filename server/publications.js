Meteor.publish('blogposts', function () {
  // return BlogPosts.find({}, {sort: {created: -1}});
  return BlogPosts.find({});
});