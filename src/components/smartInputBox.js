import React from 'react'
// import { timeout } from 'q';
import {  FormControl } from 'react-bootstrap';


export default class smartInputBox extends React.Component {
    constructor(props) {
        super(props)
    }

    handleInputChange(event) {
        var _scope = this;
        var query = event.target.value;

        this.setState({
            latestUpdatedOn: new Date().getTime()
        })
        setTimeout(function () {
            if (_scope.props.wait && new Date().getTime() - _scope.state.latestUpdatedOn >= 900) {
                _scope.props.callingApiFunction(query)
            }
        }, 900)
    }

    render() {
        return (
            <div>
                <FormControl type="text" onChange={this.handleInputChange.bind(this)} placeholder="Search products..." className="mr-sm-2" />
                
            </div>
        )
    }
}