$(function (){
    $(".my_projects").click(function (){
        var project_id = $(this).attr('id');
        location.href = '../project/';// + project_id + '/';
    });
    set_scroll_height('.background_crystal');
});

//установить высоту блока для скролла
function set_scroll_height(block) {
    //получаем высоту страницы
    var h_all = $(document).outerHeight(true);
    //устанавливаем высоту блока для прокрутки
    $(block).css('height', h_all );
}