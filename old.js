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
