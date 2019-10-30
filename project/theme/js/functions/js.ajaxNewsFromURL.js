

    /* -------------------- AJAX NEWS ----- */


    function ajaxNewsFromURL(){

        var url = window.location.href,
            urlCheck = url.includes("?");

        if(urlCheck){

            var urlSplit1 = url.split("?"),
                urlSplit2 = urlSplit1[1].split("/"),
                urlNew = "/" + urlSplit2[0] + "-ajax/" + urlSplit2[1],
                request = new XMLHttpRequest();

            request.onreadystatechange = function() {

                if (this.readyState === 4 && this.status === 200) {

                    new contaoModalOpen();

                    var modalContentWrap = document.getElementById("modal-content");
                    modalContentWrap.insertAdjacentHTML("beforeend", this.responseText);

                    var ceModal = body.getElementsByClassName("ce_modal");

                    [].forEach.call(ceModal, function(el){

                        setTimeout(function(){

                            el.classList.add("loaded");
                            html.classList.add("freeze");
                        },200);
                    });

                    new contaoModalClose();
                }
            };
            request.open("GET", urlSplit1[1], true);
            request.send();
        }
    }