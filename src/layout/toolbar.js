import React, { useContext, useState } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import SearchBox from '../components/smartInputBox'
import { requests } from '../api/searchAgent';
import GlobalContext from '../context/productContext';
import { longStackSupport } from 'q';
import { Redirect } from 'react-router-dom';
import EnquireForm from '../components/enquiryForm';
import CreateProductForm from '../components/createProductForm';

const Toolbar = (props) => {
    const productState = useContext(GlobalContext);

    const [loggedout, setLoggedOut] = useState(false)
    const [redirection, setRedirection] = useState(false)
    const handleSearchInput = (query) => {
        productState.fetchProducts(query)

        // fetchProducts(query)

        // if (!query) {
        //     requests.call("get", `products?glutenFree=${this.state.filtered}`)
        //         .then((res) => {
        //             console.log("setting the state with", res)
        //             this.setState({
        //                 results: res.data
        //             })

        //         })
        //         .catch(() => {
        //             this.setState({
        //                 results: false
        //             })
        //         })
        // } else requests.call("get", `products?query=${query}&glutenFree=${this.state.filtered}`)
        //     .then((res) => {
        //         console.log("setting the state with", res)
        //         this.setState({
        //             results: res.data
        //         })

        //     })
        //     .catch(() => {
        //         this.setState({
        //             results: false
        //         })
        //     })
    }

    const logout = () => {
        window.localStorage.clear();
        setLoggedOut(true)
        // window.location.reload()


    }
    const handleRedirect = (path) => {

        setRedirection(path)
        // window.location.reload()


    }


    return (
        // <ProductProvider value={this.state.results || {name : "test"} }>

        <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link  href="#" onClick={handleRedirect.bind(this,"/")}>Home</Nav.Link>
                    <Nav.Link  href="#" onClick={handleRedirect.bind(this,"/queries")}>Queries</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
            <Form inline>
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                <SearchBox wait={true}
                    // handleCheckboxChange={this.handleCheckboxChange.bind(this)}
                    callingApiFunction={handleSearchInput.bind(this)}
                // filtered={this.state.filtered} 
                />
                <EnquireForm />
                <CreateProductForm />
                <Button  style={{marginTop : "4px",marginBottom : "4px", display : localStorage.hasOwnProperty("userData") ? "" : "none"}} variant="outline-success color" onClick={logout.bind(this)}>Log Out</Button>
            </Form>
            {loggedout && <Redirect push to="/" />}
            {redirection && <Redirect push to={redirection} />}
        </Navbar>
        // </ProductProvider>
    )

}

export default Toolbar;