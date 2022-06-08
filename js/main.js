const blue_buttons = document.querySelectorAll(".btn-outline-blue");
blue_buttons.forEach((blue_button) => {
	blue_button.onmouseover=function(){
		blue_button.classList.add("btn-outline-blue-hover");
	};
	
	blue_button.onmouseout=function(){
		blue_button.classList.remove("btn-outline-blue-hover");
	};
});	

function onClassListener(element, index, callback){
	const observer = new MutationObserver((mutations) =>{
		mutations.forEach((mutation) =>{
			if(mutation.type === 'attributes' && mutation.attributeName === 'class'){
				callback(mutation.target, index);
			} 
		});
	});
	observer.observe(element, { attributes : true});
	return observer.disconnect;
}