import React, { Component } from 'react';
import './Dropdown.css';

export default class Dropdown extends Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn:false,showMenu:false}
    }

    componentWillReceiveProps=(props)=>{
        this.setState({isLoggedIn:props.isLoggedIn});
    }

    componentDidMount=()=>{
        this.setState({isLoggedIn:this.props.isLoggedIn});
    }

    closeMenu=(e)=>{
        e.preventDefault();
    }

    renderMenu=()=>{
        if(!this.state.isLoggedIn){
            return(
                    <ul>
                        <li><button onClick={(e)=>{e.preventDefault();this.props.showUserPopup(); this.setState({showMenu:false}); }}>Customer</button></li>
                        <li><hr/></li>
                        <li><button onClick={(e)=>{e.preventDefault();this.props.showBusinessPopup(); this.setState({showMenu:false});}}>Business</button></li>
                        <li><hr/></li>
                    </ul>
            );
        }
        else{
            return(
                    <ul>
                        <li><button>Dashboard</button></li>
                        <li><hr/></li>
                        <li><button>Video Review</button></li>
                        <li><hr/></li>
                        <li><button>Past Booking </button></li>
                        <li><hr/></li>
                        <li><button>Option</button></li>
                        <li><hr/></li>
                    </ul>
            
            );
        }
    }

    render(){
        return(
            <div className='drop-down'>
                <div className='main'  onClick={()=>{this.setState({showMenu:!this.state.showMenu})}}>
                    {!this.state.isLoggedIn?'SignUp/In':'Profile'}
                </div>

                <div className='drop-down-menu' style={{display : this.state.showMenu?'flex':'none'}}>
                    {this.renderMenu()}
                </div>
            
            </div>
        );
    }
}



