import React from "react";
import ReactDOM from "react-dom";

export default class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {checked: true};
    }
    handleChecked(){
        if(this.state.checked){
            this.setState({checked: !this.state.checked})
        } else {
            this.setState({checked: true})
        }
}
    render() {
        let msg;
        if(this.state.checked){
            msg = "checked!!"
        } else {
            msg = "unchecked!";
        }
        return (
            <div>{/* React components must have a wrapper node/element */}
                <div className="form-group">
                    <input type="checkbox" id="simpleInput" onChange={this.handleChecked.bind(this)} defaultChecked={this.state.checked} />
                    <h1>This is: {msg}</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Checkbox />, document.getElementById('embed'));
