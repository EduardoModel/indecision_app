import React from 'react'

const Action = (props) => (
	<div>
		<button
		onClick={props.handlePick}
		disabled={!props.hasOptions}
		>
		O que fazer?
		</button>
	</div>
)

export default Action