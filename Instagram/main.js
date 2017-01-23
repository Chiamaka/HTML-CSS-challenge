// Get all the img tags
const images = document.querySelectorAll('img');

window.onload = function () {
	const start = {
		init: function () {
			const initialFadeIn = 1000;
			const intervalTime = 4000; 
			const numberOfImages = images.length;
			let currentImage = 0;
			
			//show first image
			images[currentImage].classList.add('show');
			
			//loop through the images
			let infiniteLoop = setInterval(() => {
				images[currentImage].classList.remove('show');
				
				if (currentImage === numberOfImages - 1) {
					currentImage = 0;
				} else {
					currentImage++;
				}
				
				images[currentImage].classList.add('show');
				
			}, intervalTime);
			
		}
	};
	
	start.init();
}
	
	

