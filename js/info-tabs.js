$('.nav-tabs').on('click', 'a', function (e) {
    var tabId = $(this).attr('data-tab');
    $(this).closest('.nav-tabs').find('a').removeClass('active');
    $(this).addClass('active');
    $('.tab-panel').removeClass('active');
    $('#' + tabId).addClass('active');
});