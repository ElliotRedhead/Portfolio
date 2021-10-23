type draw = {
	(ctx:context,
	frameCount:number): void;
}

// Context can be null or undefined prior to ref load
type canvasContext = CanvasRenderingContext2D|null|undefined
