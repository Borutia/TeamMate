$(function (){
    set_attachment();

    $('#avatar_review').attr("src","../../image/avatar_test.jpg" );
    var name_review = '<a class="review_manager ">Petrov petr</a>';
    var reviews_managers1 = `<div ">Ужасный сотрудник во всех аспектах</div> `;
    $('.left_block_per_review').append(name_review);
    $('.right_block_per_review').append(reviews_managers1);
    
    $('.left_block_per_review').append(name_review);
    $('.right_block_per_review').append(reviews_managers1);
});

function set_attachment()
{
    $('#technical_task').attr("src","../../image/attachment.png" );
    $('#end_to_end').attr("src","../../image/attachment.png" );
}


/* заполнение людей
    $('#avatar_review').attr("src","../../image/avatar_test.jpg" );
    var name_review = '<a class="review_manager ">Petrov petr</a>';
    var reviews_managers1 = `<div ">Ужасный сотрудник во всех аспектах</div> `;
    $('.right_block_per_reviews_manager').append(name_review);
    $('.right_block_per_reviews_manager').append(reviews_managers1);
*/