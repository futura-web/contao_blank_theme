<?php

    /**
     * Some hard coded lines for the JS functions
     *
     * @author Dinko Skopljak <ds@futura-web.de>
     **/

    $docReady = '

    /* -------------------- Call JS functions ----- */

    let last_known_scroll_position = 0;
    let ticking = false;

    /* -------------------- Call JS on document ready ----- */

    document.addEventListener("DOMContentLoaded", function(e){
    ';


    $closeFunctionDocReady = '    });';

    $docOnload = '

    /* -------------------- Call JS on document loaded ----- */

    window.onload = function(){
    ';

    $closeFunctionDocOnload = '    };
    ';

    $windowScroll = '
    /* -------------------- Call JS on document scrolled ----- */

    window.addEventListener("scroll", function(e){

        last_known_scroll_position = window.scrollY;

        if (!ticking){

            window.requestAnimationFrame(function(){
    ';


    $closeFunctionScrollWindow = '
                ticking = false;
            });

            ticking = true;
        }
    });
    ';

    $windowResize = '

    window.onresize = function(){
    ';


    $closeWindowResize = '
    };
    ';
?>