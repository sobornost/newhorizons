//1) TO DO - on scroll show image

			/*const SELECTOR = '.image-place';
			const ANIMATE_CLASS_NAME = 'show';

			const animate = element => (
  				element.classList.add(ANIMATE_CLASS_NAME)
			);

			const isAnimated = element => (
  				element.classList.contains(ANIMATE_CLASS_NAME)
			);

			intersectionObserver = new IntersectionObserver((entry, observer) => {
				console.log('entry:', entry);
				console.log('observer:', observer);
  				entries.forEach((entry) => {
    				// element is in viewport, do the stuff
    				if (entry.intersectionRatio > 0) {
      					animate(entry.target);
    					observer.unobserve(entry.target);
  			  		};
				});
			});
			// get your elements
			const anchor = [document.querySelector('.anchor')];

			// start observing your elements
			intersectionObserver.observe(anchor);
			*/

			//2) TO DO: calculate random position of Summer School each time page loads
			// function randomPosition() {
			// 	let calculatePosition = Math.floor(Math.random()*100 - width);
			// 	let randomPosText = document.getElementsbyClassName("subtitle-top");

			// 	let i=0, i<randomPosText.length, i++{
			// 		forEach randomPosText[i] 
			// 		calculatePosition()
			// 	 	randomPostext[i].style.setProperty('--top', "calculatePosition")
			// 	}
			// 	console.log(height, width);
			// }

			// 3) TO DO - AJAX text data from googlesheets table