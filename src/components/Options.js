import React from 'react'
import Option from './Option.js'


const Options = (props) => (
	<div>
	<div className='widget-header'>
			<h3 className='widget-header__title'>Suas Opções</h3>
			<button
				className='button button--link'
				onClick={props.handleDeleteOptions}>
				Remove tudo
			</button>
	</div>
	{props.options.lenght === 0 && <p>Entre uma opção para começar!</p>}
		{props.options.map((option, index) => {
			return <Option
			 key={option}
			 optionText={option}
			 count={index + 1}
			 handleDeleteOption={props.handleDeleteOption}
			/>
		})}
	</div>
)

export default Options