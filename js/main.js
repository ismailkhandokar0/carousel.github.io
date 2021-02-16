$(document).ready(function(){
    
    $(window).on('load',function(){
        $('.owl-carousel').owlCarousel({
            items:3 , //item defaul 3 thake . item joto divo totoguli card show korbe
            autoplay:true,
            loop:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:1
                },
                992:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        })
    })

    

})