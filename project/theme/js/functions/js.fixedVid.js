

    /* -------------------- FIXED VIDEOS ----- */

    function fixedVid(){

        var videoElem = document.querySelectorAll(".ce_vimeo, .ce_youtube");

        [].forEach.call(videoElem, function(el){

            var videoIframe = el.getElementsByTagName("iframe");

            [].forEach.call(videoIframe, function(el){

                var videoParentWidth = el.offsetWidth,
                    videoHeight = el.getAttribute("height"),
                    videoWidth = el.getAttribute("width"),
                    videoRatio = videoHeight / videoWidth,
                    videoHeightNew = videoParentWidth * videoRatio;

                el.width = videoParentWidth;
                el.height = videoHeightNew;
                el.parentNode.parentNode.classList.add("loaded");
            });
        });
    }
