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

let visibility = false

const toggleVisibility = () => {
	visibility = !visibility
	render()
}

const render = () => {
	const jsx = (
		<div>
		<h1>Visibility Toggle</h1>
		<button onClick={toggleVisibility}>
			{visibility?'Hide details' : 'Show details'}
		</button>
		{visibility && (
			<div>
			<p>Hey. These are some details you can now see!</p>
			</div>
		)}
		</div>
	)

	ReactDOM.render(jsx, document.getElementById('app'))
}

render()