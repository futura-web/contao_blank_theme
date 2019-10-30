

    /* -------------------- CONTAO GALLERY LAZYLOAD SET IMAGE SIZES ----- */

    function lazyLoadSetImgSizes(){

        [].forEach.call(galleryContao, function(el){

            var slideImg = el.getElementsByTagName("img");

            [].forEach.call(slideImg, function(el){

                el.width = "";
                el.height = "";

                var elWidth = el.parentNode.offsetWidth,
                    elHeight = elWidth * .75;

                el.width = elWidth;
                el.height = elHeight;
            });
        });
    }
