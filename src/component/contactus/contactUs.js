import React, {Component} from 'react';
import './contactUs.css';


export default class ContactUs extends Component{
    
    state={name:'',contact:'',email:'',message:''}
    constructor(props){
        super(props);
    }

    onTextChnage=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name] : value })
    }
    onSubmit=(e)=>{
        e.preventDefault();
    }

    render(){
        return(
        <div className='contactus-container'>
            <div className='contactus-form'>
                <label for='name'>Name</label>
                <input name='name' id='name' placeholder='Your name' onChange={this.onTextChnage} type='text' id='name' value={this.state.name}/>

                <label for='contact'>Contact Number</label>
                <input name='contact' autoComplete='phone' id='contact' placeholder="10 Digit mobile number" onChange={this.onTextChnage} type='text' id='name' value={this.state.contact}/>

                <label for='email'>Email</label>
                <input name='email' id='email' autoComplete='email' placeholder='abc123@xyz.com ' onChange={this.onTextChnage} type='text' id='name' value={this.state.email}/>

                <label for='message'>Message</label>
                <textarea cols="40" rows="4" name='message' id='message' placeholder='Write something' onChange={this.onTextChnage} type='text' id='name' value={this.state.message}></textarea>
            
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        </div>);
    }
}