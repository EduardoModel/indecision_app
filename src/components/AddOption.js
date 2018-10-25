import React from 'react'

export default class AddOption extends React.Component {
	state = {
		error: undefined
	}
	handleAddOption = (e) => {
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
				{this.state.error && <p className='add-option-error'>{this.state.error}</p>}
				<form className='add-option' onSubmit={this.handleAddOption}>
					<input className='add-option__input' type="text" name="option" autoComplete="off" />
					<button className='button'>Adicionar opção</button>
				</form>
			</div>
		)
	}
}