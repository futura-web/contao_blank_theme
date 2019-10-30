    
    /* -------------------- CONTAO SLIDER LAZY LOAD CLASS ----- */

    var lazyLoadSlider = function(el) {

        this.contaoLazySlider = function() {

            if(el.parentNode.classList.contains("lazy_load")){

                var lazyImg = el.getElementsByTagName("img");

                [].forEach.call(lazyImg, function(el) {

                    if (el.parentNode.parentNode.classList.contains("next") || el.parentNode.parentNode.classList.contains("prev") || el.parentNode.parentNode.classList.contains("active")) {

                        if (el.classList.contains("insight") == false) {

                            var elDataSrc = el.getAttribute("data-src"),
                                elDataSrcSet = el.getAttribute("data-srcset");

                            if (elDataSrc) {
                                el.src = elDataSrc;
                            }

                            if (elDataSrcSet) {
                                el.srcset = elDataSrcSet;
                            }

                            el.classList.add("insight");
                        }
                    }
                });
            }
        };
    };