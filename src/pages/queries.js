import React, { useContext, useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import '../styles/home.css';
import Login from '../components/login';
import { requests, testing } from '../api/searchAgent'
import SearchBox from '../components/smartInputBox';
import { Table, Button, Modal, FormControl, OverlayTrigger, Popover } from 'react-bootstrap';
// import { observer } from 'mobx-react';
import ProductContext, { ProductConsumer } from '../context/productContext'
import EnquireForm from '../components/enquiryForm';
import CreateProductForm from '../components/createProductForm';
import Icon from '@material-ui/core/Icon';
import { Redirect } from 'react-router-dom';
import { fcall } from 'q';
import paginationFactory from 'react-bootstrap-table2-paginator';
var ProductData;

// @observer
const Queries = props => {
    const productState = useContext(ProductContext);
    const [wantsToSeeDetails, setWantsToSeeDetails] = useState({ redirect: false, id: false });
    const [productDetails, setProductDetails] = useState(false);


    useEffect(() => {
        requests.call("get", `queries`)
            .then((res) => {
                console.log(res);
                setProductDetails(res.data)
            })
    }, [])


    const handleVoting = (details, key) => {
        requests.call("post", `create/product`, { name: details.name, description: details.description, glutonFree: (key == "up") ? 1 : 0, user_email: details.user_email })
            .then((res) => {
                console.log(res);
                productState.fetchProducts();
                requests.call("delete", `query/${details._id}`)
                .then((res)=>{
                setProductDetails(res.data)

                })


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
            redirect: true,
            id: id
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
                    <i class="material-icons-outlined" onClick={handleVoting.bind(this, row, "up")} >thumb_up</i>
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
                    <i class="material-icons-outlined" onClick={handleVoting.bind(this, row, "down")}>thumb_down</i>
                </OverlayTrigger>


            </div>
        )
    }
    const detailsBTNFormatter = (cell, row) => {
        return (
            <i onClick={handleViewDetails.bind(this, row._id)} class="material-icons-outlined">explore</i>
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
            dataField: 'description',
            text: 'Description',
        },
        // {
        //     dataField: 'upvotes',
        //     text: 'Upvotes / Downvotes',
        //     headerFormatter: informationFormatterVotes,
        //     formatter: votesFormatter,

        // },
        {
            dataField: '',
            text: 'Resolve the query',
            formatter: voteFormatter,

        },
        {
            dataField: 'user_email',
            text: 'Enquirer email',
            // formatter: detailsBTNFormatter,

        },
    ]

    let content;

    console.log("[results]", ProductData)
    if (localStorage.hasOwnProperty("userData")) {
        content = (
            <div className="table-container-center">

                {/* <div className="general-heading">Look for a product to know what people think about its gluten content !</div> */}
                {!!productDetails && <BootstrapTable bordered={false} keyField='id' data={productDetails} columns={columns} pagination={paginationFactory()} />}



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


export default Queries;
