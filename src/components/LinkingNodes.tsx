import Canvas from "./Canvas";
import "../styles/canvas.scss";

interface nodeAttrs {
	initialX: number;
	posX: number;
	transformX: number;
	transformXDirection: boolean;
	initialY: number;
	posY: number;
	transformY: number;
	transformYDirection: boolean;
	initialOpacity: number;
	opacity: number;
	opacityChange: number;
	opacityDirection: boolean;
	hue: number
}

const LinkingNodes = ():JSX.Element => {
	const canvasWidth = window.innerWidth;
	const canvasHeight = window.innerHeight * 1.07;
	const randomDirection = () => Math.random() > 0.5;
	const numberNodes = Math.round((canvasWidth * canvasHeight)/3500);

	const nodeAttrs:nodeAttrs[] = [];
	for (let i=0; i < numberNodes; i++){
		const initialX = Math.floor(Math.random() * canvasWidth);
		const initialY = Math.floor(Math.random() * canvasHeight);
		nodeAttrs.push(
			{
				"initialX": initialX,
				"posX": initialX,
				"transformX": Math.random() * 0.001 + 0.0005,
				"transformXDirection": randomDirection(),
				"initialY": initialY,
				"posY": initialY,
				"transformY": Math.random() * 0.001 + 0.0001,
				"transformYDirection": randomDirection(),
				"initialOpacity": (Math.random()*3-1),
				"opacity": (Math.random()*3-1),
				"opacityChange": Math.random() * 0.005,
				"opacityDirection": randomDirection(),
				"hue": Math.random() * (300-221) + 221
			}
		);
	}

	const draw = (ctx:canvasContext, frameCount:number) => {
		if (ctx) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			for (let i=0; i<nodeAttrs.length; i++){
				const opacityStep = frameCount * Math.sin(nodeAttrs[i].opacityChange);
				i % 3 !== 0 ? nodeAttrs[i].opacity += opacityStep: nodeAttrs[i].opacity -= opacityStep;
				ctx.fillStyle = `hsl(${nodeAttrs[i].hue},65%,45%,${nodeAttrs[i].opacity})`;
				ctx.beginPath();
				
				const xTransformMagnitude = 500 * Math.sin(nodeAttrs[i].transformX);
				nodeAttrs[i].transformXDirection ?
					nodeAttrs[i].posX += xTransformMagnitude :
					nodeAttrs[i].posX -= xTransformMagnitude;
				if (nodeAttrs[i].posX < 0|| nodeAttrs[i].posX > canvasWidth) {
					nodeAttrs[i].transformXDirection = !nodeAttrs[i].transformXDirection;
				}
				
				const yTransformMagnitude = 500 * Math.sin(nodeAttrs[i].transformY);
				nodeAttrs[i].transformYDirection ?
					nodeAttrs[i].posY += yTransformMagnitude :
					nodeAttrs[i].posY -= yTransformMagnitude;

				if (nodeAttrs[i].posY < 0 || nodeAttrs[i].posY > canvasHeight) {
					nodeAttrs[i].transformYDirection = !nodeAttrs[i].transformYDirection;
				}
			
				ctx.arc(nodeAttrs[i].posX, nodeAttrs[i].posY, 3, 0, 2*Math.PI);
				ctx.fill();

				for (let j=i; j<nodeAttrs.length; j++){
					if (i!==j && j>i){
						const dx = nodeAttrs[i].posX - nodeAttrs[j].posX;
						const dy = nodeAttrs[i].posY - nodeAttrs[j].posY;
						const distance = Math.sqrt((dx)**2 + (dy)**2);
						if (distance < 150 && nodeAttrs[i].opacity >= 0.15 && nodeAttrs[j].opacity >= 0.15){
						// Stroke opacity determined by distance between node or node opacity (whichever is weaker)
							const strokeOpacity = (150 - distance) * 0.01;
							const lineHue = ((nodeAttrs[i].hue + nodeAttrs[j].hue)/2);
							if (strokeOpacity > 0.2){
								ctx.beginPath();
								ctx.strokeStyle = `hsl(${lineHue},85%,55%,${strokeOpacity})`;
								ctx.moveTo(nodeAttrs[i].posX, nodeAttrs[i].posY);
								ctx.lineTo(nodeAttrs[j].posX, nodeAttrs[j].posY);
								ctx.stroke();
							}
						}
					}
				}
			}
		}
	};
	return <Canvas
		draw={draw}
		canvasWidth={canvasWidth}
		canvasHeight={canvasHeight} />;
};

export default LinkingNodes;
