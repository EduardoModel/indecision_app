import React from 'react'
import Option from './Option.js'


const Options = (props) => (
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

export default Options