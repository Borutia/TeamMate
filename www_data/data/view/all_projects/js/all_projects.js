$(function (){
    set_scroll_height('.background_crystal');
    get_projects();
});


function get_projects()
{
    var get_url = '../../engine/123.php';
    var get_timeout = 10000;
    var get_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
    var get_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';
    
    $.ajax({
        type: 'POST',
        url: get_url,
        dataType: json,
        timeout: get_timeout,
        data: JSON.stringify(data_log_up),
        error: function(request, error){
            if (error == "timeout") {
                alert(get_error_timeout);
            }
            else {
                alert(get_error_default);
            }
        },
        success: function(data){
            var jsonData = $.parseJSON(data);
            set_projects(jsonData);
            if (jsonData.success == "projects")
            {
              alert('good');
            }
            else
            {
              alert('Ошибка загрузки!' + "\n"
                    + 'Повторите попытку.');
            }
        }
      });
}


function set_projects(data)
{
    
}