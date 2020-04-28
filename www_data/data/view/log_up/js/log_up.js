$(function (){
  get_gender();
  get_red_stars();
  get_required();
  
  /*
  $('#button_add_education').click(function(){
    get_new_educatin();
  });
  */
 
  $('#button_log_up').click(function(){
    click_log_up();
  });
});

var data_log_up = {};
function click_log_up()
{
  //get_personal_data();
  //get_education();
  //get_about_me();
  get_personal_area();

  var log_up_url = 'http://127.0.0.1:8000/auth/login/register/';
  var log_in_timeout = 10000;
  var log_in_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
  var log_in_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';

  $.ajax({
    type: 'POST',
    url: log_up_url,
    dataType: 'text',
    timeout: log_in_timeout,
    data: JSON.stringify(data_log_up),
    success: function(data){
      //var jsonData = JSON.stringify(data);
      //var jsonData = $.parseJSON(jsonData);
      if (data == 'Registraion faild') { 
        alert('Ошибка регистрации');
      } 
      else { 
        location.href = '../data/';
      }
    },
    error: function(request, error){
        if (error == "timeout") {
            alert(log_in_error_timeout);
        }
        else {
            alert(log_in_error_default);
        }
    }
  });

  alert(JSON.stringify(data_log_up));
  //alert(data_log_up);
}

function get_personal_data()
{
  data_log_up['sername'] = $('#sername').val();
  data_log_up['name'] = $('#name').val();
  data_log_up['patronymic'] = $('#patronymic').val();
  data_log_up['birthday'] = $('#birthday').val();
  data_log_up['gender'] = $('#gender').val();
  data_log_up['current_city'] = $('#current_city').val();
}

function get_education()
{
  data_log_up['country'] = $('#country').val();
  data_log_up['city'] = $('#city').val();
  data_log_up['university'] = $('#university').val();
  data_log_up['specialty'] = $('#specialty').val();
  data_log_up['learning_peroid_from'] = $('#learning_peroid_from').val();
  data_log_up['learning_peroid_to'] = $('#learning_peroid_to').val();
}

function get_about_me()
{
  data_log_up['about_me_input'] = $('#about_me_input').val();
  data_log_up['personal_qualities'] = $('#personal_qualities').val();
  data_log_up['professional_skills'] = $('#professional_skills').val();
}

function get_personal_area()
{
  data_log_up['username'] = $('#login').val();
  data_log_up['email'] = $('#e_mail').val();
  //data_log_up['phone'] = $('#phone').val();
  data_log_up['password'] = $('#password').val();
 
  //var file_data = $('#button_add_photo').prop('files')[0];
  //data_log_up['files'] = file_data;
  //alert(file_data);
}

function get_gender()
{
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
