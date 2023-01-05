import LinkingNodes from "./LinkingNodes";
import JumbotronHeading from "./JumbotronHeading";
import "./../styles/jumbotron.scss";


const Jumbotron = () => (
	<div
		className="container-fluid">
		<div
			className="row"
			style={{ height: window.innerHeight * 1.07 }}>
			<LinkingNodes />
			<div className="col-8 offset-2 d-flex flex-column justify-content-center align-items-center">
				<JumbotronHeading
					text="Elliot Redhead"
					subtext="Web Developer" />
				<p id="email-contact">
					elliot@elliotredhead.com
				</p>
			</div>
		</div>
	</div>
);

export default Jumbotron;
