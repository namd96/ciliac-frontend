import React, { useContext, useEffect, useState } from 'react';
import { requests } from '../api/searchAgent'
import { Button, Modal, FormControl, OverlayTrigger, Popover, Card } from 'react-bootstrap';

const ProductDetails = props => {
    const [productDetails, setProductDetails] = useState(false);
    const [comments, setComments] = useState(false);
    const [comment, setComment] = useState("");
    const [concernForm, setConcernForm] = useState(false);
    const [concern, setConcern] = useState({
        concern : "",
        user_email : ""
    });
    useEffect(() => {
        getData();
        getComments();
    }, [])
    const getData = () => {
        requests.call("get", `product/${props.match.params.id}`)
            .then((res) => {
                console.log(res);
                setProductDetails(res.data[0])
            })

    }
    const getComments = () => {
        requests.call("get", `comments/${props.match.params.id}`)
            .then((res) => {
                console.log(res);
                setComments(res.data)
            })

    }
    const handleCommentChange = (e) => {
        setComment(e.target.value)

    }
    const handleRaiseConcern = () => {
        setConcernForm(true)

    }
    const handleClose = () => {
        setConcernForm(false)
    }
    
    const submitConcern = () =>{
        
        requests.call("post", `concern/${props.match.params.id}`,  concern )
        .then((res) => {
            setConcern({
                concern : "",
                user_email : ""
            })
            setConcernForm(false)
            })
    }
    const handleMessageTyping = (e) => {
        setConcern({
            ...concern,
           [ e.target.name] : e.target.value});

    }
    const handleCommentPost = () => {
        requests.call("post", `comment/${props.match.params.id}`, { comment })
            .then((res) => {
                getComments();
                setComment("")
            })


    }
    const handleVoting = (id, key) => {
        requests.call("post", `vote/${id}?type=${key}`)
            .then((res) => {
                console.log(res);
                getData();
                // productState.fetchProducts()
            })
    }

    let content = <div style={{ marginTop: "2%" }}>
        <div style={{ display: "flex" }}>
            <h2 style={{ flex: 1 }}>{productDetails.name}</h2>
            <div style={{ flex: 1 }}><Button onClick={handleRaiseConcern.bind(this)} style={{ float: "right" }}>Raise a concern</Button></div>
        </div>
        <div className="gray-text">{productDetails.company}</div>
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
            </OverlayTrigger> :
            <Button style={{
                backgroundColor: "#fff",
                borderColor: "#fff"
            }}>
                <i class="material-icons-outlined green" onClick={handleVoting.bind(this, productDetails._id, "up")} >thumb_up</i>

            </Button>
            {productDetails.upvotes || 0}
            {` `} {` `}
        </div>
        <div>
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
            :     <Button style={{
                backgroundColor: "#fff",
                borderColor: "#fff"
            }}>

                <i class="material-icons-outlined red" style={{ verticalAlign: "sub" }} onClick={handleVoting.bind(this, productDetails._id, "down")} >thumb_down</i>
            </Button>
            {productDetails.downvotes || 0}
        </div>
        <Modal show={concernForm} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Tell us your concern</Modal.Title>
            </Modal.Header>
            <Modal.Body>
Concern message

                <FormControl
                    onChange={(e) => handleMessageTyping(e)}
                    aria-label="Default"
                    name="concern"
                    value={concern.concern}
                    aria-describedby="inputGroup-sizing-default"
                />
                Email
                <FormControl
                    onChange={(e) => handleMessageTyping(e)}
                    aria-label="Default"
                    name="user_email"
                    value={concern.user_email}
                    aria-describedby="inputGroup-sizing-default"
                />
                <Button style={{ marginRight: "8px", marginTop: "4px", marginBottom: "4px" }} onClick={submitConcern.bind(this)}>Submit</Button>

            </Modal.Body>
        </Modal>
        <div>{productDetails.source_of_info}</div>
        <div className="comments-box" >
            <h3>Comments</h3>
            <hr />
            {
                comments && comments.map((comment) => {
                    return <div>

                        <div className="comments-username">
                            {comment.username}
                        </div>
                        <div className="comments-text">
                            {comment.comment}
                        </div>
                        <hr />
                    </div>
                })

            }
            <textarea value={comment} onChange={handleCommentChange.bind(this)} style={{ width: "-webkit-fill-available", backgroundColor: "#f5f5f5" }} ></textarea>
            <Button onClick={handleCommentPost.bind(this)}>Post</Button>
        </div>
    </div>

    return content;

}

export default ProductDetails