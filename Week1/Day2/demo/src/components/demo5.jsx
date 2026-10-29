import React from "react";

class Football extends React.Component {
    shoot = () => {
        alert(this);
        /*
        The 'this' keyword refers to the component object
        */
    }
    render() {
        return (
            <button onClick={this.shoot}>Take the shot!</button>
        );
    }
}

export default Football;