
    /* -------------------- CONTAO SLIDER CLASSES ----- */

    var contaoSliderClass = function(el) {

        var thisParent = el.parentNode.parentNode,
            thisSlider = thisParent.querySelector(".slider-wrapper"),
            thisSlideFirst = thisSlider.querySelectorAll(".block.first"),
            thisSlideLast = thisSlider.querySelectorAll(".block.last"),
            thisSlideActive = thisSlider.querySelectorAll(".block.active"),
            thisSlides = thisSlider.querySelectorAll(".block");

        this.contaoSliderBehaviourA = function(){

            [].forEach.call(thisSlides, function(el){

                el.classList.remove("old");
            });

            [].forEach.call(thisSlideActive, function(el){

                if(el.classList.contains("first")){

                    el.classList.remove("active");
                    el.classList.add("prev");
                    el.nextElementSibling.classList.remove("next");
                    el.nextElementSibling.classList.add("active");
                    el.nextElementSibling.nextElementSibling.classList.add("next");
                    el.parentNode.lastElementChild.classList.remove("prev");

                } else {

                    if(el.classList.contains("last")){
                        el.classList.remove("active");
                        el.previousElementSibling.classList.remove("prev");
                        el.parentNode.firstElementChild.classList.remove("next");
                        el.parentNode.firstElementChild.classList.add("active");
                        el.parentNode.lastElementChild.classList.add("prev");
                        el.parentNode.firstElementChild.nextElementSibling.classList.add("next");

                    } else if(el.parentNode.lastElementChild.previousElementSibling.classList.contains("active")){

                        el.classList.remove("active");
                        el.classList.add("prev");
                        el.nextElementSibling.classList.remove("next");
                        el.nextElementSibling.classList.add("active");
                        el.previousElementSibling.classList.remove("prev");
                        el.parentNode.firstElementChild.classList.add("next");

                    } else {

                        el.classList.remove("active");
                        el.classList.add("prev");
                        el.nextElementSibling.classList.remove("next");
                        el.nextElementSibling.classList.add("active");
                        el.nextElementSibling.nextElementSibling.classList.add("next");
                        el.previousElementSibling.classList.remove("prev");
                    }
                }
            });
        };

        this.contaoSliderBehaviourB = function(){

            [].forEach.call(thisSlides, function(el){

                el.classList.remove("old");
            });

            [].forEach.call(thisSlideActive, function(el){

                if(el.classList.contains("first")){

                    el.classList.remove("active");
                    el.classList.add("next");
                    el.nextElementSibling.classList.remove("next");
                    el.parentNode.lastElementChild.classList.remove("prev");
                    el.parentNode.lastElementChild.classList.add("active");
                    el.parentNode.lastElementChild.previousElementSibling.classList.add("prev");

                } else {

                    if(el.classList.contains("last")){

                        el.classList.remove("active");
                        el.classList.add("next");
                        el.previousElementSibling.classList.remove("prev");
                        el.previousElementSibling.classList.add("active");
                        el.previousElementSibling.previousElementSibling.classList.add("prev");
                        el.parentNode.firstElementChild.classList.remove("next");

                    }  else if (el.previousElementSibling.classList.contains("first")){

                        el.classList.remove("active");
                        el.classList.add("next");
                        el.nextElementSibling.classList.remove("next");
                        el.previousElementSibling.classList.remove("prev");
                        el.previousElementSibling.classList.add("active");
                        el.parentNode.lastElementChild.classList.add("prev");

                    } else {

                        el.classList.remove("active");
                        el.classList.add("next");
                        el.nextElementSibling.classList.remove("next");
                        el.previousElementSibling.classList.remove("prev");
                        el.previousElementSibling.classList.add("active");
                        el.previousElementSibling.previousElementSibling.classList.add("prev");
                    }
                }
            });
        };
    };
