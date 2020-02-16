import React, { Component } from "react";

class AddButton extends Component {
    render() {
        var btnStyle = "add-item-button";

        return (
            <div>
                <button 
                    type="submit"
                    className={btnStyle}>
                    add
                </button>
            </div>
        )
    }
}

export default AddButton;