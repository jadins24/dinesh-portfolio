$('.i-slide').owlCarousel({
    autoplay:true,
    loop:true,
	items:2,
	center:true,
    margin:20,
    responsive:{
		
		600:{
			items:5
        },
        300:{
            items:1
        }
		
	}
});

// nav



AOS.init();

VanillaTilt.init(document.querySelector(".about-img"),{
    max:20,
    speed:100,
    perspective:500,
    easing:"cubic-bwzier(.05,.85,.35,1.8)",
    scale:1,

});
