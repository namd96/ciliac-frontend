import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import SearchBox from '../components/smartInputBox'
import { requests } from '../api/searchAgent';
import { ProductProvider } from '../context/productContext'

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: false
        }
    }

    handleSearchInput(query) {
        if (!query) {
            requests.call("get", `products?glutenFree=${this.state.filtered}`)
                .then((res) => {
                    console.log("setting the state with", res)
                    this.setState({
                        results: res.data
                    })

                })
                .catch(() => {
                    this.setState({
                        results: false
                    })
                })
        } else requests.call("get", `products?query=${query}&glutenFree=${this.state.filtered}`)
            .then((res) => {
                console.log("setting the state with", res)
                this.setState({
                    results: res.data
                })

            })
            .catch(() => {
                this.setState({
                    results: false
                })
            })
    }
    handleCheckboxChange() {
        this.setState({
            filtered: !this.state.filtered
        })
    }
    render() {

        return (
            <ProductProvider value={this.state.results || {name : "test"} }>

                <Navbar bg="light" expand="lg">
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/queries">Queries</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Form inline>
                            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                            <SearchBox wait={true}
                                handleCheckboxChange={this.handleCheckboxChange.bind(this)}
                                callingApiFunction={this.handleSearchInput.bind(this)}
                                filtered={this.state.filtered} />
                            {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </ProductProvider>
        )
    }
}