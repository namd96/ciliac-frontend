import React, { useContext, useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import '../styles/home.css';
import Login from '../components/login';
import { requests } from '../api/searchAgent'
import SearchBox from '../components/smartInputBox';
import { Table, Button, Modal, FormControl, OverlayTrigger, Popover } from 'react-bootstrap';
// import { observer } from 'mobx-react';
import ProductContext, { ProductConsumer } from '../context/productContext'
import EnquireForm from '../components/enquiryForm';
import CreateProductForm from '../components/createProductForm';
import Icon from '@material-ui/core/Icon';
import {Redirect} from 'react-router-dom'
import { fcall } from 'q';
var ProductData;

// @observer
const Home = props => {
    const productState = useContext(ProductContext);
    const [wantsToSeeDetails, setWantsToSeeDetails] = useState({redirect : false,id : false});


    useEffect(() => {
        console.log("rendered this", productState.results)
        if (localStorage.hasOwnProperty("userData")) {
            productState.fetchProducts()
        }

    }, [])


    const handleVoting = (id, key) => {
        requests.call("post", `vote/${id}?type=${key}`)
            .then((res) => {
                console.log(res);
                productState.fetchProducts()
            })
    }


    const loginCalled = () => {
        console.log("rendered this")
        requests.setToken()
        productState.fetchProducts();
    }
    const handleSearchInput = (query) => {
        productState.fetchProducts(query)
    }
    const handleViewDetails = (id) => {
        console.log("setting", id)
        setWantsToSeeDetails({
            ...wantsToSeeDetails,
            redirect : true,
            id : id
        })
    }
    const voteFormatter = (cell, row) => {
        return (
            <div>
                <OverlayTrigger
                    trigger="hover"
                    placement={"top"}
                    overlay={
                        <Popover id={`popover-positioned-${"top"}`}>
                            <Popover.Title as="h3">{`Popover ${"top"}`}</Popover.Title>
                            <Popover.Content>
                                Vote this product as {` `}<strong>Gluten Free</strong>
                            </Popover.Content>
                        </Popover>
                    }
                >
                    <i class="material-icons-outlined" onClick={handleVoting.bind(this, row._id, "up")} >thumb_up</i>
                </OverlayTrigger>
                {` `} {` `}
                <OverlayTrigger
                    trigger="hover"
                    placement={"top"}
                    overlay={
                        <Popover id={`popover-positioned-${"top"}`}>
                            <Popover.Title as="h3">{`Popover ${"top"}`}</Popover.Title>
                            <Popover.Content>
                                Vote this product as {` `}<strong>Contains Gluton</strong>

                            </Popover.Content>
                        </Popover>
                    }
                >
                    <i class="material-icons-outlined" onClick={handleVoting.bind(this, row._id, "down")}>thumb_down</i>
                </OverlayTrigger>


            </div>
        )
    }
    const detailsBTNFormatter = (cell, row) => {
        return (
            <i onClick={handleViewDetails.bind(this,row._id)} class="material-icons-outlined">explore</i>
        )
    }
    const informationFormatterVotes = (cell, row) => {
        return (
            <div>Upvotes
            <OverlayTrigger
                    trigger="hover"
                    placement={"top"}
                    overlay={
                        <Popover id={`popover-positioned-${"top"}`}>
                            <Popover.Title as="h3">{`Popover ${"top"}`}</Popover.Title>
                            <Popover.Content>
                                Votes received on this product as {` `}<strong>Gluten Free</strong>

                            </Popover.Content>
                        </Popover>
                    }
                >
                    <i class="material-icons-outlined md-10">info</i>
                </OverlayTrigger>

                {` `} /{` `}

                Downvotes
            <OverlayTrigger
                    trigger="hover"
                    placement={"top"}
                    overlay={
                        <Popover id={`popover-positioned-${"top"}`}>
                            <Popover.Title as="h3">{`Popover ${"top"}`}</Popover.Title>
                            <Popover.Content>
                                Vote received this product as {` `}<strong>Contains Gluton</strong>

                            </Popover.Content>
                        </Popover>
                    }
                >
                    <icon class="material-icons-outlined md-10">info</icon>
                </OverlayTrigger>
            </div>
        )
    }
    const votesFormatter = (cell, row) => {
        return (
            <div>
                {row.upvotes} {` / `} {row.downvotes}
            </div>
        )
    }
    const columns = [
        {
            dataField: '_id',
            text: '#'
        },
        {
            dataField: 'name',
            text: 'Product Name'
        },
        {
            dataField: 'company',
            text: 'Company Name',
        },
        {
            dataField: 'upvotes',
            text: 'Upvotes / Downvotes',
            headerFormatter: informationFormatterVotes,
            formatter: votesFormatter,

        },
        {
            dataField: '',
            text: 'Drop your vote',
            formatter: voteFormatter,

        },
        {
            dataField: '',
            text: 'View Details',
            formatter: detailsBTNFormatter,

        },
    ]

    let content;
    if(wantsToSeeDetails.redirect){
        return (
            <Redirect push to={`/product/${wantsToSeeDetails.id}`}></Redirect>
        )
    }
    console.log("[results]", ProductData)
    if (localStorage.hasOwnProperty("userData")) {
        content = (
            <div >

                <h2>Track your products' gluten content</h2>
                {!!productState.results && <BootstrapTable bordered={false} keyField='id' data={productState.results} columns={columns} />}



                {/* {results && JSON.stringify(results)} */}


                <div style={{ display: "flex", justifyContent: "space-around" }}>
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