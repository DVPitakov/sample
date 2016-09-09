'use strict';
function onSubmit(form) {
	let data = {
		user: form.elements['user'].value,
		email: form.elements['email'].value
	};
	let result = request('/users', data);
	form.hidden = true;
	window.helloWorld.innerHTML = hello(data.user)	+ ' Вы зашли ' + plural(result);
	console.log(data, result);
}

function hello (userName) {
	return 'Привет, ' + userName;
}
if (typeof exports === 'object') {
	exports.hello = hello;
	exports.plural = plural;
}

function plural(num) {
	if (num % 10 < 2 || num % 10 > 4) {
		return num + " раз"
	}
	else {
		if (num > 10 && num < 20) return num + " раз"
		return num + " раза"
	}
}
