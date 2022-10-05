import React from 'react'

export default function ProgressBar(props) {
	const {progress} = props

	return (
		// Wrapper
		<div className="items-center p-1 w-full h-full z-50">
			{/* Containter */}
			<div className="block w-full h-[0.25rem] rounded-full bg-theme-gray1 shadow-[0_0_15px_3px_var(--tertiary)]">
				{/* Progress Bar */}
				<div className="h-[0.25rem] rounded-full bg-theme-quaternary transition-all duration-[1ms] ease-in-out" style={{width:`${progress || 0}`}}></div>
				{/* Progress Bar Text */}
				<p className="text-theme-secondary font-xl text-center">{progress}</p>
			</div>
		</div>
	)
}