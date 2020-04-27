$(function (){
  get_red_stars();
  get_required();
 
  $('#button_log_up').click(function(){
    click_log_up();
  });
});

var data_log_up = {};
function click_log_up()
{
  get_personal_data();
  get_education();
  get_about_me();
  get_personal_area();

  var log_in_url = '../../engine/123.php';
  var log_in_timeout = 10000;
  var log_in_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
  var log_in_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';

  $.ajax({
    type: 'POST',
    url: log_in_url,
    dataType: 'json',
    timeout: log_in_timeout,
    data: JSON.stringify(data_log_up),
    error: function(request, error){
        if (error == "timeout") {
            alert(log_in_error_timeout);
        }
        else {
            alert(log_in_error_default);
        }
    },
    success: function(data){
        var jsonData = JSON.stringify(data);
        var jsonData = $.parseJSON(jsonData);
        if (jsonData.success == "1")
        {
          alert('Регистрация прошла успешно!');
          location.href = '../data/';
        }
        else
        {
          alert('Такие данные уже есть!' + "\n"
                + 'Повторите попытку.');
        }
    }
  });

  //alert(JSON.stringify(data_log_up));
 // alert(data_log_up.files);
}

function get_red_stars(){
  $('span:contains("*")').css('color', 'red');
}

function get_required()
{
  $( "#sername" ).prop( "required", true);
  $( "#name" ).prop( "required", true);
  $( "#birthday" ).prop( "required", true);
  $( "#submenu" ).prop( "required", true);
  $( "#current_city" ).prop( "required", true);
  $( "#login" ).prop( "required", true);
  $( "#e_mail" ).prop( "required", true);
  $( "#password" ).prop( "required", true);
}

function get_new_educatin()
{
  /*
  'use strict'; // Обязательно в начале документа
  var k = `
    <div class="education">
      <span>Образование</span>
      <div class="country">
          <span>Страна</span>
          <input id="country" type="text">
      </div>
      <div class="city">
          <span>Город</span>
          <input id="city" type="text">
      </div>
      <div class="university">
          <span>Вуз</span>
          <input id="university" type="text">
      </div>
      <div class="specialty">
          <span>Специальность</span>
          <input id="specialty" type="text">
      </div>
      <div class="learning_peroid">
          <span>Срок обучаемости</span>
          <input id="learning_peroid_from" type="text">
          <span class="dash">-</span>
          <input id="learning_peroid_to" type="text">
          <button id="button_add_education">Добавить Образование</button>
      </div>
    </div>`;
  $('.about_me').before(k);
  */
  var new_education = $('#specialty').val(); 
  //$('.learning_peroid').after(new_education);
  $('.all_educations')
  .append($('<span>',{
    text: new_education
  }));
  $('#specialty').val('');
}
