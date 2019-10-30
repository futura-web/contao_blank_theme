// In order for this fuction() to work,
// it is neccessary to allocate #scrollspy
// to eather <nav> or <ul>
// of your one pager navigation

function scrollSpy(){

    var navScrollSpy = $("#scrollspy"),
        navScrollSpyItem = navScrollSpy.find("a");

    navScrollSpyItem.click(function(event){

        event.preventDefault();

        hamburger.parent().removeClass("active");

        if(body.is(".freeze")){
            body.removeClass("freeze");
            navMain.removeClass("out");
        }

        navScrollSpyItem.removeClass("active").parent().removeClass("active");
        $(this).addClass("active").parent().addClass("active");

        var spyID = $(this).attr("data-scrollspy"),
            spyArticle = $("#"+ spyID +""),
            spyArticleOffset = spyArticle.offset(),
            spyToArticle = spyArticleOffset.top - headerHeight;

        htmlBody.clearQueue().delay(150).animate({"scrollTop" : spyToArticle}, 1000);
    });
}
