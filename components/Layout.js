import React from "react";
import Header from "./Header";
import Footer from "./Footer";


export default class Layout extends React.Component {

    render() {
    const title = "Welcome a board!";
        return (
            <div>
            <Header title={title}/>
            <Footer />
            </div>
        );
    }
}