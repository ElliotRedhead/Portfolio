interface certificateData {
	id:number,
	certName:string,
	shortDesc:string,
	certLink:string,
	proficiency:string
}

const certificateData: certificateData[] = [
	{
		id: 1,
		certName: "Code Institute Full Stack Bootcamp",
		shortDesc: "",
		certLink: "https://elliot-portfolio.s3.eu-west-2.amazonaws.com/Elliot-Redhead-Code-Institute-First-Class.pdf",
		proficiency: ""
	},
	{
		id: 2,
		certName: "React, The Big Picture",
		shortDesc: "",
		certLink: "https://elliot-portfolio.s3.eu-west-2.amazonaws.com/react-the-big-picture.pdf",
		proficiency: "React"
	},
	{
		id: 3,
		certName: "React Fundamentals",
		shortDesc: "",
		certLink: "https://elliot-portfolio.s3.eu-west-2.amazonaws.com/react-fundamentals.pdf",
		proficiency: "React"

	},
	{
		id: 4,
		certName: "Building Applications With React And Redux",
		shortDesc: "",
		certLink: "https://elliot-portfolio.s3.eu-west-2.amazonaws.com/building-applications-with-react-and-redux.pdf",
		proficiency: "React"
	},
	{
		id: 5,
		certName: "Using React Hooks",
		shortDesc: "",
		certLink: "https://elliot-portfolio.s3.eu-west-2.amazonaws.com/using-react-hooks.pdf",
		proficiency: "React"
	}
];

export default certificateData;
