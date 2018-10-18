//stateless functional component
//é mais rápido e tu usa ele quando tu não precisa ter um estado atrelado ao componente!
//Se tu precisar do state tu tem que usar classe!

//A classe do React Component tem que ter a primeira letra em maiusculo!
//Pq é assim que ele diferencia se é um elemento html ou um React Component
class IndecisionApp extends React.Component {
	constructor(props){
		super(props)
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
		this.handlePick = this.handlePick.bind(this)
		this.handleAddOption = this.handleAddOption.bind(this)
		this.handleDeleteOption = this.handleDeleteOption.bind(this)
		this.state = {
			options: []
		}
	}
	//Lifecycle methods só existem nos componentes baseados em classes
	//quando o component é renderizado na tela
	componentDidMount(){
		try{
			const json = localStorage.getItem('options')
			const options = JSON.parse(json)
			console.log(options)
			if(options){
				this.setState(() => ({
					options
				}))
			}
		}catch(err){

		}
	}
	//quando o component é atualizado
	componentDidUpdate(prevProps, prevState){
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options)
			localStorage.setItem('options', json)
			//usa pra salvar as coisas no servidor	
		}
	}
	//quando o component é distruido 
	componentWillUnmount(){
		console.log('Componente destruiu')
	}

	handleDeleteOptions(){
		this.setState(() => ({options: []}))
	}
	handleDeleteOption(option){
		this.setState((prevState) => ({
			options: prevState.options.filter((opt) => opt !== option)
		}))
	}
	handlePick(){
		const randomNum = Math.floor(Math.random() * this.state.options.length)
		const option = this.state.options[randomNum]
		alert(option)
	}
	handleAddOption(option){
		if(!option){
			return 'Entra com uma frase válida!'
		}
		else if(this.state.options.indexOf(option) > -1){
			return 'Esta opção já existe no array!'
		}
		this.setState((prevState) => ({options: prevState.options.concat(option)}))
	}
	render(){
		const subtitle = 'Ponha sua vida nas mãos de um computador'
		return(
			<div>
				<Header subtitle={subtitle} />
				<Options
				options={this.state.options}
				handleDeleteOptions={this.handleDeleteOptions}
				handleDeleteOption={this.handleDeleteOption}
				/>
				<Action
				hasOptions={this.state.options.length > 0} 
				handlePick={this.handlePick}
				/>
				<AddOption
				handleAddOption={this.handleAddOption}
				/>	
			</div>
		)
	}
}
//Definindo esse default, tu possibilita o usuário já mandar informações para o form
//E permite criar props que são reutilizáveis
// IndecisionApp.defaultProps = {
// 	options: []
// }
//Pode se passar valores pra dentro dos componentes(props)
//São como atributos html padrão
//e transforma num par chave-valor
const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	)
}
//Define os falores defeult que o component vai utilizar
Header.defaultProps = {
	title: 'Indecision'
}

const Action = (props) => {
	return (
		<div>
			<button
			onClick={props.handlePick}
			disabled={!props.hasOptions}
			>
			O que fazer?
			</button>
		</div>
	)
}

const Options = (props) => {
	return (
		<div>
		{props.options.lenght === 0 && <p>Entre uma opção para começar!</p>}
			{props.options.map((option) => {
				return <Option
				 key={option}
				 optionText={option}
				 handleDeleteOption={props.handleDeleteOption}
				/>
			})}
			<button onClick={props.handleDeleteOptions}>Remove tudo</button>
		</div>
	)
}

const Option = (props) => {
	return (
		<div>
			<p>{props.optionText}</p>
			<button
			 onClick={(e) => {
				 props.handleDeleteOption(props.optionText)
			 }}
			 >
			 Remover
			</button>
		</div>
	)
}

class AddOption extends React.Component {
	constructor(props){
		super(props)
		//função da classe AddOption
		this.handleAddOption = this.handleAddOption.bind(this)
		this.state={
			error: undefined
		}
	}
	handleAddOption(e) {
		//o e é o event do form
		e.preventDefault() //Evita a pagina recarregar quando submeter o form

		const option = e.target.elements.option.value.trim()

		//função passada no objeto props
		const error = this.props.handleAddOption(option)

		this.setState(() => ({error}))

		e.target.elements.option.value = ''
	}
	render(){
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" autoComplete="off" />
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