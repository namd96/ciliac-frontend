import React,{useContext,useEffect,useState} from 'react'
import ProductContext , {ProductConsumer} from '../context/productContext'
import { Table, Button, Modal, FormControl } from 'react-bootstrap';
import { requests } from '../api/searchAgent'


const EnquiryForm =props=> {
    const productState = useContext(ProductContext);
    const [show , setShow] = useState(false);
    const [body , setBody] = useState({
        name : "",
        company : "",
        description : "",
        user_email : "",
        
    });


    const  openModal=()=> {
        setShow(true)
     }
   const  handleClose =()=> {
       setShow(false)
     }
   const  handleSave=()=> {
         requests.call("post","enquire",body)
         .then((res)=>{
             console.log(res)    
             productState.fetchProducts()
             handleClose()        
     })
         
     }
 
 
   const  handleMessageTyping=(e)=>{
 
     setBody({
         ...body , 
             [e.target.name] : e.target.value
         
     })
     }
    return(
        <div>
        <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
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
 
    <Button  onClick={() => openModal()}>Enquire</Button>
   </div>
    )

}

export default EnquiryForm