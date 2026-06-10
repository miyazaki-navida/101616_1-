(function ($) {
    var scrollPosi = 0;

	$(window).scroll(function () {
		
		if ($('.fixed-bg').length) {
			$('.fixed-bg').each(function(){
				scrollPosi = $(document).scrollTop() + $(window).height();
				var contPosi = $(this).parent('.contents').offset().top-150;

				if (scrollPosi >= contPosi && scrollPosi-150 <= contPosi+$(this).parent('.contents').height()+$(window).height()) {
					$(this).css({
						'background-position-y': ($(window).height()-(scrollPosi - contPosi))/$(window).height()*100 + 'px',
						'display': 'block'
					});
				} else {
					$(this).css('display', 'none');
				}

			});
		}
	});


})(jQuery);


//==============================================================================
// メニューボタン
//==============================================================================
$(function() {
	
	$('#bt-menu').on('click', function(){
		
		$('header.style1 > .inner > navi').css('opacity',1);
		
	});
	
	$('header.style1 > .inner > navi a').on('click', function(){
		$('#bt-menu').attr('class','close');
		$('header.style1 > .inner > navi').stop().animate({
			'right': -1*$('header.style1 > .inner > navi').width() - 40 + 'px',
		},500,'easeOutCubic');
	});
	
});