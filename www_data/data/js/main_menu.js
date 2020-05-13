$(function (){
    $(window).resize(function(){
        location.reload();
    });
    main_menu();
    all_projects();
    my_projects();
    my_participation();
    job_seekers();
    personal_area();
    settings();
    exit();
});

function exit(){
    $('#button_exit').click(function() {
       // $.removeCookie('id');
        //$.cookie('id', null);
        location.href = '../../../../';
    });
}

function all_projects(){
    $('#href_all_projects').click(function() {
       location.href = '../all_projects/';
    });
}

function settings(){
    $('#button_Settings').click(function() {
       location.href = '../edit_profile/';
    });
}

function my_projects(){
    $('#href_my_projects').click(function() {
       location.href = '../my_projects/';
    });
}

function my_participation(){
    $('#href_my_participation').click(function() {
       location.href = '../my_participation/';
    });
}

function job_seekers(){
    $('#href_job_seekers').click(function() {
       location.href = '../job_seekers/';
    });
}

function personal_area(){
    $('#href_personal_area').click(function() { 
       location.href = '../personal_area/';
    });
}


function main_menu()
{ 
   $('.open_main_menu').click(function() {
        if(!$('.main_menu').hasClass('openDone'))
        {
            $('.main_menu').addClass('openDone');
            $('.main_menu').fadeOut(500);
            $('.open_main_menu').text("Показать меню");
        }
        else
        {
            $('.main_menu').removeClass('openDone');
            $('.main_menu').fadeIn(500);
            $('.open_main_menu').text("Скрыть меню");
        }
    });
}