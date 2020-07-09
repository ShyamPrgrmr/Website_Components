import React,{Component} from 'react';
import './navbar.css';
import toggler from './toggler.png';

export default class Sidebar extends Component {
    constructor(props){
        super(props);
    }  
    
    state={togglenavbar:false};

    navbartoggle=()=>{
        this.setState({togglenavbar:!this.state.togglenavbar});
    }

    displayNavbar=()=>{
        return this.state.togglenavbar?'flex':'none';
    }

    render(){
        return(
            <> 
            <div className='navbar'>
                <div className='navbar--row__1'>
                    <a className='navbar--a font-small' href='#'>Join Now</a>
                    <a className='navbar--a margin-left-small font-small' href='#'>Contact Us</a>
                </div>

                <div className='navbar--row__2'>
                    <div className='navbar--brand'>
                        <img src='https://s3.ap-south-1.amazonaws.com/venuefy.images/venuefy-logo.png'></img>
                    </div>
                    <div className="navbar--right">
                        <ul>
                            <li><a href='#' className='navbar--a navbar--active'>Home</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Venue</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Testimonials</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Vendors</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>About Us</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Blogs</a></li>
                            <li><a href='#' className="a">Sign In/Up</a></li>
                        </ul>
                    </div>
                </div>
                </div>


            <div className='nc-navbar'>
                <div></div>
                <div className='nc-brand'>
                    <img src='https://s3.ap-south-1.amazonaws.com/venuefy.images/venuefy-logo.png'></img>
                </div>
                <button className='nc-button' onClick={(e)=>{
                    e.preventDefault();
                    this.navbartoggle();
                }}>
                    <img src={toggler}></img>
                </button>
                
                <div className='nc-container' style={{display:this.displayNavbar()}}>
                    <ul>
                    <li><a href='#' className='navbar--a navbar--active'>Home</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Venue</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Testimonials</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Vendors</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>About Us</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Blogs</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Join now</a></li>
                            <li><a href='#' className='navbar--a navbar--inactive'>Contact us</a></li>
                            <li><a href='#' className="a">Sign In/Up</a></li>
                    </ul>
                </div>
            
            </div>
            
            </>
        );
    }
}