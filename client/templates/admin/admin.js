Template.admin.helpers({
  isAdmin: function () {
    return Meteor.userId() === "PetzzszGt2QW4FiAz";
  }
});

Template.admin.events({
  'click #blog': function () {
    BlogPosts.insert({
      author: Meteor.userId(),
      created: new Date(),
      title: "Test Title",
      content: "Lorem ipsum dolor sit amet"
    });
  }
});