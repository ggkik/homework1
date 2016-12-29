window.jQuery = window.$ = jQuery;


/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
function calculateScroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.main_menu').find('.scroll_btn a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top );
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
			$('.main_menu li')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	})
};

jQuery(document).ready(function() {
	//MobileMenu
	if ($(window).width() < 768){
		jQuery('.main_menu').prepend('<a href="javascript:void(0)" class="menu_toggler"><i class="fa fa-bars"></i></a>');
		jQuery('header .main_menu ul').hide();
		jQuery('.menu_toggler, .main_menu ul li a').click(function(){
			jQuery('header .main_menu ul').slideToggle(300);
		});
	}

	
	$(window).scroll(function(event) {
		calculateScroll();
	});
	$('.main_menu ul li.scroll_btn a, .mobile_menu ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 130}, 1000);
		return false;
	});

	
});


	
/*-----------------------------------------------------------------------------------*/
/*	FLEXSLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
	//Top Slider
	$('.flexslider.top_slider').flexslider({
		animation: "fade",
		slideshowSpeed: 4000,
		controlNav: false,
		directionNav: true,
		pauseOnAction: false,
		pauseOnHover: true,
		prevText: "",
		nextText: ""
	});
	
	
	$('.flexslider .flex-direction-nav a.flex-prev').prepend('<i class="fa fa-angle-left"></i>');
	$('.flexslider .flex-direction-nav a.flex-next').prepend('<i class="fa fa-angle-right"></i>');
	
});



/*-----------------------------------------------------------------------------------*/
/*	PRETTYPHOTO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery("a[rel^='prettyPhoto']").prettyPhoto();
});



/*-----------------------------------------------------------------------------------*/
/*	IFRAME TRANSPARENT
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
});










