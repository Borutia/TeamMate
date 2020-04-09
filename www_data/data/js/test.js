//var test_url = '../123.php';
var test_url = 'http://localhost:8888/TeamMate/engine/123.php';
$.ajax({
    type: 'POST',
    url: test_url,
    dataType: 'text',
    data: { 
        param1: 'login', 
        param2: 'password'
    },
    error: function(request, error){
        if (error == "timeout") {
            alert('log_in_error_timeout');
        }
        else {
            alert('log_in_error_default');
        }
    },
    success: function(data){
       /*
        var jsonData = JSON.stringify(data);
        var jsonData = $.parseJSON(jsonData);
        alert(jsonData.password);
        */
       alert(data);
    }
});