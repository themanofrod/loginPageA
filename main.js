const loginButton = document.querySelector('#login');
const registerButton = document.querySelector('#register');
const backButton = document.querySelector('#back-btn')
const resetPasswordButton = document.querySelector('#reset');
const landingContainer = document.querySelector('.landing-container');
const welcomeContainer = document.querySelector('.welcome');
const loginContainer = document.querySelector('.login');
const registerContainer = document.querySelector('.register');
const passwordResetContainer = document.querySelector('.password-reset');


loginButton.addEventListener('click', login);
registerButton.addEventListener('click', register);
backButton.addEventListener('click', back);
resetPasswordButton.addEventListener('click', resetPassword);


function login() {
	landingContainer.classList.add('active');
	welcomeContainer.classList.add('move');
	loginContainer.classList.add('move');
}

function register() {
	landingContainer.classList.add('active');
	welcomeContainer.classList.add('move');
	registerContainer.classList.add('move');
}

function back() {
	landingContainer.classList.remove('active');
	welcomeContainer.classList.remove('move');
	loginContainer.classList.remove('move');
	registerContainer.classList.remove('move');
	passwordResetContainer.classList.remove('move');
}

function resetPassword() {
	landingContainer.classList.add('active');
	loginContainer.classList.remove('move');
	passwordResetContainer.classList.add('move');
}

// Modals
const modalContainer = document.querySelector('.modals');
const modals = document.querySelectorAll('.modal');
const registerModal = document.querySelector('.register-modal');
const registerSubmitButton = document.querySelector('#register-btn');
const registerForm = document.querySelector('#register-form');
const resetModal = document.querySelector('.reset-modal');
const passwordResetButton = document.querySelector('#password-reset-btn')
const passwordForm = document.querySelector('#password-form');

passwordResetButton.addEventListener('click', (e) => {
	if (passwordForm.elements[0].value !== passwordForm.elements[1].value) {
		e.preventDefault()
		const error = document.createElement('p');
		error.classList = 'primary-color';
		error.innerText = 'Emails need to match';
		passwordForm.appendChild(error);
	} else if (passwordForm.checkValidity()) {
		e.preventDefault()
		modalContainer.classList.remove('hide');
		resetModal.classList.remove('hide');
		back();
	};
});

registerSubmitButton.addEventListener('click', (e) => {
	if (registerForm.checkValidity()) {
		e.preventDefault();
		modalContainer.classList.remove('hide');
		registerModal.classList.remove('hide');
		back();
	}
});

modals.forEach( function(element, index) {
	const exit = document.createElement('i');
	exit.classList = 'fas fa-times modal-exit';
	element.appendChild(exit);
	exit.addEventListener('click', () => {
		element.classList.add('hide');
		modalContainer.classList.add('hide');
	});
});

// Sign In

const loginFormButton = document.querySelector('#login-btn');
const loginForm = document.querySelector('#login-form');

loginFormButton.addEventListener('click', (e) => {
	if (loginForm.checkValidity()) {
		e.preventDefault();
		document.querySelector('.landing-container').style.transform = 'translateY(-200%)';
		setTimeout(function() {
			document.querySelector('.landing-container').style.display = 'none';
		}, 1000);
	}
});
