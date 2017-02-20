$(document).ready(function() {

  var count = 0;
  var marker = document.createElement('div');

  function isEven(n) {
    return n % 2 == 0;
  }

  $('td').on('click', function() {
    count++;
    if (isEven(count)) {
      console.log("This is an O.");
      $(this).append("<div class=marker>o</div>");
    } else {
      console.log("This is an X.");
      $(this).append("<div class=marker>x</div>");
    };
  });

});
