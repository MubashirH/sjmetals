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

    galleryPop()
    
    mobileMenuTransition()
    
})

function galleryPop() {
    $('.gallery_img').click(function(e) {
        e.stopPropagation()
        $('.gallery_modal').css('display','block')
        const img_src = $(this).attr('src')
        $('.gallery_modal img').attr('src',img_src)
        $('.gallery_wrapper').css('filter','blur(10px)')
    })

    $('html').click(function(e) {
        if (e.target.id === 'galleryModal') {
            $('.gallery_modal').css('display','none')
        $('.gallery_wrapper').css('filter','blur(0px)')
        }
    })
}


function mobileMenuTransition() {
    const mobileMenu = document.querySelector('.mobile_menu_list')
    const humberger = document.querySelector('.humberger_icon')
    const bodyWrapper = document.querySelector('.body_wrapper')
    let clicked = false
    humberger.addEventListener('click', function() {
        if (clicked) {
            humberger.src = './images/icons/menu.svg'
            mobileMenu.style.right = '-100%'
            bodyWrapper.style.filter = 'blur(0px)'
            clicked = false
        } else {
            humberger.src = './images/icons/close.svg'
            mobileMenu.style.right = '0px'
            bodyWrapper.style.filter = 'blur(3px)'
            clicked = true
        }
    })
}