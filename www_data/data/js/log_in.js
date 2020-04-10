$(function(){  
    
    $('#button_log_in').click(function(){
        click_log_in();
    });
        //обработка нажатия Enter в полях ввода логина и пароля
    $("#login, #password").keydown(function (e) {
        if (e.which == 13) { //код клавиши "Enter"
            $("#button_log_in").click();
        }
    });
});

function get_url()
{
   // location.href += "?";
    /*
    var url = '/static_pages/private/crm_b2b_report/index.html';
    url += '?client$c=' + user;
    url += '&session_id=' + data.session_id;
    if (report_mode !== undefined)
        url += '&report_mode=' + report_mode;
    url += '&tmp=';
    document.location.href = url;
    */
}

function click_log_in()
{
    var log_in_url = '../../engine/123.php';
    var login = $('#login').val();
    var password = $('#password').val();
    var log_in_timeout = 10000;
    var log_in_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
    var log_in_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';
    
    if(login != '' && password != '')
    {
        $.ajax({
            type: 'POST',
            url: log_in_url,
            dataType: 'json',
            timeout: log_in_timeout,
            data: { 
                'login': login, 
                'password': password
            },
            error: function(request, error){
                if (error == "timeout") {
                    alert(log_in_error_timeout);
                  //  location.reload();
                }
                else {
                    alert(log_in_error_default);
                   // location.reload();
                }
            },
            success: function(data){
                var jsonData = JSON.stringify(data);
                var jsonData = $.parseJSON(jsonData);
                if (jsonData.success == "1")
                {
                    location.href = '../data/view/personal_area/';
                }
                else
                {
                    alert('Введен некорректный логин или пароль!' + "\n"
                          + 'Повторите попытку входа.');
                   // location.reload();
                }
            }
        });
    }
}
