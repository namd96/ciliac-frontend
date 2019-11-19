import React, { useContext, useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import '../styles/home.css';
import Login from '../components/login';
import { requests, testing } from '../api/searchAgent'
import SearchBox from '../components/smartInputBox';
import { Table, Button, Modal, FormControl, OverlayTrigger, Popover, Card } from 'react-bootstrap';
// import { observer } from 'mobx-react';
import ProductContext, { ProductConsumer } from '../context/productContext'

import Icon from '@material-ui/core/Icon';
import { Redirect } from 'react-router-dom';
import { fcall } from 'q';
import paginationFactory from 'react-bootstrap-table2-paginator';
var ProductData;

// @observer
const Home = props => {
    const productState = useContext(ProductContext);
    const [wantsToSeeDetails, setWantsToSeeDetails] = useState({ redirect: false, id: false });
    const [viewPortWidth, setViewPortWidth] = useState(false);


    useEffect(() => {
        console.log("rendered this", productState.results)
        if (localStorage.hasOwnProperty("userData")) {
            productState.fetchProducts()
        }
        setViewPortWidth(document.documentElement.clientWidth)
        // testing();

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
                            <Popover.Title as="h3">Gluten Free</Popover.Title>
                            <Popover.Content>
                                Vote this product as {` `}<strong>Gluten Free</strong>
                            </Popover.Content>
                        </Popover>
                    }
                >
                    <i class="material-icons-outlined green" onClick={handleVoting.bind(this, row._id, "up")} >thumb_up</i>
                </OverlayTrigger>
                {` `} {` `}
                <OverlayTrigger
                    trigger="hover"
                    placement={"top"}
                    overlay={
                        <Popover id={`popover-positioned-${"top"}`}>
                            <Popover.Title as="h3">Contains Gluten</Popover.Title>
                            <Popover.Content>
                                Vote this product as {` `}<strong>Contains gluten</strong>

                            </Popover.Content>
                        </Popover>
                    }
                >
                    <i class="material-icons-outlined red" onClick={handleVoting.bind(this, row._id, "down")}>thumb_down</i>
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
                            {/* <Popover.Title as="h3">The votes a product received as gluten free</Popover.Title> */}
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
                            {/* <Popover.Title as="h3">The votes a product received as it contains gluten</Popover.Title> */}
                            <Popover.Content>
                                Vote received this product as {` `}<strong>Contains gluten</strong>

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
                <span className="green">{row.upvotes || 0}</span> {` / `} <span className="red">{row.downvotes || 0}</span>
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
            dataField: 'source_of_info',
            text: 'Source of information',
            // formatter: voteFormatter,

        },
        {
            dataField: '',
            text: 'View Details',
            formatter: detailsBTNFormatter,

        },
    ]

    let content;
    if (wantsToSeeDetails.redirect) {
        return (
            <Redirect push to={`/product/${wantsToSeeDetails.id}`}></Redirect>
        )
    }
    console.log("[results]", ProductData)
    if (localStorage.hasOwnProperty("userData")) {
        content = (
            <div className="table-container-center">

                {/* <div className="general-heading">Look for a product to know what people think about its gluten content !</div> */}
                {
                    viewPortWidth < "768" ? <div style={{ marginTop: '2rem' }}>
                        {
                            productState.results && productState.results.map((el, idx) =>
                                <div  >

                                    <Card bg="info" text="white" style={{ width: '18rem' }} key={idx}>

                                        <Card.Header>{el.name}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{el.company}</Card.Title>
                                            <Card.Text>
                                                <div style={{ display: "flex", justifyContent: "space-around" }}>

                                                    <Button>
                                                        <span className="votes-on-card">

                                                            {el.upvotes || 0}
                                                        </span>
                                                        <i style={{ verticalAlign: "sub" }} class="material-icons-outlined white" onClick={handleVoting.bind(this, el._id, "up")} >thumb_up</i>
                                                    </Button>
                                                    <Button>
                                                        <span className="votes-on-card" >

                                                            {el.downvotes || 0}
                                                        </span>
                                                        <i class="material-icons-outlined red" style={{ verticalAlign: "sub" }} onClick={handleVoting.bind(this, el._id, "down")} >thumb_down</i>
                                                    </Button>
                                                </div>

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </div>
                            )
                        }

                    </div> :

                        !!productState.results && <BootstrapTable bordered={false} keyField='id' data={productState.results} columns={columns} pagination={paginationFactory()} />}



                {/* {results && JSON.stringify(results)} */}


                <div style={{ display: "flex", justifyContent: "space-around" }}>

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