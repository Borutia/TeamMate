$(function (){
  get_gender();
  set_scroll_height('.background_crystal');

  get_information();
  
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

  /*
  let student = {
      name: 'John',
      age: 30,
      isAdmin: false,
      courses: ['html', 'css', 'js'],
      wife: null
    };
  let my_data = {};
  my_data['education'] = student;
  alert(JSON.stringify(my_data));
  
  var testt = JSON.stringify(student);
  for(let i=0;i<student.courses.length;i++)
  {
      alert(student.courses[i] + student.courses[i+1]);
  }
  */

  $('#button_add_personal_qualities').click(function(){
    click_add_personal_qualities();
  });

  $('#button_save').click(function(){
    click_button_save();
  });
});

function get_information()
{
  var user_id = $.cookie('id');
  var log_up_url = 'http://127.0.0.1:8000/profile/' + user_id + '/';
  var log_in_timeout = 10000;
  var log_in_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
  var log_in_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';
  
  $.ajax({
    type: 'GET',
    url: log_up_url,
    dataType: 'JSON',
    timeout: log_in_timeout,
    success: function(data){
      //var jsonData = JSON.stringify(data);
      //var jsonData = $.parseJSON(jsonData);
      if (data == 'faild') { 
        alert('Ошибка загрузки');
      } 
      else { 
        output_information(data);
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
}

function output_information(data){
  $('#sername').text(data.family);
  $('#name').text(data.name);
  /*
  data['middle_name'] = $('#patronymic').val();
  data['birthday'] = $('#birthday').val();
  data['sex'] = $('#gender').val();
  data['town'] = $('#current_city').val();

  data['ed_country'] = $('#education_country').val();
  data['ed_town'] = $('#education_city').val();
  data['vuz'] = $('#university').val();
  data['specialty'] = $('#specialty').val();
  data['ed_start'] = $('#learning_peroid_from').val();
  data['ed_end'] = $('#learning_peroid_to').val();

  data['work_place_country'] = $('#work_place_country').val();
  data['work_place_city'] = $('#work_place_city').val();
  data['organization'] = $('#organization').val();
  data['position'] = $('#position').val();
  data['working_peroid_from'] = $('#working_peroid_from').val();
  data['working_peroid_to'] = $('#working_peroid_to').val();
  
  data['o_sebe'] = $('#about_me_input').val();
  data['personal_qualities'] = $('#personal_qualities').val();
  data['professional_skills'] = $('#professional_skills').val();

  data['username'] = $('#login').val();
  data['email'] = $('#e_mail').val();
  data['phone_number'] = $('#phone').val();
  data['password'] = $('#password').val();
  */
}

var data_log_up = {};
function click_button_save()
{
  get_personal_data();
  get_education();
  get_about_me();
  //get_work_place();
  get_personal_area();
  var user_id = $.cookie('id');
  var log_up_url = 'http://127.0.0.1:8000/profile/' + user_id + '/';
  var log_in_timeout = 10000;
  var log_in_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
  var log_in_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';
  
  $.ajax({
    type: 'PUT',
    url: log_up_url,
    dataType: 'JSON',
    timeout: log_in_timeout,
    data: data_log_up,
    success: function(data){
      //var jsonData = JSON.stringify(data);
      //var jsonData = $.parseJSON(jsonData);
      if (data == 'faild') { 
        alert('Ошибка записи');
      } 
      else { 
        location.href = '../../';
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
  data_log_up['family'] = $('#sername').val();
  data_log_up['name'] = $('#name').val();
  data_log_up['middle_name'] = $('#patronymic').val();
  data_log_up['birthday'] = $('#birthday').val();
  data_log_up['sex'] = $('#gender').val();
  data_log_up['town'] = $('#current_city').val();
}

function get_education()
{
  let education = { };
  education['ed_country'] = $('#education_country').val();
  education['ed_town'] = $('#education_city').val();
  education['vuz'] = $('#university').val();
  education['specialty'] = $('#specialty').val();
  education['ed_start'] = $('#learning_peroid_from').val();
  education['ed_end'] = $('#learning_peroid_to').val();
  data_log_up['education'] = education;

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
  data_log_up['o_sebe'] = $('#about_me_input').val();
  data_log_up['personal_qualities'] = $('#personal_qualities').val();
  data_log_up['professional_skills'] = $('#professional_skills').val();
}

function get_personal_area()
{
  data_log_up['username'] = $('#login').val();
  data_log_up['email'] = $('#e_mail').val();
  data_log_up['phone_number'] = $('#phone').val();
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


//установить высоту блока для скролла
function set_scroll_height(block) {
  //получаем высоту страницы
  var h_all = $(document).outerHeight(true);
  //устанавливаем высоту блока для прокрутки
  $(block).css('height', h_all);
}
