$(document).ready( function() {

    $(this).scroll(function() {
        $('.description_modal').css('right','-50%');
    })
    
    $(this).click( function() {
        $('.description_modal').css('right','-50%');
    })

    $('.learn').click(function(e) {
        e.stopPropagation();
        $('.description_modal').css('right','7%');
        console.log('s')
    })

    
})
