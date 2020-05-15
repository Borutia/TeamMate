$(function (){
    $(".my_projects").click(function (){
        var project_id = $(this).attr('id');
        location.href = '../project/';// + project_id + '/';
    });
});
