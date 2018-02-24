(function ($) {
    "use strict";
	
    $(".customcheckbox").on('click', function () {
	if($(this).text() == "Completed"){
	   $(this).text("Ordered");
	   $(this).attr( "class", "customcheckbox btn btn-warning btn-rounded" );
    }else{
	   $(this).text("Completed");
	   $(this).attr( "class", "customcheckbox btn btn-success btn-rounded" );
    }
     });
})(jQuery);