// class VisibilityToggle extends React.Component {
// 	constructor(props){
// 		super(props)
// 		this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
// 		this.state = {
// 			visibility: false,
// 			buttonMessage: 'Mostrar Detalhes',
// 			message: ''
// 		}
// 	}
// 	handleToggleVisibility(){
// 		this.setState((prevState) => {
// 			let msg, msg2
// 			if(prevState.visibility){
// 				msg = 'Mostrar detalhes'
// 				msg2 = ''
// 			}
// 			else{
// 				msg = 'Ocultar detalhes'
// 				msg2 = 'Hey, aqui estão uns detalhes que não estavam visíveis antes'
// 			}
// 			return{
// 				visibility: !prevState.visibility,
// 				buttonMessage: msg,
// 				message: msg2
// 			}
// 		})
// 	}
// 	render(){
// 		return (
// 			<div>
// 				<h1>Visibility Toggle</h1>
// 				<button onClick={this.handleToggleVisibility}>{this.state.buttonMessage}</button>
// 				<p>{this.state.message}</p>
// 			</div>
// 		)
// 	}
// }

class VisibilityToggle extends React.Component{
	constructor(props){
		super(props)
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
		this.state = {
			visibility: false
		}
	}
	handleToggleVisibility(){
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			}
		})
	}
	render(){
		return (
			<div>
			<h1>Visibility Toggle</h1>
			<button onClick={this.handleToggleVisibility}>
				{this.state.visibility?'Ocultar detalhes' : 'Mostrar detalhes'}
			</button>
			{this.state.visibility && (
				<div>
				<p>Hey. Esses são uns detalhes que agora tu pode ver!</p>
				</div>
			)}
			</div>
		)
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


















// let app = {
// 	title: 'Visibility Toggle',
// 	buttonStatus: 0,
// 	buttonMessage: 'Show details'
// }

// const toggleShow = () => {
// 	app.buttonStatus = !app.buttonStatus
// 	if(app.buttonStatus){
// 		app.buttonMessage = 'Hide details'
// 	}
// 	else{
// 		app.buttonMessage = 'Show details'
// 	}
// 	renderApp()
// }

// const appRoot = document.getElementById('app')

// const renderApp = () => {
// 	const template = (
// 		<div>
// 		<h1>{app.title}</h1>
// 		<button onClick={toggleShow}>{app.buttonMessage}</button>
// 		{
// 			app.buttonStatus?<p>Hey. These are some details you can now see!</p> : <p></p>
// 		}
// 		</div>
// 	)

// 	ReactDOM.render(template, appRoot)
// }

// renderApp()

// let visibility = false

// const toggleVisibility = () => {
// 	visibility = !visibility
// 	render()
// }

// const render = () => {
	// const jsx = (
	// 	<div>
	// 	<h1>Visibility Toggle</h1>
	// 	<button onClick={toggleVisibility}>
	// 		{visibility?'Hide details' : 'Show details'}
	// 	</button>
	// 	{visibility && (
	// 		<div>
	// 		<p>Hey. These are some details you can now see!</p>
	// 		</div>
	// 	)}
	// 	</div>
// 	)

// 	ReactDOM.render(jsx, document.getElementById('app'))
// }

// render()