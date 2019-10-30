
    /* -------------------- PRIVACY NOTICE [SESSION COOKIE] ----- */

    function privacyNotice(){

        var cookie_accepted = localStorage.getItem("cookie_accepted");

        if (cookie_accepted === null){

            var cookieNotice = document.getElementById("cookie_notice"),
                acceptNotice = document.getElementById("accept_notice");

            cookieNotice.classList.remove("accepted");

            acceptNotice.addEventListener("click", function(){

                cookieNotice.classList.add("accepted");
                localStorage.setItem("cookie_accepted", true);
            });
        }
    }