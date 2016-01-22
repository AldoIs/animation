jQuery(document).ready(function($) {
	$("#launcher").click(function(event) {
		/* Act on the event */
		$(".space").append('<img src="img/rocket.png" alt="" class="rocket">')
	});
});