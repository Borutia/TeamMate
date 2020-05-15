$(function(){  
    $('#button_log_in').click(function(){
        click_log_in();
    });
    window_reset_password();
    $('#button_reset_password').click(function(){
        reset_password();
    });
      //  test();
    /*
    //обработка нажатия Enter в полях ввода логина и пароля
    $("#login, #password").keydown(function (e) {
        if (e.which == 13) { //код клавиши "Enter"
            $("#button_log_in").click();
        }
    });
    */
});

function reset_password(){
    var log_in_url = 'https://teammateru.herokuapp.com/auth/login/sendnewpassword/';
    var username = $('#input_reset_password').val();
    var log_in_timeout = 10000;
    var log_in_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
    var log_in_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';
    
    if(login != '' && password != '')
    {
        $.ajax({
            type: 'POST',
            url: log_in_url,
            dataType: 'JSON',
            timeout: log_in_timeout,
            data: { 
                'username': username, 
            },
            success: function(data){
                $('#myModal').animate({opacity: 0}, 198,
                    function(){
                      $(this).css('display', 'none');
                      $('#myOverlay').fadeOut(297);
                      });
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
}

function window_reset_password()
{
        $('a.myLinkModal').click( function(event){
            event.preventDefault();
            $('#myOverlay').fadeIn(297,	function(){
          $('#myModal') 
          .css('display', 'block')
          .animate({opacity: 1}, 198);
            });
        });
    
        $('#myModal__close, #myOverlay').click( function(){
            $('#myModal').animate({opacity: 0}, 198,
          function(){
            $(this).css('display', 'none');
            $('#myOverlay').fadeOut(297);
            });
        });

}

function test(){
    $('#button_log_in').click(function(){
    var login = $('#login').val();
    var password = $('#password').val();
    if(login === "admin" && password === "admin")
    {
        location.href = './www_data/data/view/personal_area/';
    }
    else{
        alert('error!');
    }
});
}

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
    var log_in_url = 'https://teammateru.herokuapp.com/auth/login/login/';
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
            dataType: 'JSON',
            timeout: log_in_timeout,
            data: { 
                'username': login, 
                'password': password
            },
            success: function(data){

                $.cookie('id', data.user_id);
                $.cookie('TeamAuth', data.token);
                
                /*
                $.cookie("cookie_name", "cookie_value", { 
                    expires: 3, 
                    path: "/", 
                    domain: "your_site.ru", 
                    secure: true 
                });
                */
            
                location.href = './www_data/data/view/personal_area/';
                /*
                //var jsonData = JSON.stringify(data);
               // var jsonData = $.parseJSON(data);
                if (data == 'Получены куки для аутентификации') { 
                    $.cookie('id', data.id);
                    location.href = './www_data/data/view/personal_area/';
                } 
                else { 
                    alert('Неправильный логин или пароль');
                }
                */
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
}
