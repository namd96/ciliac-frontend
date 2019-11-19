import React from 'react'
import '../styles/chat.css';
import { requests } from '../api/searchAgent'
import SearchBox from '../components/smartInputBox';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';
import openSocket from 'socket.io-client';
import Agent from 'superagent'
// var socket = openSocket('http://localhost:8060');

// const baseUrl = "https://3c100fe1.ngrok.io"
const baseUrl = "http://localhost:8060"





export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{ text: "something" }, { text: "test" }],
            fromId: 1,
            toId: 2,
            message: "",

        }
    }

    componentDidMount() {
        this.socket = openSocket(`${window.location.origin.replace("3001","8060")}`);
        console.log(this.state.list)
        this.socket.on('chat', (data) => {
            this.setState({
                list : this.state.list.concat({text : data.message})
            })
        });
        // this.socket.emit('chat', this.state.message);

        // var socket = io();
    }

    onSend() {
        console.log("message", this.state.message)
        this.socket.emit('chat', this.state.message);
        this.setState({
            message : ""
        })
        // Agent.post(`${baseUrl}/${url}`)
        // .send({message : this.state.message})
        // .then((res) => {
        //     console.log("[from Agent]", res.body);
        //     return res.body
        // })
    }
    handleMessageTyping(message) {
        console.log("message", message)
        this.setState({ message: message })
    }

    render() {
        const url = `chat?from=${this.state.fromId}&to=${this.state.toId}`
        return (
            <div className="chatbox-container">
                <div className="chat-displayer">{JSON.stringify(this.state.list)}
                    {this.state.list && this.state.list.map((el, idx) => {
                        return <div className="message-displayer"><div className="text-container">{el.text}</div></div>
                    })}
                    {/* <div className="message-displayer"><div className="text-container">{this.state.message}</div></div> */}
                </div>

                <div className="mb-3">
                    {/* <InputGroup.Prepend> */}
                    {/* <input type="text" onChange={(e) => this.handleMessageTyping(e.target.value)}
                    value={this.state.message}                    id="inputGroup-sizing-default"></input> */}
                    {/* </InputGroup.Prepend> */}
                    <FormControl
                     onChange={(e) => this.handleMessageTyping(e.target.value)}
                        aria-label="Default"
                        value={this.state.message.message} 
                        aria-describedby="inputGroup-sizing-default"
                    />
                    <Button onClick={() => this.onSend()} variant="info">Send</Button>
                </div>
            </div>
        )
    }


}