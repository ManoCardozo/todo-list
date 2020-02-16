import React, { Component } from "react";
import { store } from '../store/store';
import { addItem } from '../actions/addItem';
import { Container, Row, Col} from "reactstrap";
import AddButton from './addButton';

class Input extends Component {
    render() {
        let input

        var handleSubmit = (e) => {
            e.preventDefault();
    
            if (!input.value.trim()) {
                return
            }
            
            store.dispatch(addItem(input.value));
            input.value = ''
        };

        return (
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                <Container fluid={true}>
                    <Row noGutters={true}>
                        <Col xs={{size: 10}}>
                            <div className="list-wrapper">
                                <input 
                                    className="add-item-textbox"
                                    placeholder="enter a task" 
                                    ref={item => input = item}>
                                </input>
                            </div>
                        </Col>
                        <Col xs={{size: 2}}>
                            <AddButton />
                        </Col>
                    </Row>
                </Container>
                </form>
            </div>
        )
    }
}

export default Input;