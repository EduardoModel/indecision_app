import React from 'react'
import AddOption from './AddOption.js'
import Options from './Options.js'
import Action from './Action.js'
import Header from './Header.js'
import OptionModal from './OptionModal.js'

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
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

	handleClearSelectedOption = () => {
		this.setState(() => ({
			selectedOption: undefined
		}))
	}
	handleDeleteOptions = () => {
		this.setState(() => ({options: []}))
	}
	handleDeleteOption = (option) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((opt) => opt !== option)
		}))
	}
	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length)
		const option = this.state.options[randomNum]
		this.setState(() => ({selectedOption: option}))
	}
	handleAddOption = (option) => {
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
				<OptionModal 
					selectedOption={this.state.selectedOption}
					handleClearSelectedOption={this.handleClearSelectedOption}
				/>
			</div>
		)
	}
}