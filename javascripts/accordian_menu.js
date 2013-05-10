$(document).ready(function(e){
  $('.has_sub').click(function(){
    $(this).find('ul').removeClass('dropped');
    $(this).find('ul').parent().parent().find('.dropped').hide();
    $(this).find('ul').parent().parent().find('.dropped').removeClass('dropped');
    $(this).find('ul').slideToggle();
    $(this).find('ul').addClass('dropped');

    $(this).parent().find('ul:hidden').parent().find('.arrow_trigger').addClass('down_arrow');
    $(this).find('.arrow_trigger').toggleClass('down_arrow');
  });

  $('.has_sub a').click(function(e){
    e.stopPropagation();
  });
});