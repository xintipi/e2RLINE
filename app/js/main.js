$(document).ready(function () {
    $('.main-box').on('scroll', function () {
        $('.thead', this).css('transform', 'translateY(' + this.scrollTop + 'px)')
    })
})