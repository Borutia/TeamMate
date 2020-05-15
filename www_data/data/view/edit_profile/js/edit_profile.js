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
  var log_up_url = 'https://teammateru.herokuapp.com/profile/' + user_id + '/user/';
  var log_in_timeout = 10000;
  var log_in_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
  var log_in_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';
  
  $.ajax({
    type: 'GET',
    url: log_up_url,
    dataType: 'JSON',
    timeout: log_in_timeout,
    success: function(data){
      output_information(data);
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
  $('#sername').val(data.family);
  $('#name').val(data.name);
  $('#patronymic').val(data.middle_name);
  $('#birthday').val(data.birthday);
  $('#gender').val(data.sex);
  $('#current_city').val(data.town);
  
  $('#education_country').val(data.ed_country);
  $('#education_city').val(data.ed_town);
  $('#university').val(data.vuz);
  $('#specialty').val(data.specialty);
  $('#learning_peroid_from').val(data.ed_start);
  $('#learning_peroid_to').val(data.ed_end);

  $('#work_place_country').val(data.country);
  $('#work_place_city').val(data.town);
  $('#organization').val(data.organization);
  $('#position').val(data.position);
  $('#working_peroid_from').val(data.work_start);
  $('#working_peroid_to').val(data.work_end);
  
  $('#about_me_input').val(data.o_sebe);
  
  //data['personal_qualities'] = $('#personal_qualities').val();
  //data['professional_skills'] = $('#professional_skills').val();

  //$('#login').text(data.user);
  //$('#e_mail').text(data.email);
  $('#phone').val(data.phone_number);
  //$('#password').text(data.password);
}

var data_log_up = {};
function click_button_save()
{
  var user_id = $.cookie('id');
  get_personal_data();
  get_education(user_id);
  get_about_me();
  get_work_place();
  get_personal_area();
  var log_up_url = 'https://teammateru.herokuapp.com/profile/' + user_id + '/';
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
      location.href = '../../';
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

function get_personal_data()
{
  data_log_up['family'] = $('#sername').val();
  data_log_up['name'] = $('#name').val();
  data_log_up['middle_name'] = $('#patronymic').val();
  data_log_up['birthday'] = $('#birthday').val();
  data_log_up['sex'] = $('#gender').val();
  data_log_up['town'] = $('#current_city').val();
}

function get_education(user_id)
{
  let education = { };

  education['ed_country'] = $('#education_country').val();
  education['ed_town'] = $('#education_city').val();
  education['vuz'] = $('#university').val();
  education['specialty'] = $('#specialty').val();
  education['ed_start'] = $('#learning_peroid_from').val();
  education['ed_end'] = $('#learning_peroid_to').val();
  education['user'] = user_id;
  data_log_up['education'] = education;

}

function get_work_place()
{
  let work_place = { };
  work_place['country'] = $('#work_place_country').val();
  work_place['town'] = $('#work_place_city').val();
  work_place['organization'] = $('#organization').val();
  work_place['position'] = $('#position').val();
  work_place['work_start'] = $('#working_peroid_from').val();
  work_place['work_end'] = $('#working_peroid_to').val();
  data_log_up['work_place'] = work_place;
}

function get_about_me()
{
  data_log_up['o_sebe'] = $('#about_me_input').val();

  let project_quality = [];
  for(let i=0;i<count_click_add_personal_qualities;i++)
  {
    let str = '.add_personal_qualities #' + i;
    let info = $(str).text();
    let temp = {
      'quality': info
    };
    project_quality.push(temp);
  }
  data_log_up['personal_quality'] = project_quality;

  let project_skill = [];
  for(let i=0;i<count_click_add_professional_skills;i++)
  {
    let str = '.professional_skills #' + i;
    let info = $(str).text();
    let temp = {
      'skill': info
    };
    project_quality.push(temp);
  }
  data_log_up['skill'] = project_skill;
}

function get_personal_area(data)
{
 // data_log_up['user'] = data.user_id;
  //data_log_up['email'] = $('#e_mail').val();
  data_log_up['phone_number'] = $('#phone').val();
  //data_log_up['password'] = $('#password').val();
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
    count_click_add_professional_skills++;
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
    count_click_add_personal_qualities++;
  }
}


//установить высоту блока для скролла
function set_scroll_height(block) {
  //получаем высоту страницы
  var h_all = $(document).outerHeight(true);
  //устанавливаем высоту блока для прокрутки
  $(block).css('height', h_all);
}
