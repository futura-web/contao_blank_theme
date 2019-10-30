
    /* -------------------- LAZY LOAD GALLERY ----- */

    var lazyLoadGallery = function(el) {

        this.loadAndOrient = function(){

            if(el.parentNode.parentNode.parentNode.classList.contains("active") || el.parentNode.parentNode.parentNode.classList.contains("prev") || el.parentNode.parentNode.parentNode.classList.contains("next")){

                if(el.classList.contains("loaded") === false){

                    var elImgSrc = el.parentNode.href;

                    if(elImgSrc){

                        el.src = elImgSrc;
                    }

                    setTimeout(function() {

                        var elWidth = el.naturalWidth,
                            elHeight = el.naturalHeight;

                        if(elWidth > elHeight){

                            el.parentNode.parentNode.parentNode.classList.add("landscape");

                        } else {

                            el.parentNode.parentNode.parentNode.classList.add("portrait");
                        }

                        el.classList.add("loaded");

                    }, 500);
                }
            }
        };
    };
    