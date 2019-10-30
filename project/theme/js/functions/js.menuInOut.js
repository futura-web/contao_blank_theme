
    /* --------------------------- TOGGLE MAIN NAV VISIBILITY -----*/

    function menuInOut(){

        hamburger.addEventListener("click", function(event){

            event.preventDefault();
            hamburger.parentNode.classList.toggle("active");
            navMain.classList.toggle("out");
            html.classList.toggle("freeze");
        });
    }
