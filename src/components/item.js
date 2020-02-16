import React, { Component } from "react";
import { store } from '../store/store';
import { toggleCompleteItem } from '../actions/toggleCompleteItem';
import { Container, Row, Col} from "reactstrap";
import RemoveButton from './removeButton'

class Item extends Component {
    render() {

        const dispatchAction = (item) => {
            store.dispatch(toggleCompleteItem(item.id));
        };

        return (
            <li 
                className = {this.props.item.complete ? "completed-todo-item" : "todo-item" }>
                <Container fluid={true}>
                    <Row noGutters={true}>
                        <Col xs={{size: 9}}>
                            <div onClick={() => dispatchAction(this.props.item)}>{this.props.item.text}</div>
                        </Col>
                        <Col xs={{size: 3}}>
                            <RemoveButton item={this.props.item} />
                        </Col>
                    </Row>
                </Container>
                
                
            </li>
        )
    }
}

export default Item;

