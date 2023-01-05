import { useState, useRef, useLayoutEffect } from "react";
import useTypewriter from "react-typewriter-hook";

interface props {
	text: string
	subtext: string
	backgroundColor?: string
	textColor?: string
}

const JumbotronHeading = (props:props):JSX.Element => {
	const { text, subtext, backgroundColor, textColor } = props;
	const animatedHeading = useTypewriter(text);
	const [cursorDisplay, setCursorDisplay] = useState("_");
	const titleReference = useRef<HTMLDivElement>(null);
	const additionalSubheadingClasses = useRef("invisible");
	
	useLayoutEffect(() => {
		const titleNode = titleReference.current;
		additionalSubheadingClasses.current = "invisible";

		if (titleNode && titleNode.innerHTML.startsWith(text)) {
			additionalSubheadingClasses.current = "subheading-fade";
			const interval = setInterval(() => {
				cursorDisplay === "" ? setCursorDisplay("_") : setCursorDisplay("");
			}, 700);
			return () => clearInterval(interval);
		}
	}, [animatedHeading, cursorDisplay, text]);

	return (
		<div
			id="jumbotron-heading"
			className="justify-content-center">
			<div style={{ "background": backgroundColor||"#000", "color": textColor||"#fff" }}>
				<h1
					id="title-heading"
					ref={titleReference}
					className="text-center mb-3">
					{animatedHeading}
					<span id="title-cursor">
						{cursorDisplay}
					</span>
				</h1>
				<h2
					id="sub-heading"
					className={`text-center ${additionalSubheadingClasses.current}`}>
					{subtext}
				</h2>
			</div>
		</div>
	);
};

export default JumbotronHeading;
