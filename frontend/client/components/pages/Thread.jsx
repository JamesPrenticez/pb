import React, {useState} from 'react'
import ProgressBar from '../utilities/ProgressBar'

export default function Thread(){
	const [progress, setProgress] = useState("0%")
	const [loading, setLoading] = useState(false)

	//Start the backingsheet generator and then trigger the progress check loop to run
	const handleClick = () => {

		//FORM VAILDATION
		fetch('/thread/start', {
			method: "GET"
		}).then((response) => {
			return response.json()
		}).then(data => {
			setLoading(true)
			let thread_id = data.thread_id
			console.log(thread_id)
			updateProgressBar(thread_id)
		}).catch((err) => {
			console.log("Error:"+ err)
		})
	}

	// Recieve updates from backing sheet generators progress 
	// Not an api endpoint
	const updateProgressBar = (thread_id) => {
		fetch(`/thread/progress/${thread_id}`, {
			method: "GET"
		}).then((response) => {
			console.log(response)
			let data = response.json()
			return data

		}).then(async (data) => {

			// If complete
			if (data === "complete") {

				setProgress("Complete!")

				try{
					const response = await fetch(`/thread/download/${thread_id}`,{
						method: 'GET',
					})
			
					let filename= `test.xlsx`
					let blob = await response.blob()
					const downloadLink = document.createElement('a');
					downloadLink.href = window.URL.createObjectURL(blob);
					downloadLink.download = filename;
					downloadLink.dispatchEvent(new MouseEvent('click', { bubbles: true, view: window }))
					window.URL.revokeObjectURL(downloadLink.href)
					downloadLink.remove();
				}
				catch(err) {
					console.log(err)
					alert('There was and error please contact the developer james.prentice@datacom.co.nz')
				}
				//Reset everything for reuse
				//Force a reload to avoid "this website tried to download multiple files automatically..."
				// Chrome multidownload settings chrome://settings/content/automaticDownloads
				setTimeout(() => {
					setLoading(false)
					setProgress("0%")
					setSelectedCustomer("")
					return 
				}, 1000)

			// In progress update 
			} else {
				setProgress(`${data}%`)
				setTimeout(() => {
					updateProgressBar(thread_id)
				}, 1000)
				//window.requestAnimationFrame(() => updateProgressBar(thread_id))
			}
		})
	}

	return (
		<>
			<div>
				<h1 className='text-2xl font-medium'>Excel File Generator</h1>
				<p className='text-lg font-regular text-gray-300'>Create Excel Files</p>
				<div className='h-[1px] w-full bg-theme-tertiary mt-4 mb-6' />

					<div className="w-full">
						{ loading ? 
							<>
								<ProgressBar progress={progress} />
							</>
							: 
								<div className=' flex justify-center items-center w-full space-y-2'>
									<div>
										<button 
											name="gimme_backing_sheet"
											className="p-8 text-lg w-[250px] text-white text-center bg-green-600 hover:bg-green-500 rounded-lg select-none justify-end"
											onClick={() => handleClick()}
											>
											Start
										</button>
									</div>
								</div>
						}
					</div>
			</div>
		</>
	)
}