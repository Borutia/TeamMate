$(function (){
    create_new_project();
    get_projects();
});

function get_projects()
{
    var get_url = 'https://teammateru.herokuapp.com/project/my/'
    var get_timeout = 10000;
    var get_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
    var get_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';  
    
    $.ajax({
        type: 'GET',
        url: get_url,
        dataType: 'JSON',
        timeout: get_timeout,
        success: function(data){
            set_projects(data);
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

function set_projects(data){
    for(let i=0;i<data.count;i++)
    {
        get_one_project(data.result[i]);
    }
}


function get_one_project(data)
{
    'use strict'; 
    var temp = '<div class="my_projects id='+ data.id +'">'+
        '<div class="left_block_my_project">'+
            '<div class="name_my_projects">'+ data.project_name +'</div>'+
        '</div>'+
        '<div class="right_block_my_project">'+
            '<div class="deadline_my_projects">Срок сдачи: '+ data.deadline +'</div>'+
            '<div class="strength_my_projects">Численность команды: '+ data.now_members +'/'+data.max_members +'</div>'+
        '</div>'+
    '</div>'+
    '<div class="line_my_projects ">'+ data.status +'</div>';
    $('.view_projects').append(temp);
}


function create_new_project(){
    $('#button_new_project').click(function() {
       location.href = '../create_new_project/';
    });
}