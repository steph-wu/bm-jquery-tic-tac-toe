$(document).ready(function() {

  var count = 0;

  function isEven(n) {
    return n % 2 == 0;
  }

  function checkWin() {

    if (
      ( $('.1').hasClass('has-x') && $('.2').hasClass('has-x') && $('.3').hasClass('has-x') ) ||
      ( $('.4').hasClass('has-x') && $('.5').hasClass('has-x') && $('.6').hasClass('has-x') ) ||
      ( $('.7').hasClass('has-x') && $('.8').hasClass('has-x') && $('.9').hasClass('has-x') ) ||
      ( $('.1').hasClass('has-x') && $('.4').hasClass('has-x') && $('.7').hasClass('has-x') ) ||
      ( $('.2').hasClass('has-x') && $('.5').hasClass('has-x') && $('.8').hasClass('has-x') ) ||
      ( $('.3').hasClass('has-x') && $('.6').hasClass('has-x') && $('.9').hasClass('has-x') ) ||
      ( $('.1').hasClass('has-x') && $('.5').hasClass('has-x') && $('.9').hasClass('has-x') ) ||
      ( $('.3').hasClass('has-x') && $('.5').hasClass('has-x') && $('.7').hasClass('has-x') )
    ) {
      alert("X wins!")
    };

    if (
      ( $('.1').hasClass('has-o') && $('.2').hasClass('has-o') && $('.3').hasClass('has-o') ) ||
      ( $('.4').hasClass('has-o') && $('.5').hasClass('has-o') && $('.6').hasClass('has-o') ) ||
      ( $('.7').hasClass('has-o') && $('.8').hasClass('has-o') && $('.9').hasClass('has-o') ) ||
      ( $('.1').hasClass('has-o') && $('.4').hasClass('has-o') && $('.7').hasClass('has-o') ) ||
      ( $('.2').hasClass('has-o') && $('.5').hasClass('has-o') && $('.8').hasClass('has-o') ) ||
      ( $('.3').hasClass('has-o') && $('.6').hasClass('has-o') && $('.9').hasClass('has-o') ) ||
      ( $('.1').hasClass('has-o') && $('.5').hasClass('has-o') && $('.9').hasClass('has-o') ) ||
      ( $('.3').hasClass('has-o') && $('.5').hasClass('has-o') && $('.7').hasClass('has-o') )
    ) {
      alert("O wins!")
    };
    
    console.log("checkWin function called");
  }

  // 123, 456, 789, 147, 258, 369, 159, 357 (combinations)

  $('td').on('click', function() {

    if ($(this).hasClass('marked')) {
      alert("This box has already been marked!");
    } else {
      $(this).addClass('marked')
      count++;
      if (isEven(count)) {
        console.log("This is an O.");
        $(this).addClass('has-o');
        $(this).append("<div class=marker>o</div>");
        checkWin();
      } else {
        console.log("This is an X.");
        $(this).addClass('has-x');
        $(this).append("<div class=marker>x</div>");
        checkWin();
      };
    };
  });

});
