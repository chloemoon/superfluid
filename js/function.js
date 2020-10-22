$(function() {
	// 스크롤다운
	$(window).on('scroll', function() {
		let scrollTop = $(this).scrollTop();
		if (scrollTop > 0) {
			$('.nav_inner > .sns').hide();
			$('.fixed> .logo').addClass('scroll');
			$('.fixed> .logo').removeClass('scrollin');
			$('nav > .nav_inner > .gnb').addClass('bg');
			$('nav > .nav_inner > .gnb').removeClass('bgup');
			$('.fixed').addClass('white');
		} else {
			$('.nav_inner > .sns').show();
			$('.fixed> .logo').removeClass('scroll');
			$('.fixed> .logo').addClass('scrollin');
			$('nav > .nav_inner > .gnb').removeClass('bg');
			$('nav > .nav_inner > .gnb').addClass('bgup');
			$('.fixed').removeClass('white');
		}
	});

	// 팝업창 애니메이션
	popupMove = function() {
		$('.popup').stop().animate(
			{
				left: '4.17vw'
			},
			300
		);
	};

	setTimeout(function() {
		popupMove();
	}, 4000);

	$('.popup>.clse>a').on('click', function(evt) {
		evt.preventDefault();
		$('.popup').hide();
	});

	// 섹션 스와이퍼
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		spaceBetween: 0,
		slidesPerGroup: 1,
		loopFillGroupWithBlank: false,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 30,
				slidesPerGroup: 1
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 0,
				slidesPerGroup: 1
			}
		}
	});

	$('.swiper-button-next').on('click', function(evt) {
		for (let slideIdx = 0; slideIdx < 13; slideIdx++) {
			let $slidestart = $('.swiper-slide').eq(slideIdx);
			if ($slidestart.hasClass('swiper-slide-prev') === true) {
				$('.swiper-button-prev').show();
				$('.swiper-button-next').show();
			}
		}
		if ((slideIdx2 = 13)) {
			let $slidestart2 = $('.swiper-slide').eq(slideIdx2);
			if ($slidestart2.hasClass('swiper-slide-prev') === true) {
				$('.swiper-button-next').hide();
			}

			evt.preventDefault();
		}
	});
	$('.swiper-button-prev').on('click', function(evt) {
		evt.preventDefault();
		for (let slideIdx = 0; slideIdx < 13; slideIdx++) {
			let $slidestart = $('.swiper-slide').eq(slideIdx);
			if ($slidestart.hasClass('swiper-slide-prev') === true) {
				$('.swiper-button-next').show();
			}
		}
		if ((slideIdx2 = 1)) {
			let $slidestart2 = $('.swiper-slide').eq(slideIdx2);
			if ($slidestart2.hasClass('swiper-slide-next') === true) {
				$('.swiper-button-prev').hide();
			}
		}
	});

	// footer nav
	$('.footer_nav>li>ol>li').on({
		mouseover: function() {
			nowIdx = $('.footer_nav>li>ol>li').index(this);
			$('.footer_nav>li>ol>li').eq(nowIdx).addClass('on');
		},
		mouseout: function() {
			$('.footer_nav>li>ol>li').eq(nowIdx).removeClass('on');
		}
	});

	// 카트
	$('.nav_inner > .user > .cart ').on('click', function(evt) {
		$('.popupyellow').show();
		$('.popupyellow').removeClass('hide');
		evt.preventDefault();
	});
	$('.popupyellow .mnu_popup_cart_upper>a').on('click', function(evt) {
		$('.popupyellow').addClass('hide');
		evt.preventDefault();
	});

	// 햄버거
	$('.fixed>nav>.nav_inner>.user>.burger>a').on('click', function(evt) {
		$('.fixed').toggleClass('xmark');
		$('.popupwhite').toggleClass('xmark');
		$('.popupuser').toggleClass('user');
		evt.preventDefault();
	});

	// user
	$('.fixed>nav>.nav_inner>.user>.user_info').on('click', function(evt) {
		$('.fixed').toggleClass('user');
		$('.popupuser').toggleClass('user');
		evt.preventDefault();
	});
});
