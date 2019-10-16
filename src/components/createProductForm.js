import React,{useContext,useEffect,useState} from 'react'
import ProductContext , {ProductConsumer} from '../context/productContext'
import { Table, Button, Modal, FormControl } from 'react-bootstrap';
import { requests } from '../api/searchAgent'


const CreateProductForm =props=> {
    const productState = useContext(ProductContext);
    const [show , setShow] = useState(false);
    const [body , setBody] = useState({
        name : "",
        company : "",
        glutonFree : false,
    });

    const  openModal=()=> {
        setShow(true)
     }
   const  handleClose =()=> {
       setShow(false)
     }
   const  handleSave=()=> {
         requests.call("post","create/product",body)
         .then((res)=>{
             console.log(res)    
             productState.fetchProducts()
             handleClose()        
     })
         
     }
 
    const handleCheckBoxClick = ()=>{
        setBody({
            ...body,
            glutonFree : !body.glutonFree
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
            <Modal.Title>Inform us about a product</Modal.Title>
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
    <input type="checkbox"
    onChange={()=>handleCheckBoxClick()}
    value={body.glutonFree} 

    className="ciliac-checkbox" style={{marginTop : "5px"}}></input>Gluten Free
    
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
 
    <Button onClick={() => openModal()}>Create</Button>
   </div>
    )

}

export default CreateProductForm