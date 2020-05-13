$(function (){
  get_gender();
  get_red_stars();
  get_required();
  set_scroll_height('.background_crystal');

  $('#button_add_professional_skills').click(function(){
    click_add_professional_skills();
  });

  //удаление
  /*
  $('.add_professional_skills').click(function(){
    let temp = $(this).attr('id');
    console.log(temp);
    $('#' + temp).remove();
  });
  */

  $('#button_add_personal_qualities').click(function(){
    click_add_personal_qualities();
  });

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
  //get_work_place();
  get_personal_area();

  var log_up_url = 'https://teammateru.herokuapp.com/auth/login/register/';
  var log_in_timeout = 10000;
  var log_in_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
  var log_in_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';

  $.ajax({
    type: 'POST',
    url: log_up_url,
    dataType: 'JSON',
    timeout: log_in_timeout,
    data: data_log_up,
    success: function(data){
      //var jsonData = JSON.stringify(data);
      //var jsonData = $.parseJSON(jsonData);
      if (data == 'Registraion faild') { 
        alert('Ошибка регистрации');
      } 
      else { 
        location.href = './';
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
  //alert(JSON.stringify(data_log_up));
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
  data_log_up['country'] = $('#education_country').val();
  data_log_up['city'] = $('#education_city').val();
  data_log_up['university'] = $('#university').val();
  data_log_up['specialty'] = $('#specialty').val();
  data_log_up['learning_peroid_from'] = $('#learning_peroid_from').val();
  data_log_up['learning_peroid_to'] = $('#learning_peroid_to').val();
}

function get_work_place()
{
  data_log_up['work_place_country'] = $('#work_place_country').val();
  data_log_up['work_place_city'] = $('#work_place_city').val();
  data_log_up['organization'] = $('#organization').val();
  data_log_up['position'] = $('#position').val();
  data_log_up['working_peroid_from'] = $('#working_peroid_from').val();
  data_log_up['working_peroid_to'] = $('#working_peroid_to').val();
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

var count_click_add_professional_skills = 0;
function click_add_professional_skills()
{
  if($('#professional_skills') !== ''){
    var temp = $('#professional_skills').val();
    $('.add_professional_skills').append($('<div>',{
      id: count_click_add_professional_skills,
      text: temp
    }));
    count++;
  }
}

var count_click_add_personal_qualities = 0;
function click_add_personal_qualities(){
  if($('#personal_qualities') !== ''){
    var temp = $('#personal_qualities').val();
    $('.add_personal_qualities').append($('<div>',{
      id: count_click_add_personal_qualities,
      text: temp
    }));
  }
}

function get_red_stars(){
  $('span:contains("*")').css('color', 'red');
}

//установить высоту блока для скролла
function set_scroll_height(block) {
  //получаем высоту страницы
  var h_all = $(document).outerHeight(true);
  //устанавливаем высоту блока для прокрутки
  $(block).css('height', h_all);
}

function get_required()
{
  $( "#login" ).prop( "required", true);
  $( "#e_mail" ).prop( "required", true);
  $( "#password" ).prop( "required", true);
}
