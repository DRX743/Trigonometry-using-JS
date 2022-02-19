// Acceding to the canvas
const canvas = document.getElementById('canvas');
// Leading us to the creation of a CanvasRenderingContext 2D object representing a two-dimensional rendering context
const ctx = canvas.getContext('2d');


// Getting he canvas size
const canvasSize = () => {
	return {
		width: window.innerWidth * window.devicePixelRatio,
		height: window.innerHeight * window.devicePixelRatio
	}
} 

// Resizing the canvas Size
const resizeCanvas = () => {
	const { width, height } = canvasSize()
	canvas.width = width
	canvas.height = height
}

resizeCanvas()