
var labels = document.querySelectorAll('.form-label');
var inputs = document.querySelectorAll('.contact-form__form__input');

inputs.forEach((input, i) => {
	input.addEventListener('keyup', () =>{
		if (input.value) {
			labels[i].style.transform = "translate(-10%, -80%) scale(.8)";
		} else  {
			labels[i].style.transform = "";
		}
	})
});

