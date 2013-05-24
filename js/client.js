$(document).ready(function() {
    $('#swipeTest').click(function () {
        $(this).slideUp();
    });
    
    $('.toggleBackPaneLeft').hammer().on('swipe', function(e){
        e.preventDefault();

        $('#frame').toggleClass('openLeft');
        if($('#frame').hasClass('openLeft')){

            $("#frame").animate({"left": "258px"}, "slow");
        }
        else
            $("#frame").animate({"left": "0px"}, "slow");
    });
});