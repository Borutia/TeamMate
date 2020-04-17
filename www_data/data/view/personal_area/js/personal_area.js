$(function (){
    $(window).resize(function(){
        location.reload();
    });
    main_menu();
    set_scroll_height('.personal_left_block');
    set_scroll_height('.personal_right_block');

    //create_personal_information();
    test();
    exit();
});

function main_menu()
{ 
    /*
    $('.open_main_menu').click(function() {
        $('.main_menu').hide();
        $('.main_menu').fadeIn(1000);
    });
    */
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
    /*
    $('.open_main_menu').click(function() {
        if(!$('.main_menu').hasClass('openDone'))
        {
            $('.main_menu').addClass('openDone');
            $('.main_menu').css("left", "-50%");
            $('.open_main_menu').text("Показать меню");
        }
        else
        {
            $('.main_menu').removeClass('openDone');
            $('.main_menu').css("left", "0%");
            $('.open_main_menu').text("Скрыть меню");
        }
    });
    */
}

function exit(){
    $('#button_exit').click(function() {
        location.href = '../../';
    });
}

function test()
{
    //left block
    'use strict'; 
    $('#avatar').attr("src","../../image/avatar_test.jpg" );
    var educations = `<span class="style_of_text">2012-14 УрФУ Вычислительные машины, комплексы, системы и сети </span> <br>`;
    var jobs = `<span class="style_of_text">2014-... “Вектор”  Разработчик внутренних систем  </span> <br>`;
    for(var i=0;i<5;i++)
    {
        $('#name_of_person').text("Dmitry Borutya");
        $('#login_of_person').text("@" + "Borutya");
        $('#personal_position').text("Программист С++");
        $('#personal_birthday').text("Дата Рождения: 01.06.1997");
        $('.personal_education').append(educations);
        $('.personal_jobs').append(jobs);
    }

    //right block
    $('.personal_about_me').text("Веселый парень, знающий свое дело. Люблю код и все, что с ним связано. Очень общительный и умеющий слушать собеседник. Также холост. ");
    var professional_skills = `<span class="style_of_text">Python </span> `;
    var professional_skills1 = `<span class="style_of_text">C++ </span> `;
    var professional_skills2 = `<span class="style_of_text">Git </span> `;
    $('.personal_professional_skills').append(professional_skills);
    $('.personal_professional_skills').append(professional_skills1);
    $('.personal_professional_skills').append(professional_skills2);
    
    var professional_skills = `<span class="style_of_text">Отзывчивость </span> `;
    var professional_skills1 = `<span class="style_of_text">Любознательность </span> `;
    $('.personal_personal_qualities').append(professional_skills);
    $('.personal_personal_qualities').append(professional_skills1);

    var current_projects = `<div class="style_of_text">Pentaho. Лучшее решение для предприятий с задействованием бизнес аналитики </div> `;
    $('.personal_current_projects').append(current_projects);
    $('.personal_current_projects').append(current_projects);

    var completed_projects1 = `<div class="style_of_text">Автоматизированная информационная система ремонта квартир</div> `;
    var completed_projects2 = `<div class="style_of_text">Онлайн калькулятор </div> `;
    $('.personal_completed_projects').append(completed_projects1);
    $('.personal_completed_projects').append(completed_projects2);

    var reviews_managers1 = `<div class="negative style_of_text">Ужасный сотрудник во всех аспектах</div> `;
    var reviews_managers2 = `<div class="positive style_of_text">Показал себя как инициативный, знающий свое дело сотрудник</div> `;
    $('.personal_reviews_managers').append(reviews_managers1);

    $('.personal_reviews_managers').append(reviews_managers2);

    var personal_peer_review1 = `<div class="style_of_text">Стрессоустойчивость</div> `;
    var personal_peer_review2 = `<div class="style_of_text">Ответсвенность</div> `;
    var personal_peer_review3 = `<div class="style_of_text">Работа в команде</div> `;
    $('.personal_peer_review').append(personal_peer_review1);
    $('.personal_peer_review').append(personal_peer_review2);
    $('.personal_peer_review').append(personal_peer_review3);

}

//установить высоту блока для скролла
function set_scroll_height(block) {
    //получаем высоту страницы
    var h_all = $(document).outerHeight(true);
    //устанавливаем высоту блока для прокрутки
    $(block).css('height', h_all - 93);
}