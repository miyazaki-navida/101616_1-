(function($){

//==============================================================================
// 共通設定
//==============================================================================
var winW;
var menuFlag = 0;
var btMenu = '';

$(document).ready(function(){
	winW = $(window).width();
	
	// ページトップ
	$("a[href^='#']").on('click',function() {
		var speed = 700;
		var href= $(this).attr("href");
		if (href != "#") {
			var target = $(href == "" ? 'html' : href);
			var position = target.get(0).offsetTop;
			$('body,html').animate({scrollTop:position}, speed, 'easeOutQuart');
		}
		return false;
	});

	// 画像のマウスオーバー
	$('.swap').not('[src*="_over."]').not('[class*="sp"]').each(function() {
		var srcOut = this.src;
		var dotNum = srcOut.lastIndexOf('.');
		var srcOver = srcOut.substring(0,dotNum) + '_over' + srcOut.substring(dotNum);
		$(this).hover(
			function () {
				this.src = srcOver;
			},
			function () {
				this.src = srcOut;
			}
		);
	})

	// PC,スマホの画像切り替え
	$('.sp').each(function() {
		var e = $(this);
		imgSPChange(e);
	});
	
	// wrapper padding
	if ($(window).width() > 768) {
		$('#wrapper').css('padding-top', '0');
	} else {
		$('#wrapper').css('padding-top', $('header').height() + 'px');
	}
	
	
	$('.slider > div').css('display', 'block');
	$('#top-contents').css({
		'width': 'auto',
		'height': 'auto'
	});	
	
	
});


$(window).on('load',function(){	
	$('#logo').css('display','block');
});

$(window).on('resize',function(){
	// wrapper padding
	if ($(window).width() > 768) {
		$('#wrapper').css('padding-top', '0');
	} else {
		$('#wrapper').css('padding-top', $('header').height() + 'px');
	}
	
	if ((((winW-768) < 0) && (($(window).width()-768) < 0)) || (((winW-768) >= 0) && (($(window).width()-768) >= 0))) {
		winW = $(window).width();
	} else {
		/*
		if ($(window).width() != winW) {

		}
		*/
	}

	// PC,スマホの画像切り替え
	$('.sp').each(function() {
		var e = $(this);
		imgSPChange(e);
	});
	
});



//PC,スマホの画像切り替え
function imgSPChange(e) {
	winW = $(window).width();

	if (winW > 768) {
		var srcSet = e.attr('src');
		var srcChange = srcSet.replace('_sp','');
		e.attr('src',srcChange);
	} else {
		var srcSet = e.attr('src');
		var dotNum = srcSet.lastIndexOf('.');
		var srcChange = srcSet.substring(0,dotNum) + '_sp' + srcSet.substring(dotNum);
		if (srcSet.indexOf('_sp') == -1) e.attr('src',srcChange);
	}
}
	

//==============================================================================
// メニューボタン
//==============================================================================
$(function() {
	$('header.style1 > .inner > navi').css('right',	-1*$('header.style1 > .inner > navi').width() - 40 + 'px');
	
	$('#bt-menu').on('click', function(){
		var e = $(this);
		if ($(e).attr('class') == 'close') {
			$('header.style1 > .inner > navi').stop().animate({
				'right': '0',
			},500,'easeOutCubic');
			
			$('header.style2 > .inner').stop().slideDown(500,'easeOutCubic');
			
			$(e).attr('class','open');
		} else {
			$('header.style1 > .inner > navi').stop().animate({
				'right': -1*$('header.style1 > .inner > navi').width() - 40 + 'px',
			},500,'easeOutCubic');
			
			$('header.style2 > .inner').stop().slideUp(500,'easeOutCubic');
			
			$(e).attr('class','close');
		}
		
	});
});

$(window).on('resize', function(){
	if ($('#bt-menu').attr('class') == 'close') {
		$('header.style1 > .inner > navi').css('right',	-1*$('header.style1 > .inner > navi').width() - 40 + 'px');
	}
});
	
	
	
//==============================================================================
// ヘッダー位置
//==============================================================================
$(function() {
	headFix();
});
	
function headFix() {
	var style = $('header').attr('class');

	$(function() {
		if (style.indexOf('style2') != -1) {
			$('header.style2').attr('data-offset', Math.round($('header.style2').offset().top));
			headPosition();
		}
	});


	$(window).on('scroll', function(){
		headPosition();
	});
	
	function headPosition() {
		var sTop = $(window).scrollTop();
		var hHeight = 0;
		
		if (style.indexOf('style1') != -1) {
			hHeight = $('header.style1').height();
			if (sTop >= hHeight) {
				$('header.style1').addClass('fixed');
			} else {
				$('header.style1').removeClass('fixed');
			}
		} else if (style.indexOf('style2') != -1) {
			hHeight = parseInt($('header.style2').attr('data-offset'));
			if (sTop >= hHeight) {
				$('header.style2').addClass('fixed');
			} else {
				$('header.style2').removeClass('fixed');
			}
		}
	}
}
	
	
//==============================================================================
// パーツ 位置・配置調整時の高さ設定
//==============================================================================
$(function() {
	partsHeight();
});
	
$(window).on('resize', function(){
	partsHeight();
});
	
function partsHeight() {
	$('.w1024').each(function(){
		var height = 0;
		
		$(this).children('.layer').each(function(){
			var h = $(this).height() + parseInt($(this).css('top').replace('px',''));
			//console.log(h);
			if (height < h) height = h;
		});
		
		if (height != 0) {
			$(this).css('height', height + 'px');
		}
		$(this).css('width', 'auto');
	});
	
}	


})(jQuery)