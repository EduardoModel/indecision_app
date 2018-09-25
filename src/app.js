//A classe do React Component tem que ter a primeira letra em maiusculo!
//Pq é assim que ele diferencia se é um elemento html ou um React Component
class IndecisionApp extends React.Component {
	render(){
		const title = 'Indecision'
		const subtitle = 'Ponha sua vida nas mãos de um computador'
		const options = ['Coisa Um', 'Coisa Dois', 'Coisa Três']
		return(
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action />
				<Options options={options}/>
				<AddOption />	
			</div>
		)
	}
}
//Pode se passar valores pra dentro dos componentes(props)
//São como atributos html padrão
//e transforma num par chave-valor

class Header extends React.Component {
	//React Components precisam de um método que precisa ser definido, que é render(), onde ele retorna JSX
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		)
	}
}

class Action extends React.Component {
	handlePick() {
		alert('handlepick')
	}
	render(){
		return (
			<div>
				<button onClick={this.handlePick}>O que fazer?</button>
			</div>
		)
	}
}


class Options extends React.Component {
	//Forma pra poder ter acesso ao objeto this
	//dentro das funções do componente
	constructor(props) {
		super(props)
		this.handleRemoveAll = this.handleRemoveAll.bind(this)
	}
	handleRemoveAll() {
		console.log(this.props.options)
		//alert('remove tuto!')
	}
	render(){
		return (
			<div>
				{this.props.options.map((option) => {
					return <Option key={option} optionText={option}/>
				})}
				<button onClick={this.handleRemoveAll}>Remove tudo</button>
			</div>
		)
	}
}

class Option extends React.Component{
	render(){
		return (
			<div>
				<p>{this.props.optionText}</p>
			</div>
		)
	}
}

class AddOption extends React.Component {
	handleAddOption(e) {
		//o e é o event do form
		e.preventDefault() //Evita a pagina recarregar quando submeter o form

		const option = e.target.elements.option.value.trim()

		if(option){
			alert(option)
		}
		e.target.elements.option.value = ''
	}
	render(){
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Adicionar opção</button>
				</form>
			</div>
		)
	}
}

//O objetivo é compor o JSX com React Components

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
//Pra poder passar o contexto adiante tu usa o bind(this)
//De forma pra função que for executar ter acesso ao objeto this