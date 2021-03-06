document.querySelector('.swiper-wrapper').addEventListener('click', function(event) {
    if (event.target.className != 'swiper-slide__btn') return;
    $('.form-active').fadeIn(500)
    $('.form__overlay').fadeIn(600)
})
    
$('.btn').on('click', AjaxFormRequest)
$('.form__overlay').on('click', () => {
    $('.form-active').fadeOut(500)
    $('.form__overlay').fadeOut(600)
})
function AjaxFormRequest(result_id,formMain,url) {
    jQuery.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: jQuery("#"+formMain).serialize(),
        success: function(response) {
        document.getElementById(result_id).innerHTML = response;
    },
    error: function(response) {
        document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
    }
    });

    $(':input','#formMain')
    .not(':button, :submit, :reset, :hidden')
    .val('')
    .removeAttr('checked')
    .removeAttr('selected');
}
