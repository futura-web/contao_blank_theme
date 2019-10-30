// In order for this function() to work,
// it is neccessary to allocate #ajax_form
// to your form @ Contao form generator
// of your one pager navigation

function sendFormWithAjax(){

    var ajaxForm = $("#ajax_form");

    ajaxForm.submit(function(event){

        $.ajax({
            type: 'POST',
            url: ajaxForm.prop("action"),
            data : ajaxForm.serialize(),
            dataType: "json",
            encode: true
        });

        event.preventDefault();

        ajaxForm[0].reset();

        var ajaxFormSucces = "nachricht-erfolgreich-versendet.html";

        loadContent.load(ajaxFormSucces);
        lightBox.addClass("activisible animate-spin active").scrollTop(0);
        body.addClass("freeze");

        $(document).ajaxComplete(function(){

            setTimeout(function(){
                lightBoxContent.addClass("read");
            }, lightBoxtime);
        });
    });
}
