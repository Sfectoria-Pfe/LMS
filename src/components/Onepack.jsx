import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default class OneCard extends Component {
    constructor(props){
      super()
      this.state={
        show:false
      }
      this.handleClose=this.handleClose.bind(this)
    }
      
  
      handleShow() {
        this.setState({ show: true });}
  
        handleClose() {
          this.setState({ show: false });
        }
      
    
    render() {
     
      return (
          <Card style={{ width: '20rem'}} className='border border-info'>
          <Card.Img variant="top" src={this.props.image}  style={{height:'12rem'}}/>
          <Card.Body >
            <Card.Title style={{width:'18rem', height:'48px', textAlign: "center"}}>{this.props.nom}</Card.Title>
            <Card.Text style={{width:'18rem', height:'44px', textAlign: "center"}}>
              {this.props.descrp}
            </Card.Text>
            <Card.Text style={{width:'18rem', height:'44px' , textAlign: "center"}}>
              {this.props.price}
            </Card.Text>
            <div className='d-flex justify-content-around'>
            <Button style={{width:'7rem'}} variant="info"
              onClick={() => {
            
                this.props.showForm({
                  imag: this.props.imag,
                  title: this.props.title,
                  body: this.props.body,
                  html: this.props.html,
                
                });
              }}
            >
              More
            </Button>
        
            
           
            </div>
          </Card.Body>
         
        </Card>
       )
    }
  }
  