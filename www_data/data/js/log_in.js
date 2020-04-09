$(function(){
    $('#button_log_in').click(function(){
        click_log_in();
    });

    /*
    if(token == 'succes')
    {
        location.href = '../data/view/personal_area.html';
    }
    */
    
});

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
                    location.href = '../data/view/personal_area.html';
                }
                else
                {
                    alert('Введен некорректный логин или пароль!' + "\n"
                          + 'Повторите попытку входа.');
                }
            }
        });
    }
}
