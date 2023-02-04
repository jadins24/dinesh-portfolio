$('.i-slide').owlCarousel({
    autoplay:true,
    loop:true,
	items:2,
	center:true,
    margin:20,
    responsive:{
		
		600:{
			items:5
		}
		
	}
});
function downloadFile(filePath) {
    var link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    link.remove();
}



