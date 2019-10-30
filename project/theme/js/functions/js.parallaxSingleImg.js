

    /* -------------------- SINGLE IMAGE PARALLAX ----- */

    var parallaxSingleImgWrap = main.getElementsByClassName("parallax_single_img");

    function parallaxSingleImg(last_known_scroll_position) {

        [].forEach.call(parallaxSingleImgWrap, function (el) {

            var winScrollY = window.scrollY, // scroll value
                elHeight = el.offsetHeight, // element´s height
                elOffsetTopDoc = el.offsetTop, // element´s position in document
                elInSight = elOffsetTopDoc - viewHeight,
                elOutOfSight = elOffsetTopDoc + elHeight;
            
            if (winScrollY > elInSight && winScrollY < elOutOfSight) {

                var elImageContainer = el.getElementsByClassName("image_container");

                [].forEach.call(elImageContainer, function (el) {

                    var scrollFormula = (winScrollY - elInSight) / 10,
                        scrollFormulaRounded = Math.ceil(scrollFormula),
                        elViewHeight = viewHeight + elHeight,
                        parallaxVal = elViewHeight / 10,
                        imgMinHeight = elHeight + parallaxVal,
                        imgMinHeightRounded = Math.ceil(imgMinHeight),
                        elImg = el.getElementsByTagName("img");

                    el.style.transform = "translate3d(0,-" + scrollFormulaRounded + "px,0)";

                    [].forEach.call(elImg, function (el) {

                        el.style.minHeight = imgMinHeightRounded + "px";
                        el.classList.add("done");
                    });
                });
            }
        });
    }