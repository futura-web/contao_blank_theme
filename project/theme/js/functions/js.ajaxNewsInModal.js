

    /* -------------------- AJAX NEWS ----- */


    function ajaxNewsInModal(){

        var newsWrap = document.getElementById("news");

        if(newsWrap){

            var newsLinks = newsWrap.getElementsByTagName("a");

            [].forEach.call(newsLinks, function(el) {

                el.addEventListener("click", function(event){

                    event.preventDefault();

                    var linkURL = el.href,
                        linkURLSplit1 = linkURL.split("//"),
                        linkURLSplit11 = linkURLSplit1[1].split("/"),
                        ajaxLinkCustomized = linkURLSplit11[1] + "-ajax" + "/" +linkURLSplit11[2],
                        ajaxLink = linkURLSplit1[0] + "//" + linkURLSplit11[0] + "/" + ajaxLinkCustomized,
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

                    request.open("GET", ajaxLink, true);
                    request.send();
                    history.pushState({page: 1}, null, "?" + ajaxLinkCustomized);
                });
            });
        }
    }