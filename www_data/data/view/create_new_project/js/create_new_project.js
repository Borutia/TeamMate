$(function (){
  get_red_stars();
  set_scroll_height('.background_crystal');
  $('#button_save').click(function(){
    click_button_save();
  });

  $('#button_add_professional_skills').click(function(){
    click_add_professional_skills();
  });

  $('#button_add_personal_qualities').click(function(){
    click_add_personal_qualities();
  });

  $('#button_add_resource_time').click(function(){
    click_add_resource_time();
  });

  $('#button_add_resources_mobility').click(function(){
    click_add_resources_mobility();
  });

  $('#button_add_resources_material').click(function(){
    click_add_resources_material();
  });

  $('#button_add_resources_cash').click(function(){
    click_add_resources_cash();
  });

});

var count_click_add_resource_time = 0;
function click_add_resource_time()
{
  if($('#resource_time') !== ''){
    var temp = $('#resource_time').val();
    $('.add_resource_time').append($('<div>',{
      id: count_click_add_resource_time,
      text: temp
    }));
    count_click_add_resource_time++;
  }
}

var count_click_add_resources_mobility= 0;
function click_add_resources_mobility(){
  if($('#resources_mobility') !== ''){
    var temp = $('#resources_mobility').val();
    $('.add_resources_mobility').append($('<div>',{
      id: count_click_add_resources_mobility,
      text: temp
    }));
    count_click_add_resources_mobility++;
  }
}

var count_click_add_resources_material = 0;
function click_add_resources_material()
{
  if($('#resources_material') !== ''){
    var temp = $('#resources_material').val();
    $('.add_resources_material').append($('<div>',{
      id: count_click_add_resources_material,
      text: temp
    }));
    count_click_add_resources_material++;
  }
}

var count_click_add_resources_cash = 0;
function click_add_resources_cash(){
  if($('#resources_cash') !== ''){
    var temp = $('#resources_cash').val();
    $('.add_resources_cash').append($('<div>',{
      id: count_click_add_resources_cash,
      text: temp
    }));
    count_click_add_resources_cash++;
  }
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

var data_project = {};
function click_button_save()
{
  get_about_project();
  get_requirements_for_candidates();
  get_required_resources();
  var get_url = 'http://127.0.0.1:8000/project/';
  var get_timeout = 10000;
  var get_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
  var get_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';
  
  $.ajax({
    type: 'POST',
    url: get_url,
    dataType: json,
    timeout: get_timeout,
    data: JSON.stringify(data_project),
    error: function(request, error){
        if (error == "timeout") {
            alert(get_error_timeout);
        }
        else {
            alert(get_error_default);
        }
    },
    success: function(data){
        //var jsonData = JSON.stringify(data);
        //var jsonData = $.parseJSON(jsonData);
        if (jsonData.success == "project save")
        {
          alert('good');
          location.href = '../data/view/personal_area/';
        }
        else
        {
          alert('Такие данные уже есть!' + "\n"
                + 'Повторите попытку.');
        }
    }
  });
}

function get_about_project()
{
  data_project['name_of_project'] = $('#name_of_project').val();
  data_project['information_of_project'] = $('#information_of_project').val();
  data_project['city'] = $('#city').val();
  data_project['company'] = $('#company').val();
  data_project['data_success'] = $('#data_success').val();
}

function get_requirements_for_candidates()
{
  data_project['personal_qualities'] = $('#personal_qualities').val();
  data_project['professional_skills'] = $('#professional_skills').val();
  data_project['team_size'] = $('#team_size').val();
}

function get_required_resources()
{
  data_project['resource_time'] = $('#resource_time').val();
  data_project['resources_mobility'] = $('#resources_mobility').val();
  data_project['resources_material'] = $('#resources_material').val();
  data_project['resources_cash'] = $('#resources_cash').val();
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
  $( "#name_of_project" ).prop( "required", true);
  $( "#information_of_project" ).prop( "required", true);
  $( "#city" ).prop( "required", true);
}

