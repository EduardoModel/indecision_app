'use strict';

console.log('App.js está funcionando');

//JSX - JavaScript XML

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

var renderOptions = function renderOptions(options) {
	if (options.length > 0) {
		return React.createElement(
			'p',
			null,
			'Aqui est\xE3o as op\xE7\xF5es: ',
			options
		);
	} else {
		return React.createElement(
			'p',
			null,
			'Sem op\xE7\xF5es'
		);
	}
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault(); //Evita a pagina recarregar quando submeter o form

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}
	renderIndecisionApp();
};

var onRemoveAll = function onRemoveAll() {
	app.options = [];
	renderIndecisionApp();
};

var onMakeDecision = function onMakeDecision() {
	var randomNum = Math.floor(Math.random() * app.options.length);
	var option = app.options[randomNum];
	alert(option);
};

var appRoot = document.getElementById('app');

var renderIndecisionApp = function renderIndecisionApp() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtitle && React.createElement(
			'p',
			null,
			app.subtitle
		),
		app.options.length > 0 ? 'Aqui esta as opções' : 'Sem opções',
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'O que devo fazer?'
		),
		React.createElement(
			'button',
			{ onClick: onRemoveAll },
			'Remove All'
		),
		React.createElement(
			'ol',
			null,
			/*Atentar que para usar o JS tu tem que botar o código em chaves!*/
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Adicionar op\xE7\xE3o'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

renderIndecisionApp();

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// live-server public/
