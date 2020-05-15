$(function (){
    set_attachment();

    
    $('#avatar_review').attr("src","../../image/avatar_test.jpg" );
    var name_review = '<a class="review_manager ">Petrov petr</a>';
    var reviews_managers1 = `<div ">Ужасный сотрудник во всех аспектах</div> `;
    
    var id = 1;
    get_review(1);
    var left_block = '#'+ id + ' .left_block_per_review';
    var right_block = '#'+ id + ' .right_block_per_review';
    $(left_block).append(name_review);
    $(right_block).append(reviews_managers1);
    
    id = 2;
    left_block = '#'+ id + ' .left_block_per_review';
    right_block = '#'+ id + ' .right_block_per_review';
    get_review(2);
    $(left_block).append(name_review);
    $(right_block).append(reviews_managers1);
    
});

function set_attachment()
{
    $('#technical_task').attr("src","../../image/attachment.png" );
    //$('#end_to_end').attr("src","../../image/attachment.png" );
}

function get_people(id){
    'use strict'; 
    var temp =  '<div class="add_people id='+ id +'">' +
                    '<div class="left_block_per_people">' +
                        '<img src="" alt="Avatar" id="avatar_review">'+
                    '</div>'+
                    '<div class="right_block_per_people"></div>'+
                '</div>';
    $('.personal_people').append(temp);
}

function get_review(id){
    'use strict'; 
    var temp =  '<div class="add_people id=' + id +'">' +
                    '<div class="left_block_per_review">' +
                        '<img src="" alt="Avatar" id="avatar_review">'+
                    '</div>'+
                    '<div class="right_block_per_review"></div>'+
                '</div>';
    $('.personal_review').append(temp);
}

/* заполнение людей
    $('#avatar_review').attr("src","../../image/avatar_test.jpg" );
    var name_review = '<a class="review_manager ">Petrov petr</a>';
    var reviews_managers1 = `<div ">Ужасный сотрудник во всех аспектах</div> `;
    $('.right_block_per_reviews_manager').append(name_review);
    $('.right_block_per_reviews_manager').append(reviews_managers1);
*/