    
    /* -------------------- MARK ELEMENT WHEN IN SIGHT ----- */

    function textInSight(last_known_scroll_position){

        [].forEach.call(mainArticles, function(el){

            if(!el.classList.contains("banner") && !el.classList.contains("insight")){

                var elTopPosInView = el.getBoundingClientRect().top,
                    wievQ = viewHeight - (viewHeight / 100) * 20;

                if(elTopPosInView <= wievQ){

                    el.classList.add("insight");
                }
            }
        });
    }