document.addEventListener('DOMContentLoaded', readyEvent => {

	// Check if the current device support VIbration API
	const vibrationStatusEl = document.querySelector('#vibration-status')

	if(window.navigator.vibrate(0) === true)  {
		vibrationStatusEl.innerText = 'Not supported by this device 👎'
	} else {
		vibrationStatusEl.innerText = 'Supported by this device 👍'
	}


	// Listen to vibration button click and vibrate device based on input
	document.querySelector('#custom-vibration-button').addEventListener('click', e => {
		e.preventDefault()

		window.navigator.vibrate(document.querySelector('#custom-vibration-input').value || 100)
	})


	const cameraStreamEl = document.querySelector('#camera-stream')

	// Gain access to camera
	navigator.mediaDevices.getUserMedia({ video: true })
		.then(cameraStream => {
			document.querySelector('#camera-area').classList.remove('hidden')
			cameraStreamEl.srcObject = cameraStream
		})
		.catch(error => {
			document.querySelector('#camera-status').innerText = 'Not allowed 🚫'
		})

})