Template.newblogpost.events({
  'submit form': function (e) {
    e.preventDefault();

    // Make sure I remember to type something...
    if ($(e.target).find('[name=title]').val() === "" || $(e.target).find('[name=content]').val() === "") {
      // TO DO: implement much better error handling
      return alert("Please enter a title and some post content");
    }  

    var date = new Date();
    var dateAppendage = "th"; // default date appendage

    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();

    // switch 0 to January, 1 to February, etc...
    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
    }

    // append the correct ordinal indicator to the day of the month
    switch (day) {
      case 1:
        dateAppendage = "st";
        break;
      case 2:
        dateAppendage = "nd";
        break;
      case 3:
        dateAppendage = "rd";
        break;
      case 21:
        dateAppendage = "st";
        break;
      case 22:
        dateAppendage = "nd";
        break;
      case 23:
        dateAppendage = "rd";
        break;
      case 31:
        dateAppendage = "st";
        break;
    }

    date = month + " " + day + dateAppendage + ", " + year;

    var blogPost = {
      title: $(e.target).find('[name=title]').val(),
      content: $(e.target).find('[name=content]').val(),
      author: Meteor.userId(),
      created: new Date(),
      prettyDate: date
    };

    Meteor.call('insertBlogPost', blogPost, function (error, result) {
      if (error) {
        // TO DO: implement much better error handling
        alert("ERROR");
      }
    });

    Router.go('bloglist');
  }
});

Template.newblogpost.helpers({
  isAdmin: function () {
    return Meteor.userId() === "PetzzszGt2QW4FiAz";
  }
});