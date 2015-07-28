Meteor.appFunctions = {
  prettifyDate: function (date) {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes().toString();

    var dateAppendage = "th"; // default date appendage
    var dayPeriod = "AM"; // default AM/PM time of day appendage

    if (hour === 0) {
      hour = 12;
      dayPeriod = "AM";
    }

    if (hour === 12) {
      dayPeriod = "PM";
    }

    if (hour > 12) {
      hour -= 12;
      dayPeriod = "PM";
    }

    if (minute.length === 1) {
      // put a zero in front of a single-digit minute so we don't get times like "9:7 PM"
      minute = "0" + minute;
    }

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
    date = month + " " + day + dateAppendage + ", " + year + " at " + hour + ":" + minute + dayPeriod;
    
    return date;
  }
};