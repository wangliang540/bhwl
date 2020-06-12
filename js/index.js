$(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 0) {
            $('.login img').attr('src', '../img/logo1.png')
            $('.login li').css({ color: '#222' })
            $('.login').css({ border: 0, background: '#fff' })
        } else {
            $('.login img').attr('src', '../img/logo.png')
            $('.login li').css({ color: '#fff' })
            $('.login').css({ background: '', borderBottom: '1px solid #506694' })
        }
        if ($(document).scrollTop() > 200) {

            $('.fixed').css({
                display: 'block'
            })
        } else {
            $('.fixed').css({
                display: 'none'
            })
        }
    })
    $('.fixed').click(function() {
        $("html,body").animate({ scrollTop: 0 }, 300)
    })
    $('.return').click(function() {
        return false
    })

})