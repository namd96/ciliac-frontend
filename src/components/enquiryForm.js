import React, { useContext, useEffect, useState } from 'react'
import ProductContext, { ProductConsumer } from '../context/productContext'
import { Table, Button, Modal, FormControl } from 'react-bootstrap';
import { requests } from '../api/searchAgent'
import {
    validateIfInputIsEmail
} from "../helpers/validationChecks";

const EnquiryForm = props => {
    const productState = useContext(ProductContext);
    const [show, setShow] = useState(false);
    const [body, setBody] = useState({
        name: "",
        company: "",
        description: "",
        user_email: "",
    });


    const openModal = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    const handleSave = () => {

        if (validateIfInputIsEmail(body.user_email)) {
            if (!!body.name && body.company && body.description) {
                requests.call("post", "enquire", body)
                    .then((res) => {
                        console.log(res)
                        productState.settingQueriesList()
                        handleClose();
                        alert("Thank you for reaching us, we have posted your query. You can track it in the queries list. We will contact you on your given email if it is resolved." )
                    
                    setBody({
                        
                            name :    "",
                            company :    "",
                            glutenFree :  false ,
                        
                    })
                    })
            } else { alert("Please fill in all the fields") }
        }
    }


    const handleMessageTyping = (e) => {

        setBody({
            ...body,
            [e.target.name]: e.target.value

        })
    }
    return (
        <div>
            <Modal show={show} onHide={() => handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Have doubts about a product? We will post your query!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Name
        <FormControl
                        onChange={(e) => handleMessageTyping(e)}
                        aria-label="Default"
                        name="name"
                        value={body.name}
                        aria-describedby="inputGroup-sizing-default"
                    />
                    Company
        <FormControl
                        onChange={(e) => handleMessageTyping(e)}
                        aria-label="Default"
                        name="company"
                        value={body.company}
                        aria-describedby="inputGroup-sizing-default"
                    />
                    Description
        <FormControl
                        onChange={(e) => handleMessageTyping(e)}
                        aria-label="Default"
                        name="description"
                        value={body.description}
                        aria-describedby="inputGroup-sizing-default"
                    />
                    Email
        <FormControl
                        onChange={(e) => handleMessageTyping(e)}
                        aria-label="Default"
                        name="user_email"
                        value={body.email}
                        aria-describedby="inputGroup-sizing-default"
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
             </Button>
                    <Button variant="primary" onClick={() => handleSave()}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>

            <Button  style={{marginRight : "8px",marginLeft : "8px", marginTop : "4px",marginBottom : "4px"}}  onClick={() => openModal()}>Enquire</Button>
        </div>
    )

}

export default EnquiryForm