
    /* -------------------- CONTAO LAZYLOAD WHEN IN SIGHT ----- */

    function lazyLoad(last_known_scroll_position){

        [].forEach.call(galleryContao, function(el){

            if(el.classList.contains("content-slider") == false){

                var slideImg = el.getElementsByTagName("img");

                [].forEach.call(slideImg, function(el){

                    var elOffSet = el.getBoundingClientRect(),
                        elOffSetTop = elOffSet.top,
                        windowHeight = window.innerHeight,
                        elDataSrc = el.getAttribute("data-src"),
                        elDataSrcSet = el.getAttribute("data-srcset");

                    if(elOffSetTop < windowHeight){

                        if(elDataSrc){
                            el.src = elDataSrc;
                        }

                        if(elDataSrcSet){
                            el.srcset = elDataSrcSet;
                        }

                        el.classList.add("insight", "size_set");
                    }

                    setTimeout(function(){

                        if(el.classList.contains("insight")){

                            el.classList.add("loaded");
                            el.parentNode.classList.add("progress_done");
                        }
                    }, 1500);
                });
            }
        });
    }
