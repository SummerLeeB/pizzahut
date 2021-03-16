$(function(){
	//높이를 화면에 맞춤
	var h=$(window).height();
	//가로길이에 맞춰서 보임
	var winW = $(window).width();
	if (winW<=480){ 
		//mobile 
			$('.mobile_menu').css('height',h);
		//Mobile > hamburger click > nav show
			$('.mobile_btn').click(function(){
				$('.mobile_menu').stop().animate({
					left:0
				});
			});			
			//Mobile >  close click > nav hide
			$('.mobile_menu_close').click(function(){
				$('.mobile_menu').stop().animate({
					left:'-100vw'
				});
			});
			//Mobile Top메뉴에 Hover시 색상변환
			$('.mobile_top ul li a').hover(function(){
				$('.mobile_top ul li a').removeClass('active')
				$(this).addClass('active')		
			});
		} else if (winW>480) { 
		//pc  
			$('section.main').css('height',h);
		} 
	
	//마우스 휠 이동시 헤더 배경색상 변환
	$(window).scroll(function(){
		var top=$(this).scrollTop();
		//console.log(top)
		//만약 top 값이 80보다 크면 
		if(top>80){
			$('header').addClass('active')
		//아니면	
		}else{
			$('header').removeClass('active')
		}
	});
	

	
	// Best Menu Swiper
	 var swiper = new Swiper('.swiper01', {
		centeredSlides: true,
      loop: true,
		 breakpoints:{
			 1920:{
				 slidesPerView:3
			 },
			 1600:{
				 slidesPerView:3
			 },
			 1200:{
				 slidesPerView:3
			 },
			 1024:{
				 slidesPerView:2
			 },
			 960:{
				 slidesPerView:2
			 },
			 768:{
				 slidesPerView:2
			 },
			 480:{
				 slidesPerView:1
			 },
		 },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	
	// Slide Swiper
	var swiper = new Swiper('.swiper02', {
		effect: 'fade',
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });	
	
});
