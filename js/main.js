$(document).ready(function() {

  var count = 0;

  function isEven(n) {
    return n % 2 == 0;
  }

  $('td').on('click', function() {
    count++;
    if (isEven(count)) {
      console.log("This is an O.");
    } else {
      console.log("This is an X.");
    };
  });

});
