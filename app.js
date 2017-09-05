import Checkbox from "./components/Checkbox";
import React from "react";
import ReactDOM from "react-dom";
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

require('./style.scss');

const embed = document.getElementById('embed');
ReactDOM.render(<Checkbox />, embed);
