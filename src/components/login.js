import React from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import { requests } from '../api/searchAgent'
export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authCreds: {
                username: "",
                password: "",
                name: "",
                ciliac_patient: false
            }
        }
    }

    toggleRegister() {
        this.setState({
            openRegister: !this.state.openRegister
        })
    }
    handleInputChange = event => {
        this.setState({
            authCreds: {
                ...this.state.authCreds,
                [event.target.name]: event.target.value
            }
        })
    }
    handleSubmit = (endpoint) => {
        requests.rawCall("post",endpoint, this.state.authCreds)
            .then((res) => {
                if (!res.err && endpoint == "login") {
                    localStorage.setItem("userData", res.token)
                    this.props.loginCalled()
                } else if ((!res.err && endpoint == "register")) {
                    alert("Yay,registered successfully! please login again.")
                    this.toggleRegister()
                } else {
                    alert(res.msg)
                }
            })
    }

    handelCilacToggle() {
        this.setState({
            authCreds: {
                ...this.state.authCreds,
                ciliac_patient: !this.state.authCreds.ciliac_patient
            }
        })
    }

    render() {
        if (this.state.openRegister) {
            return (
                <Card style={{ width: '28rem', color: "black" }}>

                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Card.Subtitle className="mb-2" style={{ textAlign: "left" }}>
                                    Name
                            </Card.Subtitle>
                                <Form.Control type="text" placeholder="Enter name"
                                    onChange={this.handleInputChange.bind(this)}
                                    name="name"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Card.Subtitle className="mb-2" style={{ textAlign: "left" }}>
                                    Username
                            </Card.Subtitle>
                                <Form.Control type="text" placeholder="Enter email"
                                    onChange={this.handleInputChange.bind(this)}
                                    name="username"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Card.Subtitle className="mb-2" style={{ textAlign: "left" }}>Password</Card.Subtitle>
                                <Form.Control type="password" placeholder="Password"
                                    onChange={this.handleInputChange.bind(this)}
                                    name="password"
                                />
                            </Form.Group>
                            <div style={{ marginBottom: "3%" }}>

                                <Card.Link style={{ marginLeft: "2px", cursor: "pointer" }} >Are you a ciliac patient?</Card.Link>

                                <div className="toggle-button">
                                    <div onClick={() => this.handelCilacToggle()}
                                        className="toggle-button-box">
                                        <div className="toggle-button-oval" style={{
                                            float: (this.state.authCreds.ciliac_patient) ? "right" : "left",
                                            backgroundColor: (this.state.authCreds.ciliac_patient) ? "#BEA57C" : "#BDBDBD"
                                        }}>
                                        </div>
                                    </div >
                                </div>
                            </div>
                            <Button
                                onClick={this.handleSubmit.bind(this, "register")}
                                variant="primary">
                                Submit
                            </Button>

                            <Card.Link style={{ marginLeft: "2px", cursor: "pointer" }} onClick={this.toggleRegister.bind(this)}>Already have an account? Register</Card.Link>
                        </Form>
                    </Card.Body>
                </Card>
            )
        } else return (
            <Card style={{ width: '28rem', color: "black" }}>

                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Card.Subtitle className="mb-2" style={{ textAlign: "left" }}>
                                Username
                            </Card.Subtitle>
                            <Form.Control type="text" placeholder="Enter email"
                                onChange={this.handleInputChange.bind(this)}
                                name="username"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Card.Subtitle className="mb-2" style={{ textAlign: "left" }}>Password</Card.Subtitle>
                            <Form.Control type="password" placeholder="Password"
                                onChange={this.handleInputChange.bind(this)}
                                name="password"
                            />
                        </Form.Group>
                        <Button
                            onClick={this.handleSubmit.bind(this, "login")}
                            variant="primary">
                            Submit
                        </Button>
                        <Card.Link style={{ marginLeft: "2px", cursor: "pointer" }} onClick={this.toggleRegister.bind(this)}>Don't have an account? Register</Card.Link>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}