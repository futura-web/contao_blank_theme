
    /* -------------------- CONTAO GALLERY ----- */

    var galleryContao = document.getElementsByClassName("ce_gallery");

    function contaoGallery(){

        [].forEach.call(galleryContao, function(el){

            var galleryFigure = el.getElementsByClassName("image_container");

            [].forEach.call(galleryFigure, function(el){

                var galleryAnchor = el.getElementsByTagName("a");

                [].forEach.call(galleryAnchor, function(el){

                    el.addEventListener("click", function(event){

                        event.preventDefault();

                        var thisLI = el.parentNode.parentNode;

                        thisLI.parentNode.firstElementChild.classList.add("first");
                        thisLI.parentNode.lastElementChild.classList.add("last");

                        var allThisLT = thisLI.parentNode.getElementsByTagName("li");

                        [].forEach.call(allThisLT, function(el){

                            el.classList.remove("active", "prev", "next");
                        });

                        thisLI.classList.add("active");

                        if(thisLI.classList.contains("last")){

                            thisLI.parentNode.firstElementChild.classList.add("next");
                            thisLI.previousElementSibling.classList.add("prev");

                        } else if(thisLI.classList.contains("first")){

                            thisLI.parentNode.lastElementChild.classList.add("prev");
                            thisLI.nextElementSibling.classList.add("next");

                        } else {

                            thisLI.nextElementSibling.classList.add("next");
                            thisLI.previousElementSibling.classList.add("prev");
                        }

                        var thisGallery = el.parentNode.parentNode.parentNode.parentNode;
                            thisGalleryCloned = thisGallery.cloneNode(true),
                            thisGalleryClonedImg = thisGalleryCloned.getElementsByTagName("img");

                        [].forEach.call(thisGalleryClonedImg, function(el){

                            el.src = "";
                            el.srcset = "";
                            el.classList.remove("loaded","size_set", "insight");

                            var loadNew = new lazyLoadGallery(el);
                            loadNew.loadAndOrient();
                        });

                        thisGalleryCloned.classList.add("content-slider");
                        thisGalleryCloned.firstElementChild.classList.add("slider-wrapper");

                        var slidesItems = thisGalleryCloned.firstElementChild.getElementsByTagName("li");

                        [].forEach.call(slidesItems, function(el){
                            el.classList.add("block");
                        });

                        new contaoModalOpen();

                        var modalControls = document.createElement("div");
                        modalControls.setAttribute("class", "slider-control");

                        var modalControlNext = document.createElement("a");
                        modalControlNext.setAttribute("class", "slider-next switch-slides");
                        modalControlNext.setAttribute("href", "#");

                        var modalControlPrev = document.createElement("a");
                        modalControlPrev.setAttribute("class", "slider-prev switch-slides");
                        modalControlPrev.setAttribute("href", "#");

                        modalControls.append(modalControlPrev, modalControlNext);

                        var modalContentWrap = document.getElementById("modal-content");
                        modalContentWrap.append(thisGalleryCloned, modalControls);

                        var ceModal = body.getElementsByClassName("ce_modal");

                        [].forEach.call(ceModal, function(el){

                            setTimeout(function(){

                                el.classList.add("loaded");
                                html.classList.add("freeze");
                            },200);
                        });

                        var contaoModal = body.getElementsByClassName("ce_modal");

                        [].forEach.call(contaoModal, function(el){

                            var slideImgContainer = el.getElementsByClassName("image_container");

                            [].forEach.call(slideImgContainer, function(el){

                                var slideAnchor = el.getElementsByTagName("a");

                                [].forEach.call(slideAnchor, function(el){

                                    el.addEventListener("click", function(event){

                                        event.preventDefault();
                                    });
                                });
                            });

                            var modalControlsWrap = el.getElementsByClassName("slider-control");

                            [].forEach.call(modalControlsWrap, function(el){

                                var slideControls = el.getElementsByClassName("switch-slides");

                                [].forEach.call(slideControls, function(el){

                                    el.addEventListener("click", function(event){

                                        event.preventDefault();

                                        if(el.classList.contains("slider-next")){

                                            var contaoSliderBehaviourANew = new contaoSliderClass(el);
                                            contaoSliderBehaviourANew.contaoSliderBehaviourA();

                                        } else {

                                            var contaoSliderBehaviourBNew = new contaoSliderClass(el);
                                            contaoSliderBehaviourBNew.contaoSliderBehaviourB();
                                        }

                                        galleryImg = el.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("img");

                                        [].forEach.call(galleryImg, function(el){

                                            var loadNew = new lazyLoadGallery(el);
                                            loadNew.loadAndOrient();
                                        });
                                    });
                                });
                            });
                        });
                        new contaoModalClose();
                    });
                });
            });
        });
    }
