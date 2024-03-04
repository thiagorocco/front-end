$(document).ready(function () {
    $(".slide ul").cycle({
        fx: 'fade',
        speed: 2000,
        timeout: 3000,
        prev: '#anterior',
        next: '#proximo',
        pager: '#pager',
    });
});