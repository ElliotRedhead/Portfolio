import useCanvas from "../hooks/useCanvas";

interface props {
	draw: draw,
	canvasWidth?: number,
	canvasHeight?: number
}

const Canvas = (props:props):JSX.Element => {  
  
	const { draw, canvasHeight = window.innerHeight, canvasWidth=window.innerWidth, ...optional } = props;
	const canvasRef = useCanvas(draw);
  
	return <canvas
		id="drawing-canvas"
		height={canvasHeight || window.innerHeight}
		width={canvasWidth || window.innerWidth}
		ref={canvasRef}
		{...optional} />;
};

export default Canvas;
