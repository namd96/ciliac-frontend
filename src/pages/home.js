import React, { useContext, useEffect, useState } from 'react'
import '../styles/home.css';
import Login from '../components/login';
import { requests } from '../api/searchAgent'
import SearchBox from '../components/smartInputBox';
import { Table, Button, Modal, FormControl } from 'react-bootstrap';
// import { observer } from 'mobx-react';
import ProductContext, { ProductConsumer } from '../context/productContext'
import EnquireForm from '../components/enquiryForm';
import CreateProductForm from '../components/createProductForm';
var ProductData;

// @observer
const Home = props => {
    const productState = useContext(ProductContext);


    useEffect(() => {
        console.log("rendered this", productState.results)
        if (localStorage.hasOwnProperty("userData")) {
            productState.fetchProducts()
        }

    }, [])





    const loginCalled = () => {
        console.log("rendered this")
        requests.setToken()
        productState.fetchProducts();
    }
    const handleSearchInput = (query) => {
        productState.fetchProducts(query)
    }

    let content;
    console.log("[results]", ProductData)
    if (localStorage.hasOwnProperty("userData")) {
        content = (
            <div >

            
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Company Name</th>
                                <th>Gluten Free</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !!productState.results && productState.results.map((el, idx) => {
                                    return <tr>
                                        <td>{idx + 1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.company}</td>
                                        <td>{el.glutonFree ? "Yes" : "No"}</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </Table>

                    {/* {results && JSON.stringify(results)} */}


                <div style={{ display: "flex" , justifyContent : "space-around"}}>
                    <EnquireForm />
                    <CreateProductForm />
                </div>

            </div>
            // </ProductConsumer>

        )
    } else {
        content = (
            <Login loginCalled={loginCalled.bind(this)} />
        )
    }
    return content
}


export default Home;