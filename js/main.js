$(document).ready(function() {
  console.log("Document is ready!")

  $('.switch').on('click', function () {
    console.log("Click registered.");

    if ($('body').hasClass('light')) {
      $('.status').text('Hey, who turned off the lights?');
      $('body.light').toggleClass('dark');
      $('button.on').toggleClass('off');
    } else {
      $('.status').text("It's so bright in here!");
      $('body.dark').toggleClass('light');
      $('button.off').toggleClass('on');
    };

  });

});
