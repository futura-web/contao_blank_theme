
    /* -------------------- CONTAO SLIDER ----- */

    function contaoSlider() {

        var sliderContao = document.getElementsByClassName("content-slider"),
            slidePrev = document.querySelectorAll("a.slider-prev"),
            slideNext = document.querySelectorAll("a.slider-next"),
            slideControls = document.querySelectorAll("a.slider-prev, a.slider-next");

        [].forEach.call(sliderContao, function(el) {

            var sliderData = el.getAttribute("data-config").split(","),
                contaoSliderTimer = sliderData[0],
                contaoSliderOffset = sliderData[2],
                contaoSlides = el.getElementsByClassName("block"),
                contaoSlidesLength = contaoSlides.length;

            function contaoSliderNav() {

                var navParent = document.createElement("ul");

                navParent.setAttribute("class", "slider-nav");
                el.parentNode.append(navParent);

                for (var i = 0; i < contaoSlidesLength; i++) {

                    var navItem = document.createElement("li"),
                        navAnchor = document.createElement("a");

                    navAnchor.setAttribute("href", "#");
                    navAnchor.setAttribute("class", "nav-control");
                    navItem.append(navAnchor);
                    navParent.append(navItem);
                }

                var contaoSliderNavItems = el.parentNode.querySelectorAll(".slider-nav li");

                [].forEach.call(contaoSliderNavItems, function(el) {
                    contaoSliderNavItems.item(contaoSliderOffset).firstElementChild.classList.add("active");
                });
            }
            contaoSliderNav();

            function activateSlides() {

                var sliderData = el.getAttribute("data-config").split(","),
                    contaoSliderTimer = sliderData[0],
                    contaoSliderTransition = sliderData[1],
                    contaoSliderOffset = sliderData[2],
                    contaoSlides = el.getElementsByClassName("block"),
                    activeSlide = el.querySelectorAll(".block:first-child"),
                    firstSlide = el.querySelectorAll(".block:first-child"),
                    lastSlide = el.querySelectorAll(".block:last-child");

                [].forEach.call(firstSlide, function(el) {

                    el.classList.add("first");
                });

                [].forEach.call(lastSlide, function(el) {

                    el.classList.add("last");
                });

                [].forEach.call(contaoSlides, function(el) {

                    if (contaoSliderTransition != 0) {

                        el.style.transitionDuration = contaoSliderTransition + "ms";
                    }

                    var slideActive = contaoSlides.item(contaoSliderOffset);

                    slideActive.classList.add("active");

                    if (slideActive.classList.contains("last")) {

                        slideActive.parentNode.firstElementChild.classList.add("next");
                        slideActive.previousElementSibling.classList.add("prev");

                    } else if (slideActive.classList.contains("first")) {

                        slideActive.parentNode.lastElementChild.classList.add("prev");
                        slideActive.nextElementSibling.classList.add("next");

                    } else {

                        slideActive.nextElementSibling.classList.add("next");
                        slideActive.previousElementSibling.classList.add("prev");
                    }
                });

                var lazyLoadSliderNew = new lazyLoadSlider(el);
                lazyLoadSliderNew.contaoLazySlider();

            }
            activateSlides();


            var contaoSliderClearer;

            function contaoSliderInterval() {

                clearInterval(contaoSliderClearer);

                contaoSliderClearer = setInterval(function() {

                    function contaoSliderNormal() {

                        el.parentNode.classList.remove("reverse");
                        el.parentNode.classList.remove("navigate");

                        var contaoSliderBehaviourANew = new contaoSliderClass(el);
                        contaoSliderBehaviourANew.contaoSliderBehaviourA();
                    }

                    contaoSliderNormal();


                    var contentSlider = el.parentNode.parentNode.getElementsByClassName("content-slider");

                    [].forEach.call(contentSlider, function(el) {


                        var lazyLoadSliderNew = new lazyLoadSlider(el);
                        lazyLoadSliderNew.contaoLazySlider();
                    });

                    var slideActive = el.getElementsByClassName("active");

                    function activeNavItem() {

                        var contaoSlideActive = el.querySelectorAll(".block.active");

                        [].forEach.call(contaoSlideActive, function(el) {

                            const index = [...el.parentElement.children].indexOf(el);
                            var navItems = el.parentNode.parentNode.parentNode.querySelectorAll(".slider-nav li");

                            [].forEach.call(navItems, function(el) {

                                el.firstElementChild.classList.remove("active");
                                navItems.item(index).firstElementChild.classList.add("active");
                            });
                        });
                    }
                    activeNavItem();

                }, contaoSliderTimer);
            }
            contaoSliderInterval();


            function controlSlides() {

                [].forEach.call(slideControls, function(el) {

                    el.addEventListener("click", function(event) {

                        event.preventDefault();

                        var thisParent = el.parentNode.parentNode,
                            thisSlider = thisParent.querySelector(".slider-wrapper"),
                            thisSlideFirst = thisSlider.querySelectorAll(".block.first"),
                            thisSlideLast = thisSlider.querySelectorAll(".block.last"),
                            thisSlideActive = thisSlider.querySelectorAll(".block.active"),
                            thisSlides = thisSlider.querySelectorAll(".block");

                        if (el.classList.contains("slider-next")) {

                            el.parentNode.parentNode.classList.remove("reverse");
                            el.parentNode.parentNode.classList.remove("navigate");

                            var contaoSliderBehaviourANew = new contaoSliderClass(el);
                            contaoSliderBehaviourANew.contaoSliderBehaviourA();

                        } else {

                            el.parentNode.parentNode.classList.add("reverse");
                            el.parentNode.parentNode.classList.remove("navigate");

                            var contaoSliderBehaviourBNew = new contaoSliderClass(el);
                            contaoSliderBehaviourBNew.contaoSliderBehaviourB();
                        }

                        var contentSlider = el.parentNode.parentNode.getElementsByClassName("content-slider");

                        [].forEach.call(contentSlider, function(el) {

                            var lazyLoadSliderNew = new lazyLoadSlider(el);
                            lazyLoadSliderNew.contaoLazySlider();
                        });


                        function activeNavItem() {

                            var contaoSlideActive = el.parentElement.parentElement.querySelectorAll(".block.active");

                            [].forEach.call(contaoSlideActive, function(el) {

                                const index = [...el.parentElement.children].indexOf(el);
                                var navItems = el.parentNode.parentNode.parentNode.querySelectorAll(".slider-nav li");

                                [].forEach.call(navItems, function(el) {

                                    el.firstElementChild.classList.remove("active");
                                    navItems.item(index).firstElementChild.classList.add("active");
                                });
                            });
                        }
                        activeNavItem();
                        contaoSliderInterval();
                    }, false);
                });
            }

            controlSlides();

            function contaoSliderNavControls() {

                var slideNavControls = document.getElementsByClassName("nav-control");

                [].forEach.call(slideNavControls, function(el) {

                    el.addEventListener("click", function(event) {

                        event.preventDefault();

                        var slideNavControls = el.parentNode.parentNode.getElementsByClassName("nav-control");

                        [].forEach.call(slideNavControls, function(el) {
                            el.classList.remove("active");
                        });

                        el.classList.add("active");

                        const index = [...el.parentElement.parentElement.children].indexOf(el.parentElement);
                        var thisSlider = el.parentNode.parentNode.parentNode.getElementsByClassName("slider-wrapper");

                        [].forEach.call(thisSlider, function(el) {

                            el.parentNode.parentNode.classList.remove("reverse");
                            el.parentNode.parentNode.classList.add("navigate");

                            var slides = el.getElementsByClassName("block"),
                                slideActive = el.getElementsByClassName("active");

                            [].forEach.call(slides, function(el) {

                                el.classList.remove("old", "next", "prev");
                            });

                            [].forEach.call(slideActive, function(el) {

                                el.classList.add("old");
                                el.classList.remove("active");
                            });

                            [].forEach.call(slides, function(el) {

                                slides.item(index).classList.add("active");
                            });
                        });

                        var contentSlider = el.parentNode.parentNode.parentNode.getElementsByClassName("content-slider");

                        [].forEach.call(contentSlider, function(el) {

                            var lazyLoadSliderNew = new lazyLoadSlider(el);
                            lazyLoadSliderNew.contaoLazySlider();
                        });
                        contaoSliderInterval();
                    }, false);
                });
            }
            contaoSliderNavControls();
        });
    }