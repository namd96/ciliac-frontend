import React from 'react'
// import { timeout } from 'q';


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
                <input type="text" onChange={this.handleInputChange.bind(this)} className="ciliac-searchbox"></input>
                <input type="checkbox" className="ciliac-checkbox"></input>Gluten Free
            </div>
        )
    }
}