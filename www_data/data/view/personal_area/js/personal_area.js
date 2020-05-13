$(function (){
    set_scroll_height('.personal_left_block');
    set_scroll_height('.personal_right_block');
    get_personal_infomation();
    //test();

    //рейтинг
    $('.rating .star').hover(function() {
        $(this).addClass('to_rate');
        $(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('to_rate');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').addClass('no_to_rate');
    }).mouseout(function() {
        $(this).parent().find('.star').removeClass('to_rate');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate');
    }).click(function() {
        $(this).removeClass('to_rate').addClass('rated');
        $(this).parent().find('.star:lt(' + $(this).index() + ')').removeClass('to_rate').addClass('rated');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate').removeClass('rated');
        /*Save your rate*/
        /*TODO*/
    });
    
});

function get_personal_infomation(){
    var user_id = $.cookie('id');
    var get_url = 'http://127.0.0.1:8000/profile/' + user_id + '/';
    var get_timeout = 10000;
    var get_error_timeout = 'Внимание! Время ожидания ответа сервера истекло';
    var get_error_default = 'Внимание! Произошла ошибка, попробуйте отправить информацию еще раз';  
    
    $.ajax({
        type: 'GET',
        url: get_url,
        dataType: 'JSON',
        timeout: get_timeout,
        success: function(data){
            //var jsonData = JSON.stringify(data); конверт в строку json
            //var jsonData = $.parseJSON(jsonData); //конверт из строки json
            create_personal_information(data);
        },
        error: function(request, error){
            if (error == "timeout") {
                alert(get_error_timeout);
            }
            else {
                alert(get_error_default);
            }
        }
    });  
 
}

function create_personal_information(data){
    'use strict'; 
    $('#avatar').attr("src","../../image/avatar_test.jpg" );
    $('#name_of_person').text(data.family + ' ' + data.name + ' ' + data.middle_name);
    $('#login_of_person').text("@" + data.user);
    //left block
    $('#personal_position').text(data.personal_quality.quality);
    $('#personal_birthday').text("Дата Рождения: " + data.birthday);

    //учеба цикл?
    $('.personal_education')
        .append($('<span class="style_of_text">',{
            text: data.education.ed_start + '-' + data.education.ed_end + 
            ' ' + data.education.vuz + ' ' + data.education.specialty
    }));   
    var space = '<br>';
    $('.personal_education').append(space);  

    //места работы цикл?
    $('.personal_jobs')
    .append($('<span class="style_of_text">',{
        text: data.work_place
    }));    
    $('.personal_jobs').append(space);  

    //right block
    $('.personal_about_me').text(data.o_sebe);

    for(let i=0;i<data.skill.length;i++)
    {
        $('.personal_professional_skills')
        .append($('<span class="style_of_text">',{
            text: data.skill[i]
        }));  
    }
 
    for(let i=0;i<data.quality.length;i++)
    {
        $('.personal_personal_qualities')
        .append($('<span class="style_of_text">',{
            text: data.quality[i]
        })); 
    }

    /*
    for(let i=0;i<data..length;i++)
    $('.personal_current_projects')
        .append($('<span class="style_of_text">',{
            text: data,
            id: data.id
    }));  

    for(let i=0;i<data..length;i++)
    $('.personal_completed_projects')
        .append($('<span class="style_of_text">',{
            text: data,
            id: data.id
    }));  

    for(let i=0;i<data..length;i++)
    $('.personal_reviews_managers')
        .append($('<span class="style_of_text">',{
            text: data
    }));  

    for(let i=0;i<data..length;i++)
    {
        $('.personal_peer_review')
        .append($('<span class="style_of_text">',{
            text: data
        }));  
    }
    */
}

function test()
{
    //left block
    'use strict'; 
    $('#avatar').attr("src","../../image/avatar_test.jpg" );
    var educations = `<span class="style_of_text">2012-14 УрФУ Вычислительные машины, комплексы, системы и сети </span>`;
    var jobs = `<span class="style_of_text">2014-... “Вектор”  Разработчик внутренних систем  </span> `;
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

    $('.right_block_per_reviews_manager').addClass('negative');
    $('#avatar_review').attr("src","../../image/avatar_test.jpg" );
    var name_review = '<a class="review_manager ">Petrov petr</a>';
    var reviews_managers1 = `<div ">Ужасный сотрудник во всех аспектах</div> `;
    $('.right_block_per_reviews_manager').append(name_review);
    $('.right_block_per_reviews_manager').append(reviews_managers1);

    var reviews_managers2 = `<div class="positive style_of_text">Показал себя как инициативный, знающий свое дело сотрудник</div> `;

    var personal_peer_review2 = `<div class="style_of_text">Ответсвенность</div> `;
    var personal_peer_review3 = `<div class="style_of_text">Работа в команде</div> `;
    var personal_peer_review1 = `<div class="style_of_text">Стрессоустойчивость</div> `;
    
    //var personal_peer_review1 = `Стрессоустойчивость`;
    set_rating();
    $('.stars').append(personal_peer_review1);

   // $('.personal_peer_review').append(personal_peer_review2);
    //$('.personal_peer_review').append(personal_peer_review3);
}

//установить высоту блока для скролла
function set_scroll_height(block) {
    //получаем высоту страницы
    var h_all = $(document).outerHeight(true);
    //устанавливаем высоту блока для прокрутки
    $(block).css('height', h_all - 93);
}

function set_rating(){
    'use strict'; 
    var stars = '<div class="rating left">'+
                    '<div class="stars right">'+
                        '<a class="star"></a>'+
                        '<a class="star"></a>'+
                        '<a class="star"></a>'+
                        '<a class="star"></a>'+
                        '<a class="star"></a>'+
                    '</div>'+
                '</div>';
    $('.personal_peer_review').append(stars);
}