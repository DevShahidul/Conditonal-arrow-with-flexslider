 $(window).load(function(){
        // Begin common slider
        if ( $('div.gallery-modul-slider').length == 0 ) return false
        
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 146,
            //itemMargin: 5,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });
        
        $('#carousel').each(function(){
            var totalLength = $(this).find('li.slide').length

            if(totalLength <= 4 ){
                $(this).find('.flex-prev').hide()
                $(this).find('.flex-next').hide()
            }

            else{
                $(this).find('.flex-prev').show()
                $(this).find('.flex-next').show()
            }
        })
    })
