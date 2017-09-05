import React from "react";
import ReactDOM from "react-dom";

class Checkbox extends React.Component {
    // React components are simple functions that take in props and state, and render HTML
    render() {
        return (
            <div>{/* React components must have a wrapper node/element */}
                <div className="form-group">
                    <input type="checkbox" id="simpleInput" />
                    <h1>This is:</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Checkbox />, document.getElementById('embed'));
