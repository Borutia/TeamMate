$(function (){
    create_new_project();
});

function create_new_project(){
    $('#button_new_project').click(function() {
       location.href = '../create_new_project/';
    });
}