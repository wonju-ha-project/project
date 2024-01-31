// popup
$(function () {
	$('.art1').click(function () {
		$('.pop1').fadeIn();
	});
	$('.art2').click(function () {
		$('.pop2').fadeIn();
	});
	$('.art3').click(function () {
		$('.pop3').fadeIn();
	});

	$('.popup i').click(function () {
		$('.popup').fadeOut();
	});
});

// slide
$(function () {
	var swiper = new Swiper('.slide ', {
		speed: 1000,//버튼을 슬라이드가 넘어가는 시간
		navigation: {//화살표 버튼
			nextEl: '.popup .swiper-button-next',
			prevEl: '.popup .swiper-button-prev',
		},
		pagination: {//블릿 버튼
			el: '.popup .swiper-pagination',
			clickable: true,
		},
	});
});


// chart
var pieChart = function () {
	$('.chart').easyPieChart({
		scaleColor: false,
		lineWidth: 4,
		lineCap: 'butt',
		barColor: '#45704c',
		trackColor: '#fff',
		size: 200,
		animate: 1000
	});
};

// skillwaypoint
var skillsWayPoint = function () {
	if ($('#skills').length > 0) {
		$('#skills').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout(pieChart, 400);
				$(this.element).addClass('animated');
			}
		}, { offset: '90%' });
	}

};

// skillwaypoint 실행
$(function () {
	skillsWayPoint();
});