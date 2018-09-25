console.log('App.js está funcionando')

//JSX - JavaScript XML

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
}

let renderOptions = (options) => {
	if(options.length > 0){
		return <p>Aqui estão as opções: {options}</p>
	}
	else{
		return <p>Sem opções</p>
	}
}

const onFormSubmit = (e) => {
	e.preventDefault() //Evita a pagina recarregar quando submeter o form

	const option = e.target.elements.option.value

	if(option){
		app.options.push(option)
		e.target.elements.option.value = ''
	}
	renderIndecisionApp()
}

const onRemoveAll = () => {
	app.options = []
	renderIndecisionApp()
}

const onMakeDecision = () => {
	 const randomNum = Math.floor(Math.random() * app.options.length)
	 const option = app.options[randomNum]
	 alert(option)
}

const appRoot = document.getElementById('app')


const renderIndecisionApp = () => {
	const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		{app.options.length > 0 ? 'Aqui esta as opções' : 'Sem opções'}
		<button disabled={app.options.length===0} onClick={onMakeDecision}>O que devo fazer?</button>
		<button onClick={onRemoveAll}>Remove All</button>
		<ol>
		{	/*Atentar que para usar o JS tu tem que botar o código em chaves!*/
			app.options.map((option) => <li key={option}>{option}</li>)
		}
		</ol>
		<form onSubmit={onFormSubmit}>
			<input type="text" name="option" />
			<button>Adicionar opção</button>
		</form>
	</div>
	)


	ReactDOM.render(template, appRoot)
}

renderIndecisionApp()

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// live-server public/
