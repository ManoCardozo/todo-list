import React, { Component } from "react";
import { connect } from 'react-redux';
import Item from './item'

class List extends Component {
    render() {
        let isEmpty  = this.props.items.length <= 0;

        if (isEmpty) {
            return (
                <div>
                    <p className="empty-list-message">Your list is empty</p>
                </div>
            )
        }
        else {
            return (
                <ul className="todo-list">
                    {
                        this.props.items.map(todoItem => (
                            <Item item={todoItem} />
                        ))
                    }
                </ul>
            )
        }
    }
}

const mapStateToProps = function(state) {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(List);