import React from 'react'
import '../styles/home.css';
import { requests } from '../api/searchAgent'
import SearchBox from '../components/smartInputBox';
import { Table, Button, Modal,FormControl } from 'react-bootstrap';
import { observer } from 'mobx-react';


// @observer
class Home extends React.Component {

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

    componentDidMount() {

        requests.get(`products`)
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
        requests.post("create/product",this.state.body)
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
   
    handleSearchInput(query) {
      if(!query ){
        requests.get(`products`)
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
      } else requests.get(`products?query=${query}`)
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
    render() {
        console.log(this.state.results)
        return (
            <div>
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
                <SearchBox wait={true} callingApiFunction={this.handleSearchInput.bind(this)} />
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
                                this.state.results && this.state.results.map((el, idx) => {
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
        )
    }

}
export default Home;