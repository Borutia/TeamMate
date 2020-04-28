$(function (){
  get_red_stars();
  set_scroll_height('.background_crystal');
  $('#button_save').click(function(){
    click_button_save();
  });
});

var data_log_up = {};
function click_button_save()
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
  var new_education = $('#specialty').val(); 
  $('.all_educations')
  .append($('<span>',{
    text: new_education
  }));
  $('#specialty').val('');
}
