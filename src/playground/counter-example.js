class Counter extends React.Component{
	constructor(props){
		super(props)
		//faz a ligação da palavra reservada this com o componente
		this.handleAddOne = this.handleAddOne.bind(this)
		this.handleMinusOne = this.handleMinusOne.bind(this)
		this.handleReset = this.handleReset.bind(this)
		//Declara o estado inicial do componente
		//Basicamente é um objeto com todas os atributos necessários pro componente
		this.state = {
			count: 0
		}
	}
	componentDidMount(){
		try{
			const json = localStorage.getItem('count')
			const count = parseInt(json, 10)
			if(!isNaN(count)){
				this.setState(() => ({
					count
				}))
			}
		}catch(err){

		}
	}
	componentDidUpdate(prevProps, prevState){
		if(prevState.count !== this.state.count){
			localStorage.setItem('count', this.state.count)
		}
		//usa pra salvar as coisas no servidor	

	}

	handleAddOne(){
		//para atualizar o atributo tem que utilizar um método da classe React.Component
		//Chama a função e no callback tu faz as modificações que tu quer
		//Como argumento tu chama o estado anterior pra manipular os dados p/ o novo estado
		//E ele só atualiza os parametros passados pra ele
		//Mantendo o valor dos demais
		this.setState((prevState) => {
			return{
				count: prevState.count + 1
			}
		})
	}
	handleMinusOne(){
		this.setState((prevState) => {
			return{
				count: prevState.count - 1
			}
		})
	}
	handleReset(){
		//Essa é a sintaxe nova
		//Utilizando o callback tu atualiza o objeto na ordem que é chamada as funções
		this.setState(() => {
			return{
				count: 0
			}
		})
		//Nesse estágio o estado anterior foi setado pela função a cima
		// this.setState((prevState) => {
		// 	return{
		// 		count: prevState.count + 1
		// 	}
		// })

		// //Essa é a sintaxe velha
		// //O setState é um método assincrono!
		// this.setState({
		// 	count: 0
		// })
		// //No setState anterior tu vai zerar, mas na tela vai ser adicionado 1
		// //Pois a atualização só é feita no final(?)
		// this.setState({
		// 	count: this.state.count + 1
		// })
	}
	render(){
		return (
			<div>
				<h1>Contador: {this.state.count}</h1>
					<button onClick={this.handleAddOne}>+1</button>
					<button onClick={this.handleMinusOne}>-1</button>
					<button onClick={this.handleReset}>Reset</button>
			</div>
		)
	}
}

// Counter.defaultProps = {
// 	count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'))








//pra renderizar um objeto tu tem que especificar onde 
//vai cada coisa, o react não renderiza os objetos como um todo!
// const user = {
// 	name: 'Eduardo',
// 	age: '22',
// 	location: 'Pelotas'
// }

// let getLocation = (location) => {
// 	if(location){
// 		return <p>Location: {location}</p>
// 	}
// }

// const templateTwo = (
// <div>
// 	<h1>{user.name ? user.name : 'Anonymous'}</h1>
// 	{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// 	{getLocation(user.location)}
// </div>
// )
// let count = 0
// const addOne = () => {
// 	count++
// 	renderCounterApp()
// }

// const minusOne = () => {
// 	count--
// 	renderCounterApp()
// }

// const reset = () => {
// 	count=0
// 	renderCounterApp()
// }


// const appRoot = document.getElementById('app')


// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Contador: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>Reset</button>
// 		</div>
// 	)
// 	ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()