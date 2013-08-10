// JS
$(function() {
	var super_search = $('.command-bar').clone().attr('id', 'GHSS');

	$('body').prepend(super_search);

	$(document).keydown(function(e) {
	    
	    if( e.which === 80 && e.shiftKey && e.ctrlKey ) {    //cmd+shift+b => mentor/unmentor
	    	super_search.fadeIn().find('input').focus();
	    }
	});
});
 s