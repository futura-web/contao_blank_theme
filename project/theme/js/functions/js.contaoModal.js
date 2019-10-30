

    /* -------------------- CONTAO MODAL OPEN ----- */

    function contaoModalOpen(){

        var modal = document.createElement("div");
        modal.id = "ce_modal";
        modal.className = "ce_modal block";

        var modalBG = document.createElement("div");
        modalBG.id = "bg_modal";
        modalBG.className = "bg_modal";

        var modalContentWrap = document.createElement("div");
        modalContentWrap.id = "modal-content";
        modalContentWrap.className = "modal-content";

        modal.append(modalContentWrap, modalBG);
        body.append(modal);
    }

    /* -------------------- CONTAO MODAL CLOSE ----- */

    function contaoModalClose(){

        var modalBG = document.getElementById("bg_modal");

        modalBG.addEventListener("click", function(event){

            modalBG.parentNode.classList.remove("loaded");

            setTimeout(function(){

                modalBG.parentNode.remove();
                html.classList.remove("freeze");
            },400);
        });
    }
