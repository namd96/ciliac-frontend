import React,{useContext,useEffect,useState} from 'react'
import ProductContext , {ProductConsumer} from '../context/productContext'
import { Table, Button, Modal, FormControl } from 'react-bootstrap';
import { requests } from '../api/searchAgent'
import {  
    validateIfInputIsEmail
} from "../helpers/validationChecks";

const CreateProductForm =props=> {
    const productState = useContext(ProductContext);
    const [show , setShow] = useState(false);
    const [body , setBody] = useState({
        name :   props.name || "",
        company :   props.company || "",
        glutonFree :  props.glutonFree ,
        source_of_info :  "" ,
    });

    const  openModal=()=> {
        setShow(true)
     }
   const  handleClose =()=> {
       setShow(false);
      props.query &&  props.handleClose();
     }
   const  handleSave=()=> {
    if(props.query ||(!!body.name && !!body.company ) && !!body.source_of_info){

        requests.call("post","create/product",body)
        .then((res)=>{
            console.log(res)    
            productState.fetchProducts()
            setShow(false);
            
            if(props.query){
                handleClose()   
                requests.call("delete", `query/${props.id}`)
                .then((res) => {
                    props.deleteQuery(props.id)
                    // setProductDetails(res.data)
                    
                })
            }

            setBody({
                name :   "",
                company :   "",
                glutonFree :  false ,
            })
        })
    }else{alert("Please fill in the required fields !")}
         
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
        <Modal show={props.show || show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
            <Modal.Title>Inform us about a product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Name 
        
        <FormControl
         onChange={(e) => handleMessageTyping(e)}
            aria-label="Default"
            name="name"
            value={(props.name) ? props.name :  body.name} 
            aria-describedby="inputGroup-sizing-default"
        />
        Company
        <FormControl
         onChange={(e) => handleMessageTyping(e)}
            aria-label="Default"
            name="company"
            value={(props.query) ? props.company : body.company} 
            aria-describedby="inputGroup-sizing-default"
        />
        Source of Information
        <FormControl
         onChange={(e) => handleMessageTyping(e)}
            aria-label="Default"
            name="source_of_info"
            value={body.source_of_info} 
            aria-describedby="inputGroup-sizing-default"
        />
    <input type="checkbox"
    onChange={()=>handleCheckBoxClick()}
    value={(props) ? props.glutonFree : body.glutonFree} 

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
 
    <Button style={{marginRight : "8px", marginTop : "4px",marginBottom : "4px"}} onClick={() => openModal()}>Create</Button>
   </div>
    )

}

export default CreateProductForm