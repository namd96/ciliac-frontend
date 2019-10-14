import React from 'react'
import '../styles/home.css';
import Login from '../components/login';
import { requests } from '../api/searchAgent'
import SearchBox from '../components/smartInputBox';
import { Table, Button, Modal,FormControl } from 'react-bootstrap';
// import { observer } from 'mobx-react';
import ProductContext , {ProductConsumer} from '../context/productContext'
var ProductData;
// @observer
class Home extends React.Component {
    static contextType = ProductContext


    constructor(props) {
        super(props)
        this.state = {
            results: false,
            body : {
                name : "",
                company : "",
                glutonFree : 0
            }
        }
    }
    fetchProductsList(){
         ProductData = this.context
console.log(ProductData)
        // this.setState({
        //     results: ProductData
        // })
        requests.call("get",`products`)
        .then((res) => {
            console.log("setting the state with", res.data)
            this.setState({
                results: res.data
            })
        })
        .catch(() => {
            this.setState({
                results: false
            })
        })
    }

    componentDidMount() {
        console.log("rendered this")
       if(localStorage.hasOwnProperty("userData")){ 
           this.fetchProductsList()
        }else{
            this.setState({
                loggedOut : true
            })
        }
    }

    // componentWillReceiveProps(nextProps){
    //     console.log("rendered this",nextProps)
    //     if(localStorage.hasOwnProperty("userData") && this.state.loggedOut){
    //         console.log("rendered this")
    //         this.setState({
    //             loggedOut : false
    //         })
    //         this.fetchProductsList()
    //     }
    // }

    openModal() {
        this.setState({
            show: true
        })
    }
    handleClose() {
        this.setState({
            show: false
        })
    }
    handleSave() {
        requests.call("post","create/product",this.state.body)
        .then((res)=>{
            console.log(res)    
            this.handleSearchInput();
            this.handleClose()        
    })
        
    }

    handleCheckBoxClick(){
        this.setState({
            body : {
                ...this.state.body,
                glutonFree : this.state.body.glutonFree ? 0 : 1
            }
        })
    }
    handleMessageTyping(e){
        this.setState({
            body : {
                ...this.state.body,
                [e.target.name] : e.target.value
            }
        })
    }
    loginCalled(){
        console.log("rendered this")
        requests.setToken()
        this.setState(this.state,this.fetchProductsList()); 
    }
    handleSearchInput(query) {
        if (!query) {
            requests.call("get", `products?glutenFree=${this.state.filtered}`)
                .then((res) => {
                    console.log("setting the state with", res)
                    this.setState({
                        results: res.data
                    })

                })
                .catch(() => {
                    this.setState({
                        results: false
                    })
                })
        } else requests.call("get", `products?query=${query}&glutenFree=${this.state.filtered}`)
            .then((res) => {
                console.log("setting the state with", res)
                this.setState({
                    results: res.data
                })

            })
            .catch(() => {
                this.setState({
                    results: false
                })
            })
    }
    handleCheckboxChange() {
        this.setState({
            filtered: !this.state.filtered
        })
    }
    render() {
        ProductData = this.context
        console.log("[results]",ProductData)
      if(localStorage.hasOwnProperty("userData")) { 
          return (
            //   <ProductConsumer>

            <div>
            <SearchBox wait={true}
                                handleCheckboxChange={this.handleCheckboxChange.bind(this)}
                                callingApiFunction={this.handleSearchInput.bind(this)}
                                filtered={this.state.filtered} />
                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Name
                    <FormControl
                     onChange={(e) => this.handleMessageTyping(e)}
                        aria-label="Default"
                        name="name"
                        value={this.state.body.name} 
                        aria-describedby="inputGroup-sizing-default"
                    />
                    Company
                    <FormControl
                     onChange={(e) => this.handleMessageTyping(e)}
                        aria-label="Default"
                        name="company"
                        value={this.state.body.company} 
                        aria-describedby="inputGroup-sizing-default"
                    />
                <input type="checkbox"
                onChange={()=>this.handleCheckBoxClick()}
                value={this.state.body.glutonFree} 

                className="ciliac-checkbox" style={{marginTop : "5px"}}></input>Gluten Free
                
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
                         </Button>
                        <Button variant="primary" onClick={() => this.handleSave()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
             
                <Button onClick={() => this.openModal()}>Create</Button>
                <div>
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
                                !!this.state.results && this.state.results.map((el, idx) => {
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

                    {/* {this.state.results && JSON.stringify(this.state.results)} */}


                </div>
            </div>
            // </ProductConsumer>

        )
    }else{
        return(
            <Login loginCalled={this.loginCalled.bind(this)}/>
        )
    }
}

}
export default Home;