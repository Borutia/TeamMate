$(function (){
    set_scroll_height('.personal_left_block');
    set_scroll_height('.personal_right_block');
    get_personal_infomation();
    //test();
});

function get_personal_infomation(){
    var log_in_url = 'http://127.0.0.1:8000/profile/';
    var log_in_timeout = 10000;
    var log_in_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
    var log_in_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';
    var user_id ;
    $.ajax({
        type: 'POST',
        url: log_in_url,
        dataType: JSON,
        timeout: log_in_timeout,
        data: { 
            'id': user_id 
        },
        success: function(data){
            //var jsonData = JSON.stringify(data);
            //var jsonData = $.parseJSON(jsonData);
            create_personal_information(data);
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

function create_personal_information(data){
    //left block
    'use strict'; 
    $('#avatar').attr("src","../../image/avatar_test.jpg" );
    $('#name_of_person').text(data.name + ' ' + data.family);
    $('#login_of_person').text("@" + data.user);
    $('#personal_position').text(data.personal_quality.quality);
    $('#personal_birthday').text("Дата Рождения: " + data.birthday);
    $('.personal_education').append(educations);

    $('.personal_education')
        .append($('<span class="style_of_text">',{
            text: data.education.ed_start + '-' + data.education.ed_end + 
            ' ' + data.education.vuz + ' ' + data.education.specialty
    }));    

    $('.personal_jobs')
    .append($('<span class="style_of_text">',{
        text: data.work_place
    }));    
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