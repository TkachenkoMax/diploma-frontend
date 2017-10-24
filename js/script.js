$(document).ready(function() {
	/**
	* Side menu button function-handler
	*/
	$('.side-menu-button').on("click", function()  {
	    this.classList.toggle("change");
	    if ($(this).attr('id') == 'side-menu-open') {
	    	$('#side-menu-open').attr('id', 'side-menu-close');
	    	$(".side-menu-button div").css("background-color", "#818181");
	    	openNav();
	    }
	    else {
	    	$('#side-menu-close').attr('id', 'side-menu-open');
	    	$(".side-menu-button div").css("background-color", "white");
	    	closeNav();
	    }
	});

	/**
	* Opens the side menu
	*/
	function openNav() {
	    $("#side-menu").css("width", "500px");
	    //$("body").css("backgroundColor", "rgba(0,0,0,0.4)");
	};

	/**
	* Closes the side menu
	*/
	function closeNav() {
	    $("#side-menu").css("width", "0");
	    $("body").css("backgroundColor", "#252830");
	};
});