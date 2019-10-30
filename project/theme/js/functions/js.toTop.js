
    /* -------------------- TO TOP AUTOSCROLLER ----- */

    function toTop(last_known_scroll_position){

        var viewHeight = view.innerHeight,
            viewHalf = Math.round(viewHeight / 2);

        if (pageYOffset > viewHalf){

            toTopElem.classList.add("out");

        } else {

            toTopElem.classList.remove("out");
        }

        toTopElem.addEventListener("click", function(event){

            event.preventDefault();
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        });
    }
