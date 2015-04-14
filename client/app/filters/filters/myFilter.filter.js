'use strict';

angular.module('blogpostApp')
  .filter('dateFilter', function () {
    return function (input) {
      var date = new Date(input);
      var days = ['sunday' , 'monday' , 'Tuesday', 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
      var months = ['January' , 'February' , 'March', 'April' , 'May' , 'June' , 'July', 'August', 'September' , 'October' , 'November ' , 'December'];
      return days[date.getDay()] + "/" + months[(date.getMonth())] + "/" + date.getFullYear();
    };
  });
