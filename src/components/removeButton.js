import React, { Component } from "react";
import { removeItem } from '../actions/removeItem';
import { store } from '../store/store';

class RemoveButton extends Component {
    render() {
        const dispatchAction = (item) => {
            store.dispatch(removeItem(item.id));
        };

        return (
            <div>
                <button
                    className = {this.props.item.complete ? "remove-item-button" : "button-hidden" }
                    onClick={() => dispatchAction(this.props.item)}>
                    delete
                </button>

            </div>
        )
    }
}

export default RemoveButton;