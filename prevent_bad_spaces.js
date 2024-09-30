const theInput = document.querySelector('input');
			
			theInput.addEventListener('keydown', (event)=> {
				if (theInput.value.length === 0 && event.code === 'Space') {
					
					event.preventDefault();
					
				} else if (theInput.value.length > 0 && theInput.value.slice(-1) === ' ' && event.code === 'Space') {
				
					event.preventDefault();
				
				}
});
