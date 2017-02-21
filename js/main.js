$(document).ready(function() {

  var count = 0;

  function isEven(n) {
    return n % 2 == 0;
  };

  function checkWin() {

    var winStates = [
      $('.1, .2, .3'),
      $('.4, .5, .6'),
      $('.7, .8, .9'),
      $('.1, .4, .7'),
      $('.2, .5, .8'),
      $('.3, .6, .9'),
      $('.1, .5, .9'),
      $('.3, .5, .7')
    ];

    winStates.forEach(function(winState) {
      var counter = 0;
      if ($(winState[0]).hasClass('has-x') && $(winState[1]).hasClass('has-x') && $(winState[2]).hasClass('has-x')) {
        alert("X wins!");
      };
      if ($(winState[0]).hasClass('has-o') && $(winState[1]).hasClass('has-o') && $(winState[2]).hasClass('has-o')) {
        alert("O wins!");
      };
    });
  };

  $('td').on('click', function() {
    if ($(this).hasClass('marked')) {
      alert("This box has already been marked!");
    } else {
      $(this).addClass('marked')
      count++;
      if (isEven(count)) {
        $(this).addClass('has-o');
        $(this).append("<div class=marker>o</div>");
        checkWin();
      } else {
        $(this).addClass('has-x');
        $(this).append("<div class=marker>x</div>");
        checkWin();
      };
    };
  });
});
