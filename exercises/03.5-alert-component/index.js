import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Alert = function() {
	return (
		<div className="alert alert-danger" role="alert">
			OMG! Something really bad has happended!
		</div>
	);
};
ReactDOM.render(<Alert text="OMG! Something really bad has happended!" />, document.querySelector("#myDiv"));
