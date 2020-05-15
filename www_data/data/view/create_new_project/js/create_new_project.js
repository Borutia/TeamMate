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
    let add_new_resource_time= $('#resource_time').val();
    $('.add_resource_time').append($('<div>',{
      id: count_click_add_resource_time,
      text: add_new_resource_time
    }));
    count_click_add_resource_time++;
  }
}

var count_click_add_resources_mobility= 0;
function click_add_resources_mobility(){
  if($('#resources_mobility') !== ''){
    let add_new_resources_mobility = $('#resources_mobility').val();
    $('.add_resources_mobility').append($('<div>',{
      id: count_click_add_resources_mobility,
      text: add_new_resources_mobility
    }));
    count_click_add_resources_mobility++;
  }
}

var count_click_add_resources_material = 0;
function click_add_resources_material()
{
  if($('#resources_material') !== ''){
    let add_new_resources_material = $('#resources_material').val();
    $('.add_resources_material').append($('<div>',{
      id: count_click_add_resources_material,
      text: add_new_resources_material
    }));
    count_click_add_resources_material++;
  }
}

var count_click_add_resources_cash = 0;
function click_add_resources_cash(){
  if($('#resources_cash') !== ''){
    let add_new_resources_cash = $('#resources_cash').val();
    $('.add_resources_cash').append($('<div>',{
      id: count_click_add_resources_cash,
      text: add_new_resources_cash
    }));
    count_click_add_resources_cash++;
  }
}

var count_click_add_professional_skills = 0;
function click_add_professional_skills()
{
  if($('#professional_skills') !== ''){
    let add_new_professional_skills = $('#professional_skills').val();
    $('.add_professional_skills').append($('<div>',{
      id: count_click_add_professional_skills,
      text: add_new_professional_skills
    }));
    count_click_add_professional_skills++;
  }
}

var count_click_add_personal_qualities = 0;
function click_add_personal_qualities(){
  if($('#personal_qualities') !== ''){
    let add_new_personal_qualities = $('#personal_qualities').val();
    $('.add_personal_qualities').append($('<div>',{
      id: count_click_add_personal_qualities,
      text: add_new_personal_qualities
    }));
    count_click_add_personal_qualities++;
  }
}

var data_project = {};
var user_id;
function click_button_save()
{
  get_about_project();
  get_requirements_for_candidates();
  get_required_resources();
  user_id = $.cookie('id');
  var get_url = 'https://teammateru.herokuapp.com/project/add/';
  var get_timeout = 10000;
  var get_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
  var get_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';
  
  $.ajax({
    type: 'POST',
    url: get_url,
    dataType: 'JSON',
    timeout: get_timeout,
    data: data_project,
    success: function(data){
        location.href = '../data/view/my_projects/';
    },
    error: function(request, error){
      if (error == "timeout") {
          alert(get_error_timeout);
      }
      else {
          alert(get_error_default);
      }
    }
  });
}

function get_about_project()
{
  data_project['project_name'] = $('#name_of_project').val();
  data_project['dsc'] = $('#information_of_project').val();
  data_project['town'] = $('#city').val();
  data_project['organization'] = $('#company').val();
  data_project['deadline'] = $('#data_success').val();
}

function get_requirements_for_candidates()
{
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
  data_project['project_quality'] = project_quality;

  let project_skill = [];
  for(let j=0;j<count_click_add_professional_skills;j++)
  {
    let str = '.add_professional_skills #' + j;
    let info1 = $(str).text();
    let temp1 = {
      'skill': info1
    };
    project_skill.push(temp1);
  }
  data_project['project_skill'] = project_skill;
 
  data_project['max_members'] = $('#team_size').val();
  data_project['now_members'] = 1;
}

function get_required_resources()
{
  //время
  let project_resources = [];
  let i ;
  for(i=0;i<count_click_add_resource_time;i++)
  {
    let str = '.add_resource_time #' + i;
    let info = $(str).text();
    let temp2 = {
      'type': 'Время',
      'dsc': info
    };
    project_resources.push(temp2);
  }
  
  //Мобильность
  for(i=0;i<count_click_add_resources_mobility;i++)
  {
    let str = '.add_resources_mobility #' + i;
    let info = $(str).text();
    let temp3 = {
      'type': 'Мобильность',
      'dsc': info
    };
    project_resources.push(temp3);
  }

  //Материальные
  for(i=0;i<count_click_add_resources_material;i++)
  {
    let str = '.add_resources_material #' + i;
    let info = $(str).text();
    let temp4 = {
      'type': 'Материальные',
      'dsc': info
    };
    project_resources.push(temp4);
  }

  //Денежные
  for(i=0;i<count_click_add_resources_cash;i++)
  {
    let str = '.add_resources_cash #' + i;
    let info = $(str).text();
    let temp5 = {
      'type': 'Денежные',
      'dsc': info
    };
    project_resources.push(temp5);
  }
  data_project['project_resource'] = project_resources;
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

