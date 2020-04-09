$(function (){
  $('.submenu')
  .append($('<option>',{
    value:'1',
    text: 'Мужской'
  }));
  $('.submenu')
  .append($('<option>',{
    value:'2',
    text: 'Женский'
  }));
});

/*
$(function (){
  $('#button_add_professional_skills').click(function(){
    add_professional_skills();
  });
});

function add_professional_skills(){
  $('#button_add_professional_skills')
    .append($('<span>',{
      text = '123'
    }));
}

*/